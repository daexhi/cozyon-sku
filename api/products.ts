import products from '../src/data/products.json';

export default function handler(req: any, res: any) {
  // Set CORS and Cache-Control headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(products);
  }

  // Vercel serverless filesystem is read-only at runtime
  if (req.method === 'POST') {
    return res.status(200).json({
      success: true,
      count: req.body?.length || products.length,
      note: 'Vercel serverless environment is stateless; client-side localStorage maintains edits.',
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
