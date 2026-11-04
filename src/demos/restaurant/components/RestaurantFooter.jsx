import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function RestaurantFooter({ onOpenReserve }) {
  return (
    <footer className="bg-[#29241F] text-[#F5F0E6] pt-16 pb-12 border-t border-[#B99A61]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#B99A61]/20">
          
          <div className="md:col-span-5 space-y-4">
            <span className="font-playfair text-3xl font-bold tracking-wide block">
              {restaurantData.name}
            </span>
            <p className="text-xs font-mono uppercase tracking-widest text-[#B99A61]">
              {restaurantData.tagline}
            </p>
            <p className="text-xs text-[#F5F0E6]/75 leading-relaxed max-w-sm font-light">
              Rooted in Mediterranean tradition, wood-fired seasonal hearth cooking, and biodynamic viticulture.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B99A61]">
              Service Hours (Demo)
            </p>
            <div className="space-y-1.5 text-xs text-[#F5F0E6]/75 font-mono">
              {restaurantData.hours.map((h, i) => (
                <div key={i}>
                  <p className="text-white font-medium">{h.days}</p>
                  <p className="text-[11px] text-[#B99A61]">{h.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B99A61]">
              Dining Location & Inquiries
            </p>
            <ul className="space-y-2 text-xs text-[#F5F0E6]/75 font-mono">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B99A61] flex-shrink-0 mt-0.5" />
                <span>{restaurantData.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B99A61]" />
                <span>{restaurantData.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B99A61]" />
                <span>{restaurantData.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5F0E6]/50">
          <p>© 2026 {restaurantData.name}. Fictional Dining Demonstration.</p>
          <Link to="/demos" className="hover:text-white transition-colors">
            ← Back to Webex_Flow Demos
          </Link>
        </div>
      </div>
    </footer>
  );
}
