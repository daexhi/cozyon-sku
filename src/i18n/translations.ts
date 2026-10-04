export type Language = 'id' | 'en' | 'zh';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  skuCount: string;
  searchPlaceholder: string;
  clearSearch: string;
  allCategories: string;
  downloadPdf: string;
  downloadingPdf: string;
  pdfCompressNote: string;
  noProductsFound: string;
  noProductsHint: string;
  photosCount: string;
  viewDetails: string;
  productName: string;
  sizes: string;
  colorVariations: string;
  description: string;
  close: string;
  clickToEnlarge: string;
  quickSpecs: string;
  shareWhatsApp: string;
  copySku: string;
  copied: string;
  adminLogin: string;
  adminLogout: string;
  adminDashboard: string;
  backToCatalog: string;
  adminPanelTitle: string;
  adminPanelSubtitle: string;
  loginTitle: string;
  loginSubtitle: string;
  username: string;
  password: string;
  loginButton: string;
  invalidCredentials: string;
  addNewProduct: string;
  editProduct: string;
  deleteProduct: string;
  confirmDelete: string;
  confirmDeleteDesc: string;
  saveChanges: string;
  cancel: string;
  skuCode: string;
  category: string;
  mainImageUrl: string;
  galleryUrls: string;
  addColorPlaceholder: string;
  addSizePlaceholder: string;
  colorPresetHint: string;
  resetDefaultCatalog: string;
  confirmResetCatalog: string;
  exportCatalogJson: string;
  importCatalogJson: string;
  changesSavedSuccess: string;
  totalSkus: string;
  filterByCategory: string;
  selectOrUploadImage: string;
  choosePresetImage: string;
  uploadLocalFile: string;
  pwaInstallTitle: string;
  pwaInstallDesc: string;
  installNow: string;
  installIos: string;
  understood: string;
  pdfColorLabel: string;
  pdfSizeLabel: string;
  pdfDescLabel: string;
  pdfCategoryLabel: string;
}

export const translations: Record<Language, Translations> = {
  id: {
    appTitle: 'Cozyon',
    appSubtitle: 'Product Knowledge',
    skuCount: 'SKU',
    searchPlaceholder: 'Cari SKU, nama sandal, kategori...',
    clearSearch: 'Bersihkan',
    allCategories: 'Semua Kategori',
    downloadPdf: 'Download Katalog PDF',
    downloadingPdf: 'Menyiapkan Katalog PDF...',
    pdfCompressNote: 'Format file ringan dan cepat diunduh',
    noProductsFound: 'SKU Tidak Ditemukan',
    noProductsHint: 'Coba kata kunci lain atau periksa kembali nomor SKU.',
    photosCount: 'Foto',
    viewDetails: 'Lihat Detail',
    productName: 'Nama Produk',
    sizes: 'Ukuran',
    colorVariations: 'Variasi Warna',
    description: 'Deskripsi Produk',
    close: 'Tutup',
    clickToEnlarge: 'Klik gambar untuk melihat resolusi penuh',
    quickSpecs: 'Spesifikasi Ringkas',
    shareWhatsApp: 'Bagikan via WhatsApp',
    copySku: 'Salin SKU',
    copied: 'Tersalin!',
    adminLogin: 'Admin Login',
    adminLogout: 'Keluar Admin',
    adminDashboard: 'Dashboard Admin',
    backToCatalog: 'Kembali ke Katalog',
    adminPanelTitle: 'Kelola Katalog Produk',
    adminPanelSubtitle: 'Edit gambar, deskripsi, warna, ukuran, tambah & hapus SKU',
    loginTitle: 'Masuk Panel Admin',
    loginSubtitle: 'Masukkan username dan password admin untuk mengelola katalog.',
    username: 'Username',
    password: 'Password',
    loginButton: 'Masuk ke Admin',
    invalidCredentials: 'Username atau password salah!',
    addNewProduct: 'Tambah SKU Baru',
    editProduct: 'Edit Produk',
    deleteProduct: 'Hapus SKU',
    confirmDelete: 'Yakin ingin menghapus SKU ini?',
    confirmDeleteDesc: 'Tindakan ini akan menghapus produk dari katalog.',
    saveChanges: 'Simpan Perubahan',
    cancel: 'Batal',
    skuCode: 'Kode SKU',
    category: 'Kategori',
    mainImageUrl: 'URL Gambar Utama',
    galleryUrls: 'Galeri Foto Produk',
    addColorPlaceholder: 'Ketik warna lalu Enter...',
    addSizePlaceholder: 'Ketik ukuran lalu Enter...',
    colorPresetHint: 'Tekan Enter atau klik + untuk menambah variasi',
    resetDefaultCatalog: 'Reset ke Katalog Bawaan',
    confirmResetCatalog: 'Kembalikan seluruh produk ke data bawaan awal?',
    exportCatalogJson: 'Export Backup JSON',
    importCatalogJson: 'Import Backup JSON',
    changesSavedSuccess: 'Perubahan berhasil disimpan!',
    totalSkus: 'Total SKU Terdaftar',
    filterByCategory: 'Filter Kategori',
    selectOrUploadImage: 'Pilih / Upload Gambar',
    choosePresetImage: 'Pilih dari Gambar Gudang',
    uploadLocalFile: 'Upload Foto dari Galeri HP / PC',
    pwaInstallTitle: 'Install Cozyon SKU',
    pwaInstallDesc: 'Akses katalog SKU lebih cepat langsung dari layar utama.',
    installNow: 'Install Sekarang',
    installIos: 'Install di iPhone',
    understood: 'Dimengerti',
    pdfColorLabel: 'Warna Tersedia',
    pdfSizeLabel: 'Pilihan Ukuran',
    pdfDescLabel: 'Deskripsi',
    pdfCategoryLabel: 'Kategori',
  },
  en: {
    appTitle: 'Cozyon',
    appSubtitle: 'Product Knowledge',
    skuCount: 'SKUs',
    searchPlaceholder: 'Search SKU, product name, category...',
    clearSearch: 'Clear',
    allCategories: 'All Categories',
    downloadPdf: 'Download Catalog PDF',
    downloadingPdf: 'Preparing Catalog PDF...',
    pdfCompressNote: 'Lightweight format, fast to download and share',
    noProductsFound: 'No SKUs Found',
    noProductsHint: 'Try another search query or verify the SKU number.',
    photosCount: 'Photos',
    viewDetails: 'View Details',
    productName: 'Product Name',
    sizes: 'Sizes',
    colorVariations: 'Color Variations',
    description: 'Product Description',
    close: 'Close',
    clickToEnlarge: 'Click image to view full resolution',
    quickSpecs: 'Quick Specifications',
    shareWhatsApp: 'Share on WhatsApp',
    copySku: 'Copy SKU',
    copied: 'Copied!',
    adminLogin: 'Admin Login',
    adminLogout: 'Logout Admin',
    adminDashboard: 'Admin Dashboard',
    backToCatalog: 'Back to Catalog',
    adminPanelTitle: 'Manage Product Catalog',
    adminPanelSubtitle: 'Edit images, descriptions, colors, sizes, add & delete SKUs',
    loginTitle: 'Admin Portal Login',
    loginSubtitle: 'Enter administrator credentials to manage products.',
    username: 'Username',
    password: 'Password',
    loginButton: 'Sign in to Admin',
    invalidCredentials: 'Invalid username or password!',
    addNewProduct: 'Add New SKU',
    editProduct: 'Edit Product',
    deleteProduct: 'Delete SKU',
    confirmDelete: 'Are you sure you want to delete this SKU?',
    confirmDeleteDesc: 'This action will permanently remove the product from the catalog.',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    skuCode: 'SKU Code',
    category: 'Category',
    mainImageUrl: 'Main Image URL',
    galleryUrls: 'Product Gallery Photos',
    addColorPlaceholder: 'Type color and press Enter...',
    addSizePlaceholder: 'Type size and press Enter...',
    colorPresetHint: 'Press Enter or click + to append item',
    resetDefaultCatalog: 'Reset to Factory Defaults',
    confirmResetCatalog: 'Reset all products back to original factory catalog?',
    exportCatalogJson: 'Export Backup JSON',
    importCatalogJson: 'Import Backup JSON',
    changesSavedSuccess: 'Changes saved successfully!',
    totalSkus: 'Total Registered SKUs',
    filterByCategory: 'Filter Category',
    selectOrUploadImage: 'Select / Upload Image',
    choosePresetImage: 'Choose from Warehouse Images',
    uploadLocalFile: 'Upload Photo from Device',
    pwaInstallTitle: 'Install Cozyon SKU',
    pwaInstallDesc: 'Fast access to SKU catalog directly from your home screen.',
    installNow: 'Install App',
    installIos: 'Install on iPhone',
    understood: 'Understood',
    pdfColorLabel: 'Available Colors',
    pdfSizeLabel: 'Available Sizes',
    pdfDescLabel: 'Description',
    pdfCategoryLabel: 'Category',
  },
  zh: {
    appTitle: 'Cozyon',
    appSubtitle: '产品资料手册',
    skuCount: '款 SKU',
    searchPlaceholder: '搜索 SKU 编号、商品名称、分类...',
    clearSearch: '清除',
    allCategories: '全部分类',
    downloadPdf: '下载产品目录 PDF',
    downloadingPdf: '正在生成产品目录 PDF...',
    pdfCompressNote: '轻量化文件格式，支持极速下载与转发',
    noProductsFound: '未找到相关 SKU',
    noProductsHint: '请尝试其他关键词或检查 SKU 编号。',
    photosCount: '张图片',
    viewDetails: '查看详情',
    productName: '商品名称',
    sizes: '尺码规格',
    colorVariations: '颜色分类',
    description: '商品说明',
    close: '关闭',
    clickToEnlarge: '点击图片查看大图',
    quickSpecs: '规格摘要',
    shareWhatsApp: '通过 WhatsApp 分享',
    copySku: '复制 SKU',
    copied: '已复制！',
    adminLogin: '管理员登录',
    adminLogout: '退出管理',
    adminDashboard: '管理后台',
    backToCatalog: '返回产品目录',
    adminPanelTitle: '商品目录管理系统',
    adminPanelSubtitle: '修改图片、说明、颜色、尺码规格，新增或删除 SKU',
    loginTitle: '登录管理后台',
    loginSubtitle: '请输入管理员账号与密码进入管理界面。',
    username: '账号',
    password: '密码',
    loginButton: '立即登录',
    invalidCredentials: '账号或密码不正确！',
    addNewProduct: '新增 SKU 商品',
    editProduct: '编辑商品',
    deleteProduct: '删除 SKU',
    confirmDelete: '确定要删除该 SKU 吗？',
    confirmDeleteDesc: '此操作将从目录中移除该商品。',
    saveChanges: '保存更改',
    cancel: '取消',
    skuCode: 'SKU 编码',
    category: '商品分类',
    mainImageUrl: '主图链接',
    galleryUrls: '商品副图列表',
    addColorPlaceholder: '输入颜色按回车添加...',
    addSizePlaceholder: '输入尺码按回车添加...',
    colorPresetHint: '按 Enter 回车键或点击 + 添加',
    resetDefaultCatalog: '恢复初始产品库',
    confirmResetCatalog: '确定将所有商品重置回初始数据吗？',
    exportCatalogJson: '导出数据备份 (JSON)',
    importCatalogJson: '导入数据备份 (JSON)',
    changesSavedSuccess: '更改已成功保存！',
    totalSkus: '现有 SKU 总数',
    filterByCategory: '分类筛选',
    selectOrUploadImage: '选择或上传图片',
    choosePresetImage: '从仓库图库选择',
    uploadLocalFile: '从手机/电脑上传照片',
    pwaInstallTitle: '安装 Cozyon 快捷版',
    pwaInstallDesc: '添加到手机桌面，随时离线极速查看商品资料。',
    installNow: '立即安装',
    installIos: '在 iPhone 上安装',
    understood: '知道了',
    pdfColorLabel: '可选颜色',
    pdfSizeLabel: '尺码规格',
    pdfDescLabel: '商品描述',
    pdfCategoryLabel: '商品分类',
  },
};
