import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function SchoolFooter() {
  return (
    <footer className="bg-[#172B4D] text-[#FAFAF7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9A45C] text-[#172B4D] flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-outfit text-xl font-bold tracking-tight block">
                  {schoolData.name}
                </span>
                <span className="text-xs text-[#C9A45C]">
                  {schoolData.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#FAFAF7]/75 leading-relaxed max-w-sm">
              Cultivating intellect, leadership, and emotional resilience across Pre-K through Grade 12 since 1998.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
              Academic Quick Links
            </p>
            <ul className="space-y-2 text-xs text-[#FAFAF7]/80">
              <li>
                <Link to="/demos/school" className="hover:text-white transition-colors">Curriculum & Campus</Link>
              </li>
              <li>
                <Link to="/demos/school/admissions" className="hover:text-white transition-colors">Admissions Guidelines</Link>
              </li>
              <li>
                <Link to="/demos/school/admissions#process" className="hover:text-white transition-colors">Application Timeline</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
              Admissions Office
            </p>
            <ul className="space-y-2 text-xs text-[#FAFAF7]/80 font-mono">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>{schoolData.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>{schoolData.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>{schoolData.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#FAFAF7]/50">
          <p>© 2026 {schoolData.name}. Fictional Education Industry Demo.</p>
          <Link to="/demos" className="hover:text-white transition-colors">
            ← Back to Webex_Flow Demos
          </Link>
        </div>
      </div>
    </footer>
  );
}
