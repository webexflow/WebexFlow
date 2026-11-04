import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  return (
    <div className="space-y-0">
      
      {/* Header Banner (Deep Aubergine) */}
      <section className="bg-wf-aubergine text-white pt-36 pb-20 border-b border-wf-borderDark tech-grid-pattern relative overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-wf-violet/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-wf-plum text-wf-mutedText border border-wf-borderDark inline-block">
              START A CONVERSATION
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
              Let's Talk About <br />
              <span className="text-wf-violet">Your Next Project.</span>
            </h1>
            <p className="text-base sm:text-lg text-wf-mutedText leading-relaxed font-normal pt-2">
              Have an idea, a business requirement or a digital project in mind? Tell us what you're looking for and let's explore how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout: Official Channels & Form (Soft Lavender Light Section) */}
      <section className="bg-wf-lavender text-wf-darkText py-20 sm:py-28 border-b border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Column: Official Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight font-semibold block">
                  DIRECT CONTACT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-wf-darkText mt-1">
                  Official Channels
                </h2>
                <p className="text-sm text-wf-mutedLight mt-2 leading-relaxed">
                  Connect with our team directly. We review all incoming project requests with care and aim to respond promptly.
                </p>
              </div>

              {/* Email Card */}
              <a
                href={siteConfig.emailLink}
                className="p-6 rounded-2xl bg-white border border-wf-borderSubtle hover:border-wf-violet/60 shadow-sm hover:shadow-xl transition-all flex items-start gap-4 group block"
              >
                <div className="w-11 h-11 rounded-xl bg-wf-lavender border border-wf-borderSubtle flex items-center justify-center flex-shrink-0 text-wf-violet group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-wf-mutedLight font-semibold block">
                    Official Agency Email
                  </span>
                  <p className="text-sm font-bold text-wf-darkText group-hover:text-wf-violet transition-colors">
                    {siteConfig.email}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-wf-violet pt-0.5 font-medium">
                    <span>Send email</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white border border-wf-borderSubtle hover:border-wf-violet/60 shadow-sm hover:shadow-xl transition-all flex items-start gap-4 group block"
              >
                <div className="w-11 h-11 rounded-xl bg-wf-lavender border border-wf-borderSubtle flex items-center justify-center flex-shrink-0 text-wf-violet group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-wf-mutedLight font-semibold block">
                    Official Instagram
                  </span>
                  <p className="text-sm font-bold text-wf-darkText group-hover:text-wf-violet transition-colors">
                    {siteConfig.instagramHandle}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-wf-violet pt-0.5 font-medium">
                    <span>Follow & DM</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>

              {/* Expectations Card */}
              <div className="p-6 rounded-2xl bg-white border border-wf-borderSubtle shadow-sm space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-wf-darkText font-bold block">
                  What to Expect
                </span>
                <ul className="space-y-2.5 text-xs text-wf-mutedLight">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-wf-teal flex-shrink-0 mt-0.5" />
                    <span>Direct discussion with developers and UI designers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-wf-teal flex-shrink-0 mt-0.5" />
                    <span>Realistic milestones tailored to your project requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-wf-teal flex-shrink-0 mt-0.5" />
                    <span>Zero spam, zero high-pressure sales calls</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm theme="light" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
