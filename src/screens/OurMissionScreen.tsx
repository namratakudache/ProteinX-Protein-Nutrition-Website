import React, { useState } from 'react';
import {
  MISSION_REVOLT_IMG,
  LAB_01_IMG,
  LAB_02_IMG,
  LAB_03_IMG,
  BATCH_DATABASE
} from '../data/catalog';
import { BatchRecord } from '../types';

interface OurMissionScreenProps {
  onNavigateTab: (tab: string) => void;
  onShowToast: (message: string) => void;
}

export const OurMissionScreen: React.FC<OurMissionScreenProps> = ({
  onNavigateTab,
  onShowToast
}) => {
  const [batchQuery, setBatchQuery] = useState('PX-2025-NEON');
  const [verifiedBatch, setVerifiedBatch] = useState<BatchRecord | null>(BATCH_DATABASE['PX-2025-NEON']);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (codeToVerify?: string) => {
    const code = (codeToVerify || batchQuery).trim().toUpperCase();
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      const match = BATCH_DATABASE[code] || {
        identity: `${code}-LAB-VERIFIED`,
        date: 'CURRENT RECOVERY RUN',
        purity: '93.4% [SPEC: >90%] ✓',
        metals: 'NON-DETECTABLE (<0.01ppm) ✓',
        microbial: 'PASS (ZERO RESIDUE) ✓',
        auditor: 'GLOBAL LAB CONSORTIUM PACIFIC',
        status: '100% AUTHENTICATED',
        moistureContent: '2.8% (Target)',
        leucineRatio: '11.6g / 100g Pure Protein'
      };
      setVerifiedBatch(match);
      onShowToast(`BATCH ${code} VERIFIED BY TOKYO BIOANALYTICAL`);
    }, 450);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Flash Ticker */}
      <div className="w-full bg-[#ff4b89] text-[#590026] py-1.5 px-4 md:px-10 overflow-hidden select-none border-b-2 border-black">
        <div className="flex items-center justify-between font-['Space_Mono'] text-[11px] uppercase tracking-widest font-bold">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c8f300] animate-ping" />
            MANIFESTO ENTRY #009 // SYSTEM OVERRIDE
          </span>
          <span className="hidden md:inline-block">STATUS: DEPLOYED WORLDWIDE // ZERO CHALK DETECTED</span>
          <span>PUBLIC ACCESS GRANTED</span>
        </div>
      </div>

      {/* Hero Manifesto */}
      <section className="relative w-full px-4 md:px-10 pt-8 pb-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c8f300]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#ff4b89]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start gap-5">
          {/* Tagline Pill & Sticker */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-[3px_3px_0px_#000000] font-bold -rotate-1">
              <span className="material-symbols-outlined text-sm">bolt</span>
              THE ANTI-BORING NUTRITION MANIFESTO
            </span>
            <span className="inline-block bg-[#292a2d] text-[#ffb1c3] font-['Space_Mono'] text-[10px] px-2.5 py-1 rounded-full uppercase rotate-2 shadow-[2px_2px_0px_#000000] font-bold">
              VERIFIED CLEAN // NO BS
            </span>
          </div>

          {/* Massive Display Title */}
          <h1 className="font-['Syne'] text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none mt-1">
            WE BUILT <span className="text-[#c8f300] inline-block hover:skew-x-2 transition-transform">PROTEINX</span> BECAUSE{' '}
            <span className="text-[#ff4b89] underline decoration-[#c8f300] decoration-4">
              GYM-BRO POWDERS SUCK.
            </span>
          </h1>

          {/* Narrative & Visual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start mt-2">
            <div className="lg:col-span-7 space-y-4">
              <p className="font-['Space_Grotesk'] text-base md:text-lg text-white leading-relaxed">
                Why does sports nutrition still look like a 1990s sterile pharmaceutical lab or an apocalyptic military surplus stash? Gray tubs, aggressive fonts shouting toxic masculinity, and chalky sludges that taste like pulverized drywall.
              </p>
              <p className="font-['Space_Grotesk'] text-sm md:text-base text-[#c5c9ac] leading-relaxed">
                We ripped up the boomer playbook. We killed the throat-choking foam, banned shadowy "proprietary" blends, and engineered clean bio-fuel calibrated for how our generation actually moves, creates, hacks, and trains.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#1b1b1f] border border-[#292a2d] px-3 py-2 rounded-lg shadow-[2px_2px_0px_#000000]">
                  <span className="material-symbols-outlined text-[#c8f300] text-lg">check_circle</span>
                  <span className="font-['Space_Mono'] text-[11px] text-white uppercase font-bold">
                    420+ Taste R&amp;D Iterations
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#1b1b1f] border border-[#292a2d] px-3 py-2 rounded-lg shadow-[2px_2px_0px_#000000]">
                  <span className="material-symbols-outlined text-[#ff4b89] text-lg">cancel</span>
                  <span className="font-['Space_Mono'] text-[11px] text-white uppercase font-bold">
                    Zero Artificial Dyes
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#1b1b1f] border border-[#292a2d] px-3 py-2 rounded-lg shadow-[2px_2px_0px_#000000]">
                  <span className="material-symbols-outlined text-[#c8f300] text-lg">public</span>
                  <span className="font-['Space_Mono'] text-[11px] text-white uppercase font-bold">
                    100% Recyclable Aluminum
                  </span>
                </div>
              </div>
            </div>

            {/* Manifesto Visual Card */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative bg-[#1b1b1f] border border-[#292a2d] p-4 rounded-xl shadow-[8px_8px_0px_#000000] overflow-hidden group">
                <div className="absolute -right-4 -top-4 bg-[#ff4b89] text-[#590026] font-['Syne'] text-base px-4 py-1 rounded-full uppercase font-extrabold rotate-12 shadow-[3px_3px_0px_#000000] z-20">
                  REVOLT!
                </div>
                <img
                  className="w-full h-72 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  alt="Futuristic neon protein drink container bathed in electric lime and neon magenta laser lighting, urban cyberpunk laboratory setting"
                  src={MISSION_REVOLT_IMG}
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-['Space_Mono'] text-[10px] text-[#8f9378] uppercase tracking-wider">PROJECT CODE</p>
                    <p className="font-['Syne'] text-lg font-bold uppercase text-white">PX-HYPER-01</p>
                  </div>
                  <span className="font-['Space_Mono'] text-xs px-2.5 py-1 rounded bg-[#c8f300] text-[#171e00] uppercase font-bold shadow-[2px_2px_0px_#000000]">
                    100% WHEY ISOLATE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Commandments */}
      <section className="w-full bg-[#0d0e11] px-4 md:px-10 py-16 border-t border-[#292a2d] relative">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-['Space_Mono'] text-xs uppercase text-[#c8f300] tracking-widest font-bold">
                // ARCHITECTURE OF DISRUPTION
              </span>
              <h2 className="font-['Syne'] text-3xl md:text-4xl uppercase text-white tracking-tight mt-1 font-extrabold">
                THE 4 CORE COMMANDMENTS
              </h2>
            </div>
            <p className="font-['Space_Grotesk'] text-xs md:text-sm text-[#c5c9ac] max-w-sm">
              Non-negotiable pillars forged in blood, sweat, and thousands of blind sensory taste tests.
            </p>
          </div>

          {/* Bento Commandment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Pillar 01 */}
            <div className="bg-[#1f1f23] border border-[#292a2d] p-6 rounded-xl shadow-[6px_6px_0px_#000000] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between">
                <span className="font-['Syne'] text-6xl font-extrabold text-[#343538] select-none leading-none">
                  01
                </span>
                <span className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold -rotate-2 shadow-[2px_2px_0px_#000000]">
                  PHYSICS OVER CHALK
                </span>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold uppercase text-white mt-4 mb-2">
                Zero Chalk, Maximum Flavor Physics
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] leading-relaxed">
                We taste-tested 420+ formulas alongside Michelin-trained food scientists until every shake and snack felt like a silky cloud cheat dessert. Micronized cross-flow filtration means zero throat cling, zero residue, and effortless mixing with cold water.
              </p>
              <div className="mt-4 pt-3 border-t border-[#292a2d] flex items-center justify-between text-[#8f9378] font-['Space_Mono'] text-[11px] uppercase">
                <span>MICRON RATING &lt; 40μm</span>
                <span className="text-[#c8f300] flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-sm">verified</span> VELVET FLOW
                </span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-[#1f1f23] border border-[#292a2d] p-6 rounded-xl shadow-[6px_6px_0px_#000000] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between">
                <span className="font-['Syne'] text-6xl font-extrabold text-[#343538] select-none leading-none">
                  02
                </span>
                <span className="bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold rotate-2 shadow-[2px_2px_0px_#000000]">
                  TOTAL VISIBILITY
                </span>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold uppercase text-white mt-4 mb-2">
                Radical Macro Honesty
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] leading-relaxed">
                No proprietary fairy-dust blends hiding 0.1mg of ashwagandha. Every gram of grass-fed cold-filtered whey isolate, prebiotic tapioca fiber, and verified nootropics is printed on the front packaging in bold 18pt font. No guessing games.
              </p>
              <div className="mt-4 pt-3 border-t border-[#292a2d] flex items-center justify-between text-[#8f9378] font-['Space_Mono'] text-[11px] uppercase">
                <span>PROPRIETARY BLENDS = 0%</span>
                <span className="text-[#ff4b89] flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-sm">visibility</span> FRONT-FACING SPEC
                </span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-[#1f1f23] border border-[#292a2d] p-6 rounded-xl shadow-[6px_6px_0px_#000000] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between">
                <span className="font-['Syne'] text-6xl font-extrabold text-[#343538] select-none leading-none">
                  03
                </span>
                <span className="bg-[#292a2d] text-[#c8f300] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold -rotate-1 shadow-[2px_2px_0px_#000000]">
                  ECO-COMBAT
                </span>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold uppercase text-white mt-4 mb-2">
                Sustainable Cyber-Packaging
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] leading-relaxed">
                Big supplement brands produce metric tons of unrecyclable thick plastic jugs every single month. We swapped to infinitely recyclable brushed aluminum vessels and 100% plant-based compostable wrapper sleeves. Zero microplastics, zero excuses.
              </p>
              <div className="mt-4 pt-3 border-t border-[#292a2d] flex items-center justify-between text-[#8f9378] font-['Space_Mono'] text-[11px] uppercase">
                <span>PLASTIC FREE CANISTERS</span>
                <span className="text-[#c8f300] flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-sm">recycling</span> INFINITE CYCLES
                </span>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="bg-[#1f1f23] border border-[#292a2d] p-6 rounded-xl shadow-[6px_6px_0px_#000000] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between">
                <span className="font-['Syne'] text-6xl font-extrabold text-[#343538] select-none leading-none">
                  04
                </span>
                <span className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold rotate-1 shadow-[2px_2px_0px_#000000]">
                  DUAL-SYSTEM RECHARGE
                </span>
              </div>
              <h3 className="font-['Syne'] text-xl font-bold uppercase text-white mt-4 mb-2">
                Mental Fuel Meets Muscle Fuel
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] leading-relaxed">
                You don't just lift weights; you code, design, produce beats, study, and stay awake. Our formulas include bio-available L-Theanine, Himalayan pink salt electrolytes, and clean coconut MCTs so your brain stays locked in without jitters or post-lunch crashes.
              </p>
              <div className="mt-4 pt-3 border-t border-[#292a2d] flex items-center justify-between text-[#8f9378] font-['Space_Mono'] text-[11px] uppercase">
                <span>NO COGNITIVE SLUMP</span>
                <span className="text-[#c8f300] flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-sm">psychology</span> FLOW STATE READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hall of Zero BS (Comparison Chart) */}
      <section className="w-full px-4 md:px-10 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase shadow-[2px_2px_0px_#000000] -rotate-1 font-bold">
              UNFILTERED BENCHMARK
            </span>
            <h2 className="font-['Syne'] text-3xl md:text-5xl uppercase text-white tracking-tight font-extrabold">
              THE HALL OF ZERO BS
            </h2>
            <p className="font-['Space_Grotesk'] text-sm md:text-base text-[#c5c9ac]">
              See how ProteinX surgically dismantles the dusty old-guard fitness industry.
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ProteinX Column */}
            <div className="bg-[#292a2d] border border-[#343538] rounded-xl p-6 shadow-[8px_8px_0px_#c8f300] relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#343538]">
                <div>
                  <span className="font-['Space_Mono'] text-[11px] text-[#c8f300] uppercase font-bold tracking-widest">
                    THE NEW ORDER
                  </span>
                  <h3 className="font-['Syne'] text-2xl font-bold uppercase text-white">PROTEINX</h3>
                </div>
                <span className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs px-3 py-1 rounded-full uppercase font-bold shadow-[2px_2px_0px_#000000]">
                  FUTURE STANDARD
                </span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="bg-[#1b1b1f] border border-[#343538] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">MOUTHFEEL &amp; DISSOLUTION</span>
                  <p className="font-['Syne'] text-base uppercase text-[#c8f300] font-bold mt-1">SILK-SMOOTH CLOUD VELVET</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-1">Dissolves within 4 seconds in ice water. Zero clump clumps, no shaker whisk ball required.</p>
                </div>

                <div className="bg-[#1b1b1f] border border-[#343538] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">SWEETNESS &amp; SUGAR</span>
                  <p className="font-['Syne'] text-base uppercase text-white font-bold mt-1">0G – 1G NATURALLY SWEETENED</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-1">Monk fruit extract and real organic vanilla / raw cocoa bean infusion. No artificial metallic aftertaste.</p>
                </div>

                <div className="bg-[#1b1b1f] border border-[#343538] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">SOURCING TRANSPARENCY</span>
                  <p className="font-['Syne'] text-base uppercase text-[#c8f300] font-bold mt-1">100% PUBLIC LAB VERIFICATION</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-1">Every can contains an NFC/QR tag linking to Eurofins independent heavy metals and protein assay certificates.</p>
                </div>

                <div className="bg-[#1b1b1f] border border-[#343538] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">COUNTERTOP VIBE</span>
                  <p className="font-['Syne'] text-base uppercase text-[#ff4b89] font-bold mt-1">CYBERPUNK GRAIL COLLECTIBLE</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-1">Industrial brushed anodized aluminum you proudly display next to your designer sneakers.</p>
                </div>
              </div>
            </div>

            {/* Boomer Brands Column */}
            <div className="bg-[#0d0e11] border border-[#292a2d] rounded-xl p-6 shadow-[6px_6px_0px_#000000] opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between pb-4 border-b border-[#1f1f23]">
                <div>
                  <span className="font-['Space_Mono'] text-[11px] text-[#8f9378] uppercase font-bold tracking-widest">
                    THE TIRED OLD GUARD
                  </span>
                  <h3 className="font-['Syne'] text-2xl font-bold uppercase text-[#8f9378]">BOOMER MUSCLE BRANDS</h3>
                </div>
                <span className="bg-[#1f1f23] text-[#8f9378] font-['Space_Mono'] text-xs px-3 py-1 rounded-full uppercase border border-[#292a2d]">
                  1998 ARTIFACT
                </span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="bg-[#121316] border border-[#1f1f23] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">MOUTHFEEL &amp; DISSOLUTION</span>
                  <p className="font-['Syne'] text-base uppercase text-[#8f9378] font-bold mt-1">GRITTY SAND WATER SLUDGE</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#8f9378] mt-1">Requires 2 minutes of violent shaking, leaves slimy dry film glued to the bottom of the bottle.</p>
                </div>

                <div className="bg-[#121316] border border-[#1f1f23] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">SWEETNESS &amp; SUGAR</span>
                  <p className="font-['Syne'] text-base uppercase text-[#8f9378] font-bold mt-1">14G CHEAP ARTIFICIAL FILLERS</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#8f9378] mt-1">Maltodextrin spikes and sickly sucralose blends that destroy gut microbiota and cause extreme bloat.</p>
                </div>

                <div className="bg-[#121316] border border-[#1f1f23] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">SOURCING TRANSPARENCY</span>
                  <p className="font-['Syne'] text-base uppercase text-[#8f9378] font-bold mt-1">"PROPRIETARY MATRIX COMPLEX"</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#8f9378] mt-1">Vague chemical jargon cloaking low-cost amino-spiking and bottom-shelf dairy byproducts.</p>
                </div>

                <div className="bg-[#121316] border border-[#1f1f23] p-4 rounded-lg">
                  <span className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">COUNTERTOP VIBE</span>
                  <p className="font-['Syne'] text-base uppercase text-[#8f9378] font-bold mt-1">EMBARRASSING DUSTY JUG</p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#8f9378] mt-1">A grotesque radioactive-looking plastic barrel that gets immediately shoved into the dark cupboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Sourcing & Lab Proof Simulator */}
      <section className="w-full bg-[#1b1b1f] border-t border-[#292a2d] px-4 md:px-10 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Simulator Left Info */}
            <div className="w-full lg:w-1/2 space-y-4">
              <span className="inline-block bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold -rotate-1 shadow-[2px_2px_0px_#000000]">
                ZERO SECRETS ENGINE
              </span>
              <h2 className="font-['Syne'] text-3xl md:text-4xl uppercase text-white tracking-tight font-extrabold">
                BATCH TRANSPARENCY TERMINAL
              </h2>
              <p className="font-['Space_Grotesk'] text-sm md:text-base text-[#c5c9ac] leading-relaxed">
                Don't take our marketing team's word for it. Every single production run undergoes independent third-party mass-spectrometry testing. Try scanning a production batch code below to view real analytical purity logs.
              </p>

              {/* Founder Note & Sticker */}
              <div className="bg-[#1f1f23] border border-[#292a2d] p-4 rounded-xl shadow-[4px_4px_0px_#000000] relative mt-4">
                <span className="material-symbols-outlined absolute top-2 right-2 text-[#c8f300]/20 text-4xl">
                  format_quote
                </span>
                <p className="font-['Space_Grotesk'] text-xs md:text-sm text-white italic leading-relaxed">
                  "If a brand refuses to show you the chemical COA (Certificate of Analysis) for the exact powder inside your scoop, you are drinking filler sawdust. Period."
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#c8f300] text-[#171e00] flex items-center justify-center font-['Syne'] text-xs font-bold">
                    K
                  </div>
                  <div>
                    <p className="font-['Space_Mono'] text-xs text-white uppercase font-bold">KAI &amp; SORA TANAKA</p>
                    <p className="font-['Space_Mono'] text-[10px] text-[#8f9378] uppercase">CO-FOUNDERS &amp; FLAVOR ARCHITECTS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Simulator */}
            <div className="w-full lg:w-1/2 bg-[#0d0e11] border border-[#292a2d] p-5 md:p-6 rounded-xl shadow-[8px_8px_0px_#000000]">
              <div className="flex items-center justify-between pb-3 border-b border-[#1f1f23]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff4b89]" />
                  <span className="w-3 h-3 rounded-full bg-[#c8f300]" />
                  <span className="w-3 h-3 rounded-full bg-[#8f9378]" />
                  <span className="ml-2 font-['Space_Mono'] text-xs text-[#8f9378]">PX-SPECTRO-V2.0</span>
                </div>
                <span className="font-['Space_Mono'] text-[10px] text-[#c8f300] uppercase tracking-widest font-mono">
                  LIVE API FEED
                </span>
              </div>

              {/* Input simulation */}
              <div className="mt-4 space-y-2">
                <label className="font-['Space_Mono'] text-[10px] uppercase text-[#8f9378]">
                  INPUT BATCH IDENTIFIER
                </label>
                <div className="flex gap-2">
                  <input
                    value={batchQuery}
                    onChange={(e) => setBatchQuery(e.target.value)}
                    className="w-full bg-[#1f1f23] border border-[#343538] text-[#c8f300] font-['Space_Mono'] text-xs px-3 py-2.5 rounded focus:outline-none focus:border-[#c8f300]"
                  />
                  <button
                    onClick={() => handleVerify()}
                    className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs px-4 py-2.5 rounded uppercase font-bold shrink-0 shadow-[2px_2px_0px_#000000] active:translate-y-0.5 cursor-pointer hover:bg-[#afd500]"
                    type="button"
                  >
                    VERIFY
                  </button>
                </div>
                <p className="font-['Space_Mono'] text-[10px] text-[#8f9378]">
                  Try preset codes:{' '}
                  <button
                    onClick={() => {
                      setBatchQuery('PX-2025-NEON');
                      handleVerify('PX-2025-NEON');
                    }}
                    className="text-[#ff4b89] underline hover:text-white cursor-pointer ml-1"
                  >
                    PX-2025-NEON
                  </button>
                  {', '}
                  <button
                    onClick={() => {
                      setBatchQuery('PX-TOKYO-MATCHA');
                      handleVerify('PX-TOKYO-MATCHA');
                    }}
                    className="text-[#ff4b89] underline hover:text-white cursor-pointer"
                  >
                    PX-TOKYO-MATCHA
                  </button>
                </p>
              </div>

              {/* Dynamic Output Console */}
              <div className="mt-4 bg-[#121316] border border-[#1f1f23] p-4 rounded font-['Space_Mono'] text-xs space-y-2 text-[#e3e2e6]">
                {isVerifying ? (
                  <div className="py-6 text-center text-[#c8f300] animate-pulse">
                    QUERYING BIOCHEMISTRY MAINFRAME...
                  </div>
                ) : verifiedBatch ? (
                  <>
                    <div className="flex justify-between text-[#8f9378]">
                      <span>BATCH IDENTITY:</span>
                      <span className="text-[#c8f300] font-bold">{verifiedBatch.identity}</span>
                    </div>
                    <div className="flex justify-between text-[#8f9378]">
                      <span>MANUFACTURE DATE:</span>
                      <span className="text-white">{verifiedBatch.date}</span>
                    </div>
                    <div className="flex justify-between text-[#8f9378]">
                      <span>PROTEIN PURITY (DRY BASIS):</span>
                      <span className="text-[#c8f300] font-bold">{verifiedBatch.purity}</span>
                    </div>
                    <div className="flex justify-between text-[#8f9378]">
                      <span>HEAVY METALS (Pb, As, Cd, Hg):</span>
                      <span className="text-[#ff4b89] font-bold">{verifiedBatch.metals}</span>
                    </div>
                    <div className="flex justify-between text-[#8f9378]">
                      <span>MICROBIAL CONTAMINANTS:</span>
                      <span className="text-[#c8f300] font-bold">{verifiedBatch.microbial}</span>
                    </div>
                    <div className="flex justify-between text-[#8f9378]">
                      <span>INDEPENDENT AUDITOR:</span>
                      <span className="text-white">{verifiedBatch.auditor}</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[#c8f300] font-bold border-t border-[#1f1f23]">
                      <span>CERTIFICATE STATUS:</span>
                      <span className="px-2 py-0.5 bg-[#c8f300]/20 rounded text-[#c8f300]">
                        {verifiedBatch.status}
                      </span>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Visual Proof Mini-Gallery */}
      <section className="w-full px-4 md:px-10 py-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-['Syne'] text-2xl md:text-3xl uppercase text-white font-extrabold">
              FIELD &amp; LAB SNAPSHOTS
            </h3>
            <span className="font-['Space_Mono'] text-xs text-[#8f9378] uppercase">
              // UNFILTERED RAW FOOTAGE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1f1f23] border border-[#292a2d] rounded-xl overflow-hidden shadow-[4px_4px_0px_#000000] group">
              <img
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Modern ultra-clean bio-fermentation laboratory with scientists calibrating high-tech stainless steel fluid extractors"
                src={LAB_01_IMG}
              />
              <div className="p-4">
                <span className="font-['Space_Mono'] text-xs text-[#c8f300] uppercase font-bold">
                  LAB 01 • TSUKUBA SCIENCE CITY
                </span>
                <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-1">
                  Cross-flow cold microfiltration ensuring non-denatured bioactive immunoglobulins.
                </p>
              </div>
            </div>

            <div className="bg-[#1f1f23] border border-[#292a2d] rounded-xl overflow-hidden shadow-[4px_4px_0px_#000000] group">
              <img
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Lush green pasture dairy sanctuary in Hokkaido with grass fed grazing cattle beneath a clear mountain horizon"
                src={LAB_02_IMG}
              />
              <div className="p-4">
                <span className="font-['Space_Mono'] text-xs text-[#ff4b89] uppercase font-bold">
                  ORIGIN • HOKKAIDO HERDS
                </span>
                <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-1">
                  100% pasture-raised cattle free from growth hormones (rBGH/rBST).
                </p>
              </div>
            </div>

            <div className="bg-[#1f1f23] border border-[#292a2d] rounded-xl overflow-hidden shadow-[4px_4px_0px_#000000] group">
              <img
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Close up of matcha green tea powder and raw Madagascar vanilla pod beans being tested inside an experimental culinary sensory lab setup"
                src={LAB_03_IMG}
              />
              <div className="p-4">
                <span className="font-['Space_Mono'] text-xs text-[#c8f300] uppercase font-bold">
                  FLAVOR LAB • SHIBUYA STUDIO
                </span>
                <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-1">
                  Direct single-origin Uji matcha and Madagascar vanilla beans for raw authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="w-full px-4 md:px-10 pb-16 pt-4">
        <div className="max-w-6xl mx-auto bg-[#c8f300] text-[#171e00] rounded-2xl p-6 md:p-12 shadow-[10px_10px_0px_#000000] relative overflow-hidden border-2 border-black">
          <div className="absolute -right-16 -bottom-16 text-black/10 select-none font-['Syne'] text-[140px] leading-none font-black pointer-events-none">
            DROP
          </div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block bg-[#121316] text-white font-['Space_Mono'] text-[10px] px-2.5 py-1 rounded uppercase font-bold shadow-[2px_2px_0px_#000000] -rotate-1">
              END THE CHALK CURSE
            </span>
            <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#171e00] leading-none">
              READY TO ENTER THE HIGH-PERFORMANCE FUTURE?
            </h2>
            <p className="font-['Space_Grotesk'] text-base md:text-lg text-[#3d4c00]">
              Your shaker bottle deserves better than chalk residue. Secure limited seasonal flavor allocations or link up with our global athlete syndicate in Discord.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateTab('products-and-drops')}
                className="inline-flex items-center gap-2 bg-[#121316] text-white font-['Space_Mono'] text-xs font-bold px-6 py-3.5 rounded-xl uppercase transition-transform hover:-translate-y-1 active:translate-y-0.5 shadow-[4px_4px_0px_#000000] cursor-pointer"
              >
                <span>SHOP ALL DROPS</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigateTab('community-and-hype')}
                className="inline-flex items-center gap-2 bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-xs font-bold px-6 py-3.5 rounded-xl uppercase transition-transform hover:-translate-y-1 active:translate-y-0.5 shadow-[4px_4px_0px_#000000] cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">forum</span>
                <span>JOIN CLUB X DISCORD</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
