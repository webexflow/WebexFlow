import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Utensils, Calendar, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function RestaurantHome() {
  const context = useOutletContext();
  const openReserveModal = context?.openReserveModal || (() => {});

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#29241F] text-[#F5F0E6]">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80"
            alt="Artisanal Mediterranean Cuisine"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#29241F] via-[#29241F]/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#B99A61] block">
            {restaurantData.cuisine}
          </span>

          <h1 className="font-playfair text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            Good Food. <br />
            <span className="italic font-normal">Beautiful Moments.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#F5F0E6]/85 max-w-lg mx-auto leading-relaxed font-light">
            An evening dedicated to wood-fired hearth cooking, hand-harvested olive oils, and coastal Mediterranean hospitality.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openReserveModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#48523A] hover:bg-[#3b432f] text-white text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg cursor-pointer"
            >
              Reserve a Table
            </button>
            <Link
              to="/demos/restaurant/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#F5F0E6]/30 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-medium transition-all"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Introduction */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B99A61] font-bold block">
          Our Culinary Philosophy
        </span>
        <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#29241F] leading-tight">
          Where Ancient Hearth Meets Seasonal Harvest
        </h2>
        <p className="text-sm sm:text-base text-[#29241F]/75 leading-relaxed max-w-2xl mx-auto font-light">
          We source directly from heritage coastal fisheries, organic micro-farms, and regional olive orchards. Each plate celebrates the raw integrity of seasonal produce cooked simply over open embers.
        </p>
      </section>

      {/* Signature Dishes */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#B99A61]/30 pb-6 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99A61] font-bold block mb-1">
              From the Hearth
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#29241F]">
              Chef's Signature Selections
            </h2>
          </div>
          <Link
            to="/demos/restaurant/menu"
            className="text-xs font-mono uppercase tracking-wider text-[#48523A] font-bold hover:underline"
          >
            View Complete Menu →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurantData.signatures.map((dish, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-[#B99A61]/25 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B99A61] uppercase tracking-wider font-semibold">{dish.tag}</span>
                  <span className="font-bold text-[#29241F]">{dish.price}</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#29241F]">
                  {dish.name}
                </h3>
                <p className="text-xs text-[#29241F]/70 leading-relaxed font-light">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ambience Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99A61] font-bold block">
            Atmosphere
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#29241F]">
            The Ambience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurantData.ambience.map((amb, i) => (
            <div key={i} className="group relative h-80 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={amb.img}
                alt={amb.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29241F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-playfair text-lg font-bold">{amb.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Reservation Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-[#48523A] text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99A61]">
              Table Bookings & Inquiries
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold leading-tight">
              An Unforgettable Evening Awaits.
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl font-light">
              Reservations are recommended up to 30 days in advance. Private cellar dining and terrace buyouts available upon request.
            </p>
            <div className="pt-2 text-xs font-mono text-[#F5F0E6]/75">
              Location: 42 Coastal Olive Grove, Harbor District (Demonstrative Showcase)
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={openReserveModal}
              className="px-8 py-4 rounded-full bg-white text-[#48523A] hover:bg-[#F5F0E6] text-xs font-bold uppercase tracking-widest transition-all shadow-md cursor-pointer"
            >
              Reserve Your Table
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
