import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Phone, Mail, MapPin, ShieldAlert } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function HospitalFooter() {
  return (
    <footer className="bg-[#263238] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#126B68] text-white flex items-center justify-center font-bold">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight block">
                  {hospitalData.name}
                </span>
                <span className="text-xs text-[#E6F3EF]">
                  {hospitalData.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Providing patient-centered medicine, advanced diagnostics, and compassionate inpatient care across our state-of-the-art medical pavilion.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E6F3EF]">
              Hospital Departments
            </p>
            <ul className="space-y-1.5 text-xs text-white/75">
              <li><Link to="/demos/hospital/departments" className="hover:text-white">Cardiology & Vascular</Link></li>
              <li><Link to="/demos/hospital/departments" className="hover:text-white">Orthopaedics & Joint</Link></li>
              <li><Link to="/demos/hospital/departments" className="hover:text-white">Neurology & Stroke Unit</Link></li>
              <li><Link to="/demos/hospital/departments" className="hover:text-white">Paediatrics & Neonatal</Link></li>
              <li><Link to="/demos/hospital/departments" className="hover:text-white">General & Internal Medicine</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E6F3EF]">
              Patient Contact & Information
            </p>
            <ul className="space-y-2 text-xs text-white/75 font-mono">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#126B68]" />
                <span>{hospitalData.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#126B68]" />
                <span>Appointments: {hospitalData.appointmentPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#126B68]" />
                <span>{hospitalData.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© 2026 {hospitalData.name}. All medical data is fictional and for demonstration purposes only.</p>
          <Link to="/demos" className="hover:text-white transition-colors">
            ← Back to Webex_Flow Demos
          </Link>
        </div>
      </div>
    </footer>
  );
}
