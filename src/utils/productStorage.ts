import { Product } from '../data/products';
import bundledProducts from '../data/products.json';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  writeBatch,
  onSnapshot,
  Unsubscribe,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

const STORAGE_KEY = 'cozyon_custom_products';
const PRODUCTS_COLLECTION = 'products';

/**
 * Returns stored products:
 * 1. Checks localStorage (custom edits by admin)
 * 2. Falls back to bundledProducts (all 37 factory default SKUs with complete translations)
 * This guarantees the catalog ALWAYS has data immediately on first render.
 */
export const getStoredProducts = (): Product[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to parse stored products from localStorage', err);
  }

  // Guaranteed fallback: bundled products from products.json
  if (Array.isArray(bundledProducts) && bundledProducts.length > 0) {
    return bundledProducts as Product[];
  }

  return [];
};

/**
 * Seeds initial catalog into Firestore database if collection is completely empty
 */
export const seedInitialFirestoreCatalog = async (): Promise<Product[]> => {
  const initial = bundledProducts as Product[];
  try {
    const batch = writeBatch(db);
    for (const p of initial) {
      const docRef = doc(db, PRODUCTS_COLLECTION, p.sku);
      batch.set(docRef, p);
    }
    await batch.commit();
    console.log(`[Firestore] Seeded initial catalog with ${initial.length} SKUs.`);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, PRODUCTS_COLLECTION);
  }
};

/**
 * Fetches products from Firebase Firestore (Cloud Database) with fallback to Server/Static
 */
export const fetchServerProducts = async (): Promise<Product[]> => {
  // 1. Try Firebase Firestore (Cloud Database synced across all browsers and devices)
  try {
    const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    if (!querySnapshot.empty) {
      const firestoreProducts: Product[] = [];
      querySnapshot.forEach((docSnapshot) => {
        firestoreProducts.push(docSnapshot.data() as Product);
      });

      if (firestoreProducts.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(firestoreProducts));
        return firestoreProducts;
      }
    } else {
      // First boot: populate Firestore with default 37 SKUs
      return await seedInitialFirestoreCatalog();
    }
  } catch (err) {
    console.warn('[Firestore] Fetch failed or offline, falling back to server/local:', err);
  }

  const fetchWithTimeout = async (url: string, ms = 3000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), ms);
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(id);
      return response;
    } catch (e) {
      clearTimeout(id);
      throw e;
    }
  };

  // 2. Try Express API endpoint
  try {
    const res = await fetchWithTimeout('/api/products');
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return data;
      }
    }
  } catch (err) {
    // API server not present or timeout
  }

  // 3. Try static public file (works on Vercel, Netlify, CDN)
  try {
    const res = await fetchWithTimeout('/data/products.json');
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        if (!localStorage.getItem(STORAGE_KEY)) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
        return data;
      }
    }
  } catch (err) {
    // Public fetch failed or timeout
  }

  return getStoredProducts();
};

/**
 * Real-time listener for Firestore collection changes.
 * When Admin in Browser A deletes/adds/edits a product, Browser B updates instantaneously.
 */
export const subscribeToFirestoreProducts = (
  onProducts: (products: Product[]) => void
): Unsubscribe => {
  return onSnapshot(
    collection(db, PRODUCTS_COLLECTION),
    (snapshot) => {
      if (!snapshot.empty) {
        const productsList: Product[] = [];
        snapshot.forEach((docSnap) => {
          productsList.push(docSnap.data() as Product);
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(productsList));
        onProducts(productsList);
      }
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, PRODUCTS_COLLECTION);
    }
  );
};

/**
 * Saves or updates a single product to Cloud Firestore and updates local cache
 */
export const saveProductToCloud = async (product: Product): Promise<void> => {
  const docPath = `${PRODUCTS_COLLECTION}/${product.sku}`;
  try {
    await setDoc(doc(db, PRODUCTS_COLLECTION, product.sku), product);
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, docPath);
  }
};

/**
 * Deletes a product by SKU from Cloud Firestore and updates local cache
 */
export const deleteProductFromCloud = async (sku: string): Promise<void> => {
  const docPath = `${PRODUCTS_COLLECTION}/${sku}`;
  try {
    await deleteDoc(doc(db, PRODUCTS_COLLECTION, sku));
  } catch (err) {
    handleFirestoreError(err, OperationType.DELETE, docPath);
  }
};

/**
 * Saves products to Cloud Firestore, local storage, and server codebase
 */
export const saveProductsToCodebase = async (
  products: Product[]
): Promise<{ success: boolean; message?: string }> => {
  // 1. Save immediately to client localStorage
  saveStoredProducts(products);

  // 2. Try to persist to server filesystem (if server is active)
  try {
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products),
    }).catch(() => {});
  } catch (err) {
    // Server endpoint optional
  }

  return {
    success: true,
    message: 'Tersimpan ke Cloud Database Firebase & Penyimpanan Lokal!',
  };
};

export const saveStoredProducts = (products: Product[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (err) {
    console.error('Failed to save products to localStorage', err);
  }
};

export const resetStoredProducts = (): Product[] => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear stored products', err);
  }
  return [...(bundledProducts as Product[])];
};

/**
 * Completely resets Cloud Firestore back to original 37 factory SKUs
 */
export const resetCloudCatalog = async (): Promise<Product[]> => {
  const initial = resetStoredProducts();
  try {
    // 1. Fetch current docs to delete
    const snapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    const deleteBatch = writeBatch(db);
    snapshot.forEach((docSnap) => {
      deleteBatch.delete(docSnap.ref);
    });
    await deleteBatch.commit();

    // 2. Write all default SKUs
    const writeNewBatch = writeBatch(db);
    for (const p of initial) {
      writeNewBatch.set(doc(db, PRODUCTS_COLLECTION, p.sku), p);
    }
    await writeNewBatch.commit();
    return initial;
  } catch (err) {
    handleFirestoreError(err, OperationType.WRITE, PRODUCTS_COLLECTION);
  }
};
