import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// High payload limit for image data URLs / product catalogs
app.use(express.json({ limit: '60mb' }));
app.use(express.urlencoded({ extended: true, limit: '60mb' }));

const PRODUCTS_FILE_PATH = path.resolve(__dirname, 'src/data/products.json');
const PUBLIC_PRODUCTS_PATH = path.resolve(__dirname, 'public/data/products.json');
const DIST_PRODUCTS_PATH = path.resolve(__dirname, 'dist/data/products.json');

// Helper to extract SKU suffix for folder naming (e.g. CZN-039 -> 039)
const getSkuSuffix = (sku: string) => {
  const parts = sku.split('-');
  return parts[parts.length - 1] || sku;
};

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const sku = req.body.sku || 'temp';
    const suffix = getSkuSuffix(sku);
    const dir = path.resolve(__dirname, 'public/images', suffix);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // Keep original name but sanitize it
    const sku = req.body.sku || 'temp';
    const cleanName = file.originalname.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
    cb(null, `${sku}_${Date.now()}_${cleanName}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Hanya file gambar yang diperbolehkan!'));
    }
  }
});

// API: Upload multiple images
app.post('/api/upload-images', upload.array('images', 5), (req, res) => {
  try {
    const files = req.files as Express.Multer.File[];
    const sku = req.body.sku;
    const suffix = getSkuSuffix(sku);
    
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'Tidak ada file yang diupload' });
    }

    const paths = files.map(file => `/images/${suffix}/${file.filename}`);
    res.json({ success: true, paths });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// In-memory cache for ultra-fast sync across all active browsers
let memoryProducts: any[] | null = null;

// Helper to safely read products file
const readProductsFile = () => {
  if (memoryProducts && memoryProducts.length > 0) {
    return memoryProducts;
  }
  try {
    if (fs.existsSync(PRODUCTS_FILE_PATH)) {
      const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
      memoryProducts = JSON.parse(data);
      return memoryProducts;
    }
  } catch (err) {
    console.error('Error reading products.json:', err);
  }
  return [];
};

// API: Get products from server code structure
app.get('/api/products', (req, res) => {
  try {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    const products = readProductsFile();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read products' });
  }
});

// API: Save products directly into the code structure / disk file
app.post('/api/products', async (req, res) => {
  try {
    const newProducts = req.body;
    if (!Array.isArray(newProducts)) {
      return res.status(400).json({ error: 'Payload must be an array of products' });
    }

    memoryProducts = newProducts;
    const jsonContent = JSON.stringify(newProducts, null, 2);

    // 1. Write directly to src/data/products.json
    await fs.promises.writeFile(PRODUCTS_FILE_PATH, jsonContent, 'utf-8');

    // 2. Also sync to public/data/products.json
    try {
      await fs.promises.mkdir(path.dirname(PUBLIC_PRODUCTS_PATH), { recursive: true });
      await fs.promises.writeFile(PUBLIC_PRODUCTS_PATH, jsonContent, 'utf-8');
    } catch (e) {
      console.warn('Could not write to public/data/products.json', e);
    }

    // 3. Also sync to dist/data/products.json if production build exists
    try {
      if (fs.existsSync(path.dirname(DIST_PRODUCTS_PATH))) {
        await fs.promises.writeFile(DIST_PRODUCTS_PATH, jsonContent, 'utf-8');
      }
    } catch (e) {
      // Ignore if dist doesn't exist yet
    }

    console.log(`[API] Saved ${newProducts.length} products to all server paths`);
    res.json({ success: true, count: newProducts.length, timestamp: Date.now() });
  } catch (err: any) {
    console.error('Error writing products.json:', err);
    res.status(500).json({ error: 'Failed to write products to code structure: ' + err.message });
  }
});

// Setup Vite or Static File Serving
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: {
        middlewareMode: true,
        port: 3000,
        host: '0.0.0.0',
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[Server] Cozyon Product Knowledge server running on port ${PORT}`);
  });
}

startServer();
