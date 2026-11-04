import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GraduationCap, Menu, X, Phone, ArrowRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function SchoolNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#172B4D]/15 text-[#172B4D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/demos/school" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#172B4D] text-[#C9A45C] flex items-center justify-center font-bold shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="font-outfit text-xl font-bold tracking-tight block text-[#172B4D]">
              {schoolData.name}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-[#172B4D]/70 block font-medium">
              {schoolData.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/demos/school"
            end
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#172B4D] font-bold border-b-2 border-[#C9A45C] pb-1' : 'text-[#172B4D]/70 hover:text-[#172B4D]'}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/demos/school/admissions"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#172B4D] font-bold border-b-2 border-[#C9A45C] pb-1' : 'text-[#172B4D]/70 hover:text-[#172B4D]'}`
            }
          >
            Admissions & Tuition
          </NavLink>
          <a
            href="tel:5552345678"
            className="hidden lg:flex items-center gap-1.5 text-xs text-[#172B4D]/80 font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>(555) 234-5678</span>
          </a>
          <Link
            to="/demos/school/admissions"
            className="px-5 py-2.5 rounded-lg bg-[#172B4D] text-white hover:bg-[#172B4D]/90 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
          >
            Apply for Admission
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#172B4D]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#FAFAF7] border-b border-[#172B4D]/15 px-6 py-6 space-y-4">
          <NavLink
            to="/demos/school"
            end
            onClick={() => setOpen(false)}
            className="block text-base font-semibold text-[#172B4D]"
          >
            Campus Overview
          </NavLink>
          <NavLink
            to="/demos/school/admissions"
            onClick={() => setOpen(false)}
            className="block text-base font-semibold text-[#172B4D]"
          >
            Admissions & Enrollment
          </NavLink>
          <Link
            to="/demos/school/admissions"
            onClick={() => setOpen(false)}
            className="block w-full text-center py-3 bg-[#172B4D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
          >
            Apply for Admission
          </Link>
        </div>
      )}
    </header>
  );
}
