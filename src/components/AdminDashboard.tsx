import React, { useState, useMemo, useRef } from 'react';
import { Product } from '../data/products';
import {
  availableWarehouseImages,
  saveProductsToCodebase,
  resetStoredProducts,
} from '../utils/productStorage';
import { Language, translations } from '../i18n/translations';
import {
  translateColor,
  translateColors,
  translateCategory,
  translateDescription,
  translateProductName,
  getLocalizedProduct,
} from '../utils/translator';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  ArrowLeft,
  LogOut,
  Upload,
  Image as ImageIcon,
  Check,
  RotateCcw,
  Download,
  FileUp,
  X,
  Package,
  Languages,
  Server,
  CloudCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  onBackToCatalog: () => void;
  onLogout: () => void;
  lang: Language;
}

export const AdminDashboard: React.FC<Props> = ({
  products,
  setProducts,
  onBackToCatalog,
  onLogout,
  lang,
}) => {
  const t = translations[lang] || translations.id;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [confirmDeleteSku, setConfirmDeleteSku] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Active translation preview tab in edit modal: 'id' | 'en' | 'zh'
  const [activeEditLangTab, setActiveEditLangTab] = useState<Language>('id');

  // Form State for current product editing
  const [formSku, setFormSku] = useState('');
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formGallery, setFormGallery] = useState<string[]>([]);
  const [formSizes, setFormSizes] = useState<string[]>([]);
  const [formColors, setFormColors] = useState<string[]>([]);
  const [formDescription, setFormDescription] = useState('');

  // Translations Form State
  const [formEnDesc, setFormEnDesc] = useState('');
  const [formZhDesc, setFormZhDesc] = useState('');

  const [newSizeInput, setNewSizeInput] = useState('');
  const [newColorInput, setNewColorInput] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const importFileRef = useRef<HTMLInputElement>(null);

  // Category List
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set).sort();
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat =
        selectedCategory === 'all' || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [products, searchQuery, selectedCategory]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleOpenEdit = (prod: Product) => {
    setIsCreatingNew(false);
    setEditingProduct(prod);
    setFormSku(prod.sku);
    setFormName(prod.name);
    setFormCategory(prod.category);
    setFormImage(prod.image);
    setFormGallery(prod.gallery ? [...prod.gallery] : [prod.image]);
    setFormSizes(prod.sizes ? [...prod.sizes] : []);
    setFormColors(prod.colors ? [...prod.colors] : []);
    setFormDescription(prod.description || '');

    // Set translations (or auto-generate initial)
    const enDesc = prod.translations?.en?.description || translateDescription(prod.description, prod.sku, prod.category, 'en');
    const zhDesc = prod.translations?.zh?.description || translateDescription(prod.description, prod.sku, prod.category, 'zh');
    setFormEnDesc(enDesc);
    setFormZhDesc(zhDesc);
    setActiveEditLangTab('id');
  };

  const handleOpenCreate = () => {
    setIsCreatingNew(true);
    const nextNumber = products.length + 1;
    const padNum = nextNumber.toString().padStart(3, '0');
    const newSku = `CZN-${padNum}`;

    const defaultImg = availableWarehouseImages[0] || '/images/001/CZN-001-1.png';
    const initialProd: Product = {
      sku: newSku,
      name: `Cozyon Sandal ${newSku}`,
      category: 'Slop',
      image: defaultImg,
      gallery: [defaultImg],
      sizes: ['38', '39', '40', '41', '42'],
      colors: ['Hitam', 'Cream'],
      description: 'Sandal Cozyon dengan material empuk, lentur, ringan dan sol anti-slip.',
    };

    setEditingProduct(initialProd);
    setFormSku(newSku);
    setFormName(`Cozyon Sandal ${newSku}`);
    setFormCategory('Slop');
    setFormImage(defaultImg);
    setFormGallery([defaultImg]);
    setFormSizes(['38', '39', '40', '41', '42']);
    setFormColors(['Hitam', 'Cream']);
    setFormDescription(
      'Sandal Cozyon berkualitas tinggi dengan bahan EVA empuk, fleksibel dan sol anti-licin yang nyaman dipakai beraktivitas.'
    );
    setFormEnDesc(translateDescription(initialProd.description, newSku, 'Slop', 'en'));
    setFormZhDesc(translateDescription(initialProd.description, newSku, 'Slop', 'zh'));
    setActiveEditLangTab('id');
  };

  const handleAutoTranslate = () => {
    const en = translateDescription(formDescription, formSku, formCategory, 'en');
    const zh = translateDescription(formDescription, formSku, formCategory, 'zh');
    setFormEnDesc(en);
    setFormZhDesc(zh);
    showToast('Terjemahan EN & ZH otomatis diperbarui!');
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formSku.trim()) return;

    setIsSaving(true);

    const updatedProduct: Product = {
      sku: formSku.trim().toUpperCase(),
      name: formName.trim() || formSku,
      category: formCategory.trim() || 'General',
      image: formImage.trim() || availableWarehouseImages[0],
      gallery: formGallery.length > 0 ? formGallery : [formImage],
      sizes: formSizes.length > 0 ? formSizes : ['38', '39', '40', '41', '42'],
      colors: formColors.length > 0 ? formColors : undefined,
      description: formDescription.trim(),
      translations: {
        en: {
          description: formEnDesc.trim(),
          colors: translateColors(formColors, 'en'),
          category: translateCategory(formCategory, 'en'),
          name: translateProductName(formName, formSku, formCategory, 'en'),
        },
        zh: {
          description: formZhDesc.trim(),
          colors: translateColors(formColors, 'zh'),
          category: translateCategory(formCategory, 'zh'),
          name: translateProductName(formName, formSku, formCategory, 'zh'),
        },
      },
    };

    let nextProducts: Product[];
    if (isCreatingNew) {
      const exists = products.some(
        (p) => p.sku.toLowerCase() === updatedProduct.sku.toLowerCase()
      );
      if (exists) {
        setIsSaving(false);
        alert(`SKU ${updatedProduct.sku} sudah ada dalam katalog!`);
        return;
      }
      nextProducts = [updatedProduct, ...products];
    } else {
      nextProducts = products.map((p) =>
        p.sku === editingProduct?.sku ? updatedProduct : p
      );
    }

    setProducts(nextProducts);

    // Save directly to the code structure via server API
    const res = await saveProductsToCodebase(nextProducts);
    setIsSaving(false);
    setEditingProduct(null);

    showToast(`✓ Perubahan disimpan ke struktur kode server (${nextProducts.length} SKU)!`);
  };

  const handleDeleteProduct = async (sku: string) => {
    const nextProducts = products.filter((p) => p.sku !== sku);
    setProducts(nextProducts);
    await saveProductsToCodebase(nextProducts);
    setConfirmDeleteSku(null);
    showToast(`SKU ${sku} berhasil dihapus dari struktur kode.`);
  };

  const handleResetCatalog = async () => {
    if (window.confirm(t.confirmResetCatalog)) {
      const initial = resetStoredProducts();
      setProducts(initial);
      await saveProductsToCodebase(initial);
      showToast('Katalog berhasil direset ke struktur bawaan awal!');
    }
  };

  const handleExportJSON = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute(
      'download',
      `cozyon_catalog_backup_${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProducts(parsed);
          await saveProductsToCodebase(parsed);
          showToast(`Berhasil mengimpor & menyimpan ${parsed.length} SKU ke kode server.`);
        } else {
          alert('Format JSON tidak valid atau data kosong.');
        }
      } catch (err) {
        alert('Gagal membaca file JSON.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setFormImage(dataUrl);
        if (!formGallery.includes(dataUrl)) {
          setFormGallery([dataUrl, ...formGallery]);
        }
        showToast('Foto berhasil diupload!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddSize = () => {
    if (!newSizeInput.trim()) return;
    if (!formSizes.includes(newSizeInput.trim())) {
      setFormSizes([...formSizes, newSizeInput.trim()]);
    }
    setNewSizeInput('');
  };

  const handleAddColor = () => {
    if (!newColorInput.trim()) return;
    if (!formColors.includes(newColorInput.trim())) {
      setFormColors([...formColors, newColorInput.trim()]);
    }
    setNewColorInput('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-4 py-2.5 bg-emerald-500 text-slate-950 rounded-2xl font-bold text-xs shadow-2xl flex items-center gap-2"
          >
            <Check size={16} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Top Navbar */}
      <header className="sticky top-0 z-30 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToCatalog}
              className="p-2 -ml-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">{t.backToCatalog}</span>
            </button>
            <div className="h-5 w-[1px] bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-1.5 rounded-xl text-emerald-400">
                <Package size={18} />
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Cozyon Admin</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded-md font-mono flex items-center gap-1">
                    <Server size={10} />
                    <span>CODE PERSISTENCE</span>
                  </span>
                </h1>
                <p className="text-[10px] text-slate-400">
                  Perubahan langsung tersimpan ke file struktur kode server (<code className="text-emerald-400">products.json</code>)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenCreate}
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Plus size={16} />
              <span>{t.addNewProduct}</span>
            </button>
            <button
              onClick={onLogout}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/30 transition-colors"
              title={t.adminLogout}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-6xl mx-auto p-4 space-y-6 mt-2">
        {/* Controls, Search, Filter & Backups */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-4 sm:p-5 backdrop-blur-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 pl-10 pr-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-[11px]"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-2xl py-2.5 px-3 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/60 cursor-pointer"
            >
              <option value="all">{t.allCategories} ({products.length})</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Backup & Catalog tools */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs">
            <div className="text-slate-400 flex items-center gap-2">
              <span className="font-semibold text-slate-200">
                {filteredProducts.length}
              </span>{' '}
              {t.skuCount} terdaftar di server
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={handleExportJSON}
                className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 flex items-center gap-1.5 transition-colors text-[11px] font-medium"
              >
                <Download size={13} />
                <span>Export JSON</span>
              </button>
              <label className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 flex items-center gap-1.5 transition-colors text-[11px] font-medium cursor-pointer">
                <FileUp size={13} />
                <span>Import JSON</span>
                <input
                  type="file"
                  accept=".json"
                  ref={importFileRef}
                  onChange={handleImportJSON}
                  className="hidden"
                />
              </label>
              <button
                type="button"
                onClick={handleResetCatalog}
                className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-rose-500/10 hover:border-rose-500/40 text-slate-400 hover:text-rose-400 flex items-center gap-1.5 transition-colors text-[11px] font-medium"
              >
                <RotateCcw size={13} />
                <span>Reset Default</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Table/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredProducts.map((p) => {
            const localized = getLocalizedProduct(p, lang);
            return (
              <div
                key={p.sku}
                className="bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 rounded-3xl p-3.5 flex gap-3.5 transition-all group"
              >
                {/* Product Thumbnail */}
                <div className="w-24 h-24 rounded-2xl bg-slate-950 border border-slate-800/80 overflow-hidden shrink-0 relative">
                  <img
                    src={p.image}
                    alt={p.sku}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {p.gallery && p.gallery.length > 1 && (
                    <span className="absolute bottom-1 right-1 bg-slate-950/80 backdrop-blur-xs text-[9px] font-mono px-1 rounded text-slate-300">
                      {p.gallery.length} foto
                    </span>
                  )}
                </div>

                {/* Product Information */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-sm font-bold text-emerald-400 tracking-tight">
                        {p.sku}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md truncate max-w-[100px]">
                        {localized.category}
                      </span>
                    </div>
                    <h3 className="text-xs font-semibold text-slate-200 line-clamp-1 leading-snug">
                      {localized.name}
                    </h3>
                    {localized.colors && localized.colors.length > 0 && (
                      <p className="text-[10px] text-emerald-400/90 mt-0.5 line-clamp-1 font-medium">
                        Warna: {localized.colors.join(', ')}
                      </p>
                    )}
                    <p className="text-[10px] text-slate-400 line-clamp-1">
                      Ukuran: {p.sizes.join(', ')}
                    </p>
                  </div>

                  {/* Actions row */}
                  <div className="flex items-center justify-end gap-1.5 pt-2 border-t border-slate-800/50 mt-2">
                    <button
                      onClick={() => handleOpenEdit(p)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-[11px] font-medium transition-colors"
                    >
                      <Edit2 size={12} />
                      <span>Edit & Translate</span>
                    </button>
                    <button
                      onClick={() => setConfirmDeleteSku(p.sku)}
                      className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                      title={t.deleteProduct}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center bg-slate-900/30 rounded-3xl border border-slate-850">
            <Package size={36} className="mx-auto text-slate-600 mb-2" />
            <p className="text-sm font-semibold text-slate-400">
              {t.noProductsFound}
            </p>
            <p className="text-xs text-slate-500 mt-1">{t.noProductsHint}</p>
          </div>
        )}
      </main>

      {/* Product Edit / Create Modal Form */}
      <AnimatePresence>
        {editingProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl text-slate-100 z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Edit2 size={16} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">
                      {isCreatingNew ? t.addNewProduct : `${t.editProduct} (${formSku})`}
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      Disimpan langsung ke struktur kode server & mendukung multi-bahasa
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body Form Scrollable */}
              <form onSubmit={handleSaveProduct} className="overflow-y-auto p-6 space-y-5">
                {/* SKU Code & Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      {t.skuCode} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formSku}
                      onChange={(e) => setFormSku(e.target.value)}
                      placeholder="CZN-001"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 px-3.5 text-sm text-emerald-400 font-mono font-bold focus:outline-none focus:border-emerald-500/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      {t.category} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      placeholder="Slop, Jepit, Clogs, Strap..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-emerald-500/60"
                    />
                  </div>
                </div>

                {/* Product Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    {t.productName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Nama produk lengkap..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                {/* Main Image Section */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <ImageIcon size={14} className="text-emerald-400" />
                      <span>{t.mainImageUrl}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowImagePicker(!showImagePicker)}
                        className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                      >
                        {showImagePicker ? 'Tutup Pilihan' : t.choosePresetImage}
                      </button>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-1 rounded-lg bg-slate-800"
                      >
                        <Upload size={12} className="inline mr-1" />
                        <span>Upload</span>
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0">
                      <img
                        src={formImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <input
                      type="text"
                      value={formImage}
                      onChange={(e) => setFormImage(e.target.value)}
                      placeholder="/images/001/CZN-001-1.png atau https://..."
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-300 font-mono focus:outline-none focus:border-emerald-500/60"
                    />
                  </div>

                  {/* Preset Warehouse Images Grid Picker */}
                  {showImagePicker && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-slate-900 rounded-2xl border border-slate-800 max-h-48 overflow-y-auto"
                    >
                      <p className="text-[10px] text-slate-400 font-medium mb-2">
                        Klik gambar gudang untuk menjadikannya foto utama:
                      </p>
                      <div className="grid grid-cols-6 sm:grid-cols-8 gap-1.5">
                        {availableWarehouseImages.map((img) => (
                          <button
                            key={img}
                            type="button"
                            onClick={() => {
                              setFormImage(img);
                              if (!formGallery.includes(img)) {
                                setFormGallery([...formGallery, img]);
                              }
                            }}
                            className={`aspect-square rounded-lg overflow-hidden border transition-all ${
                              formImage === img
                                ? 'border-emerald-500 ring-2 ring-emerald-500/40'
                                : 'border-slate-800 hover:border-slate-600'
                            }`}
                          >
                            <img
                              src={img}
                              alt="Preset"
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Sizes Tags Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {t.sizes}
                  </label>
                  <div className="flex flex-wrap gap-1.5 min-h-[36px] p-2 bg-slate-950 border border-slate-800 rounded-2xl">
                    {formSizes.map((size, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold"
                      >
                        <span>{size}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setFormSizes(formSizes.filter((_, i) => i !== idx))
                          }
                          className="hover:text-rose-400"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                    <div className="flex items-center gap-1 flex-1 min-w-[120px]">
                      <input
                        type="text"
                        value={newSizeInput}
                        onChange={(e) => setNewSizeInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddSize();
                          }
                        }}
                        placeholder={t.addSizePlaceholder}
                        className="bg-transparent border-none text-xs text-white placeholder-slate-600 focus:outline-none w-full"
                      />
                      <button
                        type="button"
                        onClick={handleAddSize}
                        className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  {/* Size Presets */}
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 flex-wrap">
                    <span>Preset cepat:</span>
                    {['36, 37, 38, 39, 40', '39, 40, 41, 42, 43, 44', '36/37, 38/39, 40/41', '24/25, 26/27, 28/29'].map(
                      (preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() =>
                            setFormSizes(
                              preset.split(',').map((s) => s.trim())
                            )
                          }
                          className="px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300"
                        >
                          {preset}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Colors Tags Input with Live Multi-language Preview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      {t.colorVariations}
                    </label>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      Auto-translated to EN & ZH
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 min-h-[36px] p-2 bg-slate-950 border border-slate-800 rounded-2xl">
                    {formColors.map((col, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold"
                      >
                        <span>{col}</span>
                        <span className="text-[10px] text-slate-500">
                          ({translateColor(col, 'en')} / {translateColor(col, 'zh')})
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setFormColors(formColors.filter((_, i) => i !== idx))
                          }
                          className="hover:text-rose-400"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                    <div className="flex items-center gap-1 flex-1 min-w-[120px]">
                      <input
                        type="text"
                        value={newColorInput}
                        onChange={(e) => setNewColorInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddColor();
                          }
                        }}
                        placeholder={t.addColorPlaceholder}
                        className="bg-transparent border-none text-xs text-white placeholder-slate-600 focus:outline-none w-full"
                      />
                      <button
                        type="button"
                        onClick={handleAddColor}
                        className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  {/* Quick Color Presets */}
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 flex-wrap">
                    <span>Preset warna:</span>
                    {['Hitam', 'Putih', 'Cream', 'Coklat', 'Navy', 'Abu-Abu', 'Pink', 'Hijau Army', 'Biru'].map(
                      (clr) => (
                        <button
                          key={clr}
                          type="button"
                          onClick={() => {
                            if (!formColors.includes(clr)) {
                              setFormColors([...formColors, clr]);
                            }
                          }}
                          className="px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300"
                        >
                          + {clr}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Multilingual Description Section with Tabs */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Languages size={14} className="text-emerald-400" />
                      <span>{t.description} (Multi-Bahasa)</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleAutoTranslate}
                      className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                    >
                      Perbarui Terjemahan Otomatis
                    </button>
                  </div>

                  {/* Language Tab Bar */}
                  <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveEditLangTab('id')}
                      className={`flex-1 py-1.5 px-3 rounded-lg font-bold transition-colors ${
                        activeEditLangTab === 'id'
                          ? 'bg-slate-800 text-emerald-400'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🇮🇩 Bahasa Indonesia (Asli)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveEditLangTab('en')}
                      className={`flex-1 py-1.5 px-3 rounded-lg font-bold transition-colors ${
                        activeEditLangTab === 'en'
                          ? 'bg-slate-800 text-emerald-400'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🇬🇧 English
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveEditLangTab('zh')}
                      className={`flex-1 py-1.5 px-3 rounded-lg font-bold transition-colors ${
                        activeEditLangTab === 'zh'
                          ? 'bg-slate-800 text-emerald-400'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🇨🇳 简体中文
                    </button>
                  </div>

                  {activeEditLangTab === 'id' && (
                    <textarea
                      rows={6}
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Tulis deskripsi dan spesifikasi dalam Bahasa Indonesia..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/60 leading-relaxed font-sans"
                    />
                  )}

                  {activeEditLangTab === 'en' && (
                    <div className="space-y-1">
                      <textarea
                        rows={6}
                        value={formEnDesc}
                        onChange={(e) => setFormEnDesc(e.target.value)}
                        placeholder="English translation of the specifications..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/60 leading-relaxed font-sans"
                      />
                      <p className="text-[10px] text-slate-500">
                        Deskripsi ini akan tampil saat user memilih Bahasa Inggris (EN).
                      </p>
                    </div>
                  )}

                  {activeEditLangTab === 'zh' && (
                    <div className="space-y-1">
                      <textarea
                        rows={6}
                        value={formZhDesc}
                        onChange={(e) => setFormZhDesc(e.target.value)}
                        placeholder="商品规格说明中文翻译..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-2.5 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500/60 leading-relaxed font-sans"
                      />
                      <p className="text-[10px] text-slate-500">
                        Deskripsi ini akan tampil saat user memilih Bahasa Mandarin (ZH).
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    {t.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                        <span>Menyimpan ke Kode...</span>
                      </>
                    ) : (
                      <>
                        <Server size={14} />
                        <span>Simpan ke Struktur Kode</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {confirmDeleteSku && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfirmDeleteSku(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl text-slate-100 z-10"
            >
              <h3 className="text-base font-bold text-white mb-2">
                {t.confirmDelete}
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                {t.confirmDeleteDesc} SKU:{' '}
                <span className="font-mono text-emerald-400 font-bold">
                  {confirmDeleteSku}
                </span>
              </p>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmDeleteSku(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  {t.cancel}
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(confirmDeleteSku)}
                  className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold shadow-md shadow-rose-500/20"
                >
                  Hapus
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
