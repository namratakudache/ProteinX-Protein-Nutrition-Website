import React, { useState } from 'react';

interface FooterProps {
  onShowToast: (message: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast, onNavigateTab }) => {
  const [email, setEmail] = useState('');
  const [pluggedIn, setPluggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('PLEASE ENTER A VALID EMAIL TO PLUG IN');
      return;
    }
    setPluggedIn(true);
    onShowToast(`PLUGGED IN: ${email.toUpperCase()} // SECRET DROPS UNLOCKED`);
  };

  return (
    <footer className="w-full bg-[#0d0e11] text-[#e3e2e6] border-t border-[#292a2d]">
      {/* Animated Marquee Strip */}
      <div className="w-full overflow-hidden bg-[#c8f300] text-[#171e00] py-3 border-y-2 border-black">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 font-['Syne'] text-xl md:text-2xl uppercase font-extrabold tracking-tight">
          <span className="flex items-center gap-6">
            <span>FUEL YOUR CHAOS</span>
            <span>•</span>
            <span>100% REAL PROTEIN</span>
            <span>•</span>
            <span>ZERO ARTIFICIAL BS</span>
            <span>•</span>
            <span>HYPER FUEL FOR HYPER GENERATION</span>
            <span>•</span>
            <span>NO CHALKY SLUDGE</span>
            <span>•</span>
            <span>COLD PURIFIED BIO-WHEY</span>
            <span>•</span>
          </span>
          <span className="flex items-center gap-6">
            <span>FUEL YOUR CHAOS</span>
            <span>•</span>
            <span>100% REAL PROTEIN</span>
            <span>•</span>
            <span>ZERO ARTIFICIAL BS</span>
            <span>•</span>
            <span>HYPER FUEL FOR HYPER GENERATION</span>
            <span>•</span>
            <span>NO CHALKY SLUDGE</span>
            <span>•</span>
            <span>COLD PURIFIED BIO-WHEY</span>
            <span>•</span>
          </span>
        </div>
      </div>

      <div className="w-full px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-['Syne'] text-3xl md:text-4xl font-extrabold tracking-tighter uppercase text-white leading-none">
                PROTEIN<span className="text-[#c8f300]">X</span>
              </span>
            </div>
            <p className="font-['Space_Grotesk'] text-base text-[#c5c9ac] max-w-md leading-relaxed">
              Born in Tokyo basements and built for the hyper-generation. No chalky fillers. No sterile pharma promises. Just raw functional adrenaline engineered for supreme physical defiance.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-block bg-[#292a2d] text-[#c8f300] font-['Space_Mono'] text-[11px] font-bold px-3 py-1 rounded-full uppercase shadow-[2px_2px_0px_#000000]">
                Clean Label Certified
              </span>
              <span className="inline-block bg-[#292a2d] text-[#ff4b89] font-['Space_Mono'] text-[11px] font-bold px-3 py-1 rounded-full uppercase shadow-[2px_2px_0px_#000000]">
                Informed Sport Safe
              </span>
              <span className="inline-block bg-[#292a2d] text-white font-['Space_Mono'] text-[11px] font-bold px-3 py-1 rounded-full uppercase shadow-[2px_2px_0px_#000000]">
                Zero Chalk Formula
              </span>
            </div>
          </div>

          {/* Email Newsletter Box */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="inline-block bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase -rotate-1 shadow-[2px_2px_0px_#000000]">
                VIP INSIDER PASS
              </span>
              <h3 className="font-['Syne'] text-2xl font-bold tracking-tight uppercase text-white">
                GET THE SECRET DROPS
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac]">
                Zero spam. Only underground flavor allocations, streetwear capsule releases, and midnight restocks.
              </p>
            </div>

            {pluggedIn ? (
              <div className="p-4 bg-[#1f1f23] border border-[#c8f300] rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-[#c8f300] text-2xl">verified</span>
                <div>
                  <p className="font-['Syne'] text-sm font-bold text-white">YOU'RE ON THE LIST</p>
                  <p className="font-['Space_Mono'] text-[10px] text-[#c8f300]">NEXT TOKYO DROP ALERT DISPATCHED TO {email}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1b1b1f] border border-[#343538] text-white placeholder:text-[#8f9378] font-['Space_Mono'] text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-[#c8f300] focus:ring-1 focus:ring-[#c8f300]"
                  placeholder="DROP_YOUR_EMAIL_HERE..."
                  type="email"
                />
                <button
                  className="shrink-0 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-6 py-3 rounded-xl uppercase transition-transform hover:-translate-y-0.5 active:translate-y-0.5 shadow-[4px_4px_0px_#000000] cursor-pointer"
                  type="submit"
                >
                  PLUG IN
                </button>
              </form>
            )}
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-white">
              COMMUNITY CHANNELS
            </h4>
            <div className="flex flex-col gap-2 font-['Space_Mono'] text-xs">
              <a
                onClick={() => onShowToast('OPENING TIKTOK [@PROTEINX.LABS]')}
                className="text-[#c5c9ac] hover:text-[#c8f300] transition-colors uppercase cursor-pointer"
              >
                // TikTok [@proteinx.labs]
              </a>
              <a
                onClick={() => onShowToast('OPENING INSTAGRAM [@PROTEINX.DROP]')}
                className="text-[#c5c9ac] hover:text-[#ff4b89] transition-colors uppercase cursor-pointer"
              >
                // Instagram [@proteinx.drop]
              </a>
              <a
                onClick={() => onNavigateTab('community-and-hype')}
                className="text-[#c5c9ac] hover:text-[#c8f300] transition-colors uppercase cursor-pointer"
              >
                // Discord [Club X Syndicate (34k)]
              </a>
              <a
                onClick={() => onShowToast('OPENING TWITCH [HYPER WORKOUT RADIO]')}
                className="text-[#c5c9ac] hover:text-[#ff4b89] transition-colors uppercase cursor-pointer"
              >
                // Twitch [Hyper Workout Radio]
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1f1f23] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Space_Mono'] text-[11px] uppercase tracking-wider text-[#8f9378] text-center md:text-left">
            © 2025 PROTEINX HYPER NUTRITION INC. ALL CHAOS RESERVED. UNAPOLOGETIC PERFORMANCE.
          </p>
          <div className="flex items-center gap-4 font-['Space_Mono'] text-[11px] uppercase text-[#8f9378]">
            <button
              onClick={() => onNavigateTab('our-mission')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Manifesto
            </button>
            <button
              onClick={() => onNavigateTab('products-and-drops')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Drop
            </button>
            <button
              onClick={() => onNavigateTab('flavors-lab')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Spec Sheet
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
