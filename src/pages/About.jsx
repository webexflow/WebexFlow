import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Bot, 
  HeartHandshake, 
  ShieldCheck, 
  Check, 
  Layers,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  const approachSteps = [
    {
      num: "01",
      title: "Understand the business requirement",
      desc: "We begin by listening closely to your goals, target audience, brand values, and specific functional needs."
    },
    {
      num: "02",
      title: "Plan the digital solution",
      desc: "We define user journeys, wireframes, technical architecture, and project milestones to ensure total clarity."
    },
    {
      num: "03",
      title: "Design the experience",
      desc: "We craft clean, responsive, modern interfaces that reflect your identity and foster seamless user navigation."
    },
    {
      num: "04",
      title: "Develop the product",
      desc: "We write clean, efficient, modern code utilizing modular component architectures and industry standards."
    },
    {
      num: "05",
      title: "Test and refine",
      desc: "We perform rigorous cross-browser testing, mobile responsiveness checks, and usability validations."
    },
    {
      num: "06",
      title: "Deliver the finished solution",
      desc: "We launch your digital experience into production, perform final verification, and provide agreed support."
    }
  ];

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
              ABOUT WEBEX_FLOW
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
              Building Digital Experiences That <br />
              <span className="text-wf-violet">Move Businesses Forward.</span>
            </h1>
            <div className="pt-4 text-base sm:text-lg text-wf-mutedText leading-relaxed space-y-3 font-normal">
              <p>
                Webex_Flow was created with a simple idea: technology should make business easier, smarter and more accessible.
              </p>
              <p className="text-wf-mutedText/80">
                We combine creativity, modern development tools and AI-assisted workflows to transform business ideas into practical digital solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision (Soft Lavender Light Section) */}
      <section className="bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-b border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-wf-borderSubtle shadow-xl space-y-4 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-wf-lavender border border-wf-borderSubtle flex items-center justify-center text-wf-violet">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight block font-semibold">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-wf-darkText">
                Our Mission
              </h2>
              <p className="text-base text-wf-mutedLight leading-relaxed">
                "To help businesses establish a stronger digital presence through modern, accessible and practical technology solutions."
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-wf-borderSubtle shadow-xl space-y-4 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-wf-lavender border border-wf-borderSubtle flex items-center justify-center text-wf-violet">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight block font-semibold">
                Our Direction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-wf-darkText">
                Our Vision
              </h2>
              <p className="text-base text-wf-mutedLight leading-relaxed">
                "To make digital transformation more accessible by combining creativity, technology and intelligent development workflows."
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Methodical Approach (Royal Plum Secondary Dark Section) */}
      <section className="bg-wf-plum text-white py-24 sm:py-32 border-b border-wf-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR APPROACH"
            title="Methodical Execution,"
            highlight="End to End."
            description="Every project follows a disciplined engineering workflow from conceptualisation to handover."
            theme="dark"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="p-8 rounded-2xl bg-wf-aubergine/80 border border-wf-borderDark hover:border-wf-violet/60 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-wf-borderDark">
                  <span className="font-mono text-xs font-bold text-wf-violet">
                    STEP {step.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-wf-teal" />
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-wf-mutedText leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Assisted Development & Why We Started (Soft Lavender Light Section) */}
      <section className="bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-b border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* AI Philosophy */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-wf-borderSubtle shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-wf-lavender border border-wf-borderSubtle flex items-center justify-center text-wf-violet">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight font-semibold block">
                    Engineering Policy
                  </span>
                  <h3 className="text-2xl font-bold font-display text-wf-darkText">
                    AI-Assisted Development
                  </h3>
                </div>
              </div>

              <p className="text-base text-wf-mutedLight leading-relaxed">
                At Webex_Flow, we use modern AI-assisted tools to improve development workflows, explore architectural ideas, and accelerate implementation.
              </p>

              <div className="p-5 rounded-2xl bg-wf-lavender border border-wf-borderSubtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-wf-darkText">
                  <ShieldCheck className="w-4 h-4 text-wf-teal" />
                  <span>Human Oversight Commitment</span>
                </div>
                <p className="text-xs text-wf-mutedLight leading-relaxed">
                  We believe in complete transparency: while AI assists in ideation and coding speed, all delivered code and solutions are rigorously reviewed, architected, and tested by human engineers. AI does not replace technical review or guarantee error-free results—our hands-on verification guarantees our quality standard.
                </p>
              </div>
            </div>

            {/* Why We Started */}
            <div className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-white border border-wf-borderSubtle shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-wf-lavender border border-wf-borderSubtle flex items-center justify-center text-wf-violet">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedLight font-semibold block">
                  Origin Story
                </span>
                <h3 className="text-2xl font-bold font-display text-wf-darkText">
                  Why We Started
                </h3>
                <p className="text-base text-wf-mutedLight leading-relaxed font-normal">
                  "We believe every business should have access to modern digital solutions, regardless of its size. Webex_Flow focuses on turning ideas into practical digital experiences through creativity, technology and continuous learning."
                </p>
              </div>

              <div className="pt-4 border-t border-wf-borderSubtle text-xs font-mono text-wf-mutedLight">
                Agency: <span className="text-wf-darkText font-semibold">{siteConfig.agencyName}</span> • Focus: <span className="text-wf-darkText">{siteConfig.tagline}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-wf-aubergine pb-12">
        <CTASection
          headline="Ready to Partner with Webex_Flow?"
          supportingText="Let's build a digital experience that reflects your vision and accelerates your business."
        />
      </div>

    </div>
  );
}
