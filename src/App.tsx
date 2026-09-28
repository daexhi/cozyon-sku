import React, { useState, useMemo } from 'react';
import { products, Product } from './data/products';
import { Search, ChevronLeft, Box, Ruler, Info, Package, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { generateCatalogPDF } from './utils/pdfGenerator';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleDownloadPDF = async () => {
    if (filteredProducts.length === 0) return;
    setIsDownloading(true);
    try {
      await generateCatalogPDF(filteredProducts);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Gagal mengunduh PDF. Silakan coba lagi.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2 rounded-xl text-white">
              <Package size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Cozyon</h1>
              <div className="flex items-center gap-2">
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest text-nowrap">Product Knowledge</p>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest text-nowrap">{products.length} SKU</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Cari SKU atau nama produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors p-1"
              >
                <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded-md">Bersihkan</span>
              </button>
            )}
          </div>
        </div>

        {/* PDF Download Button */}
        <div className="mb-6">
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading || filteredProducts.length === 0}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 px-4 rounded-2xl font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 shadow-lg shadow-slate-900/10"
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Menyiapkan PDF...</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Download to PDF ({filteredProducts.length} SKU)</span>
              </>
            )}
          </button>
        </div>

        {/* Grid of SKUs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filteredProducts.map((product) => (
            <button
              key={product.sku}
              onClick={() => setSelectedProduct(product)}
              className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center justify-center gap-1.5 transition-all duration-150 active:scale-[0.96] hover:border-slate-300 hover:shadow-sm group touch-manipulation cursor-pointer text-left w-full"
            >
              <div className="w-full aspect-square bg-slate-100 rounded-xl overflow-hidden mb-1.5 relative">
                <img 
                  src={product.image} 
                  alt={product.sku} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  referrerPolicy="no-referrer"
                />
                {product.gallery && product.gallery.length > 1 && (
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-slate-900/75 text-white text-[9px] font-semibold tracking-wide backdrop-blur-xs shadow-xs">
                    {product.gallery.length} Foto
                  </span>
                )}
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">{product.sku}</span>
              <span className="text-[11px] text-slate-500 font-medium">{product.category}</span>
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium">SKU tidak ditemukan</p>
          </div>
        )}
      </main>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-[2px] z-40"
            />
            <motion.div
              key="sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320, mass: 0.8 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[32px] overflow-hidden max-w-2xl mx-auto flex flex-col max-h-[92vh] will-change-transform shadow-2xl"
            >
              <div 
                onClick={() => setSelectedProduct(null)}
                className="py-3 px-4 flex items-center justify-center cursor-pointer group"
                title="Tutup detail"
              >
                <div className="w-12 h-1.5 bg-slate-300 rounded-full group-hover:bg-slate-400 transition-colors" />
              </div>
              
              <div className="overflow-y-auto px-6 pb-10 overscroll-contain">
                <div className="flex items-center justify-between mb-4">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 -ml-2 text-slate-500 hover:text-slate-900 active:scale-90 transition-transform"
                    aria-label="Kembali"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <span className="text-sm font-bold text-slate-400 tracking-widest">{selectedProduct.sku}</span>
                  <div className="w-8" />
                </div>

                {/* Image Gallery */}
                <div className="space-y-4 mb-8">
                  <div 
                    className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-inner cursor-pointer"
                    onClick={() => setLightboxImage(selectedProduct.image)}
                  >
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.sku} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {selectedProduct.gallery && (
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x scrollbar-hide">
                      {selectedProduct.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setLightboxImage(img)}
                          className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-slate-100 snap-start active:scale-90 transition-transform"
                        >
                          <img 
                            src={img} 
                            alt={`${selectedProduct.sku} view ${idx + 1}`} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  <p className="text-[10px] text-center text-slate-400 font-medium">Klik gambar untuk memperbesar</p>
                </div>

                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-2 mb-3 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                      <Box size={14} />
                      <span>Nama Produk</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                      {selectedProduct.name}
                    </h2>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                      <Ruler size={14} />
                      <span>Ukuran</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map(size => (
                        <div key={size} className="px-3 h-12 flex items-center justify-center border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 bg-slate-50 min-w-[3rem]">
                          {size}
                        </div>
                      ))}
                    </div>
                  </section>

                  {selectedProduct.colors && (
                    <section>
                      <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                        <div className="w-3.5 h-3.5 rounded-full border border-slate-400" />
                        <span>Variasi Warna</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map(color => (
                          <div key={color} className="px-4 py-2 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 bg-slate-50">
                            {color}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  <section>
                    <div className="flex items-center gap-2 mb-3 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                      <Info size={14} />
                      <span>Deskripsi</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">
                      {selectedProduct.description}
                    </p>
                  </section>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 shrink-0">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/20 active:scale-95 transition-transform"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Lightbox Pop-up */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <ChevronLeft size={24} className="rotate-90" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <PWAInstallPrompt />
    </div>
  );
};

export default App;
