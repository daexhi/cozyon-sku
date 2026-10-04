import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// High payload limit for image data URLs / product catalogs
app.use(express.json({ limit: '60mb' }));
app.use(express.urlencoded({ extended: true, limit: '60mb' }));

const PRODUCTS_FILE_PATH = path.resolve(__dirname, 'src/data/products.json');

// Helper to safely read products file
const readProductsFile = () => {
  try {
    if (fs.existsSync(PRODUCTS_FILE_PATH)) {
      const data = fs.readFileSync(PRODUCTS_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading products.json:', err);
  }
  return [];
};

// API: Get products from server code structure
app.get('/api/products', (req, res) => {
  try {
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

    // Write directly to src/data/products.json (formatted with 2 spaces)
    await fs.promises.writeFile(
      PRODUCTS_FILE_PATH,
      JSON.stringify(newProducts, null, 2),
      'utf-8'
    );

    console.log(`[API] Saved ${newProducts.length} products to ${PRODUCTS_FILE_PATH}`);
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
      server: { middlewareMode: true, port: 3000, host: '0.0.0.0' },
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
