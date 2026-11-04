import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin } from 'lucide-react';
import { realEstateData } from '../data/realEstateData';

export default function RealEstateFooter() {
  const { brand } = realEstateData;

  return (
    <footer className="bg-[#183D35] text-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F6F5F0]/10 border border-[#F6F5F0]/20 text-[#F6F5F0] flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <span className="font-outfit text-2xl font-extrabold tracking-tight text-[#F6F5F0]">
              {brand.name}
            </span>
          </div>
          <p className="text-[#DAD7CE] text-sm leading-relaxed font-light max-w-xs">
            {brand.tagline} Exclusively curated residences in the world's most sought-after addresses.
          </p>
          <p className="text-[#DAD7CE]/50 text-[10px] font-mono uppercase tracking-wider">
            Created for Webex_Flow Portfolio — Phase 2
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-5">
          <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-[#DAD7CE]/70">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-[#DAD7CE]">
            <li>
              <Link to="/demos/real-estate" className="hover:text-white transition-colors">
                Curated Homes
              </Link>
            </li>
            <li>
              <Link to="/demos/real-estate/properties" className="hover:text-white transition-colors">
                All Residences
              </Link>
            </li>
            <li>
              <Link to="/demos" className="hover:text-white transition-colors">
                ← Back to Webex_Flow
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-5">
          <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-[#DAD7CE]/70">
            Private Enquiries
          </h4>
          <ul className="space-y-3 text-sm text-[#DAD7CE]">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-[#DAD7CE]/50 shrink-0" />
              <span>{brand.contact.phone}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 mt-0.5 text-[#DAD7CE]/50 shrink-0" />
              <span>{brand.contact.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-[#DAD7CE]/50 shrink-0" />
              <span className="leading-relaxed">{brand.contact.office}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#F6F5F0]/10 max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[#DAD7CE]/40 uppercase tracking-wider">
        <span>© {new Date().getFullYear()} Real Estate Website — Concept Demo · All properties & prices are entirely fictional</span>
        <span>A Webex_Flow Concept Project</span>
      </div>
    </footer>
  );
}
