import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Menu, X, Phone, Compass } from 'lucide-react';
import { realEstateData } from '../data/realEstateData';

export default function RealEstateNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F6F5F0]/95 backdrop-blur-md border-b border-[#DAD7CE] text-[#242424]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/demos/real-estate" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#183D35] text-[#F6F5F0] flex items-center justify-center font-bold">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <span className="font-outfit text-xl font-extrabold tracking-tight text-[#183D35] block">
              {realEstateData.brand.name}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-[#242424]/60 block -mt-0.5 font-medium">
              {realEstateData.brand.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold">
          <NavLink
            to="/demos/real-estate"
            end
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#183D35] border-b-2 border-[#183D35] pb-1 font-bold' : 'text-[#242424]/70 hover:text-[#183D35]'}`
            }
          >
            Curated Homes
          </NavLink>
          <NavLink
            to="/demos/real-estate/properties"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#183D35] border-b-2 border-[#183D35] pb-1 font-bold' : 'text-[#242424]/70 hover:text-[#183D35]'}`
            }
          >
            All Residences
          </NavLink>
          <Link
            to="/demos/real-estate/properties"
            className="px-5 py-2.5 rounded-lg bg-[#183D35] text-white hover:bg-[#122e28] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            Browse Properties
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#242424]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#F6F5F0] border-b border-[#DAD7CE] px-6 py-6 space-y-4 text-xs uppercase tracking-widest font-semibold">
          <NavLink
            to="/demos/real-estate"
            end
            onClick={() => setOpen(false)}
            className="block py-1 text-[#242424]"
          >
            Curated Homes
          </NavLink>
          <NavLink
            to="/demos/real-estate/properties"
            onClick={() => setOpen(false)}
            className="block py-1 text-[#242424]"
          >
            All Residences
          </NavLink>
          <Link
            to="/demos/real-estate/properties"
            onClick={() => setOpen(false)}
            className="block w-full py-3 bg-[#183D35] text-white text-center rounded-lg"
          >
            Browse Properties
          </Link>
        </div>
      )}
    </header>
  );
}
