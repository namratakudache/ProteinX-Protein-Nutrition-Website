import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, flavor: string, delta: number) => void;
  onRemoveItem: (productId: string, flavor: string) => void;
  onProceedToCheckout: () => void;
  onExploreProducts: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExploreProducts
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const isFreeShipping = subtotal >= 60;
  const shipping = items.length === 0 ? 0 : isFreeShipping ? 0 : 7.50;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  // Free shipping threshold math ($60 for free ship, $85 for sticker pack)
  const freeShipRemaining = Math.max(0, 60 - subtotal);
  const stickerRemaining = Math.max(0, 85 - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'ZEROBS' || code === 'TOKYO') {
      setDiscountPercent(15);
      setPromoMessage('15% VIP SYNDICATE DISCOUNT APPLIED!');
    } else if (code === 'HYPE25' || code === 'CHAOS') {
      setDiscountPercent(25);
      setPromoMessage('25% HYPE OVERRIDE DISCOUNT APPLIED!');
    } else {
      setPromoMessage('INVALID CODE. TRY "ZEROBS" OR "HYPE25"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121316] border-l border-[#292a2d] text-white flex flex-col shadow-[8px_0px_24px_rgba(0,0,0,0.8)]">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#292a2d] flex items-center justify-between bg-[#1b1b1f]">
            <div className="flex items-center gap-2">
              <span className="font-['Syne'] text-xl font-bold uppercase tracking-tight">
                ACTIVE DROP CART
              </span>
              <span className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((acc, item) => acc + item.quantity, 0)} ITEMS
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[#292a2d] hover:bg-[#343538] flex items-center justify-center text-white cursor-pointer transition-colors"
              aria-label="Close cart"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Unlock Progress Banner */}
          <div className="px-5 py-3 bg-[#18191c] border-b border-[#292a2d]">
            <div className="flex items-center justify-between text-xs font-['Space_Mono'] mb-1.5">
              {freeShipRemaining > 0 ? (
                <span className="text-[#c5c9ac]">
                  ADD <span className="text-[#c8f300] font-bold">${freeShipRemaining.toFixed(2)}</span> FOR FREE EXPRESS DELIVERY
                </span>
              ) : stickerRemaining > 0 ? (
                <span className="text-[#c8f300]">
                  🔥 FREE SHIP UNLOCKED! ADD <span className="text-[#ff4b89] font-bold">${stickerRemaining.toFixed(2)}</span> FOR STICKER RIG
                </span>
              ) : (
                <span className="text-[#c8f300] font-bold">
                  ⚡ ALL REWARDS UNLOCKED: FREE SHIP + HOLOGRAPHIC DECALS
                </span>
              )}
            </div>
            <div className="w-full h-2 bg-[#292a2d] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#c8f300] to-[#ff4b89] transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / 85) * 100)}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#1b1b1f] border border-[#292a2d] flex items-center justify-center mx-auto text-[#8f9378]">
                  <span className="material-symbols-outlined text-3xl">shopping_cart_off</span>
                </div>
                <div>
                  <h4 className="font-['Syne'] text-lg font-bold uppercase text-white">YOUR DROP BAG IS EMPTY</h4>
                  <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] max-w-xs mx-auto mt-1">
                    The vault drops move fast. Load up before this week's allocation hits zero.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onExploreProducts();
                  }}
                  className="bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-6 py-3 rounded-xl uppercase tracking-wider shadow-[3px_3px_0px_#000000] cursor-pointer hover:-translate-y-0.5 transition-transform"
                >
                  ENTER THE VAULT
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedFlavor}-${idx}`}
                  className="bg-[#1b1b1f] border border-[#292a2d] rounded-xl p-3 flex gap-3 shadow-[3px_3px_0px_#000000]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-[#0d0e11] shrink-0 border border-[#292a2d]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-['Syne'] text-sm font-bold uppercase leading-tight text-white">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedFlavor)}
                          className="text-[#8f9378] hover:text-[#ff4b89] transition-colors"
                          aria-label="Remove item"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                      <p className="font-['Space_Mono'] text-[11px] text-[#c8f300] mt-0.5">
                        Flavor: {item.selectedFlavor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#343538] rounded-lg bg-[#121316]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedFlavor, -1)}
                          className="w-7 h-7 flex items-center justify-center text-white hover:text-[#c8f300] transition-colors"
                        >
                          -
                        </button>
                        <span className="font-['Space_Mono'] text-xs font-bold px-2 text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedFlavor, 1)}
                          className="w-7 h-7 flex items-center justify-center text-white hover:text-[#c8f300] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-['Space_Mono'] text-sm font-bold text-white">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#292a2d] bg-[#1b1b1f] space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <input
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="PROMO (TRY 'ZEROBS')"
                    className="w-full bg-[#121316] border border-[#343538] rounded-lg px-3 py-2 text-xs font-['Space_Mono'] uppercase text-white placeholder:text-[#8f9378] focus:outline-none focus:border-[#c8f300]"
                  />
                  <button
                    type="submit"
                    className="bg-[#292a2d] hover:bg-[#343538] text-white font-['Space_Mono'] text-xs font-bold px-3 py-2 rounded-lg uppercase cursor-pointer"
                  >
                    APPLY
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[10px] font-['Space_Mono'] ${discountPercent > 0 ? 'text-[#c8f300]' : 'text-[#ff4b89]'}`}>
                    {promoMessage}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs font-['Space_Mono'] text-[#c5c9ac]">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#c8f300]">
                    <span>DISCOUNT ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>SHIPPING</span>
                  <span className={shipping === 0 ? 'text-[#c8f300] font-bold' : 'text-white'}>
                    {shipping === 0 ? 'FREE EXPRESS' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#292a2d] flex justify-between text-base font-['Syne'] font-extrabold text-white">
                  <span>TOTAL ESTIMATE</span>
                  <span className="text-[#c8f300]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">lock</span>
                <span>SECURE DROP CHECKOUT (${total.toFixed(2)})</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
