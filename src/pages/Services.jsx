import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  LayoutGrid, 
  Cpu, 
  Check, 
  ArrowRight, 
  Layers, 
  Zap, 
  MessageSquare,
  ShieldCheck,
  Terminal,
  Smartphone,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/services';

export default function Services() {
  const webService = servicesData[0];
  const appService = servicesData[1];
  const aiService = servicesData[2];

  return (
    <div className="space-y-0">
      
      {/* Services Header Banner (Deep Aubergine) */}
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
              CAPABILITIES & PRACTICES
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
              Digital Solutions Designed <br />
              <span className="text-wf-violet">Around Your Business.</span>
            </h1>
            <p className="text-base sm:text-lg text-wf-mutedText leading-relaxed font-normal pt-2">
              From establishing your online presence to developing custom digital experiences and intelligent workflows, Webex_Flow helps transform business requirements into practical technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE 01 — WEBSITE DEVELOPMENT (Soft Lavender Light Section) */}
      <section id="website-development" className="scroll-mt-20 bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-b border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-wf-darkText text-white">
                  SERVICE 01
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight font-semibold">
                  Core Discipline
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-wf-darkText font-display tracking-tight leading-[1.1]">
                Website Development
              </h2>

              <p className="text-base sm:text-lg text-wf-mutedLight leading-relaxed">
                {webService.fullDescription}
              </p>

              {/* Offerings Grid */}
              <div className="pt-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-wf-mutedLight font-semibold">
                  Websites We Engineer:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {webService.features.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-wf-borderSubtle text-xs text-wf-darkText font-medium flex items-center gap-2 shadow-sm"
                    >
                      <Check className="w-3.5 h-3.5 text-wf-teal flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-wf-darkText hover:bg-wf-plum transition-all shadow-sm"
                >
                  <span>Discuss Website Project</span>
                  <ArrowRight className="w-4 h-4 text-wf-violet" />
                </Link>
              </div>
            </div>

            {/* Right Column: Tangible Benefits Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-wf-borderSubtle shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-wf-borderSubtle pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-wf-darkText font-bold">
                    Client Value Architecture
                  </span>
                  <Globe className="w-5 h-5 text-wf-violet" />
                </div>

                <div className="space-y-4">
                  {webService.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-wf-lavender border border-wf-borderSubtle">
                      <span className="font-mono text-xs font-bold text-wf-violet mt-0.5">
                        0{bIdx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-wf-darkText">{benefit}</p>
                        <p className="text-xs text-wf-mutedLight mt-0.5">
                          Engineered for high-speed responsiveness and clear conversion touchpoints.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] font-mono text-wf-mutedLight pt-2 border-t border-wf-borderSubtle">
                  Standard: 100% Mobile Responsive • SEO-Ready Architecture • Optimized Assets
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE 02 — APPLICATION DEVELOPMENT (Deep Aubergine Dark Section) */}
      <section id="application-development" className="scroll-mt-20 bg-wf-aubergine text-white py-24 sm:py-32 border-b border-wf-borderDark tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Schematic Card in Royal Plum */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="p-8 sm:p-10 rounded-2xl bg-wf-plum border border-wf-borderDark shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-wf-borderDark pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                    Application Architecture
                  </span>
                  <LayoutGrid className="w-5 h-5 text-wf-teal" />
                </div>

                <div className="space-y-4">
                  {appService.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-wf-aubergine/80 border border-wf-borderDark">
                      <span className="font-mono text-xs font-bold text-wf-teal mt-0.5">
                        0{bIdx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{benefit}</p>
                        <p className="text-xs text-wf-mutedText mt-0.5">
                          Modular components structured for business workflows and scalability.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-wf-aubergine/90 border border-wf-borderDark text-xs font-mono text-wf-mutedText">
                  <span className="text-white block font-semibold mb-1">// System Specification</span>
                  Responsive frontends coupled with secure state management and fluid user interfaces.
                </div>
              </div>
            </div>

            {/* Right Column: App Description & Features */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-wf-plum text-white border border-wf-borderDark">
                  SERVICE 02
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedText">
                  Custom Engineering
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.1]">
                Application Development
              </h2>

              <p className="text-base sm:text-lg text-wf-mutedText leading-relaxed">
                {appService.fullDescription}
              </p>

              {/* Offerings Grid */}
              <div className="pt-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-wf-mutedText/70">
                  Application Types:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {appService.features.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-wf-plum border border-wf-borderDark text-xs text-white font-medium flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-wf-teal flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-wf-violet hover:bg-wf-violet-hover transition-all shadow-sm hover:shadow-wf-violet"
                >
                  <span>Inquire About Application Build</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE 03 — AI & BUSINESS AUTOMATION (Soft Lavender Light Section) */}
      <section id="ai-automation" className="scroll-mt-20 bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-b border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-wf-darkText text-white">
                  SERVICE 03
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight font-semibold">
                  Intelligent Workflows
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-wf-darkText font-display tracking-tight leading-[1.1]">
                AI & Business Automation
              </h2>

              <p className="text-base sm:text-lg text-wf-mutedLight leading-relaxed">
                {aiService.fullDescription}
              </p>

              {/* Offerings Grid */}
              <div className="pt-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-wf-mutedLight font-semibold">
                  Automation Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {aiService.features.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-wf-borderSubtle text-xs text-wf-darkText font-medium flex items-center gap-2 shadow-sm"
                    >
                      <Check className="w-3.5 h-3.5 text-wf-teal flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Policy Note */}
              <div className="p-4 rounded-xl bg-wf-lavender-dark border border-wf-borderSubtle text-xs text-wf-darkText leading-relaxed">
                <span className="font-semibold block mb-1">Architecture Disclosure:</span>
                We do not claim every automation is an off-the-shelf product. We design and integrate tailored workflows specific to your communication channels, forms, and business operations.
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-wf-darkText hover:bg-wf-plum transition-all shadow-sm"
                >
                  <span>Discuss Automation Needs</span>
                  <ArrowRight className="w-4 h-4 text-wf-violet" />
                </Link>
              </div>
            </div>

            {/* Right Column: Automation Benefits */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-wf-borderSubtle shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-wf-borderSubtle pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-wf-darkText font-bold">
                    Operational Efficiency
                  </span>
                  <Cpu className="w-5 h-5 text-wf-violet" />
                </div>

                <div className="space-y-4">
                  {aiService.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-wf-lavender border border-wf-borderSubtle">
                      <span className="font-mono text-xs font-bold text-wf-violet mt-0.5">
                        0{bIdx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-wf-darkText">{benefit}</p>
                        <p className="text-xs text-wf-mutedLight mt-0.5">
                          Eliminate manual repetition and provide instant, accurate customer replies.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] font-mono text-wf-mutedLight pt-2 border-t border-wf-borderSubtle">
                  Channels: WhatsApp Workflows • Automated Enquiries • Smart Routing
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Dedicated CTA */}
      <div className="bg-wf-aubergine py-12">
        <CTASection
          headline="Let's Find the Right Digital Solution for Your Business."
          supportingText="Tell us what you're planning. We will analyze your requirements and propose the optimal website, app, or automation workflow."
        />
      </div>

    </div>
  );
}
