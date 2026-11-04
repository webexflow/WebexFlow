import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { photographyData } from '../data/photographyData';

export default function PhotographyFooter() {
  return (
    <footer className="bg-[#171717] text-[#F7F5F0] pt-20 pb-12 border-t border-[#252525]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#252525]">
          
          <div className="md:col-span-6 space-y-4">
            <span className="font-cormorant text-3xl tracking-[0.2em] font-semibold block">
              {photographyData.brand.name}
            </span>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#D8D0C3]/70">
              {photographyData.brand.tagline}
            </p>
            <p className="text-sm font-sans text-[#D8D0C3]/80 leading-relaxed max-w-md pt-2">
              {photographyData.brand.description}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#D8D0C3] font-semibold">
              Explore
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-[0.15em] text-[#D8D0C3]/70 font-sans">
              <li>
                <Link to="/demos/photography" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/demos/photography/portfolio" className="hover:text-white transition-colors">Portfolio Archive</Link>
              </li>
              <li>
                <Link to="/demos/photography#services" className="hover:text-white transition-colors">Commissions</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#D8D0C3] font-semibold">
              Atelier Locations
            </p>
            <p className="text-xs font-sans text-[#D8D0C3]/70 leading-relaxed">
              Paris: 14 Rue Saint-Honoré<br />
              New York: 84 Mercer St, SoHo<br />
              Tokyo: Minami-Aoyama, Minato
            </p>
            <div className="pt-2 text-xs font-mono text-[#D8D0C3]/50">
              inquiries@photography-demo.local
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#D8D0C3]/50">
          <p>© 2026 {photographyData.brand.name}. Demonstrative Industry Showcase.</p>
          <Link to="/demos" className="hover:text-white transition-colors">
            ← Back to Webex_Flow Demos
          </Link>
        </div>
      </div>
    </footer>
  );
}
