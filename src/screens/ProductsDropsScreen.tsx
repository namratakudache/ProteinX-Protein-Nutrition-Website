import React, { useState } from 'react';
import { Product } from '../types';
import {
  PRODUCTS,
  VIBE_PROFILES,
  HERO_SHAKER_IMG,
  HERO_AVATARS,
  COMMUNITY_POSTS
} from '../data/catalog';

interface ProductsDropsScreenProps {
  onAddToCart: (product: Product, flavor: string, quantity: number) => void;
  onOpenProductDetail: (product: Product) => void;
  onNavigateTab: (tab: string) => void;
  onShowToast: (message: string) => void;
}

export const ProductsDropsScreen: React.FC<ProductsDropsScreenProps> = ({
  onAddToCart,
  onOpenProductDetail,
  onNavigateTab,
  onShowToast
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedFlavors, setSelectedFlavors] = useState<Record<string, string>>({
    'cyber-crunch-bar': 'Berry Glaze',
    'hyper-whey-isolate': 'Yuzu Matcha',
    'smash-bar-dual-crunch': 'Caramel Peanut',
    'zero-gravity-rtd-shake': 'Midnight Choco',
    'plant-matrix-bio-fuel': 'Vanilla Chai',
    'the-chaos-bundle-4-0': 'Hyper-Whey + Bars'
  });
  const [activeVibeKey, setActiveVibeKey] = useState<string>('heavy');

  const categories = [
    { id: 'ALL', label: 'ALL DROPS (06)' },
    { id: 'PROTEIN BARS', label: 'PROTEIN BARS' },
    { id: 'WHEY ISOLATES', label: 'WHEY ISOLATES' },
    { id: 'RTD SHAKES', label: 'RTD SHAKES' },
    { id: 'PLANT POWER', label: 'PLANT POWER' },
    { id: 'HYPE BUNDLES', label: 'HYPE BUNDLES' }
  ];

  const filteredProducts = activeCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const activeVibe = VIBE_PROFILES[activeVibeKey];

  const handleFlavorSelect = (productId: string, flavor: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFlavors((prev) => ({ ...prev, [productId]: flavor }));
  };

  const handleQuickDrop = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const flavor = selectedFlavors[product.id] || product.defaultFlavor;
    onAddToCart(product, flavor, 1);
  };

  const handleAddVibeStack = () => {
    const matchedProduct = PRODUCTS.find((p) => p.id === activeVibe.matchedProductId) || PRODUCTS[1];
    onAddToCart(matchedProduct, matchedProduct.defaultFlavor, 1);
    onShowToast(`DROPPED RECOMMENDED: ${activeVibe.prodName}`);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Marquee Banner */}
      <div className="w-full overflow-hidden bg-[#c8f300] text-[#171e00] py-1.5 font-['Space_Mono'] text-xs uppercase tracking-widest border-y-2 border-black">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-bold">
          <span className="flex items-center gap-6">
            <span>⚡ HIGH-VOLTAGE NUTRITION</span>
            <span>•</span>
            <span>NO NASTY AFTERTASTE</span>
            <span>•</span>
            <span>CLEAN MACROS ONLY</span>
            <span>•</span>
            <span>INSTANT RECOVERY GAINS</span>
            <span>•</span>
            <span>LAB-TESTED PURE FUEL</span>
            <span>•</span>
            <span>DROPPING EVERY FRIDAY</span>
            <span>•</span>
          </span>
          <span className="flex items-center gap-6">
            <span>⚡ HIGH-VOLTAGE NUTRITION</span>
            <span>•</span>
            <span>NO NASTY AFTERTASTE</span>
            <span>•</span>
            <span>CLEAN MACROS ONLY</span>
            <span>•</span>
            <span>INSTANT RECOVERY GAINS</span>
            <span>•</span>
            <span>LAB-TESTED PURE FUEL</span>
            <span>•</span>
            <span>DROPPING EVERY FRIDAY</span>
            <span>•</span>
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full px-4 md:px-10 pt-8 pb-16 overflow-hidden">
        {/* Ambient Cyber Glows */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#c8f300]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#ff4b89]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] md:text-xs px-3 py-1 rounded-full uppercase -rotate-2 shadow-[3px_3px_0px_#000000] font-bold">
                <span className="material-symbols-outlined text-sm">bolt</span> DROP #094 LIVE NOW
              </span>
              <span className="inline-flex items-center gap-1 bg-[#292a2d] text-[#c8f300] font-['Space_Mono'] text-[10px] md:text-xs px-3 py-1 rounded-full uppercase rotate-1 font-bold">
                <span className="material-symbols-outlined text-sm">verified</span> 100% WHEY ISOLATE
              </span>
              <span className="inline-flex items-center gap-1 bg-[#292a2d] text-[#ffb1c3] font-['Space_Mono'] text-[10px] md:text-xs px-3 py-1 rounded-full uppercase font-bold">
                ZERO ADDED SUGAR
              </span>
            </div>

            <h1 className="font-['Syne'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-none font-extrabold">
              NO CHALK.<br />
              <span className="text-[#c8f300]">ALL HYPE.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b89] to-[#c8f300]">
                30G PURE KICK.
              </span>
            </h1>

            <p className="font-['Space_Grotesk'] text-base md:text-lg text-[#c5c9ac] max-w-xl leading-relaxed">
              Ditch the boring gym-bro sawdust. High-voltage functional fuel engineered for the chronically active, late-night grinders, esports contenders, and heavy lifters.
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#drops-matrix"
                className="inline-flex items-center justify-center gap-2 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs md:text-sm font-bold px-6 py-4 rounded-xl uppercase transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#ff4b89] active:translate-y-1 shadow-[4px_4px_0px_#000000] cursor-pointer"
              >
                <span>SHOP THE LATEST DROP</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </a>

              <a
                href="#vibe-engine"
                className="inline-flex items-center justify-center gap-2 bg-[#1f1f23] text-white font-['Space_Mono'] text-xs md:text-sm font-bold px-6 py-4 rounded-xl uppercase transition-all hover:bg-[#292a2d] hover:text-[#c8f300] shadow-[4px_4px_0px_#000000] cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">science</span>
                <span>MATCH YOUR VIBE</span>
              </a>
            </div>

            {/* Social Proof Grid */}
            <div className="pt-5 mt-3 border-t border-[#292a2d] flex flex-wrap items-center gap-6">
              <div className="flex items-center -space-x-3">
                {HERO_AVATARS.map((avatar, idx) => (
                  <img
                    key={idx}
                    alt="Athlete endorsing ProteinX"
                    className="w-10 h-10 rounded-full border-2 border-[#0d0e11] object-cover"
                    src={avatar}
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-[#c8f300] text-[#171e00] flex items-center justify-center font-['Space_Mono'] text-xs font-bold border-2 border-[#0d0e11]">
                  85K+
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#c8f300]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="font-['Space_Mono'] text-xs text-white ml-1 font-bold">4.9/5</span>
                </div>
                <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac]">
                  Endorsed by 85,000+ athletes, speedrunners & soundcloud fiends
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Bento */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#1b1b1f] border border-[#292a2d] rounded-2xl p-4 shadow-[8px_8px_0px_#000000]">
              {/* Overlapping Hype Sticker Badges */}
              <div className="absolute -top-4 -right-2 z-20 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs px-3 py-1.5 rounded-full font-extrabold uppercase rotate-6 shadow-[3px_3px_0px_#000000]">
                ⚡ FLAVOR COLLAPSE
              </div>
              <div className="absolute -bottom-3 -left-3 z-20 bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] px-3 py-1 rounded-full font-extrabold uppercase -rotate-6 shadow-[3px_3px_0px_#000000]">
                CERTIFIED DELICIOUS 🍦
              </div>

              <div className="relative w-full h-[400px] md:h-[440px] rounded-xl overflow-hidden bg-[#0d0e11] flex items-center justify-center">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="High energy 3D cinematic render of electric neon lime and hot pink ProteinX matte black supplement shaker bottle floating alongside unwrapped chunky chocolate crisped protein bars with hyper-saturated glossy liquid splash droplets and floating cybernetic ingredients against obsidian background"
                  src={HERO_SHAKER_IMG}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating Micro Spec HUD */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1f1f23]/90 backdrop-blur-md p-3 rounded-xl flex items-center justify-between border border-[#292a2d] shadow-[4px_4px_0px_#000000]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#c8f300] text-[#171e00] flex items-center justify-center font-['Space_Mono'] font-bold text-sm">
                      30
                    </div>
                    <div>
                      <div className="font-['Space_Mono'] text-[11px] text-[#c8f300] font-bold leading-tight">
                        GRAMS PROTEIN
                      </div>
                      <div className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] leading-tight">
                        100% Cold Micro-filtered
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-['Space_Mono'] text-xs font-bold text-[#ff4b89]">0g SUGAR</div>
                    <div className="font-['Space_Grotesk'] text-xs text-[#c5c9ac]">Instant Mix</div>
                  </div>
                </div>
              </div>

              {/* Secondary Bento Bar Spec Snapshot */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-[#1f1f23] p-2 rounded-lg text-center border border-[#292a2d]">
                  <span className="block font-['Space_Mono'] text-[10px] text-[#8f9378]">BCAAs</span>
                  <span className="font-['Syne'] text-base text-white font-bold">7.2G</span>
                </div>
                <div className="bg-[#1f1f23] p-2 rounded-lg text-center border border-[#292a2d]">
                  <span className="block font-['Space_Mono'] text-[10px] text-[#8f9378]">CALORIES</span>
                  <span className="font-['Syne'] text-base text-[#c8f300] font-bold">140</span>
                </div>
                <div className="bg-[#1f1f23] p-2 rounded-lg text-center border border-[#292a2d]">
                  <span className="block font-['Space_Mono'] text-[10px] text-[#8f9378]">DIGESTION</span>
                  <span className="font-['Syne'] text-base text-[#ff4b89] font-bold">0 BLOAT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Density Drops Matrix Section */}
      <section className="w-full px-4 md:px-10 py-16 bg-[#0d0e11] border-t border-[#292a2d]" id="drops-matrix">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-[10px] px-3 py-0.5 rounded-full uppercase font-bold mb-2 shadow-[2px_2px_0px_#000000]">
              HYPER INVENTORY
            </div>
            <h2 className="font-['Syne'] text-3xl md:text-5xl tracking-tight uppercase text-white leading-none font-extrabold">
              THE VAULT <span className="text-[#c8f300]">&amp; DROPS</span>
            </h2>
            <p className="font-['Space_Grotesk'] text-sm md:text-base text-[#c5c9ac] mt-2">
              Lab-brewed in small batches. Once a drop sells out, it enters the flavor afterlife.
            </p>
          </div>

          {/* Live Stock Telemetry Indicator */}
          <div className="flex items-center gap-3 bg-[#1b1b1f] border border-[#292a2d] px-4 py-2 rounded-xl shadow-[2px_2px_0px_#000000]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4b89] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff4b89]" />
            </span>
            <span className="font-['Space_Mono'] text-xs uppercase font-bold text-white">
              RESTOCK CADENCE: LIVE VIA TOKYO HQ
            </span>
          </div>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-['Space_Mono'] text-xs uppercase font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#c8f300] text-[#171e00] shadow-[3px_3px_0px_#000000]'
                    : 'bg-[#1f1f23] text-[#c5c9ac] hover:bg-[#292a2d] hover:text-white border border-[#292a2d]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid: 6 Distinct Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const currentFlavor = selectedFlavors[product.id] || product.defaultFlavor;

            return (
              <div
                key={product.id}
                onClick={() => onOpenProductDetail(product)}
                className="group relative bg-[#1b1b1f] border border-[#292a2d] rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#c8f300] cursor-pointer"
              >
                {/* Badge Tag */}
                <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
                  <span
                    className={`font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold shadow-[2px_2px_0px_#000000] ${
                      product.badgeStyle === 'pink'
                        ? 'bg-[#ff4b89] text-[#590026] -rotate-2'
                        : product.badgeStyle === 'lime'
                        ? 'bg-[#c8f300] text-[#171e00] rotate-1'
                        : 'bg-[#292a2d] text-white -rotate-1'
                    }`}
                  >
                    {product.badge}
                  </span>
                  <span className="font-['Space_Mono'] text-xs text-[#c8f300] uppercase font-bold">
                    {product.dropNumber}
                  </span>
                </div>

                {/* Product Image Showcase */}
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-[#0d0e11] mb-4 flex items-center justify-center border border-[#292a2d]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={product.name}
                    src={product.image}
                  />
                  <div className="absolute top-2 right-2 bg-[#343538]/90 px-2 py-1 rounded font-['Space_Mono'] text-xs text-[#c8f300] font-bold">
                    {product.proteinGrams}G PROTEIN
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded font-['Space_Mono'] text-[11px] text-[#8f9378]">
                    {product.highlightText}
                  </div>
                </div>

                {/* Meta Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Syne'] text-lg font-bold uppercase text-white group-hover:text-[#c8f300] transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      {product.originalPrice && (
                        <span className="font-['Space_Mono'] text-xs text-[#8f9378] line-through mr-1">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="font-['Syne'] text-lg font-bold text-white">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] line-clamp-2">
                    {product.flavorSummary}
                  </p>

                  {/* Gen-Z Quirk Tag */}
                  <div className="inline-flex items-center gap-1 text-[#ff4b89] font-['Space_Mono'] text-xs pt-1">
                    <span className="material-symbols-outlined text-sm">{product.quirkIcon}</span>
                    <span>{product.quirkTag}</span>
                  </div>

                  {/* Interactive Flavor Selector Chips */}
                  <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                    {product.flavors.map((flavor) => {
                      const isSelected = currentFlavor === flavor;
                      return (
                        <button
                          key={flavor}
                          type="button"
                          onClick={(e) => handleFlavorSelect(product.id, flavor, e)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-['Space_Mono'] transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#c8f300] text-[#171e00] font-bold shadow-[2px_2px_0px_#000000]'
                              : 'bg-[#292a2d] text-[#c5c9ac] hover:text-white'
                          }`}
                        >
                          {flavor}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Drop Action */}
                <button
                  type="button"
                  onClick={(e) => handleQuickDrop(product, e)}
                  className="w-full bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs py-3 rounded-xl uppercase font-bold flex items-center justify-center gap-2 transition-transform active:translate-y-0.5 shadow-[3px_3px_0px_#000000] cursor-pointer hover:bg-[#afd500]"
                >
                  <span className="material-symbols-outlined text-base">shopping_cart</span>
                  <span>{product.servingLabel}</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Vibe & Macro Recommendation Engine */}
      <section className="w-full px-4 md:px-10 py-16" id="vibe-engine">
        <div className="bg-[#1f1f23] border border-[#292a2d] rounded-3xl p-6 md:p-12 shadow-[8px_8px_0px_#000000] relative overflow-hidden">
          {/* Glow Accents */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#c8f300]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <span className="bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold -rotate-1 inline-block mb-2 shadow-[2px_2px_0px_#000000]">
              ALGORITHM V2.4
            </span>
            <h2 className="font-['Syne'] text-3xl md:text-5xl tracking-tight uppercase text-white leading-none font-extrabold">
              MATCH YOUR <span className="text-[#c8f300]">CURRENT VIBE</span>
            </h2>
            <p className="font-['Space_Grotesk'] text-base text-[#c5c9ac] mt-2">
              Select how you push your limits today. Our algorithm computes your target macro ratio and matches your personal ProteinX fueling stack.
            </p>
          </div>

          {/* Vibe Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {Object.values(VIBE_PROFILES).map((vibe) => {
              const isSelected = activeVibeKey === vibe.key;
              return (
                <button
                  key={vibe.key}
                  type="button"
                  onClick={() => setActiveVibeKey(vibe.key)}
                  className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between h-32 shadow-[3px_3px_0px_#000000] cursor-pointer ${
                    isSelected
                      ? 'bg-[#292a2d] border-2 border-[#c8f300]'
                      : 'bg-[#1b1b1f] hover:bg-[#292a2d] border border-[#292a2d]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl ${vibe.iconColor}`}>
                    {vibe.icon}
                  </span>
                  <div>
                    <div className="font-['Syne'] text-sm md:text-base font-bold uppercase text-white leading-tight">
                      {vibe.label}
                    </div>
                    <div className="font-['Space_Grotesk'] text-xs text-[#c5c9ac]">
                      {vibe.sublabel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Stack Output Module */}
          <div className="bg-[#0d0e11] border border-[#292a2d] p-5 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_#000000]">
            {/* Target Spec Telemetry */}
            <div className="w-full lg:w-1/2 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c8f300] animate-pulse" />
                <span className="font-['Space_Mono'] text-xs uppercase font-bold text-[#c8f300]">
                  {activeVibe.mode}
                </span>
              </div>
              <h3 className="font-['Syne'] text-2xl md:text-3xl font-extrabold uppercase text-white leading-tight">
                {activeVibe.title}
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac]">
                {activeVibe.desc}
              </p>

              {/* Macro Ticker Breakdown */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="bg-[#1f1f23] p-2.5 rounded-xl border border-[#292a2d]">
                  <span className="font-['Space_Mono'] text-[10px] text-[#8f9378] block">DAILY PROTEIN</span>
                  <span className="font-['Syne'] text-base text-[#c8f300] font-bold">{activeVibe.protein}</span>
                </div>
                <div className="bg-[#1f1f23] p-2.5 rounded-xl border border-[#292a2d]">
                  <span className="font-['Space_Mono'] text-[10px] text-[#8f9378] block">TIMING WINDOW</span>
                  <span className="font-['Syne'] text-base text-white font-bold">{activeVibe.timing}</span>
                </div>
                <div className="bg-[#1f1f23] p-2.5 rounded-xl border border-[#292a2d]">
                  <span className="font-['Space_Mono'] text-[10px] text-[#8f9378] block">DIGESTION SPEED</span>
                  <span className="font-['Syne'] text-base text-[#ff4b89] font-bold">{activeVibe.speed}</span>
                </div>
              </div>
            </div>

            {/* Matched Product Recommendation Box */}
            <div className="w-full lg:w-1/2 bg-[#292a2d] border border-[#343538] rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-28 h-28 shrink-0 bg-[#0d0e11] rounded-xl overflow-hidden flex items-center justify-center border border-[#292a2d]">
                <img
                  className="w-full h-full object-cover"
                  alt={activeVibe.prodName}
                  src={activeVibe.matchedImage}
                />
              </div>
              <div className="space-y-1 w-full text-center sm:text-left">
                <div className="font-['Space_Mono'] text-[11px] text-[#ff4b89] uppercase font-bold">
                  PERFECT MATCH ITEM
                </div>
                <div className="font-['Syne'] text-base md:text-lg font-bold uppercase text-white">
                  {activeVibe.prodName}
                </div>
                <div className="font-['Space_Grotesk'] text-xs text-[#c5c9ac]">
                  {activeVibe.price}
                </div>
                <button
                  type="button"
                  onClick={handleAddVibeStack}
                  className="mt-2 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs px-4 py-2.5 rounded-lg uppercase font-bold flex items-center justify-center sm:justify-start gap-1 transition-transform active:translate-y-0.5 shadow-[2px_2px_0px_#000000] cursor-pointer hover:bg-[#afd500] w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  <span>ADD RECOMMENDED STACK</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gen-Z Community Proof Grid & UGC Wall */}
      <section className="w-full px-4 md:px-10 py-16 bg-[#0d0e11] border-t border-[#292a2d]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold -rotate-1 inline-block mb-2 shadow-[2px_2px_0px_#000000]">
              #PROTEINX DROP FEED
            </span>
            <h2 className="font-['Syne'] text-3xl md:text-5xl tracking-tight uppercase text-white leading-none font-extrabold">
              UNFILTERED <span className="text-[#ff4b89]">HYPE SQUAD</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigateTab('community-and-hype')}
            className="inline-flex items-center gap-1 font-['Space_Mono'] text-xs text-[#c8f300] uppercase hover:text-white transition-colors cursor-pointer"
          >
            <span>JOIN CLUB X ON DISCORD (34K MEMBERS)</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        {/* 4-Card Community Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMMUNITY_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-[#1b1b1f] border border-[#292a2d] p-3 rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_#000000]"
            >
              <div className="h-60 rounded-xl overflow-hidden bg-[#0d0e11] mb-3 relative">
                <img
                  className="w-full h-full object-cover"
                  alt={`Community review by ${post.handle}`}
                  src={post.image}
                />
                <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 rounded font-['Space_Mono'] text-[11px] text-white">
                  {post.handle} • {post.location}
                </div>
              </div>

              <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] italic leading-relaxed">
                "{post.comment}"
              </p>

              <div className={`pt-3 flex items-center justify-between ${post.badgeColor}`}>
                <span className="font-['Space_Mono'] text-[10px] font-bold">{post.role}</span>
                <span className="material-symbols-outlined text-base">verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
