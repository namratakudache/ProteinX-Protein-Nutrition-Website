import React, { useState, useEffect } from 'react';
import { USER_AVATAR } from '../data/catalog';

interface ClubXScreenProps {
  onShowToast: (message: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const ClubXScreen: React.FC<ClubXScreenProps> = ({ onShowToast, onNavigateTab }) => {
  const [userName, setUserName] = useState('KAI ALEXANDER');
  const [reservedDrops, setReservedDrops] = useState<Record<string, boolean>>({});

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleReserve = (dropId: string, dropName: string) => {
    setReservedDrops((prev) => ({ ...prev, [dropId]: true }));
    onShowToast(`ALLOCATION LOCKED FOR ${dropName}. ACCESS CODE DISPATCHED!`);
  };

  const secretDrops = [
    {
      id: 'drop-secret-01',
      name: 'MATCHA-TARO FROST ISOLATE',
      capsule: '500 UNITS GLOBAL',
      price: '$48.00',
      specs: '30G PROTEIN • REAL TARO PURÉE • 0 CHALK',
      status: 'ALLOCATION OPEN'
    },
    {
      id: 'drop-secret-02',
      name: 'NEON TITANIUM THERMAL SHAKER',
      capsule: '250 UNITS NUMBERED',
      price: '$38.00',
      specs: 'DOUBLE-WALL VACUUM • 24HR ICE COLD',
      status: 'ALLOCATION OPEN'
    },
    {
      id: 'drop-secret-03',
      name: 'CYBER-STREETWEAR OVERSIZED HOODIE',
      capsule: '300 PIECES ONLY',
      price: '$88.00',
      specs: '500GSM HEAVY FLEECE • HOLOGRAPHIC LOGO',
      status: 'ALLOCATION OPEN'
    }
  ];

  return (
    <div className="flex flex-col w-full px-4 md:px-10 py-10 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-3 py-1 rounded-full uppercase -rotate-1 inline-block mb-2 shadow-[2px_2px_0px_#000000]">
            INNER SYNDICATE
          </span>
          <h1 className="font-['Syne'] text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight leading-none">
            CLUB <span className="text-[#ff4b89]">X</span> UNDERGROUND
          </h1>
          <p className="font-['Space_Grotesk'] text-base text-[#c5c9ac] max-w-xl mt-2">
            The private gateway to unreleased flavor formulations, numbered capsule streetwear, and midnight restocks.
          </p>
        </div>

        {/* Midnight Drop Countdown Ticker */}
        <div className="bg-[#1b1b1f] border border-[#292a2d] p-4 rounded-xl shadow-[4px_4px_0px_#000000] text-right">
          <span className="text-[10px] font-['Space_Mono'] text-[#ff4b89] uppercase font-bold block">
            NEXT TOKYO MIDNIGHT DROP IN:
          </span>
          <div className="flex items-center gap-1.5 font-['Space_Mono'] text-xl font-bold text-[#c8f300] mt-1 justify-end">
            <span className="bg-[#0d0e11] px-2 py-0.5 rounded border border-[#292a2d]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-[#0d0e11] px-2 py-0.5 rounded border border-[#292a2d]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-[#0d0e11] px-2 py-0.5 rounded border border-[#292a2d]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Digital Pass / Identity Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Pass Graphic */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#1f1f23] via-[#121316] to-[#0d0e11] border-2 border-[#c8f300] rounded-2xl p-6 shadow-[8px_8px_0px_#c8f300] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8f300]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between pb-6 border-b border-[#292a2d]">
            <div className="flex items-center gap-2">
              <span className="font-['Syne'] text-2xl font-bold uppercase text-white">PROTEIN<span className="text-[#c8f300]">X</span></span>
              <span className="bg-[#ff4b89] text-[#590026] text-[10px] font-['Space_Mono'] font-bold px-2 py-0.5 rounded">
                SYNDICATE PASS
              </span>
            </div>
            <span className="material-symbols-outlined text-[#c8f300] text-3xl">contactless</span>
          </div>

          <div className="py-6 flex items-center gap-4">
            <img
              src={USER_AVATAR}
              alt="Syndicate Member"
              className="w-16 h-16 rounded-xl object-cover border-2 border-[#c8f300]"
            />
            <div className="space-y-1">
              <span className="text-[10px] font-['Space_Mono'] text-[#8f9378] uppercase">OPERATIVE ID</span>
              <h3 className="font-['Syne'] text-xl font-bold uppercase text-white tracking-wide">{userName}</h3>
              <p className="font-['Space_Mono'] text-xs text-[#c8f300] font-bold">LEVEL: TIER 02 // TOKYO CHAPTER</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#292a2d] flex items-center justify-between font-['Space_Mono'] text-[11px] text-[#8f9378]">
            <span>ACCESS PROTOCOL: UNRESTRICTED</span>
            <span className="tracking-widest text-[#c8f300]">||||| | |||| || |</span>
          </div>
        </div>

        {/* Customization input & Perks list */}
        <div className="lg:col-span-6 space-y-5 bg-[#1b1b1f] border border-[#292a2d] p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_#000000]">
          <div>
            <label className="block text-[11px] font-['Space_Mono'] text-[#8f9378] uppercase mb-1">
              CUSTOMIZE PASS CALLSIGN
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value.toUpperCase())}
              className="w-full bg-[#121316] border border-[#343538] text-[#c8f300] font-['Space_Mono'] text-xs px-3.5 py-2.5 rounded-lg focus:outline-none focus:border-[#c8f300]"
            />
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="font-['Syne'] text-base font-bold uppercase text-white">
              SYNDICATE MEMBER PRIVILEGES
            </h4>
            <div className="space-y-2 text-xs font-['Space_Grotesk'] text-[#c5c9ac]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c8f300] text-base">bolt</span>
                <span>4-hour early access window before public drop announcement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff4b89] text-base">verified</span>
                <span>Free limited-edition holographic sticker packs with every order</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c8f300] text-base">science</span>
                <span>2x voting weight on upcoming Flavors Lab pilot prototypes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff4b89] text-base">local_shipping</span>
                <span>Complimentary priority express dispatch on all drops</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secret Drops Reservation Matrix */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-['Syne'] text-2xl md:text-3xl font-bold uppercase text-white">
            SECRET CAPSULE RESERVATIONS
          </h2>
          <span className="font-['Space_Mono'] text-xs text-[#c8f300]">EXCLUSIVE TO CLUB X</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secretDrops.map((drop) => {
            const isReserved = reservedDrops[drop.id];
            return (
              <div
                key={drop.id}
                className="bg-[#1b1b1f] border border-[#292a2d] p-5 rounded-2xl flex flex-col justify-between h-64 shadow-[4px_4px_0px_#000000]"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#292a2d] text-[#c8f300] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded">
                      {drop.capsule}
                    </span>
                    <span className="font-['Syne'] text-lg font-bold text-white">{drop.price}</span>
                  </div>

                  <h3 className="font-['Syne'] text-lg font-bold uppercase text-white leading-snug">
                    {drop.name}
                  </h3>
                  <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-2">
                    {drop.specs}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleReserve(drop.id, drop.name)}
                  disabled={isReserved}
                  className={`w-full py-3 rounded-xl font-['Space_Mono'] text-xs font-bold uppercase transition-all cursor-pointer ${
                    isReserved
                      ? 'bg-[#121316] text-[#c8f300] border border-[#c8f300]'
                      : 'bg-[#c8f300] text-[#171e00] shadow-[3px_3px_0px_#000000] hover:bg-[#afd500]'
                  }`}
                >
                  {isReserved ? 'ALLOCATION LOCKED ✓' : 'RESERVE BATCH ENTRY'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
