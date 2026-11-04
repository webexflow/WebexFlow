import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, Eye } from 'lucide-react';
import { ecommerceData } from '../data/ecommerceData';

export default function EcommerceHome() {
  const context = useOutletContext();
  const openProductModal = context?.openProductModal || (() => {});
  const addToCart = context?.addToCart || (() => {});

  const newArrivals = ecommerceData.products.filter(p => p.isNew);
  const bestSellers = ecommerceData.products.filter(p => p.isBestSeller || p.rating >= 4.9);

  return (
    <div className="space-y-20 sm:space-y-32 pb-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#EAE5DB] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80"
            alt="Autumn Editorial Campaign"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#171717]/70 via-[#171717]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white py-16">
          <div className="max-w-xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-mono font-medium text-[#B5A18D] block">
              Autumn / Winter 2026 Collection
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]">
              Form Meets <br />
              Functionality.
            </h1>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
              Elevated essentials crafted from unbleached organic linen, regenerative wool, and structured Japanese tailoring.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/demos/ecommerce/shop"
                className="px-8 py-3.5 bg-white text-[#171717] hover:bg-[#F5F1E9] text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
              >
                Explore Collection
              </Link>
              <Link
                to="/demos/ecommerce/shop?cat=Outerwear"
                className="px-8 py-3.5 border border-white text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-widest transition-all"
              >
                View Outerwear
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#B5A18D] font-bold block">
            Curated Categories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Designed for Modern Living
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Tailored Outerwear",
              subtitle: "Double-faced coats & blazers",
              image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
              cat: "Outerwear"
            },
            {
              title: "Cashmere & Knitwear",
              subtitle: "Heavy-gauge rib knits & mocknecks",
              image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
              cat: "Knitwear"
            },
            {
              title: "Artisanal Leathergoods",
              subtitle: "Vegetable-tanned totes & accessories",
              image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
              cat: "Accessories"
            }
          ].map((col, idx) => (
            <Link
              key={idx}
              to={`/demos/ecommerce/shop?cat=${col.cat}`}
              className="group relative h-[480px] overflow-hidden rounded-xl bg-white shadow-sm block"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#B5A18D]">
                  {col.subtitle}
                </p>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  {col.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-white pt-1">
                  <span>Shop Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals Showcase */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 border-b border-[#B5A18D]/30 pb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B5A18D] font-bold block">
              Just Landed
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              New Season Arrivals
            </h2>
          </div>
          <Link
            to="/demos/ecommerce/shop"
            className="text-xs font-mono uppercase tracking-wider text-[#171717] hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden border border-[#B5A18D]/20 shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F1E9]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  onClick={() => openProductModal(product)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#171717] shadow-md transition-transform group-hover:scale-110 cursor-pointer"
                  title="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#B5A18D] block">
                  {product.category}
                </span>
                <h3 className="font-display font-semibold text-xs leading-snug text-[#171717]">
                  {product.name}
                </h3>
                <p className="font-display font-bold text-sm">
                  ₹{product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(product, product.sizes[0])}
                  className="w-full py-2 bg-[#F5F1E9] hover:bg-[#171717] text-[#171717] hover:text-white text-[11px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer mt-1"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Editorial Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-14 bg-[#171717] text-[#F5F1E9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B5A18D]">
              Our Manufacturing Commitment
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight">
              Quiet Luxury. Made to Outlive Seasons.
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F1E9]/80 leading-relaxed font-light max-w-2xl">
              We reject transient micro-trends. Every garment is cut in limited runs with traceable wool, sustainable Italian dyes, and reinforced internal seams designed to last for decades.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/demos/ecommerce/shop"
              className="px-8 py-4 bg-white text-[#171717] hover:bg-[#B5A18D] text-xs font-bold uppercase tracking-widest transition-all"
            >
              Shop Sustainable Edit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
