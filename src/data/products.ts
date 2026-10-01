export interface Product {
  sku: string;
  name: string;
  image: string;
  gallery?: string[];
  sizes: string[];
  description: string;
  category: string;
  colors?: string[];
}

const images = [
  '/src/assets/images/cozyon_slide_new_1790272772073.jpg',
  '/src/assets/images/cozyon_flipflop_new_1790272783816.jpg',
  '/src/assets/images/cozyon_sport_new_1790272794233.jpg',
  '/src/assets/images/cozyon_leather_new_1790272805719.jpg',
  '/src/assets/images/cozyon_recovery_new_1790272816856.jpg',
];

const categories = [
  'Slide',
  'Flip Flop',
  'Sport',
  'Leather',
  'Recovery',
];

const descriptions = [
  'Sendal slide ergonomis dengan bahan busa premium yang sangat empuk, cocok untuk penggunaan sehari-hari maupun santai di rumah. Tahan lama dan mudah dibersihkan.',
  'Sendal jepit stylish dengan tali kanvas yang kuat dan sol karet anti slip. Desain minimalis yang cocok untuk pergi ke pantai atau jalan-jalan santai.',
  'Sendal gunung dengan tali nylon yang bisa disesuaikan. Sol trekking yang tangguh memberikan cengkeraman maksimal di berbagai medan outdoor.',
  'Sendal kulit mewah dengan strap lebar dan gesper logam. Insole dari bahan gabus yang mengikuti bentuk kaki, memberikan kemyamanan maksimal sepanjang hari.',
  'Sendal recovery atletik yang dirancang khusus untuk mengistirahatkan kaki setelah berolahraga berat. Dilengkapi dengan bantalan tebal dan sirkulasi udara yang baik.',
];

const uploadedFolders = new Set([
  '001', '002', '003', '004', '006', '008', '009', '010', '011', '012', 
  '013', '014', '015', '016', '018', '019', '020', '021', '022', '023', 
  '024', '025', '026', '027', '028', '029', '030', '031', '032', '035', 
  '036', '037', '038', '039', '040', '041', '042'
]);

const skuCategoryMap: Record<string, string> = {
  'CZN-001': 'Clogs',
  'CZN-002': 'Flip Flop',
  'CZN-003': 'Jepit',
  'CZN-004': 'Jepit',
  'CZN-006': 'Slop',
  'CZN-008': 'Strap',
  'CZN-009': 'Slop',
  'CZN-010': 'Slop',
  'CZN-011': 'Slop',
  'CZN-012': 'Slop',
  'CZN-013': 'Jepit Leather',
  'CZN-014': 'Slop',
  'CZN-015': 'Slop',
  'CZN-016': 'Jepit',
  'CZN-018': 'Slop',
  'CZN-019': 'Slop Karet',
  'CZN-020': 'Slop',
  'CZN-021': 'Slop',
  'CZN-022': 'Strap',
  'CZN-023': 'Cute Slop',
  'CZN-024': 'Cute Slop',
  'CZN-025': 'Slop',
  'CZN-026': 'Jepit',
  'CZN-027': 'Strap',
  'CZN-028': 'Kids Clogs',
  'CZN-029': 'MaryJane Clogs',
  'CZN-030': 'Kids Clogs',
  'CZN-031': 'Jepit',
  'CZN-032': 'Slop',
  'CZN-035': 'Strap',
  'CZN-036': 'Strap',
  'CZN-037': 'Slop',
  'CZN-038': 'Slop',
  'CZN-039': 'Kids Slop',
  'CZN-040': 'Kids Slop',
  'CZN-041': 'Kids Slop',
  'CZN-042': 'Kids Slop',
};

const skuDetailsMap: Record<string, Partial<Product>> = {
  'CZN-001': {
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Coklat', 'Cream', 'Hitam'],
    description: `CZN-001 Sandal Selop Wanita Platform EVA

Sandal selop wanita CZN-001 menghadirkan kombinasi sempurna antara kenyamanan maksimal dan tampilan yang modis. Dirancang khusus dengan bantalan empuk dan lentur serta ketebalan sol ±3–4 cm yang pas untuk memberikan efek kaki terlihat lebih jenjang tanpa mengorbankan kenyamanan. Terbuat dari material EVA Premium berkualitas tinggi yang super ringan di kaki, sandal ini sangat nyaman dipakai seharian untuk beraktivitas lama tanpa membuat kaki pegal. Dilengkapi dengan alas sol bertekstur anti-licin yang aman digunakan di berbagai permukaan lantai rumah maupun area luar ruangan.

Spesifikasi:
- Kode Produk: CZN-001
- Jenis Produk: Sandal Selop / Slide Wanita (Platform)
- Bahan/Material: EVA Premium (Empuk, Lentur, Super Ringan & Tahan Lama)
- Tinggi Sol: ± 3–4 cm
- Fitur Utama: Sol Platform Nyaman, Bantalan Empuk Bebas Pegal, Outsole Anti-Licin
- Pilihan Ukuran: Size 36 sampai 40
- Target: Wanita / Ibu Rumah Tangga
- Penggunaan: Indoor & Outdoor (Sandal rumah, pemakaian harian, dan jalan santai)`,
  },
  'CZN-002': {
    sizes: ['36-37', '38-39', '40-41'],
    colors: ['Hitam', 'Coklat', 'Cream'],
    description: `CZN-002 Sandal Selop Wanita Platform EVA

Sandal selop wanita CZN-002 menghadirkan kombinasi sempurna antara kenyamanan maksimal dan tampilan yang modis. Dirancang khusus dengan bantalan empuk dan lentur serta ketebalan sol ±3–4 cm yang pas untuk memberikan efek kaki terlihat lebih jenjang tanpa mengorbankan kenyamanan. Terbuat dari material EVA Premium berkualitas tinggi yang super ringan di kaki, sandal ini sangat nyaman dipakai seharian untuk beraktivitas lama tanpa membuat kaki pegal. Dilengkapi dengan alas sol bertekstur anti-licin yang aman digunakan di berbagai permukaan lantai rumah maupun area luar ruangan.

Spesifikasi:
- Kode Produk: CZN-002
- Jenis Produk: Sandal Selop / Slide Wanita (Platform)
- Bahan/Material: EVA Premium (Empuk, Lentur, Super Ringan & Tahan Lama)
- Tinggi Sol: ± 3–4 cm
- Fitur Utama: Sol Platform Nyaman, Bantalan Empuk Bebas Pegal, Outsole Anti-Licin
- Pilihan Ukuran: Size 36 sampai 40
- Target: Wanita / Ibu Rumah Tangga
- Penggunaan: Indoor & Outdoor (Sandal rumah, pemakaian harian, dan jalan santai)`,
  },
  'CZN-003': {
    sizes: ['36/37', '38/39', '40/41', '42/43', '44/45'],
    colors: ['Hitam', 'Taupe', 'Abu-Abu', 'Cream', 'Navy', 'Hijau Tua'],
    description: `CZN-003 Sandal Jepit Unisex Minimalis

Sandal jepit CZN-003 hadir dengan desain simpel, minimalis, dan modern yang sangat serbaguna untuk pria maupun wanita. Dibuat dari material EVA Premium pilihan yang super ringan dan lentur, sandal ini memberikan sensasi empuk di setiap langkah sehingga menjaga kaki tetap bebas pegal walau digunakan beraktivitas sepanjang hari. Dilengkapi dengan alas sol bertekstur anti-licin untuk memberikan daya cengkeram yang stabil dan aman, menjadikannya pilihan ideal untuk penggunaan harian di rumah maupun saat jalan santai di luar.

Spesifikasi:
- Kode Produk: CZN-003
- Jenis Produk: Sandal Jepit Unisex
- Bahan/Material: EVA Premium (Super Ringan, Lentur, Empuk & Nyaman)
- Fitur Utama: Desain Simpel Modern, Outsole Anti-Licin, Nyaman Bebas Pegal
- Pilihan Warna: Hitam
- Pilihan Ukuran: Size 36 sampai 43
- Target: Pria & Wanita (Unisex)
- Penggunaan: Sandal rumah, jalan santai, dan aktivitas sehari-hari`,
  },
  'CZN-004': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Hitam', 'Cream'],
    description: `CZN-004 Sandal Jepit Wedges Wanita Tali Strap Dua

Sandal jepit wedges wanita CZN-004 hadir menggabungkan desain kasual yang fashionable, trendy, dan stylish untuk menunjang aktivitas bepergian maupun harian. Menggunakan material karet jelly premium yang halus, elastis, dan super empuk, sandal ini memberikan kenyamanan ekstra di setiap langkah tanpa menyebabkan rasa sakit saat dipakai seharian. Dilengkapi dengan tambahan desain tali strap dua yang manis serta sol tebal ±3 cm untuk tampilan lebih proporsional. Bahan sandal tahan air, tahan cuaca, serta sangat mudah dibersihkan. Outsole bertekstur anti-slip memastikan pijakan tetap stabil, aman, dan tidak licin di area indoor maupun outdoor.

Spesifikasi:
- Kode Produk: CZN-004
- Jenis Produk: Sandal Jepit Wedges Wanita (Tali Strap Dua)
- Bahan/Material: Karet Jelly Premium (Halus, Elastis, Empuk, Tahan Air & Tahan Cuaca)
- Tinggi Sol: ± 3 cm
- Fitur Utama: Tali Strap Dua Fashionable, Material Karet Jelly Halus, Sol Wedges Empuk, Outsole Anti-Slip
- Pilihan Warna: Cream
- Pilihan Ukuran: Size 36/37 (Insole 22,5 cm), 38/39 (Insole 23,5 cm), dan 40/41 (Insole 24,5 cm)
- Target: Wanita
- Penggunaan: Indoor & Outdoor (Bepergian, jalan santai, hangout, dan pemakaian harian)`,
  },
  'CZN-006': {
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Hitam', 'Cream', 'Pink'],
    description: `CZN-006 Sandal Selop Wanita Puffy Strap

Sandal selop wanita CZN-006 hadir dengan desain puffy strap tebal yang terlihat mewah, kekinian, dan elegan. Dibalut warna cream soft yang cantik dan estetik, sandal ini sangat mudah dipadukan dengan berbagai jenis outfit santai harianmu. Dibuat dari material EVA Premium berkualitas tinggi yang super empuk, sangat ringan, dan fleksibel, memberikan kenyamanan ekstra walau dipakai beraktivitas seharian. Dilengkapi dengan outsole bertekstur anti-slip untuk menjaga kestabilan pijakan agar aman dan tidak licin saat digunakan di dalam maupun di luar rumah.

Spesifikasi:
- Kode Produk: CZN-006
- Jenis Produk: Sandal Slide / Selop Wanita (Puffy Strap)
- Bahan/Material: EVA Premium (Super Empuk, Ringan, Fleksibel & Tahan Lama)
- Fitur Utama: Desain Puffy Strap Premium, Warna Cream Soft Estetik, Sol Anti-Slip Anti Licin
- Pilihan Warna: Cream / Beige
- Pilihan Ukuran: Size 36 sampai 41 (Disarankan naik 1 size untuk tipe kaki cenderung lebar)
- Target: Wanita
- Penggunaan: Indoor & Outdoor (Sandal rumah, jalan santai, hangout, dan pemakaian harian)`,
  },
  'CZN-008': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Hitam', 'Putih', 'Cream'],
    description: 'Belum Tersedia',
  },
  'CZN-009': {
    sizes: ['39/40', '41/42', '43/44'],
    colors: ['Hitam', 'Putih', 'Navy', 'Abu-Abu'],
    description: `CZN-009 Sandal Slop Pria Casual Premium

Sandal slop pria CZN-009 hadir dengan desain minimalis, modern, dan stylish untuk menunjang gaya kasual harianmu. Dibuat dari material EVA Premium berkualitas yang super ringan, empuk, dan fleksibel, memberikan kenyamanan maksimal di setiap langkah tanpa membuat kaki lelah. Mengusung model slip-on yang praktis dan mudah dipakai, sandal ini juga dilengkapi dengan outsole bertekstur anti-slip yang aman dan tidak licin saat melangkah di berbagai permukaan indoor maupun outdoor.

Spesifikasi:
- Kode Produk: CZN-009
- Jenis Produk: Sandal Slip On / Slop Pria
- Bahan/Material: EVA Premium (Ringan, Empuk, Fleksibel & Tahan Lama)
- Fitur Utama: Desain Minimalis Stylish, Model Slip-On Praktis, Outsole Anti-Slip Anti Licin
- Target: Pria
- Penggunaan: Indoor & Outdoor (Sandal rumah, jalan santai, sandal harian, dan bepergian)`,
  },
  'CZN-010': {
    sizes: ['35-36', '37-38', '39-40', '40-41', '42-43', '44-45'],
    colors: ['Hitam', 'Navy', 'Taupe', 'Cream', 'Abu-Abu'],
    description: `CZN-010 Sandal Selop Jepit Unisex Minimalis

Sandal selop jepit CZN-010 hadir dengan desain minimalis, simpel, dan modern yang serbaguna untuk pria maupun wanita. Dibuat dari bahan EVA Premium berkualitas tinggi yang super ringan, lentur, dan empuk sehingga memberikan kenyamanan ekstra di setiap langkah tanpa membuat kaki pegal walau dipakai seharian. Sandal ini dirancang dengan outsole bertekstur anti-licin yang memberikan pijakan aman dan stabil, menjadikannya pilihan tepat untuk penggunaan harian di rumah hingga jalan santai.

Spesifikasi:
- Kode Produk: CZN-010
- Jenis Produk: Sandal Selop Jepit Unisex
- Bahan/Material: EVA Premium (Super Ringan, Lentur, Empuk & Nyaman)
- Fitur Utama: Desain Simpel Modern, Outsole Anti-Licin, Bebas Pegal
- Pilihan Warna: Hitam
- Pilihan Ukuran: Size 36 sampai 43 (Disarankan naik 1 size untuk tipe kaki lebar)
- Target: Pria & Wanita (Unisex)
- Penggunaan: Sandal rumah, jalan santai, dan aktivitas harian`,
  },
  'CZN-011': {
    sizes: ['38-39', '40-41', '42-43', '44-45'],
    colors: ['Navy', 'Hitam', 'Coklat'],
    description: `CZN-011 Sandal Slip On Unisex Air Shoes Sport

Sandal slip-on CZN-011 menghadirkan kombinasi sempurna antara desain sporty yang modern dan kenyamanan maksimal. Dibuat dengan sol lembut yang fleksibel dan ergonomis mengikuti bentuk kaki, sandal ini terasa super ringan dan nyaman dipakai seharian tanpa membuat kaki cepat lelah. Menggunakan material EVA/PVC berkualitas yang awet, praktis, serta dilengkapi outsole anti-slip untuk pijakan yang aman dan tidak licin di berbagai permukaan. Tampilannya makin trendi dengan aksen tulisan "Air Shoes Sport", sangat cocok untuk gaya kasual pria maupun wanita.

Spesifikasi:
- Kode Produk: CZN-011
- Jenis Produk: Sandal Slip On / Sandal Selop Unisex (Air Shoes Sport)
- Bahan/Material: EVA / PVC berkualitas (Ringan, Empuk, Fleksibel & Tahan Lama)
- Fitur Utama: Desain Sporty Modern, Sol Lembut Ergonomis, Outsole Anti-Slip Anti Licin
- Pilihan Warna: Hitam, Navy, dan Coklat
- Target: Pria & Wanita (Unisex)
- Penggunaan: Indoor & Outdoor (Sandal rumah, jalan santai, liburan, dan aktivitas harian)`,
  },
  'CZN-012': {
    sizes: ['36-37', '38-39', '40-41', '42-43', '44-45'],
    colors: ['Pink', 'Biru', 'Hitam', 'Khaki', 'Ungu'],
    description: `CZN-012 Sandal Wanita Selop Slide EVA

Sandal selop slide wanita CZN-012 hadir dengan desain modern dan elegan untuk menunjang gaya sehari-hari tanpa mengorbankan kenyamanan. Dibuat dari bahan EVA Premium yang super ringan, empuk, dan elastis, sandal ini memberikan keleluasaan bergerak tanpa rasa lelah atau sakit di kaki walau dipakai beraktivitas seharian. Materialnya tahan air, sangat praktis, dan mudah dibersihkan. Dilengkapi dengan outsole bertekstur anti-slip yang aman dan tidak licin di berbagai permukaan indoor maupun outdoor.

Spesifikasi:
- Kode Produk: CZN-012
- Jenis Produk: Sandal Selop / Slide Wanita
- Bahan/Material: EVA Premium (Ringan, Empuk, Elastis, Tahan Air & Mudah Dibersihkan)
- Fitur Utama: Desain Modern Elegan, Outsole Anti-Slip Anti Licin, Bobot Super Ringan
- Pilihan Warna: Hitam, Coklat, Dark Pink, dan Cream
- Pilihan Ukuran: Size 36/37, 38/39, dan 40/41
- Penggunaan: Bepergian, jalan santai, sandal rumah, dan aktivitas harian (indoor & outdoor)`,
  },
  'CZN-013': {
    sizes: ['38-39', '40-41', '42-43'],
    colors: ['Hitam', 'Abu-Abu'],
    description: `CZN-013 Sandal Pria Casual Premium

Sandal pria CZN-013 hadir dengan desain modern yang simpel dan elegan, memberikan tampilan rapi dan stylish tanpa ribet untuk menemani berbagai aktivitas harianmu. Dibuat dari material pilihan yang kuat, lentur, dan tahan lama dengan bobot yang ringan agar kaki tidak lelah saat dipakai berjalan jauh. Dilengkapi bantalan sol yang empuk serta outsole bertekstur anti-licin yang memberikan pijakan stabil dan aman di area indoor maupun outdoor. Warna hitam elegannya sangat mudah dipadukan dengan berbagai gaya outfit kasual.

Spesifikasi:
- Kode Produk: CZN-013
- Jenis Produk: Sandal Pria Casual / Slide
- Bahan/Material: Material Sintetis Premium (Kuat, Ringan & Tahan Lama)
- Fitur Utama: Desain Simpel & Elegan, Sol Empuk Nyaman, Outsole Anti-Licin & Stabil
- Pilihan Warna: Hitam Elegan
- Penggunaan: Jalan santai, traveling, nongkrong, dan aktivitas harian (indoor & outdoor)`,
  },
  'CZN-014': {
    sizes: ['36-37', '38-39', '40-41'],
    colors: ['Hitam', 'Cream'],
    description: `CZN-014 Sandal Wanita Selop Wedges EVA

Sandal selop wedges wanita CZN-014 hadir dengan desain modern dan elegan yang dirancang khusus untuk kenyamanan aktivitas harianmu. Menggunakan bahan EVA berkualitas yang super ringan, empuk, dan elastis sehingga memberikan keleluasaan bergerak tanpa rasa pegal di kaki. Sandal ini tahan air, sangat praktis dan mudah dibersihkan, serta dilengkapi outsole anti-slip untuk pijakan yang mantap dan aman di berbagai permukaan ruangan maupun luar ruangan.

Spesifikasi:
- Kode Produk: CZN-014
- Jenis Produk: Sandal Selop Wedges / Slide Wanita
- Bahan/Material: EVA Premium (Ringan, Empuk, Elastis, Tahan Air & Mudah Dibersihkan)
- Fitur Utama: Sol Wedges Nyaman, Outsole Anti-Slip Anti Licin, Desain Elegan & Modern
- Pilihan Warna: Hitam, Coklat, Dark Pink, dan Cream
- Pilihan Ukuran: Size 36/37, 38/39, dan 40/41
- Penggunaan: Indoor & Outdoor (Jalan santai, bepergian, dan pemakaian harian)`,
  },
  'CZN-015': {
    sizes: ['39-40', '41-42', '43-44'],
    colors: ['Hitam', 'Putih', 'Abu-Abu', 'Coklat', 'Hijau'],
    description: `CZN-015 Sandal Pria Remaja Casual

Sandal pria remaja CZN-015 hadir dengan desain yang modis, simpel, dan stylish untuk memenuhi kebutuhan gaya harianmu. Dirancang khusus mengutamakan kenyamanan maksimal lewat bantalan sol yang empuk dan bahan yang ringan di kaki, menjadikannya sangat cocok dipakai seharian tanpa membuat lelah. Sandal main yang fleksibel ini tersedia dalam berbagai pilihan warna menarik dengan harga terjangkau untuk menunjang aktivitas santai remaja putri masa kini.

Spesifikasi:
- Kode Produk: CZN-015
- Jenis Produk: Sandal Slide / Casual Remaja Pria
- Bahan/Material: Material Sintetis Premium (Empuk, Ringan & Fleksibel)
- Fitur Utama: Desain Modis & Trendy, Sol Empuk Nyaman Seharian, Beragam Pilihan Warna
- Target: Remaja Pria / Pria
- Penggunaan: Sandal main, jalan santai, hangout, dan aktivitas sehari-hari`,
  },
  'CZN-016': {
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['Hitam'],
    description: `CZN-016 Sandal Jepit Pria Original

Sandal jepit pria CZN-016 Original hadir dengan desain yang praktis, fungsional, dan timeless untuk menunjang aktivitas harianmu. Dirancang mengutamakan kenyamanan maksimal lewat penggunaan bahan pilihan yang empuk, lentur, dan tahan lama. Bobotnya yang ringan serta bantalan solnya yang nyaman menjadikan sandal ini pilihan tepat untuk menemani langkahmu sepanjang hari tanpa membuat kaki pegal.

Spesifikasi:
- Kode Produk: CZN-016
- Jenis Produk: Sandal Jepit Pria
- Bahan/Material: Karet/Sintetis Premium (Empuk, Ringan & Awet)
- Fitur Utama: Desain Praktis & Fungsional, Sol Empuk Tahan Lama, Nyaman Seharian
- Penggunaan: Pemakaian sehari-hari, santai di rumah, dan bepergian`,
  },
  'CZN-018': {
    sizes: ['37-38', '39-40'],
    colors: ['Coklat', 'Hitam'],
    description: `CZN-018 Sandal Slop Casual Stylish

Sandal CZN-018 hadir dengan desain kasual yang modis dan serbaguna, cocok untuk melengkapi penampilan harian remaja hingga dewasa. Dirancang khusus untuk mengutamakan kenyamanan maksimal lewat penggunaan bahan yang empuk dan ringan di kaki. Modelnya yang simpel menjadikannya sandal pilihan tepat untuk berbagai aktivitas santai, jalan-jalan, maupun penggunaan sehari-hari dengan harga yang terjangkau.

Spesifikasi:
- Kode Produk: CZN-018
- Jenis Produk: Sandal Slop / Casual Slide
- Bahan/Material: Material Sintetis Premium (Empuk, Ringan & Nyaman)
- Fitur Utama: Desain Stylish & Modern, Nyaman Dipakai Seharian, Bobot Ringan
- Penggunaan: Sandal main, jalan santai, rumah, dan aktivitas harian`,
  },
  'CZN-019': {
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['Hitam'],
    description: `CZN-019 Sandal Slide Pria Ban Dua Fashion Sport

Sandal slide pria CZN-019 hadir dengan desain ban dua bernuansa fashion sport yang modern, sporty, dan stylish. Dibuat dari bahan karet premium berkualitas yang empuk, sangat ringan, serta fleksibel mengikuti bentuk kaki sehingga nyaman dipakai seharian tanpa rasa lelah. Sandal ini tahan air dan sangat mudah dibersihkan, didukung dengan finishing yang rapi serta outsole anti-slip untuk menjaga kestabilan pijakan di area indoor maupun outdoor.

Spesifikasi:
- Kode Produk: CZN-019
- Jenis Produk: Sandal Slide / Slip On Pria (Ban Dua Fashion Sport)
- Bahan/Material: Karet Premium (Empuk, Ringan, Fleksibel & Tahan Air)
- Fitur Utama: Desain Ban Dua Sporty, Outsole Anti-Slip, Finishing Rapi & Mudah Dibersihkan
- Pilihan Ukuran: Size 39 (24,5 cm), 40 (25 cm), 41 (25,5 cm), 42 (26 cm), 43 (26,5 cm), dan 44 (27 cm)
- Penggunaan: Rumah, jalan santai, liburan, traveling, dan aktivitas outdoor ringan`,
  },
  'CZN-020': {
    sizes: ['39/40', '41/42', '43/44'],
    colors: ['Hitam', 'Biru'],
    description: `CZN-020 Sandal Selop Pria Fashion Sport

Sandal selop pria CZN-020 hadir dengan desain slide ban dua bernuansa fashion sport yang minimalis, modern, dan elegan. Menggunakan material berkualitas tinggi (High Quality Import) yang ringan and empuk, sandal ini dirancang untuk memberikan kenyamanan maksimal seharian tanpa membuat kaki cepat lelah. Sandal ini sangat fleksibel dan mudah dibersihkan, serta dilengkapi outsole anti-slip untuk pijakan yang aman dan tidak licin di berbagai jenis permukaan. Tampilannya yang kekinian sangat mudah dipadukan dengan berbagai outfit kasual maupun sporty.

Spesifikasi:
- Kode Produk: CZN-020
- Jenis Produk: Sandal Selop / Slide Pria Ban Dua (Fashion Sport)
- Bahan/Material: High Quality Import (Ringan, Nyaman & Mudah Dibersihkan)
- Fitur Utama: Desain Ban Dua Modern, Outsole Anti-Slip Anti Licin, Bobot Ringan
- Pilihan Warna: Hitam dan Navy
- Target: Remaja hingga Pria Dewasa
- Penggunaan: Aktivitas harian, jalan santai, nongkrong, kuliah, kantor casual, traveling, dan sandal rumah`,
  },
  'CZN-021': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Hitam', 'Coklat'],
    description: `CZN-021 Sandal Gunung Wedges Wanita

Sandal gunung wedges wanita CZN-021 hadir menggabungkan desain sporty yang tangguh dengan sentuhan Korean style yang modis dan elegan. Dibuat dari material EVA Premium Luxury yang super empuk, ringan, dan dilengkapi fitur cushioning untuk mencegah kaki pegal saat dipakai berjalan jauh. Sandal tali tumit (backstrap) ini memiliki sol tebal ±4 cm yang memberikan efek kaki terlihat lebih jenjang secara proporsional namun tetap stabil dan seimbang. Bersifat tahan air, mudah dibersihkan, dan dilengkapi outsole anti-slip untuk cengkeraman maksimal di permukaan licin.

Spesifikasi:
- Kode Produk: CZN-021
- Jenis Produk: Sandal Gunung Wedges / Tali Tumit Backstrap Wanita
- Bahan/Material: Full EVA Premium Luxury (Empuk, Cushioning Sistem, Ringan & Tahan Air)
- Fitur Utama: Sol Wedges Tebal ±4 cm (Efek Kaki Jenjang), Tali Tumit Kokoh, Outsole Anti-Slip
- Pilihan Warna: Hitam, Cream, dan Mocca
- Penggunaan: Hangout, aktivitas outdoor ringan, jalan santai, dan outfit casual/Korean style`,
  },
  'CZN-022': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Hitam', 'Coklat', 'Cream', 'Putih'],
    description: `CZN-022 Sandal Selop Wanita Karet Jelly Ban 3

Sandal selop wanita CZN-022 hadir dengan desain flat gesper ban 3 bergaya modern yang effortless, elegan, dan stylish. Dibuat dari material karet jelly premium tebal namun tetap elastis dan lentur di kaki, sehingga sangat nyaman digunakan seharian tanpa khawatir lecet. Sandal ini super ringan, empuk, tahan air, dan sangat mudah dibersihkan—cukup dilap atau dibilas. Dilengkapi dengan outsole bertekstur anti-slip berdaya cengkeram kuat untuk menjaga kestabilan langkah di permukaan licin maupun basah.

Spesifikasi:
- Kode Produk: CZN-022
- Jenis Produk: Sandal Selop / Flat Slide Wanita (Ban 3 Gesper)
- Bahan/Material: Karet Jelly Premium (Tebal, Elastis, Tahan Air & Mudah Dibersihkan)
- Fitur Utama: Desain Ban 3 Gesper Mewah & Timeless, Sol Anti-Slip, Ringan, Empuk & Anti Lecet
- Pilihan Warna: Hitam, Cream, dan Cokelat
- Penggunaan: Hangout, jalan santai, daily wear, dan aktivitas semi-formal`,
  },
  'CZN-023': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Biru', 'Kuning', 'Putih'],
    description: `CZN-023 Sandal Anak Selop Motif Puppy

Sandal selop anak CZN-023 hadir dengan desain motif puppy yang lucu dan menggemaskan, cocok digunakan untuk anak laki-laki maupun perempuan (unisex). Mengusung model slip-on yang praktis, sandal ini sangat mudah dipakai dan dilepas sendiri oleh si kecil. Dibuat dari bahan EVA Premium yang super ringan, empuk, dan fleksibel sehingga tetap nyaman digunakan meski dalam waktu lama. Materialnya kokoh, tidak mudah menyerap air, serta sangat mudah dibersihkan. Dilengkapi dengan outsole anti-slip berpola berlian untuk memberikan pijakan yang aman dan stabil saat bermain di area indoor maupun outdoor.

Spesifikasi:
- Kode Produk: CZN-023
- Jenis Produk: Sandal Selop / Slip On Anak (Unisex)
- Bahan/Material: EVA Premium (Ringan, Empuk, Fleksibel, Tahan Air & Mudah Dibersihkan)
- Fitur Utama: Desain Motif Puppy Lucu, Outsole Anti-Slip Pola Berlian, Model Slip-On Praktis
- Pilihan Warna: Kuning, Biru, dan Putih
- Rekomendasi Usia: 4 – 12 Tahun (menyesuaikan ukuran kaki anak)
- Penggunaan: Indoor & Outdoor (Sandal rumah, bermain, area kamar mandi, dan aktivitas harian)`,
  },
  'CZN-024': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Pink', 'Merah', 'Coklat', 'Hitam'],
    description: `CZN-024 Sandal Wanita Ribbon Korean Style

Sandal selop wanita CZN-024 hadir dengan desain pita (ribbon) yang manis, feminin, dan elegan ala Korean style untuk melengkapi tampilan santai harianmu. Dibuat dari bahan EVA Premium yang super ringan, empuk, dan nyaman digunakan sepanjang hari. Sandal ini sangat praktis dipasang maupun dilepas, serta bersifat cepat kering dan mudah dibersihkan. Dilengkapi dengan sol tebal yang empuk serta outsole anti-slip untuk pijakan aman dan stabil di berbagai permukaan, termasuk lantai keramik atau area basah.

Spesifikasi:
- Kode Produk: CZN-024
- Jenis Produk: Sandal Selop / Slip On Wanita (Ribbon Korean Style)
- Bahan/Material: EVA Premium (Ringan, Empuk, Cepat Kering & Mudah Dibersihkan)
- Fitur Utama: Desain Aksesori Pita (Ribbon) Anggun, Sol Tebal Empuk, Outsole Anti-Slip
- Pilihan Warna: Pink, Krem, Hitam, dan Merah
- Target: Wanita
- Penggunaan: Indoor & Outdoor (Sandal rumah, bersantai, jalan santai, dan penggunaan harian)`,
  },
  'CZN-025': {
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['Hitam', 'Navy', 'Mocca', 'Abu-Abu'],
    description: `CZN-025 Sandal Selop Pria Double Strap

Sandal selop pria CZN-025 hadir dengan desain double strap modern dan ergonomis yang cocok untuk berbagai bentuk kaki, termasuk kaki lebar. Dibuat dari material EVA Premium berkualitas tinggi yang super ringan, empuk, fleksibel, serta tahan air sehingga nyaman dipakai seharian tanpa membuat kaki lelah. Sandal ini tidak berisik saat berjalan, cepat kering, dan sangat mudah dibersihkan. Dilengkapi dengan sol tebal ±3 cm untuk bantalan ekstra serta outsole bertekstur anti-slip yang memberikan daya cengkeram kuat di permukaan keramik, beton, hingga area basah.

Spesifikasi:
- Kode Produk: CZN-025
- Jenis Produk: Sandal Selop / Slide Unisex (Double Strap)
- Bahan/Material: EVA Premium (Ringan, Empuk, Fleksibel, Tahan Air & Tidak Berisik)
- Fitur Utama: Sol Tebal ±3 cm, Outsole Anti-Slip Tekstur Khusus, Desain Ergonomis (Cocok untuk Kaki Lebar)
- Target: Pria & Wanita (Unisex)
- Penggunaan: Indoor & Outdoor (Sandal rumah, kamar mandi, jalan-jalan, teras, dan aktivitas harian)`,
  },
  'CZN-026': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Hitam', 'Taupe', 'Putih'],
    description: `CZN-026 Sandal Jepit Platform Wanita

Sandal jepit platform wanita CZN-026 hadir dengan desain minimalis dan elegan yang dihiasi aksen bunga manis pada bagian tali. Dibuat dari material EVA Premium yang ringan, empuk, fleksibel, serta tahan air sehingga sangat nyaman digunakan seharian dan mudah dibersihkan. Dilengkapi dengan sol platform tebal ±1,5 cm yang memberikan pijakan pas tanpa terasa berat, plus outsole bertekstur anti-slip untuk menjaga stabilitas di berbagai jenis permukaan.

Spesifikasi:
- Kode Produk: CZN-026
- Jenis Produk: Sandal Jepit Platform Wanita
- Bahan/Material: EVA Premium (Ringan, Empuk, Fleksibel, Tahan Air & Mudah Dibersihkan)
- Fitur Utama: Sol Platform Tebal ±1,5 cm, Outsole Anti-Slip, Aksen Bunga Anggun pada Tali
- Pilihan Warna: Hitam, Putih, dan Taupe
- Pilihan Ukuran: Size 36/37, 38/39, dan 40/41
- Penggunaan: Jalan santai, bekerja, berbelanja, traveling, liburan, berkendara, dan harian (indoor/outdoor)`,
  },
  'CZN-027': {
    sizes: ['39-40', '41-42', '43-44'],
    colors: ['Hitam', 'Abu-Abu', 'Hijau Army'],
    description: `CZN-027 Sandal Pria Selop Double Strap

Sandal pria CZN-027 hadir dengan desain double strap dan buckle modern yang stylish serta praktis untuk melengkapi outfit kasual harianmu. Dibuat dari material EVA yang ringan, fleksibel, dan nyaman dipakai seharian. Dilengkapi dengan sol tebal ergonomis (depan ±2 cm, tumit ±3 cm) yang memberikan bantalan empuk saat melangkah, serta outsole bertekstur anti-slip dengan daya cengkeram kuat untuk menjaga stabilitas di berbagai aktivitas.

Spesifikasi:
- Kode Produk: CZN-027
- Jenis Produk: Sandal Pria Selop / Slide (Double Strap & Buckle)
- Bahan/Material: EVA Premium (Ringan, Nyaman & Empuk)
- Fitur Utama: Sol Tebal (Depan ±2 cm, Tumit ±3 cm), Outsole Anti-Slip (Pola Grip Kuat), Strap Adjustable
- Pilihan Warna: Hitam, Abu-Abu, dan Hijau Army
- Penggunaan: Jalan santai, bepergian, outdoor ringan, outfit kerja casual, dan aktivitas harian`,
  },
  'CZN-028': {
    sizes: ['30/31', '32/33', '34/35'],
    colors: ['Baby Blue', 'Mocha', 'Pastel Pink', 'Pastel Blue'],
    description: `CZN-028 Sandal Anak Clog Motif Capybara

Sandal anak CZN-028 hadir dengan desain motif Capybara yang lucu dan kekinian, cocok untuk melengkapi keceriaan si kecil yang aktif beraktivitas. Menggunakan bahan EVA Premium yang ringan, empuk, dan sangat lentur sehingga nyaman mengikuti setiap gerakan kaki anak. Sandal model clog ini bersifat tahan air, cepat kering, dan sangat mudah dibersihkan. Dilengkapi dengan strap belakang yang menjaga sandal agar tidak mudah terlepas, serta outsole anti-slip untuk kenyamanan dan stabilitas saat berjalan.

Spesifikasi:
- Kode Produk: CZN-028
- Jenis Produk: Sandal Anak Clog / Baim
- Bahan/Material: EVA Premium (Ringan, Empuk, Lentur, Tahan Air & Cepat Kering)
- Fitur Utama: Desain/Charm Capybara Lucu, Sol Anti-Slip, Strap Belakang Pengaman, Mudah Dibersihkan
- Target: Anak-Anak
- Penggunaan: Bermain di rumah, jalan-jalan, bepergian, aktivitas outdoor, dan pemakaian harian`,
  },
  'CZN-029': {
    sizes: ['35/36', '37/38', '39/40'],
    colors: ['Hitam', 'Cream', 'Maroon', 'Pink'],
    description: `CZN-029 Sandal Balet Wanita Slip On

Sandal balet wanita CZN-029 hadir dengan desain Korean style yang simpel, feminin, dan elegan untuk melengkapi outfit kasual harianmu. Dibuat dari bahan EVA yang sangat ringan, lembut, dan fleksibel hingga dapat ditekuk 90 derajat, memberikan kenyamanan maksimal saat dipakai dalam waktu lama. Sandal ini tahan air dan mudah dibersihkan, dilengkapi sol anti-slip berdaya cengkeram kuat serta strap belakang fleksibel yang dapat disesuaikan dengan kebutuhan aktivitasmu.

Spesifikasi:
- Kode Produk: CZN-029
- Jenis Produk: Sandal Balet / Slip On Wanita (Korean Style)
- Bahan/Material: EVA Premium (Ringan, Lembut, Fleksibel Tekuk 90°, Tahan Air & Mudah Dibersihkan)
- Fitur Utama: Sol Anti-Slip Daya Cengkeram Kuat, Strap Belakang Multifungsi, Desain Feminin & Elegan
- Pilihan Warna: Cream, Soft Pink, Hitam, dan Maroon
- Penggunaan: Kuliah, kerja, jalan santai, traveling, daily wear, dan outfit casual/Korean style`,
  },
  'CZN-030': {
    sizes: ['18-19', '20-21', '22-23'],
    colors: ['Blue', 'Brown', 'Light Green', 'Light Grey'],
    description: `CZN-030 Sandal Baim Anak

Sandal baim anak CZN-030 hadir dengan desain lucu dan kekinian yang cocok digunakan untuk anak laki-laki maupun perempuan (unisex). Dibuat dari bahan EVA yang ringan, empuk, lembut, dan tahan air sehingga sangat nyaman untuk menemani aktivitas harian si kecil. Dilengkapi dengan sol tebal yang tidak berdecit, sifat tahan bau, serta outsole anti-slip untuk pijakan yang stabil. Terdapat strap belakang praktis yang fleksibel digunakan sesuai kebutuhan anak saat bermain indoor maupun outdoor.

Spesifikasi:
- Kode Produk: CZN-030
- Jenis Produk: Sandal Baim / Clog Anak (Unisex)
- Bahan/Material: EVA Premium (Ringan, Empuk, Lembut, Tahan Air & Tahan Bau)
- Fitur Utama: Sol Tebal Anti-Slip, Strap Belakang Multifungsi, Tidak Berdecit
- Pilihan Warna: Light Grey, Blue, Brown, dan Light Green
- Penggunaan: Rumah, bermain, jalan-jalan, playground, liburan, dan aktivitas outdoor`,
  },
  'CZN-031': {
    sizes: ['39/40', '41/42', '43/44'],
    colors: ['Hitam', 'Hijau Army', 'Abu-Abu'],
    description: `CZN-031 Sandal Jepit Pria

Sandal jepit pria CZN-031 hadir dengan perpaduan desain flexi dan classy yang minimalis untuk tampilan kasual yang tetap rapi dan modern. Menggunakan material inovatif EVA Flexi-Tech yang lentur, ringan, dan empuk sehingga nyaman mengikuti setiap gerakan kaki. Dibuat dengan material tahan gores dan benturan yang awet untuk penggunaan jangka panjang, serta dilengkapi sol berdaya cengkeram anti-slip untuk kenyamanan pijakan di berbagai aktivitas harian.

Spesifikasi:
- Kode Produk: CZN-031
- Jenis Produk: Sandal Jepit Pria
- Bahan/Material: EVA Flexi-Tech (Lentur, Ringan, Empuk, Tahan Gores & Benturan)
- Fitur Utama: Desain Classy & Minimalis, Sol Anti-Slip Cengkeraman Kuat, Durable/Tahan Lama
- Pilihan Warna: Hijau Army, Hitam, dan Abu-Abu
- Penggunaan: Santai di rumah, bepergian, dan aktivitas casual (indoor & outdoor)`,
  },
  'CZN-032': {
    sizes: ['39-40', '41-42', '43-44'],
    colors: ['Hitam', 'Hijau Army', 'Abu-Abu'],
    description: `CZN-032 Sandal Slop Pria Sporty

Sandal selop pria CZN-032 hadir dengan desain sporty dan maskulin yang cocok untuk melengkapi tampilan kasual sehari-hari. Mengusung model slide yang praktis dipadukan dengan bahan EVA fleksibel, ringan, dan empuk sehingga sangat nyaman digunakan seharian. Sandal ini tidak mudah berubah bentuk, tahan noda, dan sangat mudah dibersihkan. Dilengkapi dengan sol anti-slip bertraksi kuat untuk memberikan pijakan aman dan stabil saat santai maupun beraktivitas outdoor ringan.

Spesifikasi:
- Kode Produk: CZN-032
- Jenis Produk: Sandal Selop / Slide Pria
- Bahan/Material: EVA Premium (Ringan, Empuk, Fleksibel, Tahan Noda & Mudah Dibersihkan)
- Fitur Utama: Desain Sporty & Maskulin, Sol Anti-Slip Traksi Kuat, Tidak Mudah Berubah Bentuk
- Pilihan Warna: Hijau Army, Hitam, dan Abu-Abu
- Penggunaan: Rumah, jalan santai, nongkrong, dan aktivitas casual (indoor & outdoor)`,
  },
  'CZN-035': {
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Beige', 'Black', 'Brown', 'Cream'],
    description: `CZN-035 Sandal Wanita Slip On Strap Gesper

Sandal wanita CZN-035 hadir dengan desain strap silang yang modern, feminin, dan elegan. Mengusung model slip-on yang praktis, sandal ini dilengkapi dengan gesper (buckle) yang dapat disesuaikan agar pas di kaki dan tidak terasa menjepit. Dilengkapi dengan sol setinggi ±3 cm yang dirancang khusus untuk memberikan tambahan tinggi serta efek kaki terlihat lebih jenjang. Tampilannya yang kasual-elegan sangat mudah dipadukan dengan berbagai outfit harianmu.

Spesifikasi:
- Kode Produk: CZN-035
- Jenis Produk: Sandal Wanita Slip On / Strap Gesper (Cross Strap)
- Bahan/Material: Nyaman & Fleksibel untuk Penggunaan Seharian
- Fitur Utama: Strap Silang Kekinian, Gesper Adjustable (Bisa Diatur), Sol Tinggi ±3 cm (Efek Kaki Jenjang)
- Pilihan Ukuran: Size 36 – 41
- Penggunaan: Jalan-jalan, hangout, kuliah, bekerja, dan aktivitas harian`,
  },
  'CZN-036': {
    sizes: ['36-37', '38-39', '40-41'],
    colors: ['Hitam', 'Coklat', 'Dusty Pink', 'Taupe'],
    description: `CZN-036 Sandal Selop Wanita Dual Strap

Sandal selop wanita CZN-036 hadir dengan desain dual strap dan 2 gesper yang memberikan tampilan elegan, classy, dan modern. Mengusung aksen warna matte yang menawan, sandal ini sangat mudah dipadukan dengan berbagai outfit kasual maupun semi-formal. Dibuat dari material PVC berkualitas yang ringan, fleksibel (dapat ditekuk hingga 45°), serta nyaman untuk pemakaian seharian. Dilengkapi dengan sol setinggi ±3 cm untuk memberikan postur yang pas sekaligus kenyamanan ekstra saat beraktivitas.

Spesifikasi:
- Jenis Produk: Sandal Selop / Slip-On Wanita Dual Strap
- Bahan/Material: PVC (Fleksibel hingga 45°, Ringan & Tampilan Matte Elegan)
- Fitur Utama: Dual Strap dengan 2 Gesper, Sol Tinggi ±3 cm, Desain Classy & Modern
- Penggunaan: Kerja, kuliah, jalan-jalan, hangout, daily wear, dan acara casual/semi-formal`,
  },
  'CZN-037': {
    sizes: ['36/37', '38/39', '40/41', '42/43', '44/45'],
    colors: ['Biru', 'Coklat', 'Hijau', 'Hitam', 'Pink', 'Ungu', 'Taupe', 'Navy'],
    description: `CZN-037 Sandal Slop Wanita Motif Bear

Sandal slop wanita CZN-037 hadir with desain motif emboss beruang yang lucu dan kekinian untuk tampilan kasual si kecil maupun dewasa. Mengusung model slip-on yang praktis, sandal ini sangat mudah dipakai dan dilepas. Dibuat dari bahan EVA yang ringan, fleksibel, empuk, dan mudah dibersihkan. Dilengkapi dengan sol tebal ±2,5 cm untuk memberikan pijakan yang super nyaman sekaligus membantu meredam benturan saat melangkah.

Spesifikasi:
- Jenis Produk: Sandal Slop / Slip-On Wanita
- Bahan/Material: EVA (Ringan, Empuk, Fleksibel & Mudah Dibersihkan)
- Fitur Utama: Sol Tebal ±2,5 cm (Meredam Benturan), Motif Emboss Bear Lucu, Praktis Tanpa Tali
- Pilihan Warna: Pink, Biru, Ungu, Hijau, Cokelat, Hitam, dan Navy
- Penggunaan: Indoor & Outdoor (Sandal rumah, kamar, santai, dan aktivitas harian)`,
  },
  'CZN-038': {
    sizes: ['36/37', '38/39', '40/41', '42/43', '44/45'],
    colors: ['Hitam', 'Pink', 'Biru', 'Hijau', 'Lilac', 'Coklat', 'Navy'],
    description: `CZN-038 Sandal Rumah Unisex Motif Kucing

Sandal selop CZN-038 hadir dengan desain motif kucing yang lucu dan simpel, cocok digunakan untuk pria maupun wanita. Mengusung model slip-on yang praktis, sandal ini sangat mudah dipakai dan dilepas tanpa repot. Dibuat dari bahan EVA fleksibel setebal ±2 cm yang sangat empuk, ringan, dan mampu meredam benturan saat melangkah. Sandal ini juga cepat kering dan tidak mudah bau, sehingga sangat ideal for penggunaan harian di area rumah, kamar mandi, hingga aktivitas santai di luar ruangan.

Spesifikasi:
- Jenis Produk: Sandal Rumah Selop / Slip-On Unisex
- Bahan/Material: EVA Premium (Ringan, Empuk, Fleksibel, Cepat Kering & Tidak Mudah Bau)
- Fitur Utama: Sol Anti-Slip, Tebal Sol ±2 cm, Meredam Benturan, Motif Kucing Lucu
- Pilihan Warna: Hitam, Pink, Biru, Hijau, Lilac, Coklat, dan Navy
- Penggunaan: Indoor & Outdoor (Sandal rumah, kamar mandi, teras, dan aktivitas santai)`,
  },
  'CZN-039': {
    sizes: ['24/25', '26/27', '28/29'],
    colors: ['Biru', 'Pink', 'Pink Fanta', 'Ungu'],
    description: `CZN-039 Sandal Anak Slop Motif Cute

Sandal selop anak CZN-039 hadir dengan desain karakter cute yang menarik dan nyaman digunakan untuk berbagai aktivitas harian si kecil. Mengusung model yang praktis, sandal ini sangat mudah dipakai dan dilepas sendiri oleh anak. Menggunakan sol yang empuk serta bobot yang ringan sehingga tidak terasa berat saat melangkah. Dilengkapi dengan keunikan hiasan interaktif yang dapat diputar serta dilepas-pasang, plus sol bawah bertekstur anti slip untuk menjaga stabilitas pijakan di berbagai medan.

Spesifikasi:
- Jenis Produk: Sandal Selop / Slip-On Anak
- Bahan/Material: Ringan, Tahan Air & Mudah Dibersihkan
- Fitur Utama: Hiasan Karakter Interaktif (Dapat Diputar & Dilepas), Sol Empuk & Ringan, Outsole Anti Slip
- Pilihan Ukuran: Size 24 – 29
- Rekomendasi Usia: 4 – 6 Tahun (menyesuaikan ukuran kaki anak)
- Penggunaan: Aktivitas harian (indoor & outdoor), rumah, bermain, dan jalan-jalan santai`,
  },
  'CZN-040': {
    sizes: ['24/25', '26/27', '28/29'],
    colors: ['Biru', 'Pink', 'Pink Fanta', 'Ungu'],
    description: `CZN-040 Sandal Slop Anak Motif Hewan

Sandal slop anak CZN-040 hadir dengan desain motif karakter yang menggemaskan serta pilihan warna cerah favorit anak. Mengusung model selop yang praktis, sandal ini sangat mudah dipakai dan dilepas sendiri oleh si kecil. Terbuat dari bahan EVA yang ringan, empuk, tahan air, dan tidak berdecit saat melangkah. Dilengkapi dengan sol anti-slip untuk menjaga stabilitas pijakan, serta hiasan karakter/Jibbitz unik yang dapat dilepas-pasang atau diganti sesuai keinginan si kecil.

Spesifikasi:
- Jenis Produk: Sandal Selop / Slip-On Anak
- Bahan/Material: EVA Premium (Ringan, Tahan Air & Mudah Dibersihkan)
- Fitur Utama: Sol Empuk & Anti-Slip, Aksesoris/Jibbitz Karakter Removable, Tidak Berdecit
- Pilihan Warna: Pink, Ungu, Biru, dan Pink Fanta
- Pilihan Ukuran: Size 24 – 29
- Rekomendasi Usia: 4 – 6 Tahun (menyesuaikan ukuran kaki anak)
- Penggunaan: Aktivitas harian (indoor & outdoor), rumah, bermain, dan jalan-jalan santai.`,
  },
  'CZN-041': {
    sizes: ['24/25', '26/27', '28/29'],
    colors: ['Biru', 'Pink', 'Pink Fanta', 'Ungu'],
    description: `CZN-041 Sandal Slop Anak

Sandal slop anak dengan desain simpel yang dihiasi detail karakter cute serta pilihan warna pastel yang manis. Mengusung model slip-on yang praktis dipakai dan dilepas sendiri oleh si kecil. Dibuat dari bahan yang lembut, empuk, tahan air, dan mudah dibersihkan. Dilengkapi dengan sol anti slip yang ringan untuk memberikan kelincahan serta stabilitas melangkah saat anak bermain di rumah maupun beraktivitas di luar ruangan.

Spesifikasi: 
- Jenis Produk: Sandal Slop / Slip-On Anak
- Bahan/Material: Lembut, Tahan Air (Waterproof) & Mudah Dibersihkan
- Fitur Utama: Sol Empuk & Ringan, Anti Slip, Model Slip-On Praktis, Detail Karakter Strap
- Pilihan Ukuran: Size 24 – 29
- Rekomendasi Usia: 4 – 6 Tahun (menyesuaikan ukuran kaki anak)
- Penggunaan: Aktivitas harian (indoor & outdoor), rumah, bermain, sekolah, dan santai`,
  },
  'CZN-042': {
    sizes: ['24/25', '26/27', '28/29'],
    colors: ['Biru', 'Pink', 'Pink Fanta', 'Ungu'],
    description: `CZN-042 Sandal Slop Anak Perempuan Motif Karakter Cute

Sandal slop anak perempuan dengan pilihan warna pastel manis dan pilihan hiasan karakter, pita, serta bunga yang sangat disukai anak-anak. Dibuat dari bahan EVA yang terbukti ringan, empuk, dan fleksibel untuk mendukung aktivitas sehari-hari di rumah, bermain, maupun jalan-jalan. Sol bagian bawah telah dirancang khusus dengan tekstur anti slip agar si kecil tetap stabil dan tidak mudah tergelincir saat melangkah, serta bahannya sangat mudah dibersihkan.

Spesifikasi:
- Jenis Produk: Sandal Slop / Slip-On Anak Perempuan
- Bahan: EVA Premium (Lightweight, Soft, & Easy to Clean)
- Fitur Utama: Outsole Anti Slip Bertekstur, Insole Nyaman, & Hiasan 3D Cute
- Pilihan Ukuran: Size 24/25, 26/27, 28/29
- Rekomendasi Usia: 4 – 6 Tahun (tergantung panjang telapak kaki anak)
- Penggunaan: Aktivitas harian, dalam rumah, bermain, dan jalan-jalan santai`,
  },
};

export const products: Product[] = Array.from({ length: 42 }, (_, i) => {
  const id = i + 1;
  const numStr = id.toString().padStart(3, '0');
  const sku = `CZN-${numStr}`;
  const imageIndex = i % images.length;
  const hasUploadedImages = uploadedFolders.has(numStr);
  const category = skuCategoryMap[sku] || categories[imageIndex];
  
  if (sku === 'CZN-001') {
    const details = skuDetailsMap['CZN-001'] || {};
    return {
      sku,
      name: 'CZN-001',
      image: '/images/001/CZN-001-1.png',
      gallery: [
        '/images/001/CZN-001-1.png',
        '/images/001/CZN-001-2.png',
        '/images/001/CZN-001-3.png',
        '/images/001/CZN-001-4.png',
        '/images/001/CZN-001-5.png',
      ],
      sizes: details.sizes || ['36/37', '38/39', '40/41'],
      colors: details.colors || ['Coklat', 'Cream', 'Hitam'],
      description: details.description || 'Bahan EVA Premium: Sangat empuk, lentur, ringan, dan tidak mudah kempes meskipun sering digunakan.\n\nAnti Slip & Anti Licin: Bagian bawah sandal memiliki tekstur khusus yang mencengkeram permukaan lantai dengan kuat, sangat aman untuk area kamar mandi atau dapur.\n\nWaterproof & Cepat Kering: Tidak menyerap air, sehingga terhindar dari bau lembap dan bakteri.\n\nDesain Ergonomis: Menopang kaki dengan sempurna, mengurangi pegal saat dipakai berjalan lama.\n\nMudah Dibersihkan: Cukup dibilas dengan air, sandal langsung bersih kembali.',
      category,
    };
  }

  // Helper to determine extension based on patterns seen in user actions
  const getExt = (skuNum: string, index: number) => {
    const n = parseInt(skuNum);
    if (n >= 11 && n <= 14) return 'png';
    if (n === 15 || n === 16) return 'jpg';
    if (n >= 18 && n <= 22) return 'png';
    if (n === 23 || n === 24) return index === 0 ? 'jpg' : 'png';
    if (n === 25) return 'png'; // Note: uses 6 instead of 5 for last image
    if (n >= 26 && n <= 28) return 'png';
    if (n === 29) return index === 0 ? 'png' : 'jpg';
    if (n === 30) return 'png';
    if (n === 31 || n === 32) return index < 2 ? 'png' : 'jpg';
    if (n === 37) return index < 3 ? 'png' : 'jpg';
    if (n === 38) return index < 4 ? 'png' : 'jpg';
    if (n >= 35 && n <= 40) return index === 0 ? 'png' : 'jpg';
    if (n === 41) return 'png';
    if (n === 42) {
       // CZN-042 uses special pattern based on user actions
       if (index === 0 || index === 1 || index === 4) return 'png';
       return 'jpg';
    }
    return 'png'; // default to png for 002-010
  };

  const getImgPath = (skuNum: string, index: number) => {
    const ext = getExt(skuNum, index);
    const n = parseInt(skuNum);
    let imgIdx = index + 1;
    
    // Special cases for indices
    if (n === 25 && index === 4) imgIdx = 6;
    if (n === 16 && index === 4) imgIdx = 6;

    return `/images/${skuNum}/CZN-${skuNum}-${imgIdx}.${ext}`;
  };

  const defaultImage = hasUploadedImages 
    ? getImgPath(numStr, 0)
    : images[imageIndex];

  const gallery = hasUploadedImages 
    ? [
        getImgPath(numStr, 0),
        getImgPath(numStr, 1),
        getImgPath(numStr, 2),
        getImgPath(numStr, 3),
        getImgPath(numStr, 4),
      ]
    : undefined;

  const details = skuDetailsMap[sku] || {};

  return {
    sku,
    name: `Cozyon ${category} ${sku}`,
    image: defaultImage,
    gallery,
    sizes: details.sizes || ['38', '39', '40', '41', '42', '43', '44'],
    description: details.description || descriptions[imageIndex],
    colors: details.colors,
    category,
  };
}).filter(p => !['CZN-005', 'CZN-007', 'CZN-017', 'CZN-033', 'CZN-034'].includes(p.sku));
