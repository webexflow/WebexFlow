import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Camera,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  UtensilsCrossed,
  Home,
  Layers
} from 'lucide-react';
import CTASection from '../components/CTASection';

const demosList = [
  {
    id: 'photography',
    name: 'Photography Website',
    category: 'Photography & Visual Arts',
    industry: 'Photography',
    route: '/demos/photography',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Every Frame Tells a Story',
    description: 'An editorial, cinematic portfolio for high-end fashion and documentary photography with full-screen lightbox viewing and fluid masonry layouts.',
    icon: Camera,
    accentBorder: 'hover:border-[#B5A18D]/70',
    accentBadge: 'bg-[#B5A18D]/20 text-[#F5F1E9] border-[#B5A18D]/40',
    buttonClass: 'bg-[#B5A18D] hover:bg-[#A38F7B] text-[#171717]',
    features: ['Lightbox Galleries', 'Filterable Masonry', 'Editorial Layouts']
  },
  {
    id: 'school',
    name: 'School Website',
    category: 'Education & Academics',
    industry: 'Education',
    route: '/demos/school',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Inspiring Minds, Shaping Tomorrow',
    description: 'A distinguished institutional web portal for a premier academy, featuring interactive 4-step admissions, fee structures, and campus life.',
    icon: GraduationCap,
    accentBorder: 'hover:border-[#C9A45C]/70',
    accentBadge: 'bg-[#C9A45C]/20 text-[#FAF0D6] border-[#C9A45C]/40',
    buttonClass: 'bg-[#C9A45C] hover:bg-[#B89249] text-[#172B4D]',
    features: ['Admissions Roadmap', 'Interactive FAQ', 'Tuition Transparency']
  },
  {
    id: 'hospital',
    name: 'Hospital Website',
    category: 'Healthcare & Clinical Care',
    industry: 'Healthcare',
    route: '/demos/hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Compassionate Care, Advanced Medicine',
    description: 'A patient-centric healthcare experience featuring clinical department exploration, physician credentials, and a functional appointment booking dialog.',
    icon: HeartPulse,
    accentBorder: 'hover:border-wf-teal/70',
    accentBadge: 'bg-wf-teal/20 text-wf-teal border-wf-teal/40',
    buttonClass: 'bg-[#126B68] hover:bg-[#0E5452] text-white',
    features: ['Appointment Booking Modal', 'Clinical Departments', 'Doctor Credentials']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Website',
    category: 'E-commerce & Apparel',
    industry: 'E-commerce',
    route: '/demos/ecommerce',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Form Meets Function',
    description: 'A minimalist luxury apparel boutique with interactive slide-out cart drawer, size selector modals, category filtering, and simulated checkout flow.',
    icon: ShoppingBag,
    accentBorder: 'hover:border-white/60',
    accentBadge: 'bg-white/15 text-white border-white/30',
    buttonClass: 'bg-white hover:bg-slate-100 text-[#171717]',
    features: ['Slide-out Cart Drawer', 'Size Selector Modal', 'Simulated Checkout']
  },
  {
    id: 'restaurant',
    name: 'Restaurant Website',
    category: 'Fine Dining & Hospitality',
    industry: 'Restaurant',
    route: '/demos/restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Modern Mediterranean Flavors',
    description: 'An atmospheric Mediterranean dining experience showcasing seasonal tasting menus, chef philosophy, and an instant table reservation modal.',
    icon: UtensilsCrossed,
    accentBorder: 'hover:border-[#B99A61]/70',
    accentBadge: 'bg-[#B99A61]/20 text-[#F5EAD4] border-[#B99A61]/40',
    buttonClass: 'bg-[#48523A] hover:bg-[#3B4330] text-[#F5F0E6]',
    features: ['Table Reservation Modal', 'Interactive Menu Tabs', 'Dietary Filter Tags']
  },
  {
    id: 'real-estate',
    name: 'Real Estate Website',
    category: 'Luxury Real Estate & Estates',
    industry: 'Real Estate',
    route: '/demos/real-estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Find a Place to Call Home',
    description: 'A premier architectural brokerage experience featuring multi-criteria property search, detailed specification matrix, and confidential tour scheduling.',
    icon: Home,
    accentBorder: 'hover:border-[#183D35]/80',
    accentBadge: 'bg-[#183D35]/40 text-[#A3E5D4] border-[#183D35]/60',
    buttonClass: 'bg-[#183D35] hover:bg-[#122e28] text-[#F6F5F0]',
    features: ['Multi-Criteria Search', 'Detailed Spec Matrix', 'Tour Booking Modal']
  }
];

export default function Demos() {
  React.useEffect(() => {
    document.title = "Explore What We Can Build — Webex_Flow Demos";
  }, []);

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
            {/* Required Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase bg-wf-violet/15 text-wf-violet border border-wf-violet/30 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-wf-violet" />
              <span>INTERACTIVE CONCEPT SHOWCASE</span>
            </div>

            {/* Required Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
              Explore What We Can Build.
            </h1>

            {/* Required Supporting Text */}
            <p className="text-base sm:text-lg text-wf-mutedText leading-relaxed font-normal pt-2">
              Discover interactive website concepts designed to showcase how we transform ideas into digital experiences across different industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Six Demos Showcase Grid Section */}
      <section className="bg-wf-aubergine text-white py-24 sm:py-32 border-b border-wf-borderDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-wf-borderDark pb-6 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-wf-mutedText/70 block font-semibold">
                INTERACTIVE PROTOTYPES // 06 DOMAINS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
                Domain-Specific Demonstrations
              </h2>
            </div>
            <p className="text-xs font-mono text-wf-mutedText max-w-sm sm:text-right">
              Each demo includes independent brand styling, custom color systems, and functional frontend workflows.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demosList.map((demo, index) => {
              const Icon = demo.icon;
              return (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group rounded-2xl bg-wf-plum border border-wf-borderDark ${demo.accentBorder} transition-all duration-300 flex flex-col overflow-hidden shadow-2xl`}
                >
                  {/* Preview Image with Badges */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={demo.image}
                      alt={demo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wf-plum via-wf-plum/40 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      {/* Clearly visible Concept Demo label */}
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold bg-amber-500/25 text-amber-200 border border-amber-500/40 backdrop-blur-md shadow-sm">
                        Concept Demo
                      </span>
                      
                      {/* Industry Category */}
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border ${demo.accentBadge} font-semibold`}>
                        {demo.industry}
                      </span>
                    </div>

                    {/* Tagline overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs font-mono uppercase text-white/90 tracking-wider drop-shadow-sm font-medium">
                        {demo.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold font-display text-white group-hover:text-wf-violet transition-colors">
                          {demo.name}
                        </h3>
                        <span className="text-xs font-mono text-wf-mutedText/60">0{index + 1}</span>
                      </div>
                      <p className="text-xs font-mono uppercase text-wf-violet tracking-wider font-semibold">
                        {demo.category}
                      </p>
                      <p className="text-sm text-wf-mutedText leading-relaxed font-light">
                        {demo.description}
                      </p>
                    </div>

                    {/* Features & Explore Button */}
                    <div className="space-y-4 pt-2 border-t border-wf-borderDark">
                      <div className="flex flex-wrap gap-1.5">
                        {demo.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-wf-aubergine border border-wf-borderDark text-wf-mutedText"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      {/* Explore Demo Button */}
                      <Link
                        to={demo.route}
                        className={`inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 shadow-md ${demo.buttonClass} group/btn cursor-pointer`}
                      >
                        <span>Explore Demo</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Educational Note */}
          <div className="p-6 rounded-2xl bg-wf-plum/60 border border-wf-borderDark text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-mono text-wf-violet uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
              <Layers className="w-3.5 h-3.5 text-wf-teal" /> Conceptual Showcase Architecture
            </p>
            <p className="text-xs text-wf-mutedText leading-relaxed">
              These demonstrations are standalone, fully interactive frontend prototypes created to exhibit our UI/UX range, responsive design systems, and frontend logic across diverse verticals.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-wf-aubergine pb-12">
        <CTASection
          headline="Like What You See? Let's Build Your Vision."
          supportingText="Whether you need a custom website, high-performing web application, or automated workflow, we engineer solutions tailored to your business."
        />
      </div>

    </div>
  );
}
