import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: 'Kai Alexander',
    email: 'kai.lifts@syndicate.tokyo',
    address: '4-12-8 Shibuya Cyber District',
    city: 'Tokyo',
    postalCode: '150-0002',
    paymentMethod: 'card'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 60 ? 0 : 7.50;
  const total = subtotal + shipping;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedCode = `PX-${Math.floor(100000 + Math.random() * 900000)}-DROP`;
      setOrderCode(generatedCode);
      setStep('success');
      onOrderCompleted();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl bg-[#121316] border border-[#292a2d] rounded-2xl p-6 md:p-8 text-white shadow-[8px_8px_0px_#000000] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#1f1f23] hover:bg-[#292a2d] flex items-center justify-center text-white cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {step === 'details' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                ENCRYPTED PROTOCOL
              </span>
              <span className="font-['Space_Mono'] text-xs text-[#8f9378]">PX-GATEWAY-V3</span>
            </div>
            <h3 className="font-['Syne'] text-2xl md:text-3xl font-extrabold uppercase text-white tracking-tight">
              SECURE DROP <span className="text-[#c8f300]">CHECKOUT</span>
            </h3>
            <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] mb-6">
              Batch allocations reserved for 15 minutes. Dispatching directly via Tokyo HQ Express.
            </p>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-['Space_Mono'] uppercase text-[#8f9378] mb-1">
                    Athlete Name
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] rounded-lg px-3 py-2 text-xs font-['Space_Grotesk'] text-white focus:outline-none focus:border-[#c8f300]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-['Space_Mono'] uppercase text-[#8f9378] mb-1">
                    Direct Email (for Drop Updates)
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] rounded-lg px-3 py-2 text-xs font-['Space_Grotesk'] text-white focus:outline-none focus:border-[#c8f300]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-['Space_Mono'] uppercase text-[#8f9378] mb-1">
                  Dispatch Address
                </label>
                <input
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#1b1b1f] border border-[#343538] rounded-lg px-3 py-2 text-xs font-['Space_Grotesk'] text-white focus:outline-none focus:border-[#c8f300]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-['Space_Mono'] uppercase text-[#8f9378] mb-1">
                    City / Sector
                  </label>
                  <input
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] rounded-lg px-3 py-2 text-xs font-['Space_Grotesk'] text-white focus:outline-none focus:border-[#c8f300]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-['Space_Mono'] uppercase text-[#8f9378] mb-1">
                    Postal Code
                  </label>
                  <input
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-[#1b1b1f] border border-[#343538] rounded-lg px-3 py-2 text-xs font-['Space_Grotesk'] text-white focus:outline-none focus:border-[#c8f300]"
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div>
                <label className="block text-[11px] font-['Space_Mono'] uppercase text-[#8f9378] mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-2.5 rounded-lg border text-left text-xs font-['Space_Mono'] cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#c8f300] bg-[#1f1f23] text-white shadow-[2px_2px_0px_#c8f300]'
                        : 'border-[#292a2d] bg-[#1b1b1f] text-[#c5c9ac]'
                    }`}
                  >
                    💳 CARD // APPLE
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'syndicate' })}
                    className={`p-2.5 rounded-lg border text-left text-xs font-['Space_Mono'] cursor-pointer transition-all ${
                      formData.paymentMethod === 'syndicate'
                        ? 'border-[#c8f300] bg-[#1f1f23] text-white shadow-[2px_2px_0px_#c8f300]'
                        : 'border-[#292a2d] bg-[#1b1b1f] text-[#c5c9ac]'
                    }`}
                  >
                    ⚡ CLUB X TAB
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'crypto' })}
                    className={`p-2.5 rounded-lg border text-left text-xs font-['Space_Mono'] cursor-pointer transition-all ${
                      formData.paymentMethod === 'crypto'
                        ? 'border-[#c8f300] bg-[#1f1f23] text-white shadow-[2px_2px_0px_#c8f300]'
                        : 'border-[#292a2d] bg-[#1b1b1f] text-[#c5c9ac]'
                    }`}
                  >
                    ⛓️ CRYPTO // SOL
                  </button>
                </div>
              </div>

              {/* Order total preview */}
              <div className="bg-[#1b1b1f] border border-[#292a2d] rounded-xl p-3 space-y-1 text-xs font-['Space_Mono'] text-[#c5c9ac]">
                <div className="flex justify-between">
                  <span>ITEMS ({items.reduce((a, b) => a + b.quantity, 0)})</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>DISPATCH SPEED</span>
                  <span className="text-[#c8f300] font-bold">SAME-DAY TOKYO AIRMAIL</span>
                </div>
                <div className="pt-2 border-t border-[#292a2d] flex justify-between text-sm font-['Syne'] font-extrabold text-white">
                  <span>CHARGE TOTAL</span>
                  <span className="text-[#c8f300]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-transform cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                    <span>AUTHORIZING BIO-GATEWAY...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-base">bolt</span>
                    <span>AUTHORIZE & CONFIRM DROP (${total.toFixed(2)})</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#c8f300]/20 border-2 border-[#c8f300] text-[#c8f300] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl font-bold">verified</span>
            </div>

            <div>
              <span className="inline-block bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-2">
                DROP CONFIRMED // LIVE IN QUEUE
              </span>
              <h3 className="font-['Syne'] text-3xl font-extrabold uppercase text-white">
                YOU'RE LOCKED IN.
              </h3>
              <p className="font-['Space_Mono'] text-sm text-[#c8f300] mt-1 font-bold">
                ORDER ID: {orderCode}
              </p>
            </div>

            <div className="bg-[#1b1b1f] border border-[#292a2d] rounded-xl p-4 text-left font-['Space_Grotesk'] text-xs space-y-2 text-[#c5c9ac]">
              <p className="text-white font-medium">
                📦 Your cold-purified shipment is being packed in insulated aluminum canisters at Tokyo Air Base.
              </p>
              <div className="flex justify-between font-['Space_Mono'] text-[11px] pt-2 border-t border-[#292a2d]">
                <span>DESTINATION:</span>
                <span className="text-white">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between font-['Space_Mono'] text-[11px]">
                <span>CONFIRMATION DISPATCHED:</span>
                <span className="text-[#c8f300]">{formData.email}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider shadow-[4px_4px_0px_#000000] cursor-pointer hover:-translate-y-0.5 transition-transform"
            >
              RETURN TO THE VAULT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
