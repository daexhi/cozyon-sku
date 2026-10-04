import { Product } from '../data/products';
import bundledProducts from '../data/products.json';

const STORAGE_KEY = 'cozyon_custom_products';

/**
 * Returns stored products:
 * 1. Checks localStorage (custom edits by admin)
 * 2. Falls back to bundledProducts (all 37 factory default SKUs with complete translations)
 * This guarantees the catalog ALWAYS has data, even on Vercel / Netlify / static hosting / offline.
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
 * Fetches products from backend server or static hosting with timeouts
 */
export const fetchServerProducts = async (): Promise<Product[]> => {
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

  // 1. Try Express API endpoint
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

  // 2. Try static public file (works on Vercel, Netlify, CDN)
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
 * Saves products to backend codebase (if running) and client storage
 */
export const saveProductsToCodebase = async (
  products: Product[]
): Promise<{ success: boolean; message?: string }> => {
  // 1. Always save immediately to client localStorage
  saveStoredProducts(products);

  // 2. Try to persist to server filesystem (if server is active)
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
      return {
        success: true,
        message: `Tersimpan ke struktur kode server (${result.count} SKU)!`,
      };
    }
  } catch (err: any) {
    console.warn('[Storage] Server write unavailable (static deploy/offline):', err);
  }

  return {
    success: true,
    message: 'Tersimpan ke penyimpanan lokal aplikasi.',
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
