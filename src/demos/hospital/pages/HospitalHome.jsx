import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  Users, 
  Clock, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function HospitalHome() {
  const context = useOutletContext();
  const openBookingModal = context?.openBookingModal || (() => {});

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Hero Section */}
      <section className="relative bg-[#E6F3EF]/60 py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#126B68]/10 text-[#126B68] border border-[#126B68]/20">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Center of Medical Excellence</span>
              </span>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#263238] tracking-tight leading-[1.08]">
                Compassionate Care. <br />
                <span className="text-[#126B68]">Advanced Medicine.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Our medical center delivers internationally benchmarked clinical diagnostics, specialized surgical care, and 24/7 emergency response dedicated to patient recovery.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#126B68] hover:bg-[#0e5553] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
                <Link
                  to="/demos/hospital/departments"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg border border-[#126B68]/30 hover:border-[#126B68] text-[#126B68] font-semibold text-xs uppercase tracking-wider transition-all text-center"
                >
                  Explore Departments
                </Link>
              </div>

              {/* Quick Trust Metrics */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <p className="text-2xl font-extrabold text-[#126B68]">24/7</p>
                  <p className="text-[11px] text-slate-500 font-medium">Emergency Care</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#126B68]">120+</p>
                  <p className="text-[11px] text-slate-500 font-medium">Physicians & Staff</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#126B68]">6</p>
                  <p className="text-[11px] text-slate-500 font-medium">Key Specialties</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Hospital Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hospital Introduction */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E6F3EF] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#126B68] font-semibold">
              Our Healthcare Mission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] leading-tight">
              Patient Safety & Dignity in Every Healing Touch
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Equipped with modern surgical suites, dedicated cardiac intervention labs, and compassionate bedside teams, our hospital is organized around individualized clinical outcomes.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              "Multidisciplinary tumor boards & specialized diagnosis",
              "24/7 on-site diagnostic radiology and clinical pathology",
              "Private family-centered recovery rooms",
              "Continuous clinical safety monitoring protocols",
            ].map((pt, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-[#263238] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#126B68] flex-shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-slate-200 pb-6 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#126B68] font-semibold block mb-1">
              Clinical Specializations
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#263238]">
              Key Medical Departments
            </h2>
          </div>
          <Link
            to="/demos/hospital/departments"
            className="text-xs font-bold uppercase tracking-wider text-[#126B68] hover:underline"
          >
            View All 6 Departments →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalData.departments.map((dept) => (
            <div
              key={dept.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#126B68]/50 shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#E6F3EF] text-[#126B68] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#263238]">
                  {dept.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {dept.desc}
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#126B68]">
                  Lead: {dept.head}
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <button
                  onClick={() => openBookingModal(dept.title)}
                  className="text-xs font-bold text-[#126B68] hover:underline cursor-pointer"
                >
                  Book Department Slot →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Highlights */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#126B68] font-semibold block">
            Clinical Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238]">
            Consultant Physicians (Fictional Sample)
          </h2>
          <p className="text-xs text-slate-500">
            Demonstrative profiles showcasing clinical credential presentation and consultation flows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitalData.doctors.map((doc, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="h-56 overflow-hidden bg-slate-100">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display font-bold text-base text-[#263238]">
                  {doc.name}
                </h3>
                <p className="text-xs text-[#126B68] font-medium leading-tight">
                  {doc.specialty}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  {doc.experience}
                </p>
                <button
                  onClick={() => openBookingModal(doc.specialty)}
                  className="w-full mt-3 py-2 rounded-lg bg-[#E6F3EF] hover:bg-[#126B68] text-[#126B68] hover:text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Consult Doctor
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-[#263238] text-white space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6F3EF] font-bold block">
              Infrastructure
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
              Equipped for Advanced Clinical Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalData.facilities.map((fac, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-display font-bold text-sm text-[#E6F3EF]">
                  {fac.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
