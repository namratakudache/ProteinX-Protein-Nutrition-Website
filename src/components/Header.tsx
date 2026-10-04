import React, { useState } from 'react';
import { BRAND_LOGO_IMG, USER_AVATAR } from '../data/catalog';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems = [
    { id: 'products-and-drops', label: 'Products & Drops' },
    { id: 'our-mission', label: 'Our Mission' },
    { id: 'flavors-lab', label: 'Flavors Lab' },
    { id: 'community-and-hype', label: 'Community & Hype' },
    { id: 'club-x', label: 'Club X' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d0e11]/90 backdrop-blur-xl border-b border-[#292a2d] shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
      <div className="h-20 w-full px-4 md:px-10 flex items-center justify-between gap-4">
        {/* Brand & Wordmark */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => onSelectTab('products-and-drops')}
            className="flex items-center gap-2 text-left group"
          >
            <img
              alt="ProteinX Brand Wordmark Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={BRAND_LOGO_IMG}
            />
            <span className="font-['Syne'] text-2xl font-bold tracking-tight uppercase text-white">
              Protein<span className="text-[#c8f300]">X</span>
            </span>
          </button>

          {/* Micro stickers */}
          <div className="hidden xl:flex items-center gap-1.5">
            <span className="inline-flex items-center bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase -rotate-2 shadow-[2px_2px_0px_#000000]">
              NEW DROP 🔥
            </span>
            <span className="inline-flex items-center bg-[#c8f300] text-[#586c00] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase rotate-3 shadow-[2px_2px_0px_#000000]">
              ZERO BS INGREDIENTS
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`font-['Space_Mono'] text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c8f300] text-[#171e00] font-bold rounded-lg px-3 py-1.5 shadow-[2px_2px_0px_#000000]'
                    : 'text-[#c5c9ac] hover:text-white px-3 py-1.5 rounded-lg hover:bg-[#1f1f23]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search, Cart, Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            aria-label="Search catalog"
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1f1f23] text-[#e3e2e6] hover:bg-[#292a2d] hover:text-[#c8f300] transition-all cursor-pointer shadow-[2px_2px_0px_#000000] active:translate-y-0.5"
            type="button"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-3 py-2 rounded-full uppercase transition-transform hover:-translate-y-0.5 active:translate-y-0.5 shadow-[3px_3px_0px_#000000] cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-base">shopping_bag</span>
            <span>Cart ({cartCount})</span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative pl-1">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center rounded-full border-2 border-[#c8f300]/40 hover:border-[#c8f300] transition-colors focus:outline-none"
              type="button"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src={USER_AVATAR}
              />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-[#1b1b1f] border border-[#343538] rounded-xl p-3 shadow-[6px_6px_0px_#000000] z-50">
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#292a2d]">
                  <img
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border border-[#c8f300]"
                    src={USER_AVATAR}
                  />
                  <div>
                    <p className="font-['Syne'] text-sm font-bold text-white leading-tight">SYNDICATE MEMBER</p>
                    <p className="font-['Space_Mono'] text-[10px] text-[#c8f300]">TIER 2 // TOKYO PASS</p>
                  </div>
                </div>
                <div className="py-2 space-y-1">
                  <div className="flex justify-between text-[11px] font-['Space_Mono'] text-[#c5c9ac] py-1">
                    <span>RESERVED DROPS</span>
                    <span className="text-white font-bold">2 DROPS</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-['Space_Mono'] text-[#c5c9ac] py-1">
                    <span>CHAOS CREDITS</span>
                    <span className="text-[#c8f300] font-bold">480 XP</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    onSelectTab('club-x');
                  }}
                  className="w-full mt-1 bg-[#292a2d] hover:bg-[#343538] text-white text-xs font-['Space_Mono'] py-2 rounded-lg uppercase tracking-wider text-center block transition-colors"
                >
                  VIEW CLUB X PASS →
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-[#1f1f23] text-white hover:bg-[#292a2d]"
            type="button"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121316] border-b border-[#292a2d] px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left font-['Space_Mono'] text-sm uppercase tracking-wider py-2.5 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#c8f300] text-[#171e00] font-bold'
                    : 'text-[#c5c9ac] hover:bg-[#1f1f23] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
