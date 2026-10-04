import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, flavor: string, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedFlavor, setSelectedFlavor] = useState(product.defaultFlavor);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToCart(product, selectedFlavor, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-[#121316] border border-[#292a2d] rounded-2xl p-6 md:p-8 text-white shadow-[8px_8px_0px_#000000] relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-[#1f1f23] hover:bg-[#292a2d] flex items-center justify-center text-white cursor-pointer z-10"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Product Media Box */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative w-full h-72 rounded-xl overflow-hidden bg-[#0d0e11] border border-[#292a2d]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#ff4b89] text-[#590026] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase -rotate-2 shadow-[2px_2px_0px_#000000]">
                {product.badge}
              </div>
              <div className="absolute top-3 right-3 bg-[#1f1f23]/90 text-[#c8f300] font-['Space_Mono'] text-[10px] font-bold px-2 py-0.5 rounded border border-[#292a2d]">
                {product.dropNumber}
              </div>
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-['Space_Mono'] text-[#c8f300] font-bold">
                {product.proteinGrams}G BIO-PROTEIN
              </div>
            </div>

            {/* Quick Macro Pills */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#1b1b1f] border border-[#292a2d] p-2 rounded-lg text-center">
                <span className="block text-[10px] font-['Space_Mono'] text-[#8f9378]">CALORIES</span>
                <span className="font-['Syne'] text-base font-bold text-white">{product.calories}</span>
              </div>
              <div className="bg-[#1b1b1f] border border-[#292a2d] p-2 rounded-lg text-center">
                <span className="block text-[10px] font-['Space_Mono'] text-[#8f9378]">SUGAR</span>
                <span className="font-['Syne'] text-base font-bold text-[#c8f300]">{product.sugarGrams}G</span>
              </div>
              <div className="bg-[#1b1b1f] border border-[#292a2d] p-2 rounded-lg text-center">
                <span className="block text-[10px] font-['Space_Mono'] text-[#8f9378]">BCAAs</span>
                <span className="font-['Syne'] text-base font-bold text-[#ff4b89]">{product.bcaaGrams || 6.8}G</span>
              </div>
            </div>
          </div>

          {/* Product Info & Action */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="text-[11px] font-['Space_Mono'] text-[#c8f300] uppercase font-bold tracking-widest">
                {product.category}
              </span>
              <div className="flex items-center justify-between gap-2 mt-1">
                <h2 className="font-['Syne'] text-2xl md:text-3xl font-extrabold uppercase text-white leading-tight">
                  {product.name}
                </h2>
                <span className="font-['Syne'] text-2xl font-bold text-[#c8f300] shrink-0">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="font-['Space_Grotesk'] text-sm text-[#c5c9ac] mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Sensory Quirk Tag */}
            <div className="p-3 bg-[#1b1b1f] border border-[#292a2d] rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ff4b89] text-xl">
                {product.quirkIcon}
              </span>
              <span className="font-['Space_Mono'] text-xs text-white">
                {product.quirkTag}
              </span>
            </div>

            {/* Flavor Selection */}
            <div>
              <label className="block text-[11px] font-['Space_Mono'] uppercase text-[#8f9378] mb-2 font-bold">
                SELECT FLAVOR PROFILE:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map((flavor) => {
                  const isSelected = selectedFlavor === flavor;
                  return (
                    <button
                      key={flavor}
                      type="button"
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-3 py-1.5 rounded-full text-xs font-['Space_Mono'] font-bold uppercase transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#c8f300] text-[#171e00] shadow-[2px_2px_0px_#000000]'
                          : 'bg-[#1f1f23] text-[#c5c9ac] hover:text-white border border-[#292a2d]'
                      }`}
                    >
                      {flavor}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nutrition Facts Table */}
            <div className="bg-[#1b1b1f] border border-[#292a2d] rounded-xl p-3 text-xs font-['Space_Mono'] space-y-1.5">
              <div className="flex justify-between border-b border-[#292a2d] pb-1 text-[#8f9378]">
                <span>LAB PURITY ANALYSIS</span>
                <span className="text-[#c8f300]">COLD-FILTERED MEMBRANE</span>
              </div>
              <div className="flex justify-between text-[#c5c9ac]">
                <span>LEUCINE (TRIGGER DOSE)</span>
                <span className="text-white font-bold">{product.leucineGrams || 3.1}g</span>
              </div>
              <div className="flex justify-between text-[#c5c9ac]">
                <span>DIGEZYME® COMPLEX</span>
                <span className="text-[#c8f300] font-bold">ACTIVE ENZYMES (0 BLOAT)</span>
              </div>
              <div className="flex justify-between text-[#c5c9ac]">
                <span>HEAVY METALS AUDIT</span>
                <span className="text-white font-bold">&lt; 0.01 PPM (CLEAN)</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center border border-[#343538] rounded-xl bg-[#1b1b1f] h-12">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center text-white hover:text-[#c8f300] text-lg font-bold"
                >
                  -
                </button>
                <span className="font-['Space_Mono'] text-sm font-bold px-2 text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center text-white hover:text-[#c8f300] text-lg font-bold"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-[#c8f300] text-[#171e00] font-['Space_Mono'] text-xs font-bold h-12 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">shopping_cart</span>
                <span>
                  DROP IN CART — ${(product.price * quantity).toFixed(2)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
