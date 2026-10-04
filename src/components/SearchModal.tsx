import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/catalog';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, flavor: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onQuickAdd
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.flavors.some((f) => f.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#121316] border border-[#292a2d] rounded-2xl p-5 md:p-6 text-white shadow-[8px_8px_0px_#000000]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#292a2d]">
          <span className="material-symbols-outlined text-[#c8f300] text-2xl">search</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH BY FLAVOR, MACROS, OR DROP NAME..."
            className="w-full bg-transparent font-['Space_Mono'] text-sm text-white placeholder:text-[#8f9378] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1f1f23] hover:bg-[#292a2d] flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Quick tags */}
        <div className="flex items-center gap-2 py-3 overflow-x-auto text-xs font-['Space_Mono']">
          <span className="text-[#8f9378]">SUGGESTIONS:</span>
          {['YUZU MATCHA', '30G PROTEIN', 'ZERO SUGAR', 'CRUNCH BAR', 'VEGAN'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-[#1b1b1f] hover:bg-[#292a2d] text-[#c5c9ac] hover:text-[#c8f300] px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto space-y-3 pt-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#8f9378] font-['Space_Mono'] text-xs">
              NO DROPS FOUND MATCHING "{query}". TRY ANOTHER FLAVOR.
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                className="bg-[#1b1b1f] border border-[#292a2d] rounded-xl p-3 flex items-center justify-between gap-4 hover:border-[#c8f300] transition-colors"
              >
                <div
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-lg object-cover bg-[#0d0e11] shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-['Syne'] text-sm font-bold uppercase text-white hover:text-[#c8f300] transition-colors">
                        {product.name}
                      </h4>
                      <span className="text-[10px] font-['Space_Mono'] bg-[#292a2d] text-[#c8f300] px-1.5 py-0.5 rounded">
                        {product.proteinGrams}G PROTEIN
                      </span>
                    </div>
                    <p className="font-['Space_Grotesk'] text-xs text-[#c5c9ac] mt-0.5 line-clamp-1">
                      {product.flavorSummary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-['Space_Mono'] text-sm font-bold text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => {
                      onQuickAdd(product, product.defaultFlavor);
                      onClose();
                    }}
                    className="bg-[#c8f300] hover:bg-[#afd500] text-[#171e00] font-['Space_Mono'] text-xs font-bold px-3 py-1.5 rounded-lg uppercase shadow-[2px_2px_0px_#000000] cursor-pointer"
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
