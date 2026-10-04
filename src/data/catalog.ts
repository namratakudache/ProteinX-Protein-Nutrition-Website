import { Product, VibeData, BatchRecord, CommunityPost } from '../types';

export const BRAND_LOGO_IMG = "https://lh3.googleusercontent.com/aida/AEtjO1UgSdkj18lXeWjTdHqDnkGcVldB5f6l8HCBnxNMxwB16UIR3jF_yCDZ7hGCkCWYsDmt3W2Ltkd7TLP4sH5GCKf_OD2qoFK4YTVp84LNz_OjgGv4kwWJBUfDej3O39bAMx89OIX9h24fPqO1enyYX4j-beIoRQN04qK7i2ahU6KAA0cA9nsUpPs5HzKCabJBtYU0yH7aJvI4X6tModCutCi8qnbMgXMyqASy6EOHDJvZ67BwWenpjPuBgJXd";

export const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBTNNI6INmjpK6DiboITOZSu2-aL__ZixsKcmiZUQAVYYv2yNoJrwJUot0aKjjXmv6Ogeiqw4JfX0uXn-7MB_lLJrQCyYzFIZcYN8Woeg780lpF51PJJhd1-8iFlQ644p4ZcNdwwFgaKCjolXq1OZFLpT3FPgCMQ2EU2ZNgl5VuYlSZIcQJkY0pTmZJ-4EuCBcE3K09iCCrv6e04V4rpBQld7FQeG8tk4H3MT5CVVzHHIaZ3GGsY7t4JA";

export const HERO_SHAKER_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDiie0xYDByxVHYP38kXrCMhlx2BfbhxnI-Nz_qO-PMiTXndNaWajPjsa4EobCjDS5dQqai0uLJEtdYOOUFcV7USTtYd8oVerJ8Gl-KBzyyVRb39_4CymFESH_A3zf8-93aeTE_B4AuKhGkrk7FF26-9kbUVSOTPNTjiBWMpaxAUi51U71fTBT7De5aICT69MdfhoqBlGzr73zp2I-xrdcenX1oeJhbyah1bWLtodf7k3_CdtQiN_H_4A";

export const MISSION_REVOLT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAmFSTvbjAk3l-8ljMzd4VaoxImd7iVLu_vdfVtJ_U_AuGqGoWLKgNxdBzCUqVG83MFN8YcZg4IzLMyEQ7OoppRDLSucw6KA-w-mHbkBVXuYHyIpjybq9Cf_mrIJZdCLDvcVbP481H4lbgQLP_WFKpJ7W1E8fXdnRtK-v1R6rkrT_aKKsPnzC7beeM9vil2YDgYooVT_rC6nRN3OFu3dX35ZXZ-e3X64IfxbRSPQUi4eF8ZZ1_jUi_RqQ";

export const LAB_01_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjsOVzWyYipG0otvcYxPeu8vAt21JBHRiWxZHgMpwtp0zKnpuIW9xDujeBM6sDFzV_uTaDo5FvZcpbEtylK12XDd8WnS5kFBR2zRdnDC-daGW8zovftDXhDrrcQtCNzsQlGcEBhh_fOrufXJhSiNao51wxKK_3w6flNMxG5jlt3FEvy1FHQrnZIr74zu8rZsaqIvY6HlPao7iDBS_-9Pcvvon1RbtkN5d81SRx6dS12QE9wopHk6PHg";

export const LAB_02_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBEz2uEt26TG2GLMJNmKlfgqFu4ruPm_sAYMAazuk7jG2ozYZjI59bivSep6gC_OGxNYFko_TBE98EkDLZbqiFYWvOeSVZoyPq0LI4C_cS5zJ2kVhqhe_UyeX_1gMvs9-CpH10e0cxfb4X5zz-28Vlv9ACaleO8e5Mmg_D3mMVgwntPfs25J6msHfjZEnsnKaYENPUcyRPwYerTVBr19fZWps24kT5h-zRDEv2o8xyrEQc8A22ABfoEFA";

export const LAB_03_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCJgNZinDDhBQ66NnOVTsULwSf_xNclGASWCcmcTLYyU7nQ0qnl_p71BH4AODFWgVGDCCHAJC4McOFj4WZr4hFAIK4cb2vP-45pguc_onZJtSa_aRIk-ZbHQz2ty9K_C5lFt88jSq25uADx3brZFzX-ZOKjmDuUS-aCI9pCMNm4j5qwulXnWWpGUsVZXQQ79QQvL-1Ao7vMSk1m2G-N2tMRGHDCkh5WFX2f-mlj6wHsE7g8xbBKAddUPQ";

export const PRODUCTS: Product[] = [
  {
    id: 'cyber-crunch-bar',
    name: 'CYBER-CRUNCH BAR',
    price: 34.00,
    category: 'PROTEIN BARS',
    badge: '★ BESTSELLER',
    badgeStyle: 'pink',
    dropNumber: 'DROP #088',
    proteinGrams: 22,
    calories: 180,
    sugarGrams: 1,
    servingLabel: 'QUICK DROP (BOX OF 12)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Cuj0yphiA8bsoILlk2VFBrrLAPfqPywgsfmSa122TjQYfKMwJ17UhzySk-fH_HWBDMHjbvDyLB2iI6B7jl3q-e62_b99SRC7CF_rV7qRYQHdfHmw6NtzECMR-C48JchTmS-TqA3Z2MSJs1wfgDXt6DkehSJjXNKVvDpep7JB_7PDft5dwTDSpLaHypMd0EfKwKgAcTgaci5mzhlA_lx7XkSq5F5SAfuWCdObU3CVJFWhojSYM_xnhw',
    flavorSummary: 'Flavor: Neon Berry Electric Glaze. Layered wafer with triple-crisp crunch matrix.',
    quirkTag: 'Tastes like melted retro soft-serve',
    quirkIcon: 'favorite',
    defaultFlavor: 'Berry Glaze',
    flavors: ['Berry Glaze', 'Sour Apple Void', 'Yuzu Blast'],
    description: 'Ultra-crisp layered protein wafer covered in real freeze-dried berries and electric glaze. Cold-extruded to eliminate the rubbery, dense chewing texture of old-school gym bars.',
    bcaaGrams: 5.4,
    leucineGrams: 2.8,
    highlightText: '180 KCAL • 1G SUGAR',
    stockLevel: 42
  },
  {
    id: 'hyper-whey-isolate',
    name: 'HYPER-WHEY ISOLATE',
    price: 44.99,
    category: 'WHEY ISOLATES',
    badge: '⚡ LIMITED EDITION',
    badgeStyle: 'lime',
    dropNumber: 'BATCH 04/10',
    proteinGrams: 28,
    calories: 120,
    sugarGrams: 0,
    servingLabel: 'QUICK DROP (30 SERVINGS)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA38ybhehNkGoG_62e2AbsY-0vqfQCrWB6VXr_3nPess6lHhVi1hEf18eUE9IjcCvsgtmS8wjSXocmI36Vy_hyGSya8IIkUtsnUmkfclKJ-K9zvZalMuB2Coc-YtwGxB6Xtad8Oo389tHIre83U-NXTPfMfI-a87DtFOQn9HXqtKc_vy9nxmx9Rh2X-Wv70poWhU2-pfqabIsyBYm8Giv_ok3qvYPX8cd8f7sggavEujpD47X-22pycvA',
    flavorSummary: 'Flavor: Yuzu Matcha Cloud Foam. Zero-chalk microfiltered isolate with DigeZyme complex.',
    quirkTag: 'Zero chalk guarantee • Silk finish',
    quirkIcon: 'check_circle',
    defaultFlavor: 'Yuzu Matcha',
    flavors: ['Yuzu Matcha', 'Tokyo Strawberry', 'Black Sesame'],
    description: 'Ceremonial grade Uji matcha meets cold-membrane cross-flow whey isolate. Dissolves within 4 seconds in ice water without leaving a drop of chalk residue.',
    bcaaGrams: 7.2,
    leucineGrams: 3.4,
    highlightText: '120 KCAL • 0G SUGAR',
    stockLevel: 18
  },
  {
    id: 'smash-bar-dual-crunch',
    name: 'SMASH-BAR DUAL CRUNCH',
    price: 32.00,
    category: 'PROTEIN BARS',
    badge: '🔥 STAFF PICK',
    badgeStyle: 'gray',
    dropNumber: 'DROP #091',
    proteinGrams: 20,
    calories: 190,
    sugarGrams: 2,
    fiberGrams: 8,
    servingLabel: 'QUICK DROP (BOX OF 12)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmcPiBjZvS2CQMipVJTfFDIt-JPi5C-yXeMegIgFqYNQvggFcwn4QDwoI_jxNoll1RSGKxzHdY7C-vnV4bWZR-EeyLRhpYyqnP0_WCKSJkDEbV-EjLsIv4f_OQNSU6FyU-GpOIcoc3tem3YLekt1QxXbdYb-itM73BWiUSgsLqsvBMoFQpcKGGDKZSzl8iZgkujUMRm8k-QDWzqi-3uGJFUeRYrjnr_yMEO_aWqnfvm8herbjb5Cit8g',
    flavorSummary: 'Flavor: Salted Caramel Peanut Riot. High satiety, keto-friendly fiber core.',
    quirkTag: 'Ultra chewy center • Zero chalk',
    quirkIcon: 'local_fire_department',
    defaultFlavor: 'Caramel Peanut',
    flavors: ['Caramel Peanut', 'Dark Fudge', 'White Pistachio'],
    description: 'Crushed roasted whole peanuts suspended in sea-salted golden caramel over a dense crispy chocolate core. 8g prebiotic fiber to regulate blood sugar and digestion.',
    bcaaGrams: 4.8,
    leucineGrams: 2.2,
    highlightText: '190 KCAL • 8G FIBER',
    stockLevel: 63
  },
  {
    id: 'zero-gravity-rtd-shake',
    name: 'ZERO-GRAVITY RTD SHAKE',
    price: 39.00,
    category: 'RTD SHAKES',
    badge: '⚡ COLD PRESSED',
    badgeStyle: 'dark',
    dropNumber: 'READY TO DRINK',
    proteinGrams: 30,
    calories: 150,
    sugarGrams: 0,
    servingLabel: 'QUICK DROP (PACK OF 8)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADzQu62aN0xK3Nw7Dogc8YoRJl4CdvJlQc9d3UobKahkAa85DXRWGK2AlUs0QbPia99kl8BkzmHrEZv1qM1polerQ7-TEgqoPmowl2MHbjjcjSaK-2KrZd5OEooMO4zF-nhcfd_5PKlvs0j9-fQQuwAArMQNI3qLaR4VsF_qzkAUdf1YjhpI26BoKPJy64tPOLiQKagGtZMnGvFf6UelvEjCIHNXufDTntOEkbSS63Tpo863U_0BoS8Q',
    flavorSummary: 'Flavor: Midnight Chocolate Eclipse. Ultra-purified liquid isolate for instant grab-and-go.',
    quirkTag: 'Chilled perfection • Shelf stable',
    quirkIcon: 'electric_bolt',
    defaultFlavor: 'Midnight Choco',
    flavors: ['Midnight Choco', 'Espresso Pulse', 'Banana Static'],
    description: 'Canned directly from cold sterile filtration in recyclable aluminum sleek cans. Silky Dutch cocoa with organic coconut milk water base, zero lactose, zero dairy bloat.',
    bcaaGrams: 7.0,
    leucineGrams: 3.2,
    highlightText: '150 KCAL • LACTOSE FREE',
    stockLevel: 29
  },
  {
    id: 'plant-matrix-bio-fuel',
    name: 'PLANT-MATRIX BIO-FUEL',
    price: 46.00,
    category: 'PLANT POWER',
    badge: '🌱 100% VEGAN',
    badgeStyle: 'pink',
    dropNumber: 'ADAPTOGEN BIO',
    proteinGrams: 25,
    calories: 130,
    sugarGrams: 0,
    servingLabel: 'QUICK DROP (28 SERVINGS)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuh59FLVgz019-QMQoDK2lySey6ptPdSXgr5BbCx2MOFZW2VeR-AxQw77cCC0Vc8HSKVvo0uzkRs8yfvBwE3zKBJSqX4aB1juYGQA6Fieg5gl9W_6JRoD86HvZCo3XrjBgdmau9XGIIqOoz0G3weRnmFy_aDDCfkU3tZS9oHJB52yisydoX78Bz7_0Q6MA3G9ME415sZuAdEGJ02tqTsQb2vUYFh3BZd3Nq_LGfS-oA0FloK48hermOg',
    flavorSummary: "Flavor: Vanilla Chai Stardust. Fermented pumpkin, fava bean & organic lion's mane.",
    quirkTag: 'Brain clarity + explosive power',
    quirkIcon: 'spa',
    defaultFlavor: 'Vanilla Chai',
    flavors: ['Vanilla Chai', 'Cacao Cinnamon', 'Golden Turmeric'],
    description: 'Zero gritty pea powder taste. Brewed with sprouted pumpkin seed, fava bean isolate, organic cordyceps and lion’s mane mushrooms to ignite focus and muscle oxygenation.',
    bcaaGrams: 5.6,
    leucineGrams: 2.6,
    highlightText: 'CORDYCEPS • ZERO PEA TASTE',
    stockLevel: 34
  },
  {
    id: 'the-chaos-bundle-4-0',
    name: 'THE CHAOS BUNDLE 4.0',
    price: 79.00,
    originalPrice: 105.00,
    category: 'HYPE BUNDLES',
    badge: '⚡ SAVE 25% HYPE BUNDLE',
    badgeStyle: 'lime',
    dropNumber: 'VALUE RIG',
    proteinGrams: 32,
    calories: 140,
    sugarGrams: 0,
    servingLabel: 'SNAG BUNDLE ($79.00)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMBstmLXg2CPc31ANhN_LN-45wH6ocRNFceFl75I7gna-1PBao0Qrt0lP8X6VVfXgkk_NV4kslX8PdKyGmikxlzRWHZNJ48-14DFgxOXIApudbOjbJ2aM2Do0EGY-ggdWQA0h8TBeD5vM0GrDeHSs1f_fm24GkwviccySO33h47v6U1EgFNRpwR7Bq8rix7eDg9qBZ_p0TvAFNwQO88EJhzRQ63Xz9d-TAoH19Rig83j8H5sbPIHVDcA',
    flavorSummary: 'Full sampler set: 6 best-selling bars, 1 powder tub of choice, custom thermal shaker and holographic decals.',
    quirkTag: 'Free express delivery included',
    quirkIcon: 'inventory_2',
    defaultFlavor: 'Hyper-Whey + Bars',
    flavors: ['Hyper-Whey + Bars', 'Plant-Matrix + Bars', 'All-Bar Overload'],
    description: 'The definitive initiation rig. 6 mixed Cyber-Crunch & Smash bars, 1 full-size Hyper-Whey tub, anodized double-wall insulated shaker cup, and die-cut holographic sticker kit.',
    bcaaGrams: 7.2,
    leucineGrams: 3.5,
    highlightText: '6 BARS + TUB + SHAKER + STICKERS',
    stockLevel: 11
  }
];

export const VIBE_PROFILES: Record<string, VibeData> = {
  heavy: {
    key: 'heavy',
    label: 'LIFT HEAVY',
    sublabel: 'Hypertrophy & Power',
    icon: 'fitness_center',
    iconColor: 'text-[#c8f300]',
    mode: 'MODE: MAXIMUM HYPERTROPHY PROTOCOL',
    title: 'THE ANABOLIC SURGE STACK',
    desc: 'Engineered for pure muscular density and zero-bloat recovery. High leucine concentration paired with cold-purified micro whey.',
    protein: '180G - 210G',
    timing: 'PRE & POST LIFT',
    speed: '< 30 MINS',
    prodName: 'HYPER-WHEY + SMASH BAR',
    price: '$68.00 (Bundle Discount Included)',
    matchedProductId: 'hyper-whey-isolate',
    matchedImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSaZQWSuCXIUVqIWxZXeIUIWV5g_nLgzDSsv6JP660rRrhSKzQo9TA8d6MHL1UXA_5l9vGE7AuaCRi1rYMhn_QR6SJM3preItKUMFxTpzumhopVU1hNzLJ1kWKgiAYPkEmWmUb7B9qyKnwRx7SPqLfTYD57TeL4qyEMFRflpuN_iJt05oRDNm7zYDbyGOAeAIWGVhw52xE09siPwYUYU06hMfi2hrX54_oV0wR3209OG_y1uWeU1fr4w'
  },
  night: {
    key: 'night',
    label: 'NIGHT OWLS',
    sublabel: 'Late Shifts & Grinds',
    icon: 'mode_night',
    iconColor: 'text-[#ff4b89]',
    mode: 'MODE: LATE-SHIFT SUSTAINED FOCUS',
    title: 'THE MIDNIGHT GLOW PROTOCOL',
    desc: 'Zero crash, gradual amino release engineered to sustain metabolic flow without wrecking your circadian rhythm or sleep cycle.',
    protein: '120G - 140G',
    timing: 'HOURLY ROTATION',
    speed: 'STEADY RELEASE',
    prodName: 'ZERO-GRAVITY RTD + CYBER-CRUNCH',
    price: '$62.00 (Late Night Fuel Rig)',
    matchedProductId: 'zero-gravity-rtd-shake',
    matchedImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADzQu62aN0xK3Nw7Dogc8YoRJl4CdvJlQc9d3UobKahkAa85DXRWGK2AlUs0QbPia99kl8BkzmHrEZv1qM1polerQ7-TEgqoPmowl2MHbjjcjSaK-2KrZd5OEooMO4zF-nhcfd_5PKlvs0j9-fQQuwAArMQNI3qLaR4VsF_qzkAUdf1YjhpI26BoKPJy64tPOLiQKagGtZMnGvFf6UelvEjCIHNXufDTntOEkbSS63Tpo863U_0BoS8Q'
  },
  endurance: {
    key: 'endurance',
    label: 'ENDURANCE',
    sublabel: 'Marathons & Agility',
    icon: 'directions_run',
    iconColor: 'text-[#c8f300]',
    mode: 'MODE: AEROBIC HYDRATION MATRIX',
    title: 'THE HIGH-MILEAGE BIO-STACK',
    desc: 'High electrolyte infusion, clean carbohydrates and ultra-light isolate to protect leg tendons and halt muscle cannibalization.',
    protein: '130G - 160G',
    timing: 'INTRA & POST RUN',
    speed: 'ULTRA RAPID',
    prodName: 'PLANT-MATRIX + ZERO-GRAVITY RTD',
    price: '$74.00 (Endurance Kit)',
    matchedProductId: 'plant-matrix-bio-fuel',
    matchedImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuh59FLVgz019-QMQoDK2lySey6ptPdSXgr5BbCx2MOFZW2VeR-AxQw77cCC0Vc8HSKVvo0uzkRs8yfvBwE3zKBJSqX4aB1juYGQA6Fieg5gl9W_6JRoD86HvZCo3XrjBgdmau9XGIIqOoz0G3weRnmFy_aDDCfkU3tZS9oHJB52yisydoX78Bz7_0Q6MA3G9ME415sZuAdEGJ02tqTsQb2vUYFh3BZd3Nq_LGfS-oA0FloK48hermOg'
  },
  esports: {
    key: 'esports',
    label: 'ESPORTS / WORK',
    sublabel: 'Laser Focus + Reflex',
    icon: 'sports_esports',
    iconColor: 'text-[#ff4b89]',
    mode: 'MODE: LASER-NEURAL RESPONSE',
    title: 'THE ESPORTS COGNITIVE RIG',
    desc: "Fortified with lion's mane mushroom, L-theanine, and zero sugar to stabilize jitter-free reaction times in high-pressure matches.",
    protein: '90G - 110G',
    timing: 'GAME SESSION START',
    speed: 'INSTANT ABSORB',
    prodName: 'PLANT-MATRIX BIO-FUEL (VANILLA CHAI)',
    price: '$46.00 (Clutch Edition)',
    matchedProductId: 'plant-matrix-bio-fuel',
    matchedImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSaZQWSuCXIUVqIWxZXeIUIWV5g_nLgzDSsv6JP660rRrhSKzQo9TA8d6MHL1UXA_5l9vGE7AuaCRi1rYMhn_QR6SJM3preItKUMFxTpzumhopVU1hNzLJ1kWKgiAYPkEmWmUb7B9qyKnwRx7SPqLfTYD57TeL4qyEMFRflpuN_iJt05oRDNm7zYDbyGOAeAIWGVhw52xE09siPwYUYU06hMfi2hrX54_oV0wR3209OG_y1uWeU1fr4w'
  }
};

export const BATCH_DATABASE: Record<string, BatchRecord> = {
  'PX-2025-NEON': {
    identity: 'PX-2025-NEON-WHEY',
    date: 'OCT 24, 2024',
    purity: '92.4% [SPEC: >90%] ✓',
    metals: 'NON-DETECTABLE (<0.01ppm) ✓',
    microbial: 'PASS (ZERO COLIFORM) ✓',
    auditor: 'EUROFINS BIOANALYTICAL TOKYO',
    status: '100% AUTHENTICATED',
    moistureContent: '3.1% (Standard)',
    leucineRatio: '11.8g / 100g Pure Protein'
  },
  'PX-TOKYO-MATCHA': {
    identity: 'PX-CEREMONIAL-MATCHA-ISOLATE',
    date: 'NOV 02, 2024',
    purity: '91.8% [SPEC: >90%] ✓',
    metals: 'NON-DETECTABLE (<0.01ppm) ✓',
    microbial: 'PASS (ZERO PATHOGENS) ✓',
    auditor: 'SGS PACIFIC TESTING CENTER',
    status: '100% AUTHENTICATED',
    moistureContent: '2.9% (Standard)',
    leucineRatio: '11.5g / 100g Pure Protein'
  },
  'PX-CYBER-CRUNCH': {
    identity: 'PX-CYBER-BAR-BATCH-088',
    date: 'DEC 14, 2024',
    purity: '93.2% [SPEC: >90%] ✓',
    metals: 'NON-DETECTABLE (<0.01ppm) ✓',
    microbial: 'PASS (ZERO COLIFORM) ✓',
    auditor: 'TOKYO FOOD SAFETY INSTITUTE',
    status: '100% AUTHENTICATED',
    moistureContent: '4.2% (Soft-Serve Core)',
    leucineRatio: '10.9g / 100g Pure Protein'
  }
};

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    handle: '@kai_lifts',
    location: 'Tokyo',
    role: 'VERIFIED CONSUMER',
    badgeColor: 'text-[#ff4b89]',
    comment: 'Zero chalk taste is actually real. Finished my third tub of Yuzu Matcha. Literally tastes like an iced latte.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv0Z__dbyg6bcnlZ6om1YNsuhySe81LcFeiftdPPTKb1N-uObTfWpFtZ3gH7zTJGatLWtu21UpjkEfv2SSYfRVDhuB9KoljXmQZbOYl4b9sRnHL479o-FXGNUa_bEKoVC-o4mm7YPjttctmm7rgDHjr6YfUdmJRAlwUqMyGcvVxjU_V1Gae1N5g3e88xQ-3_4033mXzfwYGtxVcXq4bPgu8-Nvnk438C5CcrpMA-Sq5YrOvStzM4JF8A',
    likes: 842,
    verified: true
  },
  {
    id: 'post-2',
    handle: '@sora.run',
    location: 'Seoul',
    role: 'VERIFIED CONSUMER',
    badgeColor: 'text-[#c8f300]',
    comment: 'The Cyber-Crunch Bar saved my half-marathon recovery. 22g protein without feeling like cement in my stomach.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3--DJhbQQe5Rmu7DJ4ck5X9iT2i9OTrzslQgTxUXwD67XK-IaEHzg4A_am4VT2p9LFGcSl39mjm7usGXVbwetlfbmTC-Mtvti_YZJEiAuI_O2ojLkoRZGd5oj5kV3062pND9pc5AiWQ8esgLGEYF49m93eyRTdLCcXAJkqWUKRUDXvMeTmYtGILOletBhkeW0sJW4xk6POuCSU43Ijc98f9G1FLQrMb7-BqXQClLHKXDpGJnCYQ5l0A',
    likes: 1209,
    verified: true
  },
  {
    id: 'post-3',
    handle: '@vortex_fps',
    location: 'Berlin',
    role: 'ESPORTS PRO',
    badgeColor: 'text-[#ff4b89]',
    comment: '6-hour Valorant scrims fuel. RTD Midnight Choco on ice beats any chemical energy drink 10 out of 10 times.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLHhFHUNRRBLKzeKWhYgm2IToqH2L8Q-01RUhL7QZ5bn7CyAin4H-L-asS0hrzZz4-uIKgjJJb4lM_83N78eR_231bP5owVNSNYkA1BbRg56oVx15lv_Xw7hx_Aj2-CWDMYXZJZeif9Rt-4EPMhvVtqP9ld3q7fNgZoWEG9wyUPaHnVdeunKWb2wo_bcs46BDeA_ly6euwRlXRYxoH7c-0fcjsXq3q8L72iXrs3FzWe4bPjMKjVQIw1w',
    likes: 2480,
    verified: true
  },
  {
    id: 'post-4',
    handle: '@milo_drops',
    location: 'London',
    role: 'HYPE COLLECTOR',
    badgeColor: 'text-[#c8f300]',
    comment: 'Unboxing this felt like getting a Supreme or Palace drop. The holographic stickers and shaker quality go insane.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsfLqtvlUHuBHwbfCy_k55fdwfCNkYCJLsOECZuru0NxzQ-IsPzrJxwI7YF0TQzUe6Z0X9FRn05Prx0gI3cYkMh9QAICtJE9tHchVt-C8ssreNvLsTIQ_Zc7YuPpZDA56qm_AKoBpzT_LY9NfF9G2vwdmAUMuwjYsWs_vJ6yv4akGpcynTw8q3M7ulx_2JWwm2IDJcpxPi_Dp1VzRnuNYaBwc_BbTs3ZvwuuiAFqWI3I_A1ST5hl4ZKQ',
    likes: 3120,
    verified: true
  }
];

export const HERO_AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuChy_mYW1JlrDRT77kkY2U7hDmawpjuaBDQ8sz5D2tGOTKT-vuW0wU-Dghx6AYU8KiL0l1zp9AU8_hcoNPFUQ7UrTajJHUw9WHvmmjI2R17TlVUMqhEJqRKccN2XbDsFmYm07wh0MJw86vYOed2DZep28e0Lzi8qt5bcFPlLcIBB1I4w4kNRzJbrcnxUAp8_40dMlOUj1ijryw979BGpjbWv3WvuvrGajkp2jen8Ht3zEYPHop2SMpAOg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqLfobF8hCQPMUM1wDWeW1JkVTBALqZEfQAXoUEbLSMJnGhoxJg2h2gg756CbTE3_-wrRTeTijwbygNH7MuvpHLzSyLecGpQov-0FZO8VQg9Ckrbt3SBKwRhBIoxgJ_sitZ0vG9UJuLhXPPEH-m9X_6fC0adLuAoTXXUxkv9w0VRvc-zE6FapVHB6Umd7FHyXHylSVEEJjotFTKJnefC4zSqB4mtSKr-onCfOUiGQcFwg3odMjoKs8cA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8IbfKMH4fKBG3ZKNPa_sQcWTXSM5J070j-87OgJjfHXZOCVSPn7TcKJqq6-h3FlkXRev-2bskPqeCB0CW8OCFY3reHKn2w4XotehRk1bEU2_xI8AANseSYQwRICi_HOMpFnzhJJn_pfiV3xJI9oxR0tCdlDiRu9GFvKRd_ovXJEGT6wLglFiAYh0bTAzOIM-tTuhjQ_NIvN8UxoMtbB2niJVUwnmdG9JCZWKXBxTAk9xK3FtVxvx5DA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWAxNLEUF_8BT97UVt5k2jCnTkE4-Yx3RnaZuEP2KjC6PshMBmupBhFoJerqxbtZSMdENfzG367Ro0KbRg3_u-abyu124gvGEBDOgdYW1XM2f7FBnplW34W0f3oPWLsJaE3JN3VCdL0U49uMGWQDmakoWQTa4iDdWSsPA2j86pKck8Utqph77TQ9PHltSg72vc_ECHi_UA_cxL7bzK831iTeHBqtpdCKWTBmBGMHTC7UGY0CdTYQtfng"
];
