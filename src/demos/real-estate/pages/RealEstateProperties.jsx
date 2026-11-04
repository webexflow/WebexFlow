import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, SlidersHorizontal, X } from 'lucide-react';
import { realEstateData } from '../data/realEstateData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

function PropertyCard({ property, onView, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#DAD7CE] hover:border-[#183D35]/40 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/50 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#183D35] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
          {property.type}
        </span>
        {property.isFeatured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#DAD7CE]/90 text-[#183D35] text-[10px] font-mono font-bold uppercase">
            Featured
          </span>
        )}
        <span className="absolute bottom-3 right-3 font-outfit text-white text-base font-bold drop-shadow">
          {property.formattedPrice}
        </span>
      </div>
      <div className="p-5 space-y-3">
        <div>
          <span className="text-[10px] font-mono text-[#183D35] uppercase tracking-wider flex items-center gap-1 mb-1">
            <MapPin className="w-3 h-3" /> {property.location}
          </span>
          <h3 className="font-outfit text-sm font-bold text-[#242424] leading-snug group-hover:text-[#183D35] transition-colors">
            {property.title}
          </h3>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-light">
          {property.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500 font-mono border-t border-[#DAD7CE] pt-3">
          <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {property.beds}</span>
          <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {property.baths}</span>
          <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" /> {property.sqft}</span>
        </div>
        <button
          onClick={() => onView(property)}
          className="w-full py-2.5 rounded-lg bg-[#183D35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#122e28] transition-colors cursor-pointer"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default function RealEstateProperties() {
  const { openPropertyModal } = useOutletContext();

  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let list = [...realEstateData.properties];
    if (typeFilter !== 'All') list = list.filter((p) => p.type === typeFilter);
    if (locationFilter !== 'All') {
      list = list.filter((p) =>
        p.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    return list;
  }, [typeFilter, locationFilter, sortBy]);

  const hasFilters = typeFilter !== 'All' || locationFilter !== 'All' || sortBy !== 'default';

  const resetFilters = () => {
    setTypeFilter('All');
    setLocationFilter('All');
    setSortBy('default');
  };

  return (
    <div className="bg-[#F6F5F0] min-h-screen">

      {/* Page Header */}
      <section className="bg-[#242424] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#DAD7CE]/60">
              Global Portfolio · {realEstateData.properties.length} Exclusive Residences
            </span>
            <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              All Residences.
            </h1>
            <p className="text-[#DAD7CE] text-sm leading-relaxed font-light">
              Exclusively curated properties across the world's most coveted addresses. Each residence is personally verified by our senior acquisition team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-[#DAD7CE] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#183D35] font-semibold shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filter
            </div>
            
            {/* Type Filter */}
            <div className="flex flex-wrap gap-2 flex-1">
              {realEstateData.types.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wide font-semibold transition-all cursor-pointer ${
                    typeFilter === type
                      ? 'bg-[#183D35] text-white'
                      : 'bg-[#F6F5F0] text-[#242424] border border-[#DAD7CE] hover:border-[#183D35]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Location */}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#DAD7CE] text-xs text-[#242424] bg-[#F6F5F0] outline-none focus:border-[#183D35] font-mono cursor-pointer"
            >
              {realEstateData.locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#DAD7CE] text-xs text-[#242424] bg-[#F6F5F0] outline-none focus:border-[#183D35] font-mono cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="price-asc">Price: Low → High</option>
            </select>

            {hasFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-red-200 text-red-500 text-xs font-mono uppercase tracking-wide hover:bg-red-50 transition-colors cursor-pointer"
              >
                <X className="w-3 h-3" /> Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-2">
        <p className="text-xs font-mono text-[#242424]/50 uppercase tracking-wider">
          {filtered.length} {filtered.length === 1 ? 'residence' : 'residences'} found
        </p>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <PropertyCard
                key={property.id}
                property={property}
                onView={openPropertyModal}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 space-y-4">
            <p className="text-4xl">🏡</p>
            <p className="font-outfit text-lg font-bold text-[#242424]">No properties match your filters.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-lg bg-[#183D35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#122e28] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom Note */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <p className="text-center text-[10px] font-mono text-[#242424]/30 uppercase tracking-widest">
          All properties, prices and locations are entirely fictional — created for Webex_Flow portfolio demonstration
        </p>
      </div>
    </div>
  );
}
