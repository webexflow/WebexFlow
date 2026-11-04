import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Cpu, 
  Target, 
  Bot, 
  Layers, 
  Sliders, 
  MessageSquare, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ProcessTimeline from '../components/ProcessTimeline';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';

export default function Home() {
  const principles = [
    {
      title: "Creative Thinking",
      description: "Unique design perspectives that elevate your brand above generic templates and capture customer attention.",
      icon: Lightbulb,
    },
    {
      title: "Modern Technology",
      description: "Clean, robust code engineered with cutting-edge frameworks ensuring lightning speed and scalability.",
      icon: Cpu,
    },
    {
      title: "Business-Focused Solutions",
      description: "Every digital touchpoint is strategically structured to generate enquiries, bookings, and tangible progress.",
      icon: Target,
    },
    {
      title: "AI-Assisted Development",
      description: "Harnessing intelligent workflows to accelerate delivery, refine logic, and build smart automated systems.",
      icon: Bot,
    }
  ];

  const whyChooseUs = [
    {
      title: "AI-ASSISTED DEVELOPMENT",
      description: "We use modern development tools and AI-assisted workflows to transform ideas into practical digital solutions.",
      icon: Bot,
    },
    {
      title: "SOLUTIONS TAILORED TO YOUR BUSINESS",
      description: "Every business has different needs. We focus on building solutions around individual requirements.",
      icon: Sliders,
    },
    {
      title: "MODERN DESIGN AND TECHNOLOGY",
      description: "We combine modern interfaces, responsive layouts and current development technologies.",
      icon: Layers,
    },
    {
      title: "CLEAR COMMUNICATION",
      description: "We prioritise understanding client requirements and keeping communication straightforward.",
      icon: MessageSquare,
    },
    {
      title: "BUSINESS-FOCUSED APPROACH",
      description: "Our focus is on creating useful digital solutions rather than unnecessary complexity.",
      icon: Target,
    },
    {
      title: "RESPONSIVE EXPERIENCES",
      description: "We ensure digital experiences work across desktop, tablet and mobile devices.",
      icon: Smartphone,
    }
  ];

  return (
    <div className="space-y-0">
      {/* SECTION 01 — HERO (Deep Aubergine Dark Section) */}
      <Hero />

      {/* SECTION 02 — INTRODUCTION (Soft Lavender Light Section) */}
      <section className="bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-y border-wf-borderSubtle tech-grid-pattern-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-wf-darkText px-3.5 py-1 rounded-full bg-wf-lavender-dark border border-wf-borderSubtle inline-block mb-4 font-semibold">
              AGENCY FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-wf-darkText font-display tracking-tight leading-[1.1]">
              Technology That Moves Your Business Forward.
            </h2>
            <p className="text-base sm:text-lg text-wf-mutedLight mt-4 leading-relaxed font-normal">
              Every business has the potential to grow digitally. We help turn ideas into practical digital solutions through thoughtful design, modern development and intelligent technology.
            </p>
          </div>

          {/* Four Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white border border-wf-borderSubtle hover:border-wf-violet/60 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-wf-lavender border border-wf-borderSubtle flex items-center justify-center mb-5 text-wf-violet">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-wf-darkText font-display mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-wf-mutedLight">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 — SERVICES OVERVIEW (Deep Aubergine Dark Section) */}
      <section className="bg-wf-aubergine text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR CORE OFFERINGS"
            title="What We Bring to the"
            highlight="Table."
            description="From tailored web presences to interactive software and autonomous workflows, we deliver engineering that matters."
            theme="dark"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} theme="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — FEATURED PROJECT (Soft Lavender Light Section) */}
      <section className="bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-y border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROVEN CLIENT WORK"
            title="Turning Ideas Into"
            highlight="Real Projects."
            description="Explore our completed client work built with clean architecture, patient-centric UI, and modern web performance."
            theme="light"
            className="mb-14"
          />

          <ProjectCard project={projectsData[0]} theme="light" />
        </div>
      </section>

      {/* SECTION 05 — WHY WEBEX_FLOW? (Royal Plum Secondary Dark Section) */}
      <section className="bg-wf-plum text-white py-24 sm:py-32 border-b border-wf-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="THE WEBEX_FLOW ADVANTAGE"
            title="Not Just Digital Presence."
            highlight="Digital Progress."
            description="We do not build generic template sites. We engineer digital assets designed to create measurable operational value."
            theme="dark"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="p-8 rounded-2xl bg-wf-aubergine/80 border border-wf-borderDark hover:border-wf-violet/60 transition-all duration-300 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-wf-plum border border-wf-borderDark flex items-center justify-center mb-6 text-wf-violet">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-wf-mutedText leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06 — OUR PROCESS (Deep Aubergine Dark Section) */}
      <section className="bg-wf-aubergine text-white py-24 sm:py-32 border-b border-wf-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TRANSPARENT METHODOLOGY"
            title="From First Conversation to"
            highlight="Final Delivery."
            description="Our structured 5-step lifecycle ensures alignment, quality assurance, and timely execution from day one."
            theme="dark"
            className="mb-14"
          />

          <ProcessTimeline theme="dark" />
        </div>
      </section>

      {/* SECTION 07 — FAQ (Soft Lavender Light Section) */}
      <section className="bg-wf-lavender text-wf-darkText py-24 sm:py-32 border-b border-wf-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="QUESTIONS & ANSWERS"
            title="Frequently Asked"
            highlight="Questions."
            description="Get straightforward answers about our services, timelines, technology stack, and how we work."
            theme="light"
            className="mb-14"
          />

          <FAQ theme="light" />
        </div>
      </section>

      {/* SECTION 08 — FINAL CTA (Deep Aubergine) */}
      <div className="bg-wf-aubergine pb-12">
        <CTASection />
      </div>
    </div>
  );
}
