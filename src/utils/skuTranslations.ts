export interface SkuTranslationData {
  name: string;
  category: string;
  description: string;
}

export const colorTranslationMap: Record<string, { en: string; zh: string }> = {
  coklat: { en: 'Brown', zh: '棕色' },
  cokelat: { en: 'Brown', zh: '棕色' },
  cream: { en: 'Cream', zh: '米白色' },
  krem: { en: 'Cream', zh: '米白色' },
  hitam: { en: 'Black', zh: '黑色' },
  taupe: { en: 'Taupe', zh: '灰褐色' },
  'abu-abu': { en: 'Grey', zh: '灰色' },
  navy: { en: 'Navy Blue', zh: '藏青色' },
  'hijau tua': { en: 'Dark Green', zh: '墨绿色' },
  pink: { en: 'Pastel Pink', zh: '浅粉色' },
  putih: { en: 'White', zh: '白色' },
  biru: { en: 'Blue', zh: '蓝色' },
  khaki: { en: 'Khaki', zh: '卡其色' },
  ungu: { en: 'Purple', zh: '紫色' },
  hijau: { en: 'Green', zh: '绿色' },
  kuning: { en: 'Yellow', zh: '黄色' },
  merah: { en: 'Red', zh: '红色' },
  mocca: { en: 'Mocha', zh: '摩卡色' },
  mocha: { en: 'Mocha', zh: '摩卡色' },
  'hijau army': { en: 'Army Green', zh: '军绿色' },
  army: { en: 'Army Green', zh: '军绿色' },
  'baby blue': { en: 'Baby Blue', zh: '婴儿蓝' },
  'pastel pink': { en: 'Pastel Pink', zh: '柔粉色' },
  'pastel blue': { en: 'Pastel Blue', zh: '柔蓝色' },
  maroon: { en: 'Maroon', zh: '酒红色' },
  blue: { en: 'Blue', zh: '蓝色' },
  brown: { en: 'Brown', zh: '棕色' },
  'light green': { en: 'Light Green', zh: '浅绿色' },
  'light grey': { en: 'Light Grey', zh: '浅灰色' },
  beige: { en: 'Beige', zh: '米色' },
  black: { en: 'Black', zh: '黑色' },
  'dusty pink': { en: 'Dusty Pink', zh: '藕粉色' },
  'soft pink': { en: 'Soft Pink', zh: '淡粉色' },
  lilac: { en: 'Lilac', zh: '丁香紫' },
  'pink fanta': { en: 'Hot Pink', zh: '玫粉色' },
  'dark pink': { en: 'Dark Pink', zh: '深粉色' },
};

export const categoryTranslationMap: Record<string, { en: string; zh: string }> = {
  clogs: { en: 'Clogs', zh: '洞洞鞋' },
  'flip flop': { en: 'Flip Flops', zh: '人字拖' },
  jepit: { en: 'Flip Flops', zh: '人字拖' },
  slop: { en: 'Slide Sandals', zh: '一字拖鞋' },
  strap: { en: 'Buckle Strap Sandals', zh: '搭扣凉鞋' },
  'jepit leather': { en: 'Leather Flip Flops', zh: '皮质人字拖' },
  'slop karet': { en: 'Rubber Slides', zh: '橡胶一字拖' },
  'cute slop': { en: 'Cute Pattern Slides', zh: '卡通可爱拖鞋' },
  'kids clogs': { en: 'Kids Clogs', zh: '儿童洞洞鞋' },
  'kids slop': { en: 'Kids Slides', zh: '儿童一字拖' },
  'maryjane clogs': { en: 'Mary Jane Clogs', zh: '玛丽珍包头鞋' },
  general: { en: 'Casual Sandals', zh: '休闲凉鞋' },
};

export const skuFullTranslations: Record<
  string,
  { en: SkuTranslationData; zh: SkuTranslationData }
> = {
  'CZN-001': {
    en: {
      name: 'CZN-001 Women Platform EVA Slides',
      category: 'Clogs',
      description: `CZN-001 Women's Platform EVA Slide Sandals

The CZN-001 women's slide sandals offer the ideal blend of supreme cushioning and chic modern aesthetics. Tailored with ergonomic rebound cushioning and an elevated ±3–4 cm platform profile that elongates your silhouette while keeping fatigue away. Crafted from premium-grade EVA that feels ultra-lightweight on your feet, perfect for prolonged daily wear. Outfitted with textured non-slip outsoles for secure footing across indoor tile and outdoor terrain.

Specifications:
- Product Code: CZN-001
- Product Type: Women's Platform Slide Sandals
- Material: Premium EVA (Soft, Flexible, Ultra-Lightweight & Durable)
- Sole Height: ± 3–4 cm
- Key Features: Ergonomic Platform Profile, Anti-Fatigue Arch Cushioning, Anti-Slip Outsole
- Size Options: Sizes 36 to 40
- Target Audience: Women / Daily Casual Wear
- Recommended Usage: Indoor & Outdoor (Home wear, daily errands, casual strolling)`,
    },
    zh: {
      name: 'CZN-001 女士 EVA 厚底增高一字拖鞋',
      category: '洞洞鞋',
      description: `CZN-001 女士 EVA 厚底增高一字拖鞋

CZN-001 女士厚底一字拖鞋兼具卓越的软弹脚感与摩登时尚外形。特别采用人体工学高弹回弹鞋床，鞋底厚度约 ±3–4 cm，能够在视觉上修饰腿部线条、拉长身形，同时保持全天候久穿不累脚的轻柔舒适。采用精选高回弹优质 EVA 材质，鞋身超轻无负担。底部配备细腻防滑抓地纹理，在浴室瓷砖及户外路面均能提供稳健安全的行走保障。

规格参数：
- 商品编号：CZN-001
- 商品类别：女士厚底一字拖鞋 (Platform Slide)
- 面料材质：优质高弹 EVA（柔软、韧性佳、超轻量、耐磨防滑）
- 鞋底厚度：约 ± 3–4 cm
- 核心卖点：厚底显瘦设计、人体工学减震软底、防滑耐磨大底
- 尺码规格：36 至 40 码
- 适用人群：女性 / 居家及日常通勤
- 适用场景：室内外两用（居家拖鞋、日常散步、休闲出街）`,
    },
  },

  'CZN-002': {
    en: {
      name: 'CZN-002 Women Platform EVA Slides',
      category: 'Flip Flops',
      description: `CZN-002 Women's Platform EVA Slide Sandals

The CZN-002 slide sandals bring a harmonious balance of cloud-like comfort and versatile minimalism. Engineered with a ±3–4 cm platform sole to provide natural posture heightening without compromising stability. Made of high-grade flexible EVA that prevents tired soles throughout the day. Built with textured anti-slip grip treads for steady traction indoors and outdoors.

Specifications:
- Product Code: CZN-002
- Product Type: Women's Platform Slide Sandals
- Material: Premium EVA (Soft, Lightweight, Resilient)
- Sole Height: ± 3–4 cm
- Key Features: Comfort Platform Profile, Cloud Cushioning, Anti-Slip Outsole
- Size Options: 36-37, 38-39, 40-41
- Target Audience: Women / Daily Casual Wear
- Recommended Usage: Indoor & Outdoor (Home, daily errands, casual walking)`,
    },
    zh: {
      name: 'CZN-002 女士 EVA 踩屎感厚底拖鞋',
      category: '人字拖',
      description: `CZN-002 女士 EVA 踩屎感厚底一字拖

CZN-002 拖鞋融合了极简现代设计与极致柔弹脚感。鞋底厚度约 ±3–4 cm，自然增高且行走平衡稳健。采用优质轻量高弹 EVA 原生材料，贴合足弓曲线，全天穿着轻盈释压。鞋底防滑齿纹设计，具备出色的防滑排湿性能。

规格参数：
- 商品编号：CZN-002
- 商品类别：女士厚底一字拖鞋
- 面料材质：优质高弹 EVA（超轻、回弹减震、经久耐磨）
- 鞋底厚度：约 ± 3–4 cm
- 核心卖点：舒适增高厚底、足弓释压软垫、安全防滑大底
- 尺码规格：36-37, 38-39, 40-41
- 适用人群：女性
- 适用场景：居家日常、散步、休闲出行`,
    },
  },

  'CZN-003': {
    en: {
      name: 'CZN-003 Minimalist Unisex Thong Flip Flops',
      category: 'Flip Flops',
      description: `CZN-003 Minimalist Unisex Flip Flops

Crafted with a clean, modern aesthetic that caters to both men and women. Made from selected premium EVA that is ultra-flexible, soft, and lightweight, providing cushioned ease with every step. Finished with non-skid textured outsoles to prevent slipping on smooth surfaces.

Specifications:
- Product Code: CZN-003
- Product Type: Unisex Minimalist Thong Flip Flops
- Material: Premium EVA (Lightweight, Ergonomic, Flexible)
- Key Features: Sleek Minimalist Silhouette, Anti-Slip Grip, Fatigue Relief
- Size Range: Sizes 36/37 to 44/45
- Target Audience: Unisex (Men & Women)
- Recommended Usage: Home wear, beach strolls, daily casual activities`,
    },
    zh: {
      name: 'CZN-003 极简男女情侣款人字拖',
      category: '人字拖',
      description: `CZN-003 极简男女同款防滑人字拖鞋

CZN-003 拥有简约流畅的现代几何线条，男女同款。甄选优质高弹 EVA 材质，脚感轻盈柔韧，每一步均能感受轻柔减震，有效缓解足部行走疲倦。鞋底设计抓地防滑纹路，潮湿瓷砖地面也能从容迈步。

规格参数：
- 商品编号：CZN-003
- 商品类别：极简男女同款人字拖
- 面料材质：优质轻弹 EVA（轻盈韧性、防滑耐穿）
- 核心卖点：极简百搭造型、牢固防滑纹路、全天轻柔脚感
- 尺码规格：36/37 至 44/45 码
- 适用人群：男女通用（情侣款）
- 适用场景：居家、海滩漫步、日常休闲出门`,
    },
  },

  'CZN-004': {
    en: {
      name: 'CZN-004 Women Dual Strap Wedge Thong Sandals',
      category: 'Flip Flops',
      description: `CZN-004 Women's Dual Strap Wedge Flip Flops

A trendy and stylish casual wedge sandal designed for outings and daily wear. Engineered with premium jelly rubber that feels soft, supple, and gentle against the skin. Features a double strap thong upper and a ±3 cm supportive wedge sole. Completely waterproof, weather-resistant, and effortless to clean with non-slip traction treads.

Specifications:
- Product Code: CZN-004
- Product Type: Women's Dual Strap Wedge Flip Flops
- Material: Premium Jelly Rubber (Smooth, Elastic, Waterproof & Weatherproof)
- Sole Height: ± 3 cm
- Key Features: Chic Double Strap Design, Smooth Jelly Feel, Cushioned Wedge Sole, Anti-Slip
- Size Options: 36/37 (22.5cm), 38/39 (23.5cm), 40/41 (24.5cm)
- Target Audience: Women
- Recommended Usage: Indoor & Outdoor (Casual outings, mall strolls, daily wear)`,
    },
    zh: {
      name: 'CZN-004 女士双带坡跟果冻人字拖',
      category: '人字拖',
      description: `CZN-004 女士双带坡跟防滑人字拖鞋

CZN-004 将时尚坡跟设计与果冻软胶完美结合。精选优质果冻胶材质，触感柔滑弹性佳，夹脚处亲肤不磨脚。配有甜美双细带设计与约 ±3 cm 舒适坡跟，修饰身姿比例。全防水速干耐磨，防滑纹理鞋底带来稳固步履。

规格参数：
- 商品编号：CZN-004
- 商品类别：女士双细带坡跟人字拖
- 面料材质：优质果冻软胶（亲肤柔韧、防水防油污、易清洁）
- 鞋底厚度：约 ± 3 cm
- 核心卖点：时尚双带造型、果冻软底舒适、坡跟轻巧增高、安全防滑
- 尺码规格：36/37 (22.5cm), 38/39 (23.5cm), 40/41 (24.5cm)
- 适用人群：女性
- 适用场景：室内外通用（夏日海滨、休闲出街、逛街日常）`,
    },
  },

  'CZN-006': {
    en: {
      name: 'CZN-006 Women Puffy Strap Cloud Slides',
      category: 'Slide Sandals',
      description: `CZN-006 Women's Puffy Strap Slide Sandals

Designed with a plush, puffy strap upper that exudes luxury and aesthetic elegance. The soft cream tone easily complements various casual chic outfits. Made of top-grade resilient EVA that is flexible and feather-light. Finished with anti-skid bottom treads for steady indoor and outdoor footing.

Specifications:
- Product Code: CZN-006
- Product Type: Women's Slide Sandals (Puffy Strap)
- Material: Premium EVA (Ultra-Soft, Lightweight, Resilient)
- Key Features: Puffy Strap Silhouette, Aesthetic Soft Palette, Anti-Slip Base
- Size Range: Sizes 36 to 41 (Size up 1 size recommended for wide feet)
- Target Audience: Women
- Recommended Usage: Indoor & Outdoor (Home slippers, casual strolls, hangout wear)`,
    },
    zh: {
      name: 'CZN-006 女士泡泡蓬蓬带云朵拖鞋',
      category: '一字拖鞋',
      description: `CZN-006 女士泡泡蓬蓬带宽带一字拖鞋

CZN-006 采用流行的蓬蓬饱满宽面绑带设计，外观优雅轻奢。温润柔和配色百搭耐看。高回弹 EVA 材质一体成型，触感软弹轻盈，久穿不磨脚、不夹脚。鞋底配备防滑抓地纹路，居家出街皆安心。

规格参数：
- 商品编号：CZN-006
- 商品类别：女士一字宽带拖鞋 (Puffy Strap)
- 面料材质：高品质原生 EVA（超柔回弹、极轻无压、耐穿耐磨）
- 核心卖点：蓬蓬泡泡带轻奢造型、高级百搭色调、防滑底纹
- 尺码规格：36 至 41 码（宽脚型建议拍大一码）
- 适用人群：女性
- 适用场景：居家、散步、周末休闲出游`,
    },
  },

  'CZN-008': {
    en: {
      name: 'CZN-008 Women Buckle Strap Casual Sandals',
      category: 'Buckle Strap Sandals',
      description: `CZN-008 Women's Adjustable Buckle Strap Sandals

A chic, comfortable dual buckle strap sandal designed for daily versatility and casual elegance. Crafted with lightweight ergonomic soles that provide reliable arch support throughout your day.

Specifications:
- Product Code: CZN-008
- Product Type: Women's Buckle Strap Sandals
- Material: Durable Lightweight Synthetic & EVA
- Key Features: Dual Adjustable Straps, Ergonomic Support, Anti-Slip
- Size Range: 36/37, 38/39, 40/41
- Target Audience: Women
- Recommended Usage: Daily wear, casual office, shopping, travel`,
    },
    zh: {
      name: 'CZN-008 女士双排搭扣带休闲凉鞋',
      category: '搭扣凉鞋',
      description: `CZN-008 女士双排搭扣带舒适休闲凉鞋

CZN-008 采用经典双排可调节金属搭扣带设计，随心贴合不同脚背高度。鞋底符合人体工学脚床曲线，提供良好的足弓承托与减震缓冲，日常行走轻巧无负担。

规格参数：
- 商品编号：CZN-008
- 商品类别：女士搭扣带凉鞋
- 面料材质：轻量耐磨合成材料与 EVA 鞋床
- 核心卖点：双搭扣可调节、足弓舒适承托、耐磨防滑
- 尺码规格：36/37, 38/39, 40/41
- 适用人群：女性
- 适用场景：日常通勤、逛街购物、居家休闲`,
    },
  },

  'CZN-009': {
    en: {
      name: 'CZN-009 Men Casual Premium Slides',
      category: 'Slide Sandals',
      description: `CZN-009 Men's Casual Premium Slide Sandals

Featuring a sleek, masculine, and understated design for the modern gentleman's casual wardrobe. Crafted from high-density premium EVA that is ultra-light, cushioned, and supportive. The practical slip-on silhouette is enhanced by textured anti-slip outsoles for versatile wear across all surfaces.

Specifications:
- Product Code: CZN-009
- Product Type: Men's Slip-On Slide Sandals
- Material: Premium EVA (Lightweight, Cushioned, Resilient)
- Key Features: Minimalist Masculine Silhouette, Easy Slip-On, Anti-Slip Base
- Target Audience: Men
- Recommended Usage: Indoor & Outdoor (Home wear, daily casual, driving, travel)`,
    },
    zh: {
      name: 'CZN-009 男士经典简约透气一字拖',
      category: '一字拖鞋',
      description: `CZN-009 男士极简高品质休闲一字拖鞋

CZN-009 采用现代极简流线型设计，沉稳大气。优质高回弹 EVA 材质一体成型，质地轻盈柔韧，有效缓解行走足底压力。一脚蹬设计穿脱方便，搭配防滑耐磨大底，室内室外多场景随意切换。

规格参数：
- 商品编号：CZN-009
- 商品类别：男士休闲一字拖鞋
- 面料材质：优质高弹 EVA（轻量耐磨、踩屎感减震）
- 核心卖点：简约型男外观、一脚蹬便利穿脱、防滑耐磨大底
- 适用人群：男士
- 适用场景：居家、散步、驾车、旅行外带`,
    },
  },

  'CZN-010': {
    en: {
      name: 'CZN-010 Minimalist Unisex Thong Slides',
      category: 'Slide Sandals',
      description: `CZN-010 Minimalist Unisex Thong Slide Sandals

A timeless unisex thong slide engineered with high-elastic EVA foam that keeps feet comfortable all day without fatigue. Features a slip-resistant textured outsole that ensures confident grip on wet and dry surfaces.

Specifications:
- Product Code: CZN-010
- Product Type: Unisex Thong Slide Sandals
- Material: Premium EVA (Soft, Flexible, Lightweight & Durable)
- Key Features: Clean Modern Lines, Anti-Slip Outsole, Anti-Fatigue Footbed
- Size Range: Sizes 35-36 to 44-45 (Size up 1 size recommended for wide feet)
- Target Audience: Unisex (Men & Women)
- Recommended Usage: Home wear, garden, casual walks, daily routines`,
    },
    zh: {
      name: 'CZN-010 男女同款极简舒适夹趾拖鞋',
      category: '一字拖鞋',
      description: `CZN-010 极简男女同款舒适夹趾一字拖

CZN-010 呈现简约流畅的现代格调，男女通适。选用高韧性优质 EVA 原料，回弹充沛，贴合脚底曲线，长时间走动不易脚酸。底部立体防滑凹槽设计，遇水不打滑。

规格参数：
- 商品编号：CZN-010
- 商品类别：男女同款夹趾拖鞋
- 面料材质：优质高弹 EVA（超轻柔软、回弹减震）
- 核心卖点：极简百搭设计、防滑底纹、久穿不累脚
- 尺码规格：35-36 至 44-45 码（脚胖建议拍大一码）
- 适用人群：男女通用
- 适用场景：居家室内、日常休闲、散步出行`,
    },
  },

  'CZN-011': {
    en: {
      name: 'CZN-011 Unisex Air Sport Slides',
      category: 'Slide Sandals',
      description: `CZN-011 Unisex Sport Air Slip-On Sandals

A sporty slip-on sandal that blends dynamic athletic styling with all-day comfort. Engineered with a flexible ergonomic footbed that molds to your feet to minimize fatigue during active days. Built with heavy-duty PVC/EVA outsoles featuring multi-directional anti-slip traction channels.

Specifications:
- Product Code: CZN-011
- Product Type: Unisex Sport Slide Sandals (Air Shoes Sport)
- Material: Quality EVA / PVC (Lightweight, Resilient, Long-Lasting)
- Key Features: Sporty Athletic Design, Ergonomic Arch Bed, Traction Tread
- Color Options: Navy, Black, Brown
- Target Audience: Unisex (Men & Women)
- Recommended Usage: Post-workout recovery, beach, holidays, everyday errands`,
    },
    zh: {
      name: 'CZN-011 男女运动风透气减震一字拖',
      category: '一字拖鞋',
      description: `CZN-011 运动潮酷男女同款舒适拖鞋 (Air Shoes Sport)

CZN-011 将动感运动风格与极致软弹缓震结合。人体工学曲面鞋床，贴合足弓承托，有效吸收运动后行走冲击力。高耐磨防滑鞋底，抓地力出众，运动休闲潮流感十足。

规格参数：
- 商品编号：CZN-011
- 商品类别：运动风男女拖鞋
- 面料材质：高品质 EVA / PVC（耐磨抗造、回弹性好、轻便）
- 核心卖点：动感运动设计、足弓贴合减震、抓地防滑大底
- 可选颜色：藏青色、黑色、棕色
- 适用人群：男女通用
- 适用场景：运动后放松、海边度假、日常休闲外穿`,
    },
  },

  'CZN-012': {
    en: {
      name: 'CZN-012 Women Lightweight EVA Slide Sandals',
      category: 'Slide Sandals',
      description: `CZN-012 Women's Elegant Lightweight EVA Slides

Contemporary slide sandals designed to elevate your everyday lifestyle without sacrificing cushioned comfort. Made of 100% waterproof premium EVA that is supple, durable, and easy to wipe clean. Finished with textured anti-slip soles for confident steps across tile and pavement.

Specifications:
- Product Code: CZN-012
- Product Type: Women's Slide Sandals
- Material: Premium EVA (Lightweight, Elastic, Waterproof, Easy Clean)
- Key Features: Sleek Modern Aesthetic, Anti-Slip Tread, Ultra-Light
- Size Options: Sizes 36-37 to 44-45
- Target Audience: Women
- Recommended Usage: Errands, daily walks, house slippers, casual indoor/outdoor`,
    },
    zh: {
      name: 'CZN-012 女士轻量防滑高弹一字拖',
      category: '一字拖鞋',
      description: `CZN-012 女士轻奢简约高弹 EVA 凉拖鞋

CZN-012 专为注重舒适度与审美品味的现代女性打造。全防水轻量 EVA 材质，柔软有弹性，抗污耐脏易打理，清水一冲即净。底部细密防滑底纹，湿水瓷砖地面亦能稳健行走。

规格参数：
- 商品编号：CZN-012
- 商品类别：女士一字凉拖鞋
- 面料材质：优质 EVA（轻巧弹润、防水速干、易打理）
- 核心卖点：简约高级外观、超轻无感穿着、防滑底纹
- 尺码规格：36-37 至 44-45 码
- 适用人群：女性
- 适用场景：居家、散步、出游外带`,
    },
  },

  'CZN-013': {
    en: {
      name: 'CZN-013 Men Classic Leather Texture Slides',
      category: 'Leather Flip Flops',
      description: `CZN-013 Men's Premium Casual Slides

Designed with a sophisticated faux-leather texture that gives a polished, mature look for casual and weekend engagements. Made from durable lightweight materials with cushioned insoles and high-grip outsoles.

Specifications:
- Product Code: CZN-013
- Product Type: Men's Casual Slide Sandals
- Material: Premium Synthetic Leather Texture (Durable & Lightweight)
- Key Features: Polished Mature Silhouette, Cushioned Insole, High-Grip Outsole
- Color: Elegant Black, Grey
- Target Audience: Men
- Recommended Usage: Weekend outings, casual coffee meets, holiday travel`,
    },
    zh: {
      name: 'CZN-013 男士皮纹质感经典一字拖',
      category: '皮质人字拖',
      description: `CZN-013 男士商务休闲皮纹质感一字拖

CZN-013 融合沉稳高级的皮纹质感与轻便耐磨材质，打造不凡的型男格调。内里柔软贴脚，加厚减震鞋底配合耐磨防滑齿纹，行走轻松自在。

规格参数：
- 商品编号：CZN-013
- 商品类别：男士休闲皮纹拖鞋
- 面料材质：优质耐磨合成材质（质感出众、轻量耐用）
- 核心卖点：沉稳皮纹造型、缓震舒适鞋底、防滑抓地耐磨
- 可选颜色：优雅黑、经典灰
- 适用人群：男士
- 适用场景：周末出游、日常出行、自驾聚会`,
    },
  },

  'CZN-014': {
    en: {
      name: 'CZN-014 Women Wedge Comfort EVA Slides',
      category: 'Slide Sandals',
      description: `CZN-014 Women's Wedge Slide Sandals

Ergonomically engineered with a gentle wedge slope that supports posture and gives a flattering lift. Made of waterproof premium EVA that is soft, resilient, and easy to clean.

Specifications:
- Product Code: CZN-014
- Product Type: Women's Wedge Slide Sandals
- Material: Premium EVA (Wedge Comfort, Waterproof, Flexible)
- Key Features: Supportive Wedge Sole, Anti-Slip Traction, Modern Aesthetic
- Size Options: Sizes 36-37, 38-39, 40-41
- Target Audience: Women
- Recommended Usage: Daily strolling, home wear, casual outings`,
    },
    zh: {
      name: 'CZN-014 女士优雅微坡跟轻弹一字拖',
      category: '一字拖鞋',
      description: `CZN-014 女士舒适微坡跟增高一字拖鞋

CZN-014 配备微坡跟人体工学后跟设计，修饰腿型同时减轻脚跟着地受力。优质防水 EVA 材质，轻盈软弹，防滑耐磨大底确保步态轻盈稳健。

规格参数：
- 商品编号：CZN-014
- 商品类别：女士坡跟一字拖鞋
- 面料材质：优质高弹 EVA（微坡跟、防水易洁、柔软减震）
- 核心卖点：微坡跟显高舒适、防滑安全大底、轻便百搭
- 尺码规格：36-37, 38-39, 40-41
- 适用人群：女性
- 适用场景：居家、散步、逛街出行`,
    },
  },

  'CZN-015': {
    en: {
      name: 'CZN-015 Men & Teens Casual Slides',
      category: 'Slide Sandals',
      description: `CZN-015 Men's & Teens' Casual Slide Sandals

A fresh, youthful casual slide with a lightweight cushioned sole designed for everyday recreation and hanging out with friends.

Specifications:
- Product Code: CZN-015
- Product Type: Men / Teens Casual Slides
- Material: Premium Resilient Synthetic
- Key Features: Youthful Trendy Silhouette, Anti-Fatigue Footbed, Rich Colors
- Target Audience: Men & Youth
- Recommended Usage: Everyday leisure, campus, beach, casual hangout`,
    },
    zh: {
      name: 'CZN-015 青年潮流舒适耐磨一字拖',
      category: '一字拖鞋',
      description: `CZN-015 青年男士潮流休闲一字拖鞋

CZN-015 专为年轻活力打造，色彩鲜明，版型简练百搭。鞋底触感软弹轻巧，久走不觉疲累。

规格参数：
- 商品编号：CZN-015
- 商品类别：青少年及男士休闲拖鞋
- 面料材质：轻弹耐磨合成材料
- 核心卖点：年轻潮流版型、全天舒适踩感、多色可选
- 适用人群：青年及男士
- 适用场景：校园漫步、居家聚会、日常出街`,
    },
  },

  'CZN-016': {
    en: {
      name: 'CZN-016 Men Original Durable Flip Flops',
      category: 'Flip Flops',
      description: `CZN-016 Men's Original Classic Flip Flops

Timeless, sturdy, and practical thong flip flops crafted from heavy-duty flexible rubber compound that withstands miles of daily walking.

Specifications:
- Product Code: CZN-016
- Product Type: Men's Classic Flip Flops
- Material: Premium Durable Rubber / Synthetic
- Key Features: Heavy-Duty Strap, Long-Lasting Durability, Anti-Skid Base
- Target Audience: Men
- Recommended Usage: Daily errands, beach, home, casual walking`,
    },
    zh: {
      name: 'CZN-016 男士经典耐磨防滑人字拖',
      category: '人字拖',
      description: `CZN-016 男士经典耐磨人字拖鞋

CZN-016 秉承耐穿防滑理念，采用高韧性橡胶与防滑鞋床，结实耐穿不易变形。脚趾夹带亲肤顺滑，长时间行走不磨脚。

规格参数：
- 商品编号：CZN-016
- 商品类别：男士经典人字拖
- 面料材质：优质高韧耐磨橡胶与合成底
- 核心卖点：结实抗拉扯、持久耐磨、安全防滑
- 适用人群：男士
- 适用场景：夏日沙滩、日常休闲、居家出门`,
    },
  },

  'CZN-018': {
    en: {
      name: 'CZN-018 Unisex Casual Comfort Slides',
      category: 'Slide Sandals',
      description: `CZN-018 Unisex Versatile Casual Slide Sandals

Simplicity at its best. A versatile slide that provides easy slip-on comfort and soft cushioning for relaxed daily moments.

Specifications:
- Product Code: CZN-018
- Product Type: Casual Slip-On Slides
- Material: Premium Synthetic Foam (Soft, Light & Easy)
- Key Features: Modern Everyday Style, All-Day Comfort, Lightweight
- Target Audience: Unisex
- Recommended Usage: House slippers, leisure walks, daily errands`,
    },
    zh: {
      name: 'CZN-018 简约百搭轻盈舒适拖鞋',
      category: '一字拖鞋',
      description: `CZN-018 极简男女百搭舒适凉拖鞋

CZN-018 具备轻巧质感与柔弹脚垫，版型合脚，穿着清爽不闷汗。适合全家人常备穿着。

规格参数：
- 商品编号：CZN-018
- 商品类别：休闲一字拖鞋
- 面料材质：优质柔韧轻质材料
- 核心卖点：极简百搭、轻盈软底、安心防滑
- 适用人群：男女通用
- 适用场景：居家、散步、休闲外出`,
    },
  },

  'CZN-019': {
    en: {
      name: 'CZN-019 Men Dual Band Sport Slides',
      category: 'Rubber Slides',
      description: `CZN-019 Men's Dual Band Sport Slide Sandals

Sport-inspired slide sandals with a dual band strap design. Built with heavy-duty flexible rubber that is 100% waterproof, quick-drying, and easy to clean. Deep tread patterns provide strong traction across all surfaces.

Specifications:
- Product Code: CZN-019
- Product Type: Men's Dual Band Sport Slides
- Material: Premium Resilient Rubber (Soft, Flexible, Waterproof)
- Key Features: Dual Strap Sport Aesthetic, Anti-Slip Grip, Waterproof
- Size Options: Sizes 39 to 44
- Target Audience: Men
- Recommended Usage: Gym, beach, outdoor leisure, poolside, home`,
    },
    zh: {
      name: 'CZN-019 男士双横杠运动风橡胶拖鞋',
      category: '橡胶一字拖',
      description: `CZN-019 男士双杠运动风防滑橡胶拖鞋

CZN-019 采用硬朗动感的双横带结构，包裹稳当，步态有力。高韧性橡胶材质，全防水快干抗污，鞋底深凹槽抓地纹理，户外湿地防滑性能优异。

规格参数：
- 商品编号：CZN-019
- 商品类别：男士双杠运动拖鞋
- 面料材质：高弹耐候橡胶（防水抗造、韧性强、易清洁）
- 核心卖点：双杠运动型格、强抓地耐磨底、全防水快干
- 尺码规格：39 至 44 码
- 适用人群：男士
- 适用场景：健身泳池、海滩户外、居家休闲日常`,
    },
  },

  'CZN-020': {
    en: {
      name: 'CZN-020 Men Dual Strap Fashion Slides',
      category: 'Slide Sandals',
      description: `CZN-020 Men's Fashion Sport Slide Sandals

Featuring a stylish dual-band sport profile with a contoured cushioned footbed. Soft, responsive, and easy to pair with gym or casual weekend outfits.

Specifications:
- Product Code: CZN-020
- Product Type: Men's Dual Band Fashion Slides
- Material: High-Quality Import EVA (Lightweight & Easy Care)
- Key Features: Dual Band Modern Cut, Traction Treads, Feather-Light
- Color Options: Black, Navy
- Target Audience: Men & Young Adults
- Recommended Usage: Daily activities, college, casual outings, gym`,
    },
    zh: {
      name: 'CZN-020 男士双带宽面潮流一字拖',
      category: '一字拖鞋',
      description: `CZN-020 男士时尚运动双面带凉拖鞋

CZN-020 运用立体双面宽带设计，修饰脚型，潮流前卫。优质轻盈进口 EVA 打造，鞋床贴合足底，带来极佳的缓震脚感。

规格参数：
- 商品编号：CZN-020
- 商品类别：男士双带潮流拖鞋
- 面料材质：高品质进口 EVA（轻柔弹力、防滑耐磨）
- 核心卖点：双带前卫造型、防滑耐磨齿纹、轻巧随行
- 可选颜色：黑色、藏青色
- 适用人群：男士及青年学生
- 适用场景：校园、日常通勤、运动后放松`,
    },
  },

  'CZN-021': {
    en: {
      name: 'CZN-021 Women Korean Wedge Outdoor Sandals',
      category: 'Slide Sandals',
      description: `CZN-021 Women's Korean Style Wedge Backstrap Sandals

Combines outdoor performance with Korean fashion finesse. Made from Full EVA Premium Luxury with high-resilience cushioning to prevent foot ache during long walks. Features a supportive backstrap and a ±4 cm thick wedge sole that naturally elongates your legs while maintaining solid stability.

Specifications:
- Product Code: CZN-021
- Product Type: Women's Wedge Backstrap Outdoor Sandals
- Material: Full EVA Premium Luxury (Cushioning System, Waterproof)
- Sole Height: ± 4 cm (Leg-Elongating Profile)
- Key Features: Thick Wedge Platform, Secure Backstrap, Anti-Slip Tread
- Color Options: Black, Brown, Mocca
- Target Audience: Women
- Recommended Usage: Weekend strolls, light hiking, holidays, Korean casual style`,
    },
    zh: {
      name: 'CZN-021 女士韩版厚底后带罗马凉鞋',
      category: '一字拖鞋',
      description: `CZN-021 女士韩版厚底后跟绑带户外凉鞋

CZN-021 完美融合户外机能风与韩系时尚。全 EVA 高级轻奢软弹材质，配备高弹缓震系统，久走不累脚。约 ±4 cm 加厚坡跟底有效拉长腿部比例，后跟牢固绑带防止脱落，防滑大底抓地力十足。

规格参数：
- 商品编号：CZN-021
- 商品类别：女士厚底后跟绑带户外凉鞋
- 面料材质：全 EVA 高级轻奢材质（软弹缓震、全防水）
- 鞋底厚度：约 ± 4 cm（显高显瘦厚底）
- 核心卖点：后包带牢固防脱、加厚缓震坡跟、防滑抓地耐磨
- 可选颜色：黑色、棕色、摩卡色
- 适用人群：女性
- 适用场景：假期旅行、轻户外徒步、日常街拍穿搭`,
    },
  },

  'CZN-022': {
    en: {
      name: 'CZN-022 Women Triple Strap Jelly Slides',
      category: 'Buckle Strap Sandals',
      description: `CZN-022 Women's Triple Buckle Jelly Slide Sandals

Sleek flat slides with a 3-strap buckle design that gives an effortless, elegant, and timeless appeal. Crafted from thick yet supple jelly rubber that bends naturally without blisters. Completely waterproof, feather-light, and washable with strong anti-slip grip.

Specifications:
- Product Code: CZN-022
- Product Type: Women's Triple Strap Flat Slide Sandals
- Material: Premium Jelly Rubber (Supple, Waterproof, Anti-Blister)
- Key Features: 3-Buckle Timeless Aesthetic, Non-Slip Grip, Anti-Blister Comfort
- Color Options: Black, Cream, Brown, White
- Target Audience: Women
- Recommended Usage: Daily errands, beach vacations, semi-formal casual wear`,
    },
    zh: {
      name: 'CZN-022 女士三排搭扣果冻平底拖鞋',
      category: '搭扣凉鞋',
      description: `CZN-022 女士三排搭扣极简平底果冻拖鞋

CZN-022 拥有经典三排搭扣带造型，极简高级。加厚果冻软胶柔韧亲肤，弯折自如且不磨脚。全防水防污，水洗即干，底部深抓地防滑纹理确保行走稳健。

规格参数：
- 商品编号：CZN-022
- 商品类别：女士平底三搭扣果冻凉拖
- 面料材质：优质果冻软胶（加厚柔韧、防水亲肤防磨脚）
- 核心卖点：三搭扣复古美学、防滑抓地底、超轻无压
- 可选颜色：黑色、米白色、棕色、白色
- 适用人群：女性
- 适用场景：海边度假、逛街、通勤休闲两相宜`,
    },
  },

  'CZN-023': {
    en: {
      name: 'CZN-023 Kids Puppy Pattern Slip-On Slides',
      category: 'Cute Pattern Slides',
      description: `CZN-023 Kids Puppy Pattern Slide Sandals

Adorned with an adorable puppy face motif loved by both boys and girls. Easy slip-on design allows children to put on and take off by themselves. Made of lightweight, flexible EVA that protects growing feet. Enhanced with diamond-grid non-slip soles for safe indoor and outdoor play.

Specifications:
- Product Code: CZN-023
- Product Type: Kids Unisex Slip-On Slides
- Material: Premium EVA (Light, Soft, Flexible, Waterproof)
- Key Features: Cute Puppy 3D Graphic, Diamond Anti-Slip Outsole, Easy Slip-On
- Recommended Age: 4 to 12 Years
- Target Audience: Kids (Boys & Girls)
- Recommended Usage: Home wear, playground, bathroom, pool, casual play`,
    },
    zh: {
      name: 'CZN-023 儿童可爱小狗防滑一字拖',
      category: '卡通可爱拖鞋',
      description: `CZN-023 儿童可爱萌趣小狗一字软底拖鞋

CZN-023 印有立体可爱小狗萌趣图案，男女童皆爱。一脚蹬设计方便小朋友自主穿脱。环保轻量 EVA 材质柔软呵护足弓，菱形防滑底纹在瓷砖与浴室防止跌滑。

规格参数：
- 商品编号：CZN-023
- 商品类别：儿童卡通一字拖鞋（男女同款）
- 面料材质：优质环保 EVA（超轻柔软、防水速干、易清洗）
- 核心卖点：立体萌犬图案、菱形强力防滑底、易穿脱
- 建议年龄：4 至 12 岁儿童
- 适用人群：儿童（男女童）
- 适用场景：居家、洗澡、室内游乐场、日常活动`,
    },
  },

  'CZN-024': {
    en: {
      name: 'CZN-024 Women Ribbon Korean Style Slides',
      category: 'Cute Pattern Slides',
      description: `CZN-024 Women's Ribbon Korean Style Slide Sandals

Features an exquisite bow ribbon ornament with sweet Korean flair to elevate your casual days. Made from feather-light EVA foam with a thick cushioned sole and anti-slip tread.

Specifications:
- Product Code: CZN-024
- Product Type: Women's Korean Bow Ribbon Slides
- Material: Premium EVA (Lightweight, Quick-Drying, Resilient)
- Key Features: Elegant Bow Ribbon Detail, Cushioned Thick Sole, Anti-Slip Base
- Target Audience: Women
- Recommended Usage: Home wear, garden, casual strolls, resort holidays`,
    },
    zh: {
      name: 'CZN-024 女士韩版甜美蝴蝶结一字拖',
      category: '卡通可爱拖鞋',
      description: `CZN-024 女士韩版甜美蝴蝶结软底一字拖

CZN-024 配备浪漫优雅的立体蝴蝶结装饰，尽显韩式温婉甜美。厚底高弹 EVA 材质踩屎感十足，速干防水好打理，鞋底防滑稳固有保障。

规格参数：
- 商品编号：CZN-024
- 商品类别：女士韩式蝴蝶结拖鞋
- 面料材质：优质高弹 EVA（轻盈软弹、速干防水）
- 核心卖点：立体甜美蝴蝶结、加厚减震软底、安全防滑
- 适用人群：女性
- 适用场景：居家室内、度假漫步、日常休闲出门`,
    },
  },

  'CZN-025': {
    en: {
      name: 'CZN-025 Unisex Wide-Fit Double Strap Slides',
      category: 'Slide Sandals',
      description: `CZN-025 Unisex Double Strap Comfort Slides

Modern double strap slide sandals engineered with an ergonomic wide footbed that easily accommodates wide feet. Crafted from premium EVA that is silent, flexible, and waterproof. Outfitted with a ±3 cm thick sole for extra cushioning and non-slip tire-tread grip.

Specifications:
- Product Code: CZN-025
- Product Type: Unisex Double Strap Slide Sandals
- Material: Premium EVA (Quiet Sole, Resilient, Waterproof)
- Sole Height: ± 3 cm
- Key Features: Wide-Foot Friendly, Silent Walking, Anti-Slip Grip
- Target Audience: Unisex (Men & Women)
- Recommended Usage: Home wear, bathroom, terrace, casual walks`,
    },
    zh: {
      name: 'CZN-025 男女双排带加宽舒适拖鞋',
      category: '一字拖鞋',
      description: `CZN-025 男女情侣款双排带加宽脚床厚底拖鞋

CZN-025 采用现代人体工学加宽鞋床，对宽胖脚型十分友好。加厚 ±3 cm 高弹 EVA 软底，行走静音不扰人，速干防水，鞋底轮胎级立体防滑纹理。

规格参数：
- 商品编号：CZN-025
- 商品类别：男女双排带拖鞋
- 面料材质：优质高弹 EVA（静音防滑、宽脚适用、全防水）
- 鞋底厚度：约 ± 3 cm
- 核心卖点：加宽人体工学脚床、静音防滑耐磨、厚底缓震
- 适用人群：男女通用（情侣款）
- 适用场景：浴室、阳台、庭院漫步、居家生活`,
    },
  },

  'CZN-026': {
    en: {
      name: 'CZN-026 Women Floral Platform Thong Sandals',
      category: 'Flip Flops',
      description: `CZN-026 Women's Floral Accent Platform Flip Flops

Minimalist platform flip flops embellished with a delicate flower accent on the strap. Built with an elevated ±1.5 cm sole that cushions each step without excess weight. Waterproof and easy to clean.

Specifications:
- Product Code: CZN-026
- Product Type: Women's Platform Thong Sandals
- Material: Premium EVA (Soft, Waterproof, Lightweight)
- Sole Height: ± 1.5 cm Platform
- Key Features: Flower Strap Accent, Anti-Slip Base, Elegant Minimalist Cut
- Target Audience: Women
- Recommended Usage: Beach trips, vacations, shopping, casual home wear`,
    },
    zh: {
      name: 'CZN-026 女士山茶花厚底防滑人字拖',
      category: '人字拖',
      description: `CZN-026 女士山茶花饰带厚底人字拖鞋

CZN-026 夹脚带上方点缀清新立体花朵饰件，浪漫精致。约 ±1.5 cm 轻微厚底，有效隔离地面凉气同时提供柔弹缓震。全防水防滑，度假出游必备。

规格参数：
- 商品编号：CZN-026
- 商品类别：女士厚底花朵人字拖
- 面料材质：优质高弹 EVA（亲肤轻柔、防水速干）
- 鞋底厚度：约 ± 1.5 cm 增高底
- 核心卖点：立体花朵优雅饰带、安全防滑大底、轻便不累脚
- 适用人群：女性
- 适用场景：海岛度假、夏日沙滩、日常休闲出街`,
    },
  },

  'CZN-027': {
    en: {
      name: 'CZN-027 Men Adjustable Buckle Dual Strap Slides',
      category: 'Buckle Strap Sandals',
      description: `CZN-027 Men's Double Strap Buckle Slides

Stylish and practical slides with dual adjustable buckle straps to achieve your perfect custom fit. Features an ergonomic contoured sole (front ±2 cm, heel ±3 cm) that supports natural gait mechanics.

Specifications:
- Product Code: CZN-027
- Product Type: Men's Double Strap Buckle Slides
- Material: Premium EVA (Ergonomic, Lightweight, Shock Absorbing)
- Sole Height: Front ±2 cm, Heel ±3 cm
- Key Features: Adjustable Buckle Straps, High Traction Grip, Contour Bed
- Color Options: Black, Grey, Army Green
- Target Audience: Men
- Recommended Usage: Daily walking, casual office, travel, home wear`,
    },
    zh: {
      name: 'CZN-027 男士双金属搭扣工装风拖鞋',
      category: '搭扣凉鞋',
      description: `CZN-027 男士双搭扣硬朗工装风防滑凉拖

CZN-027 配备双金属质感调节扣带，可根据脚背胖瘦随心调整。前掌约 ±2 cm、后跟约 ±3 cm 人体工学落差鞋床，行走贴合足底，抓地纹路耐磨防滑。

规格参数：
- 商品编号：CZN-027
- 商品类别：男士双扣工装拖鞋
- 面料材质：优质耐磨高弹 EVA（轻量耐穿、缓震极佳）
- 鞋底厚度：前掌 ±2 cm，后跟 ±3 cm
- 核心卖点：双搭扣可调节、深槽抓地防滑大底、人体工学足弓床
- 可选颜色：黑色、灰色、军绿色
- 适用人群：男士
- 适用场景：日常通勤、户外休闲、自驾出游`,
    },
  },

  'CZN-028': {
    en: {
      name: 'CZN-028 Kids Capybara Pattern Clogs',
      category: 'Kids Clogs',
      description: `CZN-028 Kids Capybara Cartoon Clogs

Features delightful 3D Capybara cartoon charms that bring joy to active little ones. Made of flexible, resilient EVA foam that follows natural foot movements. Equipped with a rotatable heel strap for a secure fit and skid-proof tread.

Specifications:
- Product Code: CZN-028
- Product Type: Kids Clogs / Baim Sandals
- Material: Premium EVA (Light, Soft, Flexible, Waterproof)
- Key Features: 3D Capybara Charms, Skid-Proof Sole, Safety Heel Strap
- Target Audience: Kids
- Recommended Usage: Playing at home, garden, playground, water park, travel`,
    },
    zh: {
      name: 'CZN-028 儿童卡皮巴拉水豚包头洞洞鞋',
      category: '儿童洞洞鞋',
      description: `CZN-028 儿童网红水豚卡皮巴拉卡通洞洞鞋

CZN-028 饰有超萌立体水豚卡皮巴拉玩偶配饰，童趣满满。选用加倍轻柔的高弹 EVA 材质，可随意弯折不留痕。配有双用旋转后跟带，一鞋两穿防掉鞋，鞋底深齿防滑。

规格参数：
- 商品编号：CZN-028
- 商品类别：儿童包头洞洞鞋（卡皮巴拉主题）
- 面料材质：环保高弹 EVA（极轻量、柔软韧性、防水快干）
- 核心卖点：立体水豚萌趣配饰、防脱旋转后跟带、防滑耐磨
- 适用人群：儿童
- 适用场景：户外游玩、水上乐园、幼儿园日常、居家生活`,
    },
  },

  'CZN-029': {
    en: {
      name: 'CZN-029 Women 90-Degree Flex Ballet Slides',
      category: 'Mary Jane Clogs',
      description: `CZN-029 Women's Korean Style Ballet Slip-On Sandals

Feminine and elegant Korean-style ballet slides. Crafted from ultra-flexible EVA that can bend 90 degrees with ease, providing seamless comfort throughout long shifts or classes. Waterproof and simple to clean with high-traction treads.

Specifications:
- Product Code: CZN-029
- Product Type: Women's Ballet Slip-On Sandals
- Material: Premium EVA (Lightweight, 90-Degree Flex, Waterproof)
- Key Features: High Traction Grip, Versatile Heel Strap, Feminine Elegance
- Color Options: Cream, Soft Pink, Black, Maroon
- Target Audience: Women
- Recommended Usage: College, office casual, daily walking, Korean aesthetic outfits`,
    },
    zh: {
      name: 'CZN-029 女士 90度超柔折叠芭蕾包头凉鞋',
      category: '玛丽珍包头鞋',
      description: `CZN-029 女士韩版优雅芭蕾风包头防滑凉鞋

CZN-029 融入玛丽珍与芭蕾鞋的优美线条，鞋身柔软可 90° 随意弯折不留折痕。全防水耐磨，配有灵活后跟带，既是拖鞋也是优雅凉鞋。

规格参数：
- 商品编号：CZN-029
- 商品类别：女士芭蕾包头凉鞋 (Korean Style)
- 面料材质：优质高弹超柔 EVA（可 90° 弯折、防水易洁）
- 核心卖点：高抓地防滑底、多功能两穿后带、优雅温婉鞋型
- 可选颜色：米白色、柔粉色、黑色、酒红色
- 适用人群：女性
- 适用场景：上班通勤、校园上课、日常漫步、甜美出街`,
    },
  },

  'CZN-030': {
    en: {
      name: 'CZN-030 Kids Silent Waterproof Clogs',
      category: 'Kids Clogs',
      description: `CZN-030 Kids Silent Waterproof Clog Sandals

Charming unisex clogs for boys and girls. Made from soft, odorless, squeak-free EVA foam that is safe and comfy. Features a supportive backstrap and anti-slip sole.

Specifications:
- Product Code: CZN-030
- Product Type: Kids Unisex Clogs
- Material: Premium EVA (Lightweight, Odorless, Squeak-Free, Waterproof)
- Key Features: Squeak-Free Sole, Dual-Wear Backstrap, Non-Slip Grip
- Target Audience: Kids (Boys & Girls)
- Recommended Usage: Home, backyard, beach, water play, holidays`,
    },
    zh: {
      name: 'CZN-030 儿童静音防水防臭包头拖鞋',
      category: '儿童洞洞鞋',
      description: `CZN-030 儿童男女童静音防滑包头洞洞鞋

CZN-030 采用防臭环保轻质 EVA 材质，走路不吱吱响，柔软贴合小脚丫。带后跟安全固定带，防止跑跳脱落，底部密布防滑点。

规格参数：
- 商品编号：CZN-030
- 商品类别：儿童包头洞洞鞋（男女同款）
- 面料材质：环保安全 EVA（无异味、静音不吱响、全防水）
- 核心卖点：静音加厚防滑底、两用安全后跟带、防臭易打理
- 适用人群：儿童（男女童）
- 适用场景：居家、洗手间、公园草地、水上游戏`,
    },
  },

  'CZN-031': {
    en: {
      name: 'CZN-031 Men Flexi-Tech Durable Flip Flops',
      category: 'Flip Flops',
      description: `CZN-031 Men's Flexi-Tech Scratch-Resistant Flip Flops

Engineered with innovative EVA Flexi-Tech material that is resilient, supple, and scratch-resistant. High durability designed for prolonged outdoor wear and casual strolls.

Specifications:
- Product Code: CZN-031
- Product Type: Men's Flexi-Tech Flip Flops
- Material: EVA Flexi-Tech (Scratch & Impact Resistant, Flexible)
- Key Features: Classy Minimalist Design, Heavy-Duty Anti-Slip Grip, Durable
- Target Audience: Men
- Recommended Usage: Relaxing at home, weekend road trips, casual wear`,
    },
    zh: {
      name: 'CZN-031 男士高弹抗刮耐磨人字拖',
      category: '人字拖',
      description: `CZN-031 男士高韧 Flexi-Tech 防刮耐磨人字拖鞋

CZN-031 搭载创新 EVA Flexi-Tech 弹力科技材料，抗刮抗撞击不易磨损变形。极简线条配合立体防滑纹理，脚感扎实稳健。

规格参数：
- 商品编号：CZN-031
- 商品类别：男士高韧人字拖
- 面料材质：EVA Flexi-Tech（耐刮防撞、高韧回弹、防滑）
- 核心卖点：极简型男格调、高强耐磨抓地底、持久耐穿
- 适用人群：男士
- 适用场景：居家休闲、长途自驾、户外出游`,
    },
  },

  'CZN-032': {
    en: {
      name: 'CZN-032 Men Sporty Heavy-Duty Slides',
      category: 'Slide Sandals',
      description: `CZN-032 Men's Sporty Masculine Slide Sandals

A sporty slide engineered with shape-retention EVA that is stain-resistant, waterproof, and super easy to wipe clean. High-traction outsoles ensure solid footing.

Specifications:
- Product Code: CZN-032
- Product Type: Men's Sporty Slide Sandals
- Material: Premium EVA (Shape-Retaining, Stain-Resistant, Waterproof)
- Key Features: Masculine Sport Cut, Traction Tread, Easy Clean
- Target Audience: Men
- Recommended Usage: Post-workout, home, weekend hangout, casual outdoor`,
    },
    zh: {
      name: 'CZN-032 男士运动机能防滑一字拖',
      category: '一字拖鞋',
      description: `CZN-032 男士运动力量风防滑休闲一字拖鞋

CZN-032 展现刚劲有力的运动美学，采用抗形变强化 EVA 材料，耐脏抗油污，不易变形踩塌。高抓地力鞋底助你在湿滑地面依然健步如飞。

规格参数：
- 商品编号：CZN-032
- 商品类别：男士运动风一字拖
- 面料材质：优质强化 EVA（耐脏耐磨、抗形变、易清洗）
- 核心卖点：硬朗运动风格、高抓地防滑底、持久回弹
- 适用人群：男士
- 适用场景：运动更衣室、居家休闲、朋友聚会出行`,
    },
  },

  'CZN-035': {
    en: {
      name: 'CZN-035 Women Cross-Strap Buckle Slides',
      category: 'Buckle Strap Sandals',
      description: `CZN-035 Women's Cross Strap Adjustable Buckle Slides

Features a contemporary crisscross strap upper with adjustable buckles to ensure a gentle, non-pinching fit. Built with a ±3 cm thick sole for graceful height elevation.

Specifications:
- Product Code: CZN-035
- Product Type: Women's Cross Strap Buckle Slides
- Material: Comfortable & Flexible Everyday Compound
- Sole Height: ± 3 cm (Posture-Elevating Sole)
- Key Features: Modern Crisscross Straps, Adjustable Buckle, Anti-Slip Base
- Target Audience: Women
- Recommended Usage: Strolls, hangout, campus, casual workday`,
    },
    zh: {
      name: 'CZN-035 女士交叉带可调搭扣厚底凉鞋',
      category: '搭扣凉鞋',
      description: `CZN-035 女士交叉绑带金属扣厚底休闲凉鞋

CZN-035 采用修饰脚背的交叉带结构，搭配精致可微调金属搭扣，宽窄脚型都能调出舒适贴合度。约 ±3 cm 显高鞋底带来从容优雅步态。

规格参数：
- 商品编号：CZN-035
- 商品类别：女士交叉搭扣带凉鞋
- 面料材质：柔软舒适韧性复合材质
- 鞋底厚度：约 ± 3 cm 显高底
- 核心卖点：修身交叉绑带、可调金属扣、防滑耐磨大底
- 适用人群：女性
- 适用场景：度假约会、逛街购物、校园日常`,
    },
  },

  'CZN-036': {
    en: {
      name: 'CZN-036 Women Dual Strap Matte Slides',
      category: 'Buckle Strap Sandals',
      description: `CZN-036 Women's Matte Dual Strap Buckle Slides

Exudes classy elegance with a premium matte finish and two adjustable buckles. Made of flexible PVC that bends up to 45 degrees, accompanied by a ±3 cm sole for all-day postural ease.

Specifications:
- Product Code: CZN-036
- Product Type: Women's Dual Strap Buckle Slides
- Material: Premium PVC (Flexible up to 45°, Matte Aesthetic)
- Sole Height: ± 3 cm
- Key Features: Dual Adjustable Buckles, Premium Matte Finish, Anti-Slip
- Target Audience: Women
- Recommended Usage: Work, campus, weekend travel, semi-formal casual wear`,
    },
    zh: {
      name: 'CZN-036 女士哑光质感双排扣轻奢凉鞋',
      category: '搭扣凉鞋',
      description: `CZN-036 女士哑光高级质感双排搭扣平底凉鞋

CZN-036 采用高级哑光雾面处理，质感温润细腻。优质柔性材料支持 45° 舒适弯折，配备双排精工搭扣与约 ±3 cm 舒适平底，轻松驾驭各种通勤与休闲造型。

规格参数：
- 商品编号：CZN-036
- 商品类别：女士双扣哑光凉鞋
- 面料材质：优质高级 PVC（支持 45° 弯折、哑光高级质感）
- 鞋底厚度：约 ± 3 cm
- 核心卖点：双搭扣可调节、高级哑光雾面、防滑耐磨
- 适用人群：女性
- 适用场景：日常通勤上班、周末探店聚会、休闲度假`,
    },
  },

  'CZN-037': {
    en: {
      name: 'CZN-037 Women Embossed Bear Comfort Slides',
      category: 'Slide Sandals',
      description: `CZN-037 Women's Cute Embossed Bear Slide Sandals

Playful and lovely slide sandals featuring a 3D embossed bear motif. Built with a ±2.5 cm cushioned shock-absorbing sole that keeps steps breezy and comfortable.

Specifications:
- Product Code: CZN-037
- Product Type: Women's Embossed Bear Slides
- Material: Premium EVA (Soft, Lightweight, Impact Dampening)
- Sole Height: ± 2.5 cm
- Key Features: 3D Embossed Bear Graphic, Impact Cushioning, Waterproof
- Target Audience: Women & Teens
- Recommended Usage: Home slippers, dormitory, poolside, casual strolls`,
    },
    zh: {
      name: 'CZN-037 女士立体小熊浮雕防滑拖鞋',
      category: '一字拖鞋',
      description: `CZN-037 女士立体浮雕小熊萌趣舒适一字拖

CZN-037 鞋面设计有可爱的 3D 浮雕小熊图案，萌趣可爱。加厚 ±2.5 cm 柔韧鞋底能够吸收行走冲击力，全防水防油污，一冲即净。

规格参数：
- 商品编号：CZN-037
- 商品类别：女士立体小熊一字拖
- 面料材质：优质高弹 EVA（超轻柔软、减震抗压、防水）
- 鞋底厚度：约 ± 2.5 cm 缓震厚底
- 核心卖点：立体小熊浮雕、有效减震缓压、安全防滑大底
- 适用人群：女性及少女
- 适用场景：居家卧室、阳台、浴室、休闲散步`,
    },
  },

  'CZN-038': {
    en: {
      name: 'CZN-038 Unisex Cute Cat Pattern Home Slippers',
      category: 'Slide Sandals',
      description: `CZN-038 Unisex Cute Cat Graphic House Slippers

Charming cat-themed slide slippers suitable for men and women. Built with a ±2 cm flexible EVA sole that absorbs footstep impacts while remaining odor-resistant and quick-drying.

Specifications:
- Product Code: CZN-038
- Product Type: Unisex Cat House Slippers
- Material: Premium EVA (Odor-Resistant, Quick-Drying, Resilient)
- Sole Height: ± 2 cm
- Key Features: Cute Cat Graphic, Anti-Slip Base, Silent Walking
- Target Audience: Unisex (Men & Women)
- Recommended Usage: Indoor home, bathroom, patio, casual lounging`,
    },
    zh: {
      name: 'CZN-038 男女同款可爱小猫咪居家拖鞋',
      category: '一字拖鞋',
      description: `CZN-038 男女情侣款可爱猫咪印花防滑家居拖鞋

CZN-038 印有温馨软萌的猫咪图案，治愈感满满。约 ±2 cm 加厚高弹 EVA 材质踩地无声，防水透气防臭，湿水后迅速干爽。

规格参数：
- 商品编号：CZN-038
- 商品类别：男女同款猫咪家居拖鞋
- 面料材质：优质环保 EVA（静音防滑、快干防臭、柔软回弹）
- 鞋底厚度：约 ± 2 cm
- 核心卖点：可爱猫咪图案、浴室强力防滑、静音无噪音
- 适用人群：男女通用（情侣款）
- 适用场景：室内家居、浴室淋浴、阳台庭院`,
    },
  },

  'CZN-039': {
    en: {
      name: 'CZN-039 Kids Interactive Spinner Charm Slides',
      category: 'Kids Slides',
      description: `CZN-039 Kids Interactive Spinner Charm Slides

Designed with interactive rotating 3D character charms that make wearing sandals fun for kids. Feather-light, waterproof, and equipped with a skid-resistant bottom.

Specifications:
- Product Code: CZN-039
- Product Type: Kids Slide Sandals (Interactive Charm)
- Material: Lightweight Waterproof EVA Compound
- Key Features: Rotatable & Removable Character Charm, Anti-Skid Grip
- Recommended Age: 4 to 6 Years
- Target Audience: Kids
- Recommended Usage: Daily home, play dates, preschool, park`,
    },
    zh: {
      name: 'CZN-039 儿童趣味可旋转玩偶洞洞拖鞋',
      category: '儿童一字拖',
      description: `CZN-039 儿童趣味可旋转互动玩偶轻便凉拖

CZN-039 配备可 360° 旋转的趣味立体公仔配饰，给小朋友带来无穷乐趣。超轻材质不压脚背，鞋底密布防滑卡槽，玩水奔跑更安心。

规格参数：
- 商品编号：CZN-039
- 商品类别：儿童趣味互动卡通拖鞋
- 面料材质：安全轻量复合材质（防水易洁、轻弹防滑）
- 核心卖点：趣味可旋转立体玩偶、超轻脚感、防滑底纹
- 建议年龄：4 至 6 岁儿童
- 适用人群：儿童
- 适用场景：居家游戏、幼儿园、户外公园玩耍`,
    },
  },

  'CZN-040': {
    en: {
      name: 'CZN-040 Kids Squeak-Free Animal Charm Slides',
      category: 'Kids Slides',
      description: `CZN-040 Kids Squeak-Free Animal Character Slides

Crafted with bright kid-friendly colors and cute removable charms. Features a non-squeaking, skid-proof sole that keeps active kids safe on tiled floors.

Specifications:
- Product Code: CZN-040
- Product Type: Kids Character Slide Sandals
- Material: Premium EVA (Squeak-Free, Waterproof, Lightweight)
- Key Features: Removable Character Jibbitz, Squeak-Free Walking, Anti-Slip
- Recommended Age: 4 to 6 Years
- Target Audience: Kids
- Recommended Usage: Playing, home wear, beach, playground`,
    },
    zh: {
      name: 'CZN-040 儿童静音萌兽配饰舒适凉拖',
      category: '儿童一字拖',
      description: `CZN-040 儿童防滑静音可爱萌兽配饰一字拖

CZN-040 配备鲜亮活泼的色彩与可拆卸萌趣玩偶扣件。环保 EVA 材质静音无响声，不惊扰睡眠，底部深抓地防滑纹路守护儿童安全。

规格参数：
- 商品编号：CZN-040
- 商品类别：儿童萌宠卡通拖鞋
- 面料材质：优质环保 EVA（静音不吱响、防水易打理）
- 核心卖点：可拆卸个性玩偶扣、静音防滑大底、轻柔护足
- 建议年龄：4 至 6 岁儿童
- 适用人群：儿童
- 适用场景：日常家居、幼儿园活动、户外游玩`,
    },
  },

  'CZN-041': {
    en: {
      name: 'CZN-041 Kids Sweet Pastel Graphic Slides',
      category: 'Kids Slides',
      description: `CZN-041 Kids Sweet Pastel Graphic Slide Sandals

Clean, practical slip-on slides dressed in sweet pastel hues with charming strap details. Waterproof and slip-resistant for boundless childhood fun.

Specifications:
- Product Code: CZN-041
- Product Type: Kids Slide Sandals
- Material: Waterproof Soft EVA (Gentle on Skin, Easy Clean)
- Key Features: Pastel Color Palette, Anti-Slip Base, Lightweight Slip-On
- Recommended Age: 4 to 6 Years
- Target Audience: Kids
- Recommended Usage: Home, playground, preschool, daily leisure`,
    },
    zh: {
      name: 'CZN-041 儿童马卡龙温柔色系防滑拖鞋',
      category: '儿童一字拖',
      description: `CZN-041 儿童马卡龙甜美色系轻盈防滑凉拖

CZN-041 采用清爽温润的马卡龙浅粉、淡蓝、薰衣草紫等柔和色系，鞋身轻巧柔软贴合脚面，防滑大底为孩子提供稳妥承托。

规格参数：
- 商品编号：CZN-041
- 商品类别：儿童简约一字凉拖鞋
- 面料材质：环保软胶（柔韧亲肤、全防水防油污、易清洁）
- 核心卖点：马卡龙甜美色调、轻巧防滑底、一脚蹬便携穿脱
- 建议年龄：4 至 6 岁儿童
- 适用人群：儿童
- 适用场景：居家、洗手间、公园草坪漫步`,
    },
  },

  'CZN-042': {
    en: {
      name: 'CZN-042 Girls 3D Cute Floral Bow Slides',
      category: 'Kids Slides',
      description: `CZN-042 Girls' 3D Cute Floral & Bow Slide Sandals

Delightful girls' slides featuring 3D flowers, ribbons, and sweet pastel ornaments. Made of soft EVA that cushions developing arches with textured anti-slip outsoles.

Specifications:
- Product Code: CZN-042
- Product Type: Girls' Cute 3D Graphic Slides
- Material: Premium EVA (Soft, Lightweight, Easy to Clean)
- Key Features: 3D Cute Floral & Bow Charms, Non-Slip Grip, Comfort Bed
- Recommended Age: 4 to 6 Years
- Target Audience: Girls
- Recommended Usage: Daily home, playground, family outings, party`,
    },
    zh: {
      name: 'CZN-042 女童立体花朵蝴蝶结公主拖鞋',
      category: '儿童一字拖',
      description: `CZN-042 女童甜美立体花朵与蝴蝶结公主风凉拖

CZN-042 点缀有小女孩喜爱的 3D 浮雕花朵与可爱蝴蝶结配饰。高弹轻质环保 EVA 呵护娇嫩足弓，防滑纹路鞋底防止打滑，每一步都轻快欢悦。

规格参数：
- 商品编号：CZN-042
- 商品类别：女童公主风卡通一字拖鞋
- 面料材质：优质高弹环保 EVA（轻软弹润、无毒无味、易清洗）
- 核心卖点：3D 甜美花朵与蝴蝶结饰件、防滑抓地底、护足鞋床
- 建议年龄：4 至 6 岁儿童
- 适用人群：女童
- 适用场景：居家室内、假日外出、亲子游玩`,
    },
  },
};
