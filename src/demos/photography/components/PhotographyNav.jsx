import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { photographyData } from '../data/photographyData';

export default function PhotographyNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#D8D0C3]/60 text-[#171717]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/demos/photography" className="group">
          <span className="font-cormorant text-2xl lg:text-3xl tracking-[0.2em] font-semibold block text-[#171717]">
            {photographyData.brand.name}
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#252525]/60 block -mt-0.5">
            {photographyData.brand.tagline}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/demos/photography"
            end
            className={({ isActive }) =>
              `text-xs uppercase tracking-[0.25em] font-sans transition-colors ${
                isActive ? 'text-[#171717] font-semibold border-b border-[#171717] pb-1' : 'text-[#252525]/70 hover:text-[#171717]'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/demos/photography/portfolio"
            className={({ isActive }) =>
              `text-xs uppercase tracking-[0.25em] font-sans transition-colors ${
                isActive ? 'text-[#171717] font-semibold border-b border-[#171717] pb-1' : 'text-[#252525]/70 hover:text-[#171717]'
              }`
            }
          >
            Portfolio
          </NavLink>
          <Link
            to="/demos/photography#inquire"
            className="px-5 py-2 rounded-full border border-[#171717] text-xs uppercase tracking-[0.2em] font-sans text-[#171717] hover:bg-[#171717] hover:text-[#F7F5F0] transition-all"
          >
            Book a Session
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#171717]"
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#F7F5F0] border-b border-[#D8D0C3] px-6 py-6 space-y-4">
          <NavLink
            to="/demos/photography"
            end
            onClick={() => setOpen(false)}
            className="block text-sm uppercase tracking-widest text-[#171717] font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/demos/photography/portfolio"
            onClick={() => setOpen(false)}
            className="block text-sm uppercase tracking-widest text-[#171717] font-semibold"
          >
            Portfolio Gallery
          </NavLink>
          <Link
            to="/demos/photography#inquire"
            onClick={() => setOpen(false)}
            className="block w-full text-center py-3 bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-widest"
          >
            Book a Session
          </Link>
        </div>
      )}
    </header>
  );
}
