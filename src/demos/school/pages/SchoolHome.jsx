import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Award, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Smile
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function SchoolHome() {
  const iconMap = {
    Smile: Smile,
    BookOpen: BookOpen,
    Compass: Compass,
    GraduationCap: GraduationCap,
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* Hero Section */}
      <section className="relative bg-[#172B4D] text-white overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#172B4D] via-[#172B4D]/90 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#C9A45C]/20 text-[#C9A45C] border border-[#C9A45C]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for 2026-2027</span>
            </span>

            <h1 className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
              Building Bright <br />
              <span className="text-[#C9A45C]">Futures.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#FAFAF7]/85 leading-relaxed font-light">
              We inspire young minds to think independently, act empathetically, and lead courageously in an ever-evolving global society.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/demos/school/admissions"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#C9A45C] hover:bg-[#b8934a] text-[#172B4D] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demos/school/admissions#process"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg border border-white/20 hover:border-white text-white font-medium text-xs uppercase tracking-wider transition-all text-center"
              >
                Explore Campus Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#DCEAF4]/40 border border-[#172B4D]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#172B4D]/70 font-semibold">
              The Student Experience
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#172B4D] leading-tight">
              An Academic Environment Rooted in Integrity & Discovery
            </h2>
            <p className="text-sm sm:text-base text-[#172B4D]/80 leading-relaxed">
              Founded on principles of holistic education, our Greenwood Campus brings together world-class sciences, competitive athletics, and expressive performing arts to prepare students for top global universities.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#172B4D]/10 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#172B4D] font-outfit">11:1</span>
              <p className="text-xs text-[#172B4D]/70 mt-1 font-medium">Student-Teacher Ratio</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#172B4D]/10 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#C9A45C] font-outfit">100%</span>
              <p className="text-xs text-[#172B4D]/70 mt-1 font-medium">College Matriculation</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#172B4D]/10 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#C9A45C] font-outfit">32+</span>
              <p className="text-xs text-[#172B4D]/70 mt-1 font-medium">Co-Curricular Clubs</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#172B4D]/10 shadow-sm text-center">
              <span className="text-3xl font-extrabold text-[#172B4D] font-outfit">28</span>
              <p className="text-xs text-[#172B4D]/70 mt-1 font-medium">Acres of Green Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programmes */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#172B4D]/70 font-semibold block">
            Curriculum Structure
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-[#172B4D]">
            Academic Pathways
          </h2>
          <p className="text-sm text-[#172B4D]/75">
            Progressive learning milestones designed for continuous intellectual and emotional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.programmes.map((p, idx) => {
            const Icon = iconMap[p.icon] || BookOpen;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#172B4D]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DCEAF4] text-[#172B4D] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#172B4D]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9A45C] font-bold block">
                      {p.age}
                    </span>
                    <h3 className="font-outfit text-xl font-bold text-[#172B4D] mt-1">
                      {p.level}
                    </h3>
                  </div>
                  <p className="text-xs text-[#172B4D]/75 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#172B4D]/10 mt-6">
                  <Link
                    to="/demos/school/admissions"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#172B4D] hover:text-[#C9A45C] transition-colors"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modern Campus Facilities */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#172B4D]/15 pb-6 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#172B4D]/70 font-semibold block mb-1">
              Campus Life
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-[#172B4D]">
              World-Class Facilities
            </h2>
          </div>
          <Link
            to="/demos/school/admissions"
            className="text-xs font-semibold uppercase tracking-wider text-[#172B4D] hover:underline"
          >
            Schedule a Campus Tour →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolData.facilities.map((fac, i) => (
            <div key={i} className="group rounded-xl overflow-hidden bg-white border border-[#172B4D]/10 shadow-sm">
              <div className="h-48 overflow-hidden">
                <img
                  src={fac.img}
                  alt={fac.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="font-outfit font-bold text-base text-[#172B4D]">
                  {fac.title}
                </h3>
                <p className="text-xs text-[#172B4D]/70 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty & Events Split */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Faculty highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#172B4D]/70 font-semibold block">
                Mentorship
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
                Distinguished Faculty
              </h2>
            </div>
            <div className="space-y-4">
              {schoolData.faculty.map((f, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#172B4D]/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#172B4D] text-[#C9A45C] flex items-center justify-center font-bold font-mono text-sm flex-shrink-0">
                    {f.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-sm text-[#172B4D]">{f.name}</h3>
                    <p className="text-xs text-[#C9A45C] font-semibold">{f.role}</p>
                    <p className="text-xs text-[#172B4D]/75 mt-1">{f.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* School Events */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#172B4D]/70 font-semibold block">
                Calendar
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
                Upcoming School Events
              </h2>
            </div>
            <div className="space-y-4">
              {schoolData.events.map((ev, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#172B4D]/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-[#DCEAF4] text-[#172B4D] flex flex-col items-center justify-center font-bold text-xs flex-shrink-0">
                      <span>{ev.date.split(' ')[0]}</span>
                      <span className="text-base leading-none">{ev.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-sm text-[#172B4D]">{ev.title}</h3>
                      <p className="text-xs text-[#172B4D]/70 mt-0.5">{ev.time}</p>
                    </div>
                  </div>
                  <Calendar className="w-4 h-4 text-[#C9A45C]" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Admissions Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-[#172B4D] text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#C9A45C]/20 text-[#C9A45C] border border-[#C9A45C]/30">
              Join Our Academic Community
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
              Begin Your Child's Journey of Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#FAFAF7]/80 leading-relaxed font-light">
              We invite families to explore our admissions criteria, request curriculum packs, or schedule an individual tour with our admissions committee.
            </p>
            <div className="pt-2">
              <Link
                to="/demos/school/admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C9A45C] hover:bg-[#b8934a] text-[#172B4D] font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Visit Admissions Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
