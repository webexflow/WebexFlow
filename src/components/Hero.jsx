import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cpu, Layers, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center tech-grid-pattern overflow-hidden bg-wf-aubergine">
      {/* Subtle ambient animated glow spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-wf-violet/10 blur-3xl pointer-events-none wf-glow-violet" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-wf-teal/8 blur-3xl pointer-events-none" />

      {/* Restrained dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wf-aubergine/50 to-wf-aubergine pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            className="lg:col-span-7 space-y-8 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Label */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-wf-teal animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedText border border-wf-borderDark px-3.5 py-1 rounded-full bg-wf-plum/60 backdrop-blur-sm">
                YOUR DIGITAL GROWTH PARTNER
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05]"
            >
              Your Ideas. <br />
              <span className="text-wf-mutedText font-light">Our Technology.</span> <br />
              <span className="text-wf-violet">Limitless Possibilities.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-wf-mutedText leading-relaxed max-w-xl font-normal"
            >
              We build digital experiences, powerful websites and intelligent solutions that help businesses move forward.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-wf-violet hover:bg-wf-violet-hover transition-all duration-200 shadow-sm hover:shadow-wf-violet active:scale-[0.98] group cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-wf-plum border border-wf-borderDark hover:border-wf-violet/60 transition-all duration-200 hover:bg-wf-plum-light cursor-pointer"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-wf-mutedText group-hover:text-white" />
              </Link>
            </motion.div>

            {/* Agency Pillars */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-wf-borderDark grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-wf-mutedText/70">Discipline</p>
                <p className="text-sm font-semibold text-white mt-0.5">Web Systems</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-wf-mutedText/70">Software</p>
                <p className="text-sm font-semibold text-white mt-0.5">Custom Apps</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-wf-mutedText/70">Automation</p>
                <p className="text-sm font-semibold text-white mt-0.5">AI Workflows</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Sophisticated Technology Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              
              {/* Studio Architectural Card in Royal Plum */}
              <div className="rounded-2xl bg-wf-plum border border-wf-borderDark shadow-2xl overflow-hidden backdrop-blur-md">
                
                {/* Minimal Header */}
                <div className="px-5 py-3.5 bg-wf-aubergine/80 border-b border-wf-borderDark flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-wf-plum-light" />
                    <span className="w-2.5 h-2.5 rounded-full bg-wf-plum-light" />
                    <span className="w-2.5 h-2.5 rounded-full bg-wf-plum-light" />
                  </div>
                  <span className="text-[11px] font-mono text-wf-mutedText uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-wf-violet" />
                    Webex_Flow // Engine
                  </span>
                  <div className="w-4" />
                </div>

                {/* Interior Composition */}
                <div className="p-6 space-y-6">
                  
                  {/* Digital Connectivity Vector Graphic */}
                  <div className="relative h-44 rounded-xl bg-wf-aubergine border border-wf-borderDark p-4 flex flex-col justify-between overflow-hidden">
                    {/* SVG Connectivity Grid */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="hero-grid-wf" width="24" height="24" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="#8B72D9" opacity="0.3" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#hero-grid-wf)" />
                      {/* Connecting Node Lines */}
                      <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#8B72D9" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="#45C6B0" strokeWidth="1.5" />
                      <line x1="50%" y1="50%" x2="60%" y2="80%" stroke="#8B72D9" strokeWidth="1.5" strokeDasharray="2 2" />
                      <circle cx="20%" cy="30%" r="3" fill="#8B72D9" />
                      <circle cx="50%" cy="50%" r="4" fill="#45C6B0" />
                      <circle cx="80%" cy="40%" r="3" fill="#8B72D9" />
                      <circle cx="60%" cy="80%" r="3" fill="#45C6B0" />
                    </svg>

                    <div className="relative z-10 flex items-center justify-between text-xs">
                      <span className="font-mono text-wf-mutedText text-[10px]">ENGINE STATUS</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-wf-teal/15 text-wf-teal border border-wf-teal/30 text-[10px] font-mono font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-wf-teal animate-ping" />
                        OPERATIONAL
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <p className="text-[10px] font-mono text-wf-mutedText uppercase">DEPLOYMENT ARCHITECTURE</p>
                      <p className="text-sm font-semibold text-white">Full-Stack Digital Solutions</p>
                    </div>
                  </div>

                  {/* Clean Engineering Indicators */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-wf-aubergine/70 border border-wf-borderDark">
                      <div className="flex items-center gap-2 text-wf-mutedText text-xs font-mono mb-1">
                        <Cpu className="w-3.5 h-3.5 text-wf-violet" />
                        <span>WORKFLOW</span>
                      </div>
                      <p className="text-xs font-semibold text-white">AI-Assisted Engine</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-wf-aubergine/70 border border-wf-borderDark">
                      <div className="flex items-center gap-2 text-wf-mutedText text-xs font-mono mb-1">
                        <Layers className="w-3.5 h-3.5 text-wf-teal" />
                        <span>INTERFACES</span>
                      </div>
                      <p className="text-xs font-semibold text-white">Responsive Web Apps</p>
                    </div>
                  </div>

                  {/* Featured Reference Project */}
                  <div className="p-4 rounded-xl bg-wf-plum-light/50 border border-wf-borderDark flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-wf-mutedText uppercase block">Verified Client Build</span>
                      <span className="text-xs font-bold text-white">Skin Atelier — Healthcare</span>
                    </div>
                    <span className="text-xs font-mono text-wf-violet font-semibold">skinatelier.in →</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
