import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Box,
  Ruler,
  Info,
  Share2,
  Copy,
  Check,
  Maximize2,
  Palette,
} from 'lucide-react';
import { Product } from '../data/products';
import { Language, translations } from '../i18n/translations';
import { getLocalizedProduct } from '../utils/translator';

interface Props {
  product: Product | null;
  onClose: () => void;
  onOpenLightbox: (imageUrl: string) => void;
  lang: Language;
}

export const ProductDetailModal: React.FC<Props> = ({
  product,
  onClose,
  onOpenLightbox,
  lang,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const t = translations[lang] || translations.id;

  if (!product) return null;

  // Localized product data based on selected language
  const localized = getLocalizedProduct(product, lang);

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];
  const currentImage = galleryImages[activeImageIndex] || product.image;

  const handleCopySku = () => {
    navigator.clipboard.writeText(product.sku);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = `*Katalog Produk Cozyon*\n` +
      `*SKU:* ${localized.sku}\n` +
      `*Nama:* ${localized.name}\n` +
      `*Kategori:* ${localized.category}\n` +
      `*Ukuran:* ${localized.sizes.join(', ')}\n` +
      (localized.colors && localized.colors.length > 0 ? `*Warna:* ${localized.colors.join(', ')}\n` : '') +
      `\n${localized.description.slice(0, 240)}...`;
    
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal / Sheet Container */}
        <motion.div
          key="sheet"
          initial={{ y: '100%', opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 320 }}
          className="relative w-full max-w-xl bg-slate-900 border-t sm:border border-slate-800 rounded-t-[32px] sm:rounded-3xl shadow-2xl text-slate-100 z-50 flex flex-col max-h-[92vh] overflow-hidden"
        >
          {/* Mobile Drag Handle */}
          <div
            onClick={onClose}
            className="sm:hidden py-3 px-4 flex items-center justify-center cursor-pointer shrink-0"
          >
            <div className="w-12 h-1.5 bg-slate-700 rounded-full" />
          </div>

          {/* Modal Header */}
          <div className="px-5 py-3 border-b border-slate-800/80 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-bold text-emerald-400">
                {localized.sku}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                {localized.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopySku}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title={t.copySku}
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label={t.close}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-5 py-4 space-y-6 overscroll-contain">
            {/* Main Image Display */}
            <div className="space-y-3">
              <div
                onClick={() => onOpenLightbox(currentImage)}
                className="relative aspect-square w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 cursor-pointer group shadow-inner"
              >
                <img
                  src={currentImage}
                  alt={localized.sku}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-white p-2 rounded-xl border border-slate-800 text-xs flex items-center gap-1.5 font-medium shadow-md">
                  <Maximize2 size={13} />
                  <span>Zoom</span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-emerald-500 ring-2 ring-emerald-500/30'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${localized.sku} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Title */}
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Box size={13} />
                <span>{t.productName}</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight leading-snug">
                {localized.name}
              </h2>
            </div>

            {/* Sizes */}
            {localized.sizes && localized.sizes.length > 0 && (
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Ruler size={13} />
                  <span>{t.sizes}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {localized.sizes.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Colors - Localized */}
            {localized.colors && localized.colors.length > 0 && (
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Palette size={13} />
                  <span>{t.colorVariations}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {localized.colors.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/60 text-slate-200 text-xs font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description - Localized */}
            {localized.description && (
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Info size={13} />
                  <span>{t.description}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-wrap">
                  {localized.description}
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-slate-950 border-t border-slate-800/80 flex items-center gap-3 shrink-0">
            <button
              onClick={handleShareWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-xs transition-all shadow-lg shadow-emerald-600/20"
            >
              <Share2 size={16} />
              <span>{t.shareWhatsApp}</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
            >
              {t.close}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
