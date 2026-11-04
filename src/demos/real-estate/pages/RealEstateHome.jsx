import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, ArrowRight, Shield, Eye, Award, Clock } from 'lucide-react';
import { realEstateData } from '../data/realEstateData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
};

function PropertyCard({ property, onView, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#DAD7CE] hover:border-[#183D35]/40 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onView(property)}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/50 to-transparent" />
        <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#183D35] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
          {property.type}
        </span>
        <span className="absolute bottom-4 right-4 font-outfit text-white text-lg font-bold">
          {property.formattedPrice}
        </span>
      </div>
      <div className="p-5 space-y-3">
        <div>
          <span className="text-[10px] font-mono text-[#183D35] uppercase tracking-wider flex items-center gap-1 mb-1">
            <MapPin className="w-3 h-3" /> {property.location}
          </span>
          <h3 className="font-outfit text-base font-bold text-[#242424] leading-snug group-hover:text-[#183D35] transition-colors">
            {property.title}
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {property.beds} Beds</span>
          <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {property.baths} Baths</span>
          <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" /> {property.sqft}</span>
        </div>
        <button className="w-full py-2.5 rounded-lg border border-[#183D35] text-[#183D35] text-xs font-bold uppercase tracking-wider hover:bg-[#183D35] hover:text-white transition-all duration-200 mt-1">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default function RealEstateHome() {
  const { openPropertyModal } = useOutletContext();
  const featured = realEstateData.properties.filter((p) => p.isFeatured);

  const trustPoints = [
    {
      icon: Shield,
      title: 'Absolute Discretion',
      desc: 'Private, off-market listings handled with complete confidentiality at every stage.',
    },
    {
      icon: Eye,
      title: 'Curated Selection',
      desc: 'Every property is hand-selected by our senior advisors for architectural merit and investment value.',
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      desc: 'Recognised by leading property networks for unparalleled client care and market expertise.',
    },
    {
      icon: Clock,
      title: '24/7 Advisory',
      desc: 'Your dedicated broker is available around the clock for viewings, negotiation and due diligence.',
    },
  ];

  const locations = [
    { name: 'Malibu', label: 'Coastal California', img: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&w=600&q=70' },
    { name: 'Aspen', label: 'Mountain Colorado', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=70' },
    { name: 'Tribeca', label: 'New York City', img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=70' },
    { name: 'Cotswolds', label: 'English Countryside', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=70' },
    { name: 'Lake Como', label: 'Italian Lakes', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=70' },
  ];

  return (
    <div className="bg-[#F6F5F0]">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/90 via-[#242424]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 w-full">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm">
              Luxury Residential · Global Portfolio
            </span>
            <h1 className="font-outfit text-5xl sm:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Find a Place to<br />Call Home.
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg font-light">
              Exclusively curated estates, villas, and penthouses in the world's most coveted addresses. Private acquisitions handled with absolute discretion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/demos/real-estate/properties"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#183D35] text-sm font-bold uppercase tracking-wider hover:bg-[#F6F5F0] transition-colors"
              >
                Browse All Residences <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#featured"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/40 text-white text-sm font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                View Featured
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Search Bar */}
      <section className="bg-white border-b border-[#DAD7CE]">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Location (e.g. Malibu, Aspen…)"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#DAD7CE] text-sm text-[#242424] bg-[#F6F5F0] outline-none focus:border-[#183D35] transition-colors"
              />
            </div>
            <select className="flex-1 px-4 py-3 rounded-lg border border-[#DAD7CE] text-sm text-[#242424] bg-[#F6F5F0] outline-none focus:border-[#183D35] transition-colors">
              <option value="">Property Type</option>
              {realEstateData.types.filter((t) => t !== 'All').map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <select className="flex-1 px-4 py-3 rounded-lg border border-[#DAD7CE] text-sm text-[#242424] bg-[#F6F5F0] outline-none focus:border-[#183D35] transition-colors">
              <option value="">Bedrooms</option>
              <option>4+ Bedrooms</option>
              <option>5+ Bedrooms</option>
              <option>6+ Bedrooms</option>
            </select>
            <Link
              to="/demos/real-estate/properties"
              className="px-7 py-3 rounded-lg bg-[#183D35] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#122e28] transition-colors whitespace-nowrap"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="featured" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#183D35] font-semibold">
              Handpicked Residences
            </span>
            <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-[#242424] leading-tight">
              Featured<br />Properties.
            </h2>
          </div>
          <Link
            to="/demos/real-estate/properties"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#183D35] hover:gap-3 transition-all uppercase tracking-wider"
          >
            View All Residences <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} onView={openPropertyModal} index={i} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#242424] text-[#F6F5F0] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14 space-y-3"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#DAD7CE]/60 font-semibold">
              The Luxury Difference
            </span>
            <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white">
              Why Choose Us.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#183D35]/80 flex items-center justify-center text-[#DAD7CE]">
                  <point.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit text-base font-bold text-white mb-1.5">{point.title}</h3>
                  <p className="text-sm text-[#DAD7CE]/70 leading-relaxed font-light">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14 space-y-3"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#183D35] font-semibold">
            Global Portfolio
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-[#242424]">
            Our Locations.
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Link
                to="/demos/real-estate/properties"
                className="group block relative rounded-xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-outfit text-white font-bold text-sm">{loc.name}</p>
                  <p className="text-white/60 text-[10px] font-mono">{loc.label}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#183D35] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold">
            Ready to Find Your Residence?
          </h2>
          <p className="text-[#DAD7CE] leading-relaxed font-light">
            Our private brokerage team is available to arrange confidential viewings and provide full acquisition support worldwide.
          </p>
          <Link
            to="/demos/real-estate/properties"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#183D35] font-bold uppercase tracking-wider text-sm hover:bg-[#F6F5F0] transition-colors"
          >
            Explore All Properties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
