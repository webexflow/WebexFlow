import React, { useState } from 'react';
import { X, ShoppingBag, Check, Star } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-[#171717]/70 backdrop-blur-sm" />

      <div className="relative bg-[#F5F1E9] text-[#171717] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-[#B5A18D]/40">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/60 hover:bg-white text-[#171717] z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-72 md:h-full bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B5A18D] font-bold block">
                {product.category} • {product.color}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                {product.name}
              </h3>
              <p className="font-display font-semibold text-lg">
                ₹{product.price.toLocaleString()}
                {product.originalPrice && (
                  <span className="text-xs text-[#171717]/40 line-through ml-2 font-normal">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </p>
              <p className="text-xs text-[#171717]/70 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Sizes Selection */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider block font-semibold">
                  Select Size
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'bg-[#171717] text-white font-bold'
                          : 'bg-white text-[#171717] border border-[#B5A18D]/40 hover:border-[#171717]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#B5A18D]/30">
              <button
                onClick={handleAdd}
                className="w-full py-3.5 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag — ₹{product.price.toLocaleString()}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
