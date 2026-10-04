import React, { useState, useMemo, useEffect, Suspense, lazy } from 'react';
import { Product } from './data/products';
import { getStoredProducts, fetchServerProducts } from './utils/productStorage';
import { Language, translations } from './i18n/translations';
import {
  getLocalizedProduct,
  translateCategory,
} from './utils/translator';
import { LanguageSelector } from './components/LanguageSelector';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import {
  Search,
  Download,
  Package,
  Shield,
  ChevronRight,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Code Splitting for heavier components
const AdminDashboard = lazy(() => import('./components/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const AdminLoginModal = lazy(() => import('./components/AdminLoginModal').then(m => ({ default: m.AdminLoginModal })));
const ProductDetailModal = lazy(() => import('./components/ProductDetailModal').then(m => ({ default: m.ProductDetailModal })));

// Loading Component for Suspense
const ComponentLoader = () => (
  <div className="flex items-center justify-center p-12">
    <div className="w-8 h-8 border-3 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

// Skeleton Card for initial load
const SkeletonCard = () => (
  <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-2.5 flex flex-col justify-between animate-pulse">
    <div>
      <div className="w-full aspect-square bg-slate-800/50 rounded-xl mb-2" />
      <div className="h-4 bg-slate-800/50 rounded w-1/2 mb-2" />
      <div className="h-3 bg-slate-800/30 rounded w-3/4" />
    </div>
    <div className="mt-4 h-6 bg-slate-800/20 rounded w-full" />
  </div>
);

export const App: React.FC = () => {
  // Products State initialized from stored/bundled data, and refreshed from server /api/products
  const [products, setProducts] = useState<Product[]>(() => getStoredProducts());
  const [isLoading, setIsLoading] = useState(products.length === 0);

  useEffect(() => {
    // Attempt to load from server/static, but don't hang the UI indefinitely
    const loadData = async () => {
      try {
        const serverData = await fetchServerProducts();
        if (serverData && serverData.length > 0) {
          setProducts(serverData);
        }
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Safety timeout: ensure loading finishes even if network hangs
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Language State
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('cozyon_lang');
    return saved === 'en' || saved === 'zh' ? saved : 'id';
  });

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('cozyon_lang', newLang);
  };

  const t = translations[lang] || translations.id;

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Selected Product for Detail Sheet
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Lightbox Image
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // PDF Generation State
  const [isDownloading, setIsDownloading] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<{ current: number; total: number } | null>(null);

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('cozyon_admin_session') === 'true';
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [viewMode, setViewMode] = useState<'catalog' | 'admin'>('catalog');

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem('cozyon_admin_session', 'true');
    setShowLoginModal(false);
    setViewMode('admin');
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('cozyon_admin_session');
    setViewMode('catalog');
  };

  // Distinct Categories list
  const categoryList = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set).sort();
  }, [products]);

  // Filtered and Localized Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const query = searchQuery.toLowerCase().trim();
      const loc = getLocalizedProduct(p, lang);

      const matchSearch =
        !query ||
        p.sku.toLowerCase().includes(query) ||
        p.name.toLowerCase().includes(query) ||
        loc.name.toLowerCase().includes(query) ||
        loc.category.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (loc.colors && loc.colors.some((c) => c.toLowerCase().includes(query))) ||
        (p.colors && p.colors.some((c) => c.toLowerCase().includes(query))) ||
        (p.sizes && p.sizes.some((s) => s.toLowerCase().includes(query)));

      const matchCategory =
        selectedCategory === 'all' || p.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [products, searchQuery, selectedCategory, lang]);

  // Compressed PDF Download Handler
  const handleDownloadPDF = async () => {
    if (filteredProducts.length === 0 || isDownloading) return;
    setIsDownloading(true);
    setPdfProgress({ current: 0, total: filteredProducts.length });

    try {
      // Dynamic import for PDF generator (saves initial bundle size)
      const { generateCatalogPDF } = await import('./utils/pdfGenerator');
      await generateCatalogPDF(filteredProducts, {
        lang,
        onProgress: (current, total) => {
          setPdfProgress({ current, total });
        },
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Gagal mengunduh PDF. Silakan coba kembali.');
    } finally {
      setIsDownloading(false);
      setPdfProgress(null);
    }
  };

  // If in Admin view mode, render the Admin Backend
  if (viewMode === 'admin' && isAdminLoggedIn) {
    return (
      <Suspense fallback={<ComponentLoader />}>
        <AdminDashboard
          products={products}
          setProducts={setProducts}
          onBackToCatalog={() => setViewMode('catalog')}
          onLogout={handleLogout}
          lang={lang}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 pb-28 selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-3.5 transition-all">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 shadow-md">
              <Package size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  {t.appTitle}
                </span>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold px-1.5 py-0.5 rounded-md">
                  {products.length} {t.skuCount}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Top Right Actions: Language Selector & Admin Login Button */}
          <div className="flex items-center gap-2">
            <LanguageSelector currentLang={lang} onSelectLang={handleSelectLang} />

            {isAdminLoggedIn ? (
              <button
                type="button"
                onClick={() => setViewMode('admin')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all text-xs font-bold"
                title={t.adminDashboard}
              >
                <Shield size={14} />
                <span className="hidden sm:inline">{t.adminDashboard}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all text-xs font-semibold"
                title={t.adminLogin}
              >
                <Shield size={14} className="text-slate-400" />
                <span className="hidden xs:inline sm:inline">{t.adminLogin}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Catalog View Container */}
      <main className="max-w-4xl mx-auto p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative group">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl py-3.5 pl-11 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Horizontal Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-hide text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900/80 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {t.allCategories} ({products.length})
          </button>
          {categoryList.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900/80 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {translateCategory(cat, lang)}
            </button>
          ))}
        </div>

        {/* Compressed PDF Download Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-900/80 border border-slate-800 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Download size={18} />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>{t.downloadPdf}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                {t.pdfCompressNote} ({filteredProducts.length} SKU)
              </p>
            </div>
          </div>

          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading || filteredProducts.length === 0}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50 disabled:active:scale-100 cursor-pointer"
          >
            {isDownloading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                <span>
                  {pdfProgress
                    ? `${pdfProgress.current}/${pdfProgress.total} SKU`
                    : t.downloadingPdf}
                </span>
              </>
            ) : (
              <>
                <Download size={14} />
                <span>Download PDF ({filteredProducts.length})</span>
              </>
            )}
          </button>
        </div>

        {/* Product Cards Grid with Localized Data */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-1">
          {isLoading ? (
            // Show skeletons during initial fetch
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            filteredProducts.map((rawProduct) => {
              const product = getLocalizedProduct(rawProduct, lang);
              return (
                <div
                  key={product.sku}
                  onClick={() => setSelectedProduct(rawProduct)}
                  className="bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-2.5 flex flex-col justify-between transition-all duration-150 active:scale-[0.97] group cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Image Container with hover zoom */}
                    <div className="w-full aspect-square bg-slate-950 rounded-xl overflow-hidden mb-2 relative border border-slate-800/60">
                      <img
                        src={product.image}
                        alt={product.sku}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      {product.gallery && product.gallery.length > 1 && (
                        <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-slate-950/80 text-slate-300 text-[9px] font-semibold tracking-wide backdrop-blur-xs border border-slate-800">
                          {product.gallery.length} {t.photosCount}
                        </span>
                      )}
                    </div>

                    {/* SKU Code & Translated Category */}
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-mono text-sm font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                        {product.sku}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium truncate max-w-[80px]">
                        {product.category}
                      </span>
                    </div>

                    {/* Translated Name */}
                    <h3 className="text-xs font-semibold text-slate-300 line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Translated Colors preview */}
                    {product.colors && product.colors.length > 0 && (
                      <p className="text-[10px] text-emerald-400/90 line-clamp-1 mt-0.5 font-medium">
                        {product.colors.slice(0, 2).join(', ')}
                        {product.colors.length > 2 ? ` (+${product.colors.length - 2})` : ''}
                      </p>
                    )}
                  </div>

                  {/* Sizes Preview */}
                  <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span className="truncate">
                      {product.sizes.slice(0, 3).join(', ')}
                      {product.sizes.length > 3 ? '...' : ''}
                    </span>
                    <span className="text-emerald-500 font-sans font-bold flex items-center">
                      Detail <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Empty State */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-slate-900/40 rounded-3xl border border-slate-850">
            <Package size={40} className="mx-auto text-slate-600 mb-3" />
            <p className="text-base font-bold text-slate-300">
              {t.noProductsFound}
            </p>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              {t.noProductsHint}
            </p>
          </div>
        )}
      </main>

      {/* Product Detail Modal with Localized Content */}
      <Suspense fallback={null}>
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenLightbox={(img) => setLightboxImage(img)}
          lang={lang}
        />
      </Suspense>

      {/* Image Lightbox Pop-up */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Preview Full"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-slate-800"
              referrerPolicy="no-referrer"
            />
            <button
              className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center bg-slate-900/80 hover:bg-slate-800 rounded-full text-white border border-slate-800 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Login Modal */}
      <Suspense fallback={null}>
        <AdminLoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
          lang={lang}
        />
      </Suspense>

      {/* PWA Install Prompt in Dark Mode */}
      <PWAInstallPrompt lang={lang} />
    </div>
  );
};

export default App;
