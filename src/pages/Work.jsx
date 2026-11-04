import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ExternalLink, ArrowRight, Layers, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { projectsData, upcomingNotice } from '../data/projects';

export default function Work() {
  const project = projectsData[0];

  return (
    <div className="space-y-0">
      
      {/* Header Banner (Deep Aubergine) */}
      <section className="bg-wf-aubergine text-white pt-36 pb-24 border-b border-wf-borderDark tech-grid-pattern relative overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-wf-violet/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-wf-plum text-wf-mutedText border border-wf-borderDark inline-block">
              SELECTED WORK & CASE STUDIES
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
              Selected Work. Real Ideas. <br />
              <span className="text-wf-violet">Digital Experiences.</span>
            </h1>
            <p className="text-base sm:text-lg text-wf-mutedText leading-relaxed font-normal pt-2">
              Explore how we turn business requirements into thoughtful, high-performance digital experiences for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Client Project (Soft Lavender Light Section) */}
      <section className="bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-b border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-wf-borderSubtle pb-6 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight font-semibold block">
                COMPLETED CLIENT PROJECT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-wf-darkText mt-1">
                Skin Atelier — Aesthetic Dermatology Clinic
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-wf-teal/15 text-wf-teal border border-wf-teal/30 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-wf-teal animate-pulse" />
              Verified Production Launch
            </span>
          </div>

          {/* Full Case Study Card */}
          <ProjectCard project={project} isDetail={true} theme="light" />

        </div>
      </section>

      {/* Secondary Section: Future Readiness / Upcoming Projects (Royal Plum) */}
      <section className="bg-wf-plum text-white py-24 sm:py-28 border-b border-wf-borderDark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="w-12 h-12 rounded-2xl bg-wf-aubergine border border-wf-borderDark flex items-center justify-center mx-auto text-wf-violet shadow-lg">
            <Compass className="w-6 h-6" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {upcomingNotice.heading}
            </h2>
            <p className="text-base text-wf-mutedText leading-relaxed max-w-xl mx-auto">
              {upcomingNotice.description}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-wf-aubergine/80 border border-wf-borderDark text-xs font-mono text-wf-mutedText leading-relaxed max-w-md mx-auto shadow-md">
            <span className="text-white font-semibold block mb-1">Integrity Standards:</span>
            We do not manufacture fictitious client reviews or logos. We present genuine, verified client work exclusively on this page.
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-wf-aubergine pb-12">
        <CTASection
          headline="Have an Idea for Your Brand? Let's Build It."
          supportingText="Join our portfolio of businesses leveraging modern web engineering and intelligent digital systems."
        />
      </div>

    </div>
  );
}
