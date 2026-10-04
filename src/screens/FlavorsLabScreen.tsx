import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/catalog';

interface FlavorsLabScreenProps {
  onAddToCart: (product: Product, flavor: string, quantity: number) => void;
  onShowToast: (message: string) => void;
}

export const FlavorsLabScreen: React.FC<FlavorsLabScreenProps> = ({
  onAddToCart,
  onShowToast
}) => {
  const [selectedBase, setSelectedBase] = useState('matcha');
  const [sweetnessLevel, setSweetnessLevel] = useState(30);
  const [foamDensity, setFoamDensity] = useState(75);
  const [dissolving, setDissolving] = useState(false);
  const [dissolveSeconds, setDissolveSeconds] = useState<number | null>(null);
  const [votedFlavor, setVotedFlavor] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({
    'ELECTRIC BLUE LYCHEE': 1420,
    'TOKYO BLACK SESAME LATTE': 984,
    'SOUR WATERMELON VOID': 2105,
    'GOLDEN MATCHA TART': 812
  });

  const flavorBases: Record<string, { name: string; note: string; color: string; product: Product }> = {
    matcha: {
      name: 'Yuzu Matcha Cloud Foam',
      note: 'Ceremonial Uji matcha, cold-filtered sweet citrus yuzu peel oil, creamy foam crown.',
      color: '#c8f300',
      product: PRODUCTS[1]
    },
    choco: {
      name: 'Midnight Chocolate Eclipse',
      note: 'Single-origin 85% Belgian dark cocoa, cold hazelnut milk infusion, zero chalk.',
      color: '#ff4b89',
      product: PRODUCTS[3]
    },
    berry: {
      name: 'Neon Berry Electric Glaze',
      note: 'Wild arctic blueberry puree, tart raspberry crisps, melted soft-serve finish.',
      color: '#ffb1c3',
      product: PRODUCTS[0]
    },
    chai: {
      name: 'Vanilla Chai Stardust',
      note: 'Cardamom pods, organic lion’s mane mushroom, Ceylon cinnamon, Madagascar vanilla.',
      color: '#c8f300',
      product: PRODUCTS[4]
    }
  };

  const currentBase = flavorBases[selectedBase];

  const handleSimulateDissolve = () => {
    setDissolving(true);
    setDissolveSeconds(3.8);

    const interval = setInterval(() => {
      setDissolveSeconds((prev) => {
        if (prev === null || prev <= 0.2) {
          clearInterval(interval);
          setDissolving(false);
          onShowToast('DISSOLUTION COMPLETE: 3.8s // ZERO CLUMPS VERIFIED');
          return 0;
        }
        return Number((prev - 0.2).toFixed(1));
      });
    }, 200);
  };

  const handleVote = (flavorKey: string) => {
    if (votedFlavor) return;
    setVotedFlavor(flavorKey);
    setVotes((prev) => ({ ...prev, [flavorKey]: prev[flavorKey] + 1 }));
    onShowToast(`VOTE RECORDED FOR "${flavorKey}". TOKYO HQ SYNCED.`);
  };

  const handleOrderCustomBase = () => {
    onAddToCart(currentBase.product, `${currentBase.name} (Custom Lab Mix)`, 1);
    onShowToast(`CUSTOM FORMULATION DROPPED IN CART!`);
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-10 py-10 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-3 py-1 rounded-full uppercase -rotate-1 shadow-[2px_2px_0px_#000000]">
            SHIBUYA SENSORY STUDIO
          </span>
          <span className="font-['Space_Mono'] text-xs text-[#8f9378]">PX-FLAVOR-SYNTHESIS</span>
        </div>
        <h1 className="font-['Syne'] text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight leading-none">
          THE SENSORY <span className="text-[#c8f300]">FLAVORS LAB</span>
        </h1>
        <p className="font-['Space_Grotesk'] text-base text-[#c5c9ac] max-w-2xl">
          Where culinary physics meets sports biochemistry. Experiment with flavor compounds, simulate cold-water dissolution kinetics, and vote on upcoming clandestine drops.
        </p>
      </div>

      {/* Interactive Formulation Station */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Formulator Controls */}
        <div className="lg:col-span-7 bg-[#1b1b1f] border border-[#292a2d] p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_#000000] space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#292a2d]">
            <span className="font-['Space_Mono'] text-xs text-[#c8f300] font-bold uppercase">
              1. CHOOSE FLAVOR GENOME
            </span>
            <span className="font-['Space_Mono'] text-[11px] text-[#8f9378]">4 ACTIVE PROTOTYPES</span>
          </div>

          {/* Flavor Genome Selectors */}
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(flavorBases).map(([key, data]) => {
              const isSelected = selectedBase === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedBase(key)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#292a2d] border-[#c8f300] shadow-[3px_3px_0px_#c8f300]'
                      : 'bg-[#121316] border-[#292a2d] text-[#c5c9ac] hover:border-[#343538]'
                  }`}
                >
                  <p className="font-['Syne'] text-sm font-bold uppercase text-white">{data.name}</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#8f9378] mt-1 line-clamp-1">{data.note}</p>
                </button>
              );
            })}
          </div>

          {/* Sliders */}
          <div className="space-y-5 pt-2">
            <div>
              <div className="flex justify-between font-['Space_Mono'] text-xs text-white mb-2">
                <span>SWEETNESS PROFILE (NATURAL MONK FRUIT)</span>
                <span className="text-[#c8f300] font-bold">{sweetnessLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sweetnessLevel}
                onChange={(e) => setSweetnessLevel(Number(e.target.value))}
                className="w-full accent-[#c8f300] cursor-pointer"
              />
              <div className="flex justify-between font-['Space_Mono'] text-[10px] text-[#8f9378] mt-1">
                <span>RAW / UNSWEETENED</span>
                <span>SUBTLE CRUNCH SWEET</span>
                <span>DESSERT INTENSE</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-['Space_Mono'] text-xs text-white mb-2">
                <span>CLOUD FOAM DENSITY (DIGEZYME® SILK FINISH)</span>
                <span className="text-[#ff4b89] font-bold">{foamDensity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={foamDensity}
                onChange={(e) => setFoamDensity(Number(e.target.value))}
                className="w-full accent-[#ff4b89] cursor-pointer"
              />
              <div className="flex justify-between font-['Space_Mono'] text-[10px] text-[#8f9378] mt-1">
                <span>ULTRA-LIGHT HYDRATION</span>
                <span>MEDIUM CREAM</span>
                <span>VELVET CLOUD SUNDAE</span>
              </div>
            </div>
          </div>

          {/* Dissolution Simulator */}
          <div className="bg-[#121316] border border-[#292a2d] p-4 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-['Space_Mono'] text-xs text-[#8f9378] uppercase">
                COLD WATER KINETICS TEST (4°C ICE WATER)
              </span>
              <span className="font-['Space_Mono'] text-xs text-[#c8f300] font-bold">
                {dissolveSeconds !== null ? `${dissolveSeconds}s REMAINING` : 'READY'}
              </span>
            </div>

            <div className="w-full h-3 bg-[#1f1f23] rounded-full overflow-hidden border border-[#292a2d]">
              <div
                className="h-full bg-gradient-to-r from-[#c8f300] to-[#ff4b89] transition-all duration-200"
                style={{
                  width: dissolving
                    ? `${((3.8 - (dissolveSeconds || 0)) / 3.8) * 100}%`
                    : dissolveSeconds === 0
                    ? '100%'
                    : '0%'
                }}
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac]">
                Dissolves completely within 4 seconds without shaker whisk ball.
              </p>
              <button
                type="button"
                onClick={handleSimulateDissolve}
                disabled={dissolving}
                className="bg-[#292a2d] hover:bg-[#343538] text-white font-['Space_Mono'] text-xs px-3 py-1.5 rounded-lg uppercase cursor-pointer disabled:opacity-50"
              >
                {dissolving ? 'TESTING...' : 'RUN KINETICS TEST'}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleOrderCustomBase}
            className="w-full bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider shadow-[4px_4px_0px_#000000] cursor-pointer hover:bg-[#afd500] transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">science</span>
            <span>DROP THIS FORMULATION IN CART (${currentBase.product.price.toFixed(2)})</span>
          </button>
        </div>

        {/* Right Flavor Specification Card */}
        <div className="lg:col-span-5 bg-[#1b1b1f] border border-[#292a2d] rounded-2xl p-6 shadow-[8px_8px_0px_#000000] space-y-5">
          <div className="w-full h-64 rounded-xl overflow-hidden bg-[#0d0e11] border border-[#292a2d] relative">
            <img
              src={currentBase.product.image}
              alt={currentBase.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow-[2px_2px_0px_#000000]">
              LAB-SPEC FORMULA
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-['Space_Mono'] text-[11px] text-[#c8f300] uppercase font-bold">
              FLAVOR PROFILE MATRIX
            </span>
            <h3 className="font-['Syne'] text-2xl font-bold uppercase text-white">
              {currentBase.name}
            </h3>
            <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] leading-relaxed">
              {currentBase.note}
            </p>
          </div>

          <div className="bg-[#121316] border border-[#292a2d] p-4 rounded-xl space-y-2 text-xs font-['Space_Mono'] text-[#c5c9ac]">
            <div className="flex justify-between">
              <span>MICRONIZED TEXTURE</span>
              <span className="text-white">&lt; 38 MICRONS (VELVET)</span>
            </div>
            <div className="flex justify-between">
              <span>DIGESTIVE LATENCY</span>
              <span className="text-[#c8f300]">IMMEDIATE (&lt; 20 MIN)</span>
            </div>
            <div className="flex justify-between">
              <span>AFTERTASTE METRIC</span>
              <span className="text-[#ff4b89]">0.0% ARTIFICIAL METALLIC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Community Flavor Voting Terminal */}
      <section className="bg-[#0d0e11] border border-[#292a2d] p-6 md:p-10 rounded-2xl shadow-[8px_8px_0px_#000000] space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold inline-block mb-2 shadow-[2px_2px_0px_#000000]">
              DEMOCRACY IN CHAOS
            </span>
            <h2 className="font-['Syne'] text-2xl md:text-4xl uppercase text-white font-extrabold tracking-tight">
              VOTE NEXT CLANDESTINE DROP
            </h2>
          </div>
          <p className="font-['Space_Grotesk'] text-xs md:text-sm text-[#c5c9ac] max-w-md">
            The flavor with the highest syndicate votes will enter immediate 500-unit pilot production at Tokyo HQ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(votes).map(([flavorName, voteCount]) => {
            const hasVotedThis = votedFlavor === flavorName;
            return (
              <div
                key={flavorName}
                className="bg-[#1b1b1f] border border-[#292a2d] p-4 rounded-xl flex flex-col justify-between h-44 shadow-[4px_4px_0px_#000000]"
              >
                <div>
                  <span className="text-[10px] font-['Space_Mono'] text-[#c8f300] uppercase font-bold">
                    PILOT PROTOTYPE
                  </span>
                  <h4 className="font-['Syne'] text-base font-bold uppercase text-white mt-1 leading-snug">
                    {flavorName}
                  </h4>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-['Space_Mono'] text-[#8f9378] mb-2">
                    <span>VOTES CAST</span>
                    <span className="text-white font-bold">{voteCount.toLocaleString()}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleVote(flavorName)}
                    disabled={!!votedFlavor}
                    className={`w-full py-2 rounded-lg font-['Space_Mono'] text-xs font-bold uppercase transition-all cursor-pointer ${
                      hasVotedThis
                        ? 'bg-[#c8f300] text-[#171e00] shadow-[2px_2px_0px_#000000]'
                        : 'bg-[#292a2d] hover:bg-[#343538] text-white disabled:opacity-40'
                    }`}
                  >
                    {hasVotedThis ? 'VOTED ✓' : 'VOTE THIS DROP'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
