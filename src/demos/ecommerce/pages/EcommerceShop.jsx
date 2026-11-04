import React, { useState, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { Filter, Eye, ShoppingBag, SlidersHorizontal, Check } from 'lucide-react';
import { ecommerceData } from '../data/ecommerceData';

export default function EcommerceShop() {
  const context = useOutletContext();
  const openProductModal = context?.openProductModal || (() => {});
  const addToCart = context?.addToCart || (() => {});

  const location = useLocation();
  const [selectedCat, setSelectedCat] = useState('All');
  const [maxPrice, setMaxPrice] = useState(12000);
  const [sortBy, setSortBy] = useState('featured');

  // Check URL query param e.g. ?cat=Outerwear
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat && ecommerceData.categories.includes(cat)) {
      setSelectedCat(cat);
    }
  }, [location.search]);

  // Filter products
  const filtered = ecommerceData.products
    .filter((p) => (selectedCat === 'All' ? true : p.category === selectedCat))
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="border-b border-[#B5A18D]/30 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#B5A18D] font-bold block">
            Online Boutique
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
            All Garments & Essentials
          </h1>
        </div>
        <p className="text-xs font-mono text-[#171717]/60">
          Showing {filtered.length} curated pieces
        </p>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="p-4 sm:p-6 rounded-xl bg-white border border-[#B5A18D]/30 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {ecommerceData.categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCat === c
                  ? 'bg-[#171717] text-white font-bold'
                  : 'bg-[#F5F1E9] text-[#171717]/80 hover:bg-[#B5A18D]/30'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Price & Sort Controls */}
        <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
          
          {/* Price Slider */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span>Max: ₹{maxPrice.toLocaleString()}</span>
            <input
              type="range"
              min="3000"
              max="12000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-[#171717] w-24 sm:w-32 cursor-pointer"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded bg-[#F5F1E9] border border-[#B5A18D]/40 text-xs font-mono focus:outline-none"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 space-y-3">
          <p className="font-display text-lg font-bold">No garments match your filters.</p>
          <button
            onClick={() => {
              setSelectedCat('All');
              setMaxPrice(12000);
            }}
            className="text-xs font-mono underline text-[#171717]/70 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#B5A18D]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F1E9]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {product.isNew && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#171717] text-white text-[9px] font-mono uppercase font-bold">
                    New
                  </span>
                )}

                <button
                  onClick={() => openProductModal(product)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/95 hover:bg-white text-[#171717] shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                  title="Quick View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#B5A18D]">
                  <span className="uppercase">{product.category}</span>
                  <span>{product.color}</span>
                </div>

                <h3 className="font-display font-semibold text-xs leading-snug text-[#171717]">
                  {product.name}
                </h3>

                <p className="font-display font-bold text-sm">
                  ₹{product.price.toLocaleString()}
                  {product.originalPrice && (
                    <span className="text-xs text-[#171717]/40 line-through ml-2 font-normal">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </p>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => addToCart(product, product.sizes[0])}
                    className="w-full py-2.5 rounded bg-[#171717] hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
