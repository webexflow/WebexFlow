import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Activity, 
  HeartPulse, 
  Bone, 
  Sparkles, 
  Baby, 
  Brain, 
  Calendar, 
  Check, 
  User, 
  PhoneCall 
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function HospitalDepartments() {
  const context = useOutletContext();
  const openBookingModal = context?.openBookingModal || (() => {});

  const iconMap = {
    Activity: Activity,
    HeartPulse: HeartPulse,
    Bone: Bone,
    Sparkles: Sparkles,
    Baby: Baby,
    Brain: Brain,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-20 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#E6F3EF] text-[#126B68] font-bold">
          Specialized Clinical Divisions
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#263238] tracking-tight">
          Medical Departments
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Explore our six core inpatient and outpatient departments, each supported by specialized diagnostic equipment and multi-disciplinary clinical teams.
        </p>
      </div>

      {/* Six Departments Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hospitalData.departments.map((dept) => {
          const Icon = iconMap[dept.icon] || Activity;
          return (
            <div
              key={dept.id}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F3EF] text-[#126B68] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Consultant: {dept.head}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold text-[#263238]">
                  {dept.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {dept.desc}
                </p>

                {/* Procedures checklist */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Clinical Procedures & Scope:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {dept.procedures.map((proc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#126B68] flex-shrink-0" />
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Mon - Sat: 08:00 - 20:00
                </span>
                <button
                  onClick={() => openBookingModal(dept.title)}
                  className="px-5 py-2.5 rounded-lg bg-[#126B68] hover:bg-[#0e5553] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
