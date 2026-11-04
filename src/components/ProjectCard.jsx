import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Check, Layers, Monitor, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectCard({ project = projectsData[0], isDetail = false, theme = 'dark' }) {
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isLight
          ? 'bg-white border-wf-borderSubtle shadow-xl'
          : 'bg-wf-plum border-wf-borderDark shadow-2xl'
      }`}
    >
      <div className="p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Case Study Brief */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-wf-teal/15 text-wf-teal border border-wf-teal/30 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-wf-teal animate-pulse" />
                {project.status}
              </span>
              <span
                className={`text-xs font-mono tracking-wider ${
                  isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'
                }`}
              >
                {project.category}
              </span>
            </div>

            <div className="space-y-3">
              <h3
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-[1.1] ${
                  isLight ? 'text-wf-darkText' : 'text-white'
                }`}
              >
                {project.name}
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'
                }`}
              >
                {project.description}
              </p>
            </div>

            {/* Scope Overview */}
            <div
              className={`p-5 rounded-xl border space-y-2 text-xs leading-relaxed ${
                isLight
                  ? 'bg-wf-lavender border-wf-borderSubtle text-wf-darkText'
                  : 'bg-wf-aubergine border-wf-borderDark text-wf-mutedText'
              }`}
            >
              <div className="flex items-center gap-2 font-mono uppercase text-[10px] tracking-wider text-wf-violet font-semibold">
                <Layers className="w-3.5 h-3.5 text-wf-violet" />
                <span>Scope & Execution</span>
              </div>
              <p>{project.overview}</p>
            </div>

            {/* Features list */}
            <div className="space-y-2.5">
              <p
                className={`text-[11px] font-mono uppercase tracking-wider ${
                  isLight ? 'text-wf-mutedLight/70' : 'text-wf-mutedText/70'
                }`}
              >
                Deliverables & Features:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 text-xs ${
                      isLight ? 'text-wf-darkText' : 'text-wf-mutedText'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 text-wf-teal flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono border ${
                      isLight
                        ? 'bg-wf-lavender border-wf-borderSubtle text-wf-darkText'
                        : 'bg-wf-aubergine border-wf-borderDark text-wf-mutedText'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* View Live Website CTA */}
            <div className="pt-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-wf-violet hover:bg-wf-violet-hover transition-all duration-200 shadow-sm hover:shadow-wf-violet active:scale-[0.98] cursor-pointer"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span
                className={`block text-xs font-mono mt-2 ${
                  isLight ? 'text-wf-mutedLight/60' : 'text-wf-mutedText/60'
                }`}
              >
                {project.url}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Browser Frame & Treatment Mockup */}
          <div className="lg:col-span-6">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-wf-plum border border-wf-borderDark shadow-2xl overflow-hidden"
            >
              
              {/* Browser Header Bar */}
              <div className="px-4 py-3 bg-wf-aubergine border-b border-wf-borderDark flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-wf-plum-light" />
                  <span className="w-2.5 h-2.5 rounded-full bg-wf-plum-light" />
                  <span className="w-2.5 h-2.5 rounded-full bg-wf-plum-light" />
                </div>
                <div className="px-3 py-1 rounded-full bg-wf-plum border border-wf-borderDark text-[11px] font-mono text-wf-mutedText flex items-center gap-1.5">
                  <Monitor className="w-3 h-3 text-wf-teal" />
                  <span>skinatelier.in</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Editorial Dermatology Preview Screen */}
              <div className="p-8 sm:p-10 bg-wf-lavender text-wf-darkText space-y-6">
                
                <div className="flex items-center justify-between border-b border-wf-borderSubtle pb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-wf-mutedLight block">
                      CLINICAL AESTHETICS
                    </span>
                    <h4 className="text-xl font-bold font-display tracking-tight text-wf-darkText">
                      SKIN ATELIER
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-wf-plum text-white font-semibold">
                    Live
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-wf-violet font-mono font-semibold">
                    Dermatology & Aesthetic Clinic
                  </p>
                  <p className="text-sm text-wf-darkText leading-relaxed">
                    A modern digital experience designed for a dermatology clinic, bringing its services, treatments and appointment enquiries together in one place.
                  </p>
                </div>

                {/* Treatment Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-white border border-wf-borderSubtle text-center">
                    <p className="text-xs font-bold text-wf-darkText">Clinical</p>
                    <p className="text-[10px] text-wf-mutedLight">Treatments</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-wf-borderSubtle text-center">
                    <p className="text-xs font-bold text-wf-darkText">Laser</p>
                    <p className="text-[10px] text-wf-mutedLight">Aesthetics</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-wf-borderSubtle text-center">
                    <p className="text-xs font-bold text-wf-darkText">Bookings</p>
                    <p className="text-[10px] text-wf-mutedLight">Enquiry Flow</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-wf-mutedLight border-t border-wf-borderSubtle">
                  <span>Responsive Web Experience</span>
                  <span className="text-wf-teal font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Verified Client Launch
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
