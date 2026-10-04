import { Product } from '../data/products';

const STORAGE_KEY = 'cozyon_custom_products';

/**
 * Fetches products from the backend server (/api/products) which reads src/data/products.json
 * If offline or server error, falls back to localStorage or bundled JSON.
 */
export const fetchServerProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        // Cache to localStorage for offline support
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return data;
      }
    }
  } catch (err) {
    console.warn('[Storage] Could not fetch /api/products, falling back to local cache', err);
  }
  return getStoredProducts();
};

/**
 * Saves products to the backend code structure (/api/products -> src/data/products.json)
 * and syncs to localStorage.
 */
export const saveProductsToCodebase = async (products: Product[]): Promise<{ success: boolean; message?: string }> => {
  // 1. Sync immediately to client-side localStorage
  saveStoredProducts(products);

  // 2. Persist directly to server code structure on disk
  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products),
    });

    if (res.ok) {
      const result = await res.json();
      return { success: true, message: `Tersimpan ke struktur kode server (${result.count} SKU)!` };
    } else {
      const err = await res.json();
      return { success: false, message: 'Server error: ' + (err.error || 'Unknown error') };
    }
  } catch (err: any) {
    console.warn('[Storage] API write failed (offline or dev server):', err);
    return { success: true, message: 'Tersimpan ke cache lokal (server offline).' };
  }
};

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
    console.warn('Failed to parse stored products', err);
  }

  // If no cache, return empty array and let the server fetch handle it.
  // This drastically reduces initial bundle size by not embedding the 120KB+ JSON/TS data.
  return [];
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
  // Return empty and trigger fresh fetch
  return [];
};

export const availableWarehouseImages: string[] = [
  '/images/001/CZN-001-1.png',
  '/images/002/CZN-002-1.png',
  '/images/003/CZN-003-1.png',
  '/images/004/CZN-004-1.png',
  '/images/006/CZN-006-1.png',
  '/images/008/CZN-008-1.png',
  '/images/009/CZN-009-1.png',
  '/images/010/CZN-010-1.png',
  '/images/011/CZN-011-1.png',
  '/images/012/CZN-012-1.png',
  '/images/013/CZN-013-1.png',
  '/images/014/CZN-014-1.png',
  '/images/015/CZN-015-1.jpg',
  '/images/016/CZN-016-1.jpg',
  '/images/018/CZN-018-1.png',
  '/images/019/CZN-019-1.png',
  '/images/020/CZN-020-1.png',
  '/images/021/CZN-021-1.png',
  '/images/022/CZN-022-1.png',
  '/images/023/CZN-023-1.jpg',
  '/images/024/CZN-024-1.jpg',
  '/images/025/CZN-025-1.png',
  '/images/026/CZN-026-1.png',
  '/images/027/CZN-027-1.png',
  '/images/028/CZN-028-1.png',
  '/images/029/CZN-029-1.png',
  '/images/030/CZN-030-1.png',
  '/images/031/CZN-031-1.png',
  '/images/032/CZN-032-1.png',
  '/images/035/CZN-035-1.png',
  '/images/036/CZN-036-1.png',
  '/images/037/CZN-037-1.png',
  '/images/038/CZN-038-1.png',
  '/images/039/CZN-039-1.png',
  '/images/040/CZN-040-1.png',
  '/images/041/CZN-041-1.png',
  '/images/042/CZN-042-1.png',
];
