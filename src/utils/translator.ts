import { Product } from '../data/products';
import { Language } from '../i18n/translations';
import {
  colorTranslationMap,
  categoryTranslationMap,
  skuFullTranslations,
} from './skuTranslations';

/**
 * Translates a single color token
 */
const translateSingleColor = (color: string, lang: Language): string => {
  if (lang === 'id' || !color) return color;
  const key = color.trim().toLowerCase();
  if (colorTranslationMap[key]) {
    return colorTranslationMap[key][lang];
  }
  return color;
};

/**
 * Translates a color name, properly handling compounds with slashes or commas
 * (e.g. 'Cream / Beige' -> 'Cream / Beige' -> '米白色 / 米色')
 */
export const translateColor = (color: string, lang: Language): string => {
  if (lang === 'id' || !color) return color;

  // Handle composite with slashes
  if (color.includes('/')) {
    return color
      .split('/')
      .map((part) => translateSingleColor(part.trim(), lang))
      .join(' / ');
  }

  // Handle composite with commas
  if (color.includes(',')) {
    return color
      .split(',')
      .map((part) => translateSingleColor(part.trim(), lang))
      .join(', ');
  }

  return translateSingleColor(color, lang);
};

/**
 * Translates an array of colors
 */
export const translateColors = (
  colors: string[] | undefined,
  lang: Language
): string[] => {
  if (!colors || colors.length === 0) return [];
  if (lang === 'id') return colors;
  return colors.map((c) => translateColor(c, lang));
};

/**
 * Translates category name
 */
export const translateCategory = (cat: string, lang: Language): string => {
  if (lang === 'id' || !cat) return cat;
  const key = cat.trim().toLowerCase();
  if (categoryTranslationMap[key]) {
    return categoryTranslationMap[key][lang];
  }
  return cat;
};

/**
 * Translates product description
 * Prioritizes:
 * 1. Predefined human translation from skuFullTranslations (100% complete for all 37 SKUs)
 * 2. Rule-based sentence & specification regex translator for newly added custom SKUs
 */
export const translateDescription = (
  desc: string,
  sku: string,
  category: string,
  lang: Language
): string => {
  if (lang === 'id' || !desc) return desc;

  // 1. Check if SKU is in our comprehensive SKU translation database
  if (skuFullTranslations[sku] && skuFullTranslations[sku][lang]) {
    return skuFullTranslations[sku][lang].description;
  }

  if (desc.trim() === 'Belum Tersedia') {
    return lang === 'en'
      ? 'Detailed specifications in preparation.'
      : '暂无详细规格，敬请期待。';
  }

  // 2. Fallback dynamic translator for custom admin products
  if (lang === 'en') {
    let result = desc;
    result = result.replace(/Spesifikasi:/gi, 'Specifications:');
    result = result.replace(/- Kode Produk:\s*(.*)/gi, '- Product Code: $1');
    result = result.replace(/- Jenis Produk:\s*(.*)/gi, '- Product Type: $1');
    result = result.replace(/- Bahan\/Material:\s*(.*)/gi, '- Material: $1');
    result = result.replace(/- Tinggi Sol:\s*(.*)/gi, '- Sole Height: $1');
    result = result.replace(/- Fitur Utama:\s*(.*)/gi, '- Key Features: $1');
    result = result.replace(/- Pilihan Ukuran:\s*(.*)/gi, '- Available Sizes: $1');
    result = result.replace(/- Pilihan Warna:\s*(.*)/gi, '- Color Options: $1');
    result = result.replace(/- Target:\s*(.*)/gi, '- Target Audience: $1');
    result = result.replace(/- Penggunaan:\s*(.*)/gi, '- Recommended Usage: $1');
    result = result.replace(/- Rekomendasi Usia:\s*(.*)/gi, '- Recommended Age: $1');

    result = result.replace(/EVA Premium/gi, 'Premium High-Elastic EVA');
    result = result.replace(/Karet Jelly Premium/gi, 'Premium Jelly Rubber');
    result = result.replace(/Material Sintetis Premium/gi, 'Premium Synthetic Leather Compound');
    result = result.replace(/Empuk, Lentur, Super Ringan & Tahan Lama/gi, 'Soft, flexible, ultra-lightweight & durable');
    result = result.replace(/Ringan, Empuk, Fleksibel & Tahan Lama/gi, 'Lightweight, cushioned, flexible & durable');
    result = result.replace(/Outsole Anti-Licin/gi, 'Anti-slip traction outsole');
    result = result.replace(/Sol Anti-Slip Anti Licin/gi, 'Anti-slip secure outsole');
    result = result.replace(/Sol Anti-Slip/gi, 'Anti-slip outsole');
    result = result.replace(/Sol Platform Nyaman/gi, 'Comfortable platform sole profile');
    result = result.replace(/Bantalan Empuk Bebas Pegal/gi, 'Fatigue-reducing arch cushioning');
    result = result.replace(/Indoor & Outdoor/gi, 'Indoor & Outdoor');
    result = result.replace(/Sandal rumah, pemakaian harian, dan jalan santai/gi, 'Home wear, daily casual, walking');
    result = result.replace(/Wanita \/ Ibu Rumah Tangga/gi, 'Women / Casual Lifestyle');
    result = result.replace(/Pria & Wanita \(Unisex\)/gi, 'Unisex (Men & Women)');
    result = result.replace(/Pria/gi, 'Men');
    result = result.replace(/Wanita/gi, 'Women');
    result = result.replace(/Anak-Anak/gi, 'Kids');

    return result;
  }

  if (lang === 'zh') {
    let result = desc;
    result = result.replace(/Spesifikasi:/gi, '规格参数：');
    result = result.replace(/- Kode Produk:\s*(.*)/gi, '- 商品编码：$1');
    result = result.replace(/- Jenis Produk:\s*(.*)/gi, '- 商品类别：$1');
    result = result.replace(/- Bahan\/Material:\s*(.*)/gi, '- 面料材质：$1');
    result = result.replace(/- Tinggi Sol:\s*(.*)/gi, '- 鞋底厚度：$1');
    result = result.replace(/- Fitur Utama:\s*(.*)/gi, '- 核心卖点：$1');
    result = result.replace(/- Pilihan Ukuran:\s*(.*)/gi, '- 尺码规格：$1');
    result = result.replace(/- Pilihan Warna:\s*(.*)/gi, '- 可选颜色：$1');
    result = result.replace(/- Target:\s*(.*)/gi, '- 适用人群：$1');
    result = result.replace(/- Penggunaan:\s*(.*)/gi, '- 适用场景：$1');
    result = result.replace(/- Rekomendasi Usia:\s*(.*)/gi, '- 建议年龄：$1');

    result = result.replace(/EVA Premium/gi, '优质高弹环保 EVA');
    result = result.replace(/Karet Jelly Premium/gi, '优质亲肤果冻软胶');
    result = result.replace(/Material Sintetis Premium/gi, '优质耐磨合成材质');
    result = result.replace(/Empuk, Lentur, Super Ringan & Tahan Lama/gi, '柔软回弹、轻巧柔韧、经久耐磨');
    result = result.replace(/Ringan, Empuk, Fleksibel & Tahan Lama/gi, '轻巧踩屎感、缓震耐磨');
    result = result.replace(/Outsole Anti-Licin/gi, '防滑抓地耐磨大底');
    result = result.replace(/Sol Anti-Slip Anti Licin/gi, '安全防滑耐磨大底');
    result = result.replace(/Sol Anti-Slip/gi, '防滑大底');
    result = result.replace(/Sol Platform Nyaman/gi, '舒适厚底显高鞋床');
    result = result.replace(/Bantalan Empuk Bebas Pegal/gi, '人体工学足弓软弹支撑');
    result = result.replace(/Indoor & Outdoor/gi, '室内与室外两用');
    result = result.replace(/Sandal rumah, pemakaian harian, dan jalan santai/gi, '居家休闲、日常散步、出街度假');
    result = result.replace(/Wanita \/ Ibu Rumah Tangga/gi, '女士 / 居家休闲');
    result = result.replace(/Pria & Wanita \(Unisex\)/gi, '男女通用（情侣款）');
    result = result.replace(/Pria/gi, '男士');
    result = result.replace(/Wanita/gi, '女士');
    result = result.replace(/Anak-Anak/gi, '儿童');

    return result;
  }

  return desc;
};

/**
 * Translates product title/name according to language
 */
export const translateProductName = (
  name: string,
  sku: string,
  category: string,
  lang: Language
): string => {
  if (lang === 'id' || !name) return name;

  if (skuFullTranslations[sku] && skuFullTranslations[sku][lang]) {
    return skuFullTranslations[sku][lang].name;
  }

  const catEn = translateCategory(category, 'en');
  const catZh = translateCategory(category, 'zh');

  if (lang === 'en') {
    return `Cozyon ${catEn} ${sku}`;
  }

  if (lang === 'zh') {
    return `Cozyon ${catZh} ${sku}`;
  }

  return name;
};

/**
 * Resolves a fully localized Product object with translated name, category, colors, and description
 */
export const getLocalizedProduct = (
  product: Product,
  lang: Language
): Product => {
  if (lang === 'id') return product;

  // 1. Check manual override from product.translations
  const manual = product.translations?.[lang];

  // 2. Check full SKU translation mapping
  const mapped = skuFullTranslations[product.sku]?.[lang];

  return {
    ...product,
    name: manual?.name || mapped?.name || translateProductName(product.name, product.sku, product.category, lang),
    category: manual?.category || mapped?.category || translateCategory(product.category, lang),
    colors: manual?.colors || translateColors(product.colors, lang),
    description: manual?.description || mapped?.description || translateDescription(product.description, product.sku, product.category, lang),
  };
};
