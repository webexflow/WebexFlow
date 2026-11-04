import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Utensils, Calendar, Sparkles } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function RestaurantMenu() {
  const context = useOutletContext();
  const openReserveModal = context?.openReserveModal || (() => {});

  const categories = Object.keys(restaurantData.menu);
  const [activeCat, setActiveCat] = useState(categories[0]);

  const activeItems = restaurantData.menu[activeCat] || [];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#48523A]/10 text-[#48523A] font-bold">
          Autumn Hearth Menu
        </span>
        <h1 className="font-playfair text-4xl sm:text-6xl font-bold text-[#29241F] tracking-tight">
          Seasonal Dining Selections
        </h1>
        <p className="text-sm text-[#29241F]/70 leading-relaxed font-light">
          Prepared daily based on seasonal arrivals from regional smallholders and coastal fishmongers.
        </p>
      </div>

      {/* Category Tab Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-b border-[#B99A61]/30 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all cursor-pointer ${
              activeCat === cat
                ? 'bg-[#48523A] text-white font-bold shadow-sm'
                : 'bg-white text-[#29241F]/70 hover:bg-[#B99A61]/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Item Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeItems.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl overflow-hidden border border-[#B99A61]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="h-56 overflow-hidden bg-slate-100">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B99A61] uppercase tracking-wider font-semibold">
                  {item.badge}
                </span>
                <span className="font-bold text-[#29241F] text-sm">
                  {item.price}
                </span>
              </div>

              <h3 className="font-playfair text-xl font-bold text-[#29241F]">
                {item.name}
              </h3>

              <p className="text-xs text-[#29241F]/70 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={openReserveModal}
                className="w-full py-2.5 rounded-lg border border-[#48523A]/30 hover:border-[#48523A] hover:bg-[#48523A] hover:text-white text-[#48523A] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reserve For This Course
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reservation CTA Box */}
      <div className="text-center p-8 sm:p-12 rounded-3xl bg-white border border-[#B99A61]/30 max-w-3xl mx-auto space-y-4 shadow-sm">
        <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#29241F]">
          Joining Us for Dinner?
        </h3>
        <p className="text-xs sm:text-sm text-[#29241F]/70 max-w-lg mx-auto font-light">
          We accommodate dietary preferences with advance notice. Secure your table online or connect with our sommelier.
        </p>
        <button
          onClick={openReserveModal}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#48523A] hover:bg-[#3b432f] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Table Online</span>
        </button>
      </div>

    </div>
  );
}
