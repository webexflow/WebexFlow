import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HeartPulse, PhoneCall, Calendar, Menu, X, ShieldAlert } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function HospitalNav({ onOpenBooking }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Emergency Alert Banner (Fictional Demo) */}
      <div className="bg-[#126B68] text-white text-[11px] font-mono py-1.5 px-4 text-center border-b border-white/10 flex items-center justify-center gap-2">
        <ShieldAlert className="w-3.5 h-3.5 text-[#E6F3EF]" />
        <span>DEMO EMERGENCY HOTLINE: <strong className="underline">{hospitalData.emergencyPhone}</strong> (Demonstrative Healthcare Prototype)</span>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6F3EF] text-[#263238]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand */}
          <Link to="/demos/hospital" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#E6F3EF] text-[#126B68] flex items-center justify-center font-bold">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight block text-[#126B68]">
                {hospitalData.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#263238]/60 block font-medium">
                {hospitalData.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink
              to="/demos/hospital"
              end
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-[#126B68] font-bold border-b-2 border-[#126B68] pb-1' : 'text-[#263238]/70 hover:text-[#126B68]'}`
              }
            >
              Hospital Overview
            </NavLink>
            <NavLink
              to="/demos/hospital/departments"
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-[#126B68] font-bold border-b-2 border-[#126B68] pb-1' : 'text-[#263238]/70 hover:text-[#126B68]'}`
              }
            >
              Clinical Departments
            </NavLink>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-lg bg-[#126B68] text-white hover:bg-[#0e5553] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#263238]"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-b border-[#E6F3EF] px-6 py-5 space-y-4">
            <NavLink
              to="/demos/hospital"
              end
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-[#126B68]"
            >
              Hospital Overview
            </NavLink>
            <NavLink
              to="/demos/hospital/departments"
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-[#126B68]"
            >
              Clinical Departments
            </NavLink>
            <button
              onClick={() => {
                setOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-[#126B68] text-white text-xs font-bold uppercase tracking-wider"
            >
              Book Appointment
            </button>
          </div>
        )}
      </header>
    </>
  );
}
