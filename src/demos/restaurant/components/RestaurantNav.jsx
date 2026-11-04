import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Utensils, Menu, X, Calendar } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function RestaurantNav({ onOpenReserve }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#B99A61]/30 text-[#29241F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/demos/restaurant" className="group">
          <span className="font-playfair text-2xl font-bold tracking-wider text-[#29241F] block">
            {restaurantData.name}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B99A61] block -mt-0.5 font-semibold">
            {restaurantData.tagline}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-semibold">
          <NavLink
            to="/demos/restaurant"
            end
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#48523A] border-b-2 border-[#48523A] pb-1 font-bold' : 'text-[#29241F]/70 hover:text-[#48523A]'}`
            }
          >
            The Restaurant
          </NavLink>
          <NavLink
            to="/demos/restaurant/menu"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#48523A] border-b-2 border-[#48523A] pb-1 font-bold' : 'text-[#29241F]/70 hover:text-[#48523A]'}`
            }
          >
            Seasonal Menu
          </NavLink>
          <button
            onClick={onOpenReserve}
            className="px-5 py-2.5 rounded-full bg-[#48523A] text-white hover:bg-[#3b432f] text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#29241F]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#F5F0E6] border-b border-[#B99A61]/30 px-6 py-6 space-y-4 text-xs uppercase tracking-widest font-semibold">
          <NavLink
            to="/demos/restaurant"
            end
            onClick={() => setOpen(false)}
            className="block text-[#29241F]"
          >
            The Restaurant
          </NavLink>
          <NavLink
            to="/demos/restaurant/menu"
            onClick={() => setOpen(false)}
            className="block text-[#29241F]"
          >
            Seasonal Menu
          </NavLink>
          <button
            onClick={() => {
              setOpen(false);
              onOpenReserve();
            }}
            className="w-full py-3 bg-[#48523A] text-white text-center rounded-lg mt-2 cursor-pointer"
          >
            Reserve Table
          </button>
        </div>
      )}
    </header>
  );
}
