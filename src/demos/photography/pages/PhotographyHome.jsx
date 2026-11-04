import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Camera, Sparkles, Compass } from 'lucide-react';
import { photographyData } from '../data/photographyData';

export default function PhotographyHome() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#171717] text-[#F7F5F0]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2000&q=85"
            alt="Cinematic Photography Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-[#171717]/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-[#D8D0C3]"
          >
            Fine Art & Editorial Imagery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-cormorant text-5xl sm:text-7xl lg:text-8xl tracking-tight font-light leading-[1.05]"
          >
            Stories Worth <br />
            <span className="italic font-normal">Remembering.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#D8D0C3]/90 max-w-xl mx-auto leading-relaxed font-light"
          >
            Documenting authentic connection, quiet elegance, and atmospheric landscapes with an editorial sensitivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/demos/photography/portfolio"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#F7F5F0] text-[#171717] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all shadow-lg"
            >
              Explore Portfolio
            </Link>
            <a
              href="#inquire"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#F7F5F0]/40 text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium hover:border-white hover:bg-white/10 transition-all"
            >
              Reserve Date
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#252525]/60 block">
              Philosophy
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#171717] leading-tight">
              Honoring the subtlety of every fleeting second.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#252525]/80 text-sm sm:text-base leading-relaxed font-light">
            <p>
              We look beyond posed perfection. We seek the unplanned glance, the weight of quiet emotion, the way natural afternoon light sculpts a silhouette across an ancient stone corridor.
            </p>
            <p>
              With commissions ranging from destination weddings in Tuscany and the Amalfi Coast to private portrait series in Tokyo and fashion lookbooks in Paris, our lens is attuned to longevity over trend.
            </p>
          </div>
        </div>
      </section>

      {/* Photography Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#252525]/60 block mb-2">
            Disciplines
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#171717]">
            Core Specializations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Weddings", count: "48 Stories", desc: "Destination unions and private gatherings", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" },
            { name: "Portraits", count: "36 Studies", desc: "Fine-art personal and artist character studies", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
            { name: "Fashion", count: "24 Campaigns", desc: "Editorial lookbooks and avant-garde garments", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80" },
            { name: "Commercial", count: "19 Projects", desc: "Architectural spaces and luxury artisan brands", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80" },
          ].map((cat, i) => (
            <Link
              key={i}
              to="/demos/photography/portfolio"
              className="group relative h-96 overflow-hidden bg-[#252525] block cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#D8D0C3]/80 block">
                  {cat.count}
                </span>
                <h3 className="font-cormorant text-2xl font-light tracking-wide">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-[#D8D0C3]/70 font-light opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.desc} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#D8D0C3] pb-6 gap-4">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#252525]/60 block mb-1">
              Curated Selection
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#171717]">
              Selected Visual Studies
            </h2>
          </div>
          <Link
            to="/demos/photography/portfolio"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-[#171717] font-semibold hover:opacity-70 transition-opacity"
          >
            <span>Complete Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {photographyData.featuredImages.map((img) => (
            <div key={img.id} className="group space-y-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#252525]">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h3 className="font-cormorant text-2xl font-normal text-[#171717]">
                    {img.title}
                  </h3>
                  <p className="font-sans text-xs text-[#252525]/60 tracking-wider">
                    {img.location}
                  </p>
                </div>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#252525]/50 border border-[#D8D0C3] px-2.5 py-1">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="bg-[#252525] text-[#F7F5F0] py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D8D0C3]/60 block">
              Investment
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light">
              Bespoke Commission Packages
            </h2>
            <p className="font-sans text-sm text-[#D8D0C3]/80 font-light">
              Every commission is tailored to your itinerary, aesthetic intent, and archive specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographyData.services.map((srv, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 hover:border-white/30 transition-colors bg-[#171717]/60 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs text-[#D8D0C3]/60 block">0{i + 1}</span>
                  <h3 className="font-cormorant text-2xl font-normal tracking-wide">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-xs text-[#D8D0C3]/80 leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 space-y-2 text-[11px] font-sans text-[#D8D0C3]/70">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block">Includes</span>
                  <p>{srv.deliverables}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="inquire" className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#252525]/60 block">
          Inquiries & Commissions
        </span>
        <h2 className="font-cormorant text-5xl sm:text-6xl font-light text-[#171717] leading-tight">
          Let's Capture Your Story.
        </h2>
        <p className="font-sans text-sm text-[#252525]/70 max-w-lg mx-auto leading-relaxed font-light">
          We accept a limited number of destination weddings and editorial projects each season to preserve intimacy and care.
        </p>

        <div className="pt-6">
          <Link
            to="/demos/photography/portfolio"
            className="inline-block px-10 py-4 bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-black transition-all"
          >
            Review Portfolio Archive
          </Link>
        </div>
      </section>

    </div>
  );
}
