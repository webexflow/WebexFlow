import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, MapPin } from 'lucide-react';
import { photographyData } from '../data/photographyData';

export default function PhotographyPortfolio() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = selectedCat === 'All'
    ? photographyData.portfolio
    : photographyData.portfolio.filter(item => item.category === selectedCat);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24 space-y-16">
      
      {/* Portfolio Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#252525]/60 block">
          Visual Archive
        </span>
        <h1 className="font-cormorant text-5xl sm:text-7xl font-light text-[#171717] leading-tight">
          Portfolio Gallery
        </h1>
        <p className="font-sans text-xs sm:text-sm text-[#252525]/70 max-w-lg mx-auto font-light leading-relaxed">
          A curated collection of commissioned weddings, editorial fashion lookbooks, and fine-art portraits captured on medium format and 35mm film.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-[#D8D0C3] pb-6">
        {photographyData.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-sans transition-all cursor-pointer ${
              selectedCat === cat
                ? 'bg-[#171717] text-[#F7F5F0] font-semibold'
                : 'text-[#252525]/70 hover:text-[#171717]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden bg-[#252525] aspect-[4/5]"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#171717]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Eye className="w-4 h-4 text-white" />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#D8D0C3]">
                    {item.category}
                  </span>
                  <h3 className="font-cormorant text-2xl font-light">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#D8D0C3]/80 flex items-center gap-1 font-light">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#171717]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white hover:text-[#D8D0C3] transition-colors z-20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#D8D0C3] transition-colors z-20 cursor-pointer bg-white/10 rounded-full"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Right */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#D8D0C3] transition-colors z-20 cursor-pointer bg-white/10 rounded-full"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4">
              <img
                src={currentItem.url}
                alt={currentItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl"
              />
              <div className="text-center text-white space-y-1">
                <h3 className="font-cormorant text-2xl font-light">
                  {currentItem.title}
                </h3>
                <p className="font-sans text-xs text-[#D8D0C3]/80">
                  {currentItem.category} • {currentItem.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
