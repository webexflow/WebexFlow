import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-wf-aubergine border-t border-wf-borderDark text-wf-mutedText pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-wf-borderDark">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group" aria-label={`${siteConfig.agencyName} Home`}>
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
                src="/WEBEXFLOW_logo_transparent.png"
                alt={`${siteConfig.agencyName} logo`}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-xs font-mono uppercase tracking-widest text-wf-mutedText/70">
              {siteConfig.tagline}
            </p>

            <p className="text-sm text-wf-mutedText leading-relaxed max-w-sm">
              We build websites, applications and intelligent digital solutions that help businesses move forward.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.emailLink}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-wf-plum border border-wf-borderDark text-xs font-mono text-wf-mutedText hover:text-white hover:border-wf-violet transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-wf-violet" />
                <span>{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-wf-plum border border-wf-borderDark text-xs font-mono text-wf-mutedText hover:text-white hover:border-wf-violet transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-wf-violet" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-mono">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-wf-mutedText hover:text-white transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white">
              Services
            </p>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  to="/services#website-development"
                  className="text-wf-mutedText hover:text-white transition-colors flex items-center justify-between py-0.5 group"
                >
                  <span className="group-hover:text-wf-violet transition-colors">Website Development</span>
                  <ArrowUpRight className="w-3 h-3 text-wf-mutedText/60 group-hover:text-wf-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services#application-development"
                  className="text-wf-mutedText hover:text-white transition-colors flex items-center justify-between py-0.5 group"
                >
                  <span className="group-hover:text-wf-violet transition-colors">Application Development</span>
                  <ArrowUpRight className="w-3 h-3 text-wf-mutedText/60 group-hover:text-wf-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ai-automation"
                  className="text-wf-mutedText hover:text-white transition-colors flex items-center justify-between py-0.5 group"
                >
                  <span className="group-hover:text-wf-violet transition-colors">AI & Automation</span>
                  <ArrowUpRight className="w-3 h-3 text-wf-mutedText/60 group-hover:text-wf-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Spotlight */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white">
              Client Project
            </p>
            <div className="p-3.5 rounded-xl bg-wf-plum border border-wf-borderDark space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-wf-teal font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-wf-teal animate-pulse" />
                Live Production
              </span>
              <p className="text-xs font-bold text-white">Skin Atelier</p>
              <p className="text-[11px] text-wf-mutedText">Healthcare / Aesthetics</p>
              <a
                href={siteConfig.featuredProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-wf-violet hover:text-white pt-1"
              >
                <span>skinatelier.in</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-wf-mutedText/70">
          <p>© {siteConfig.copyrightYear} {siteConfig.agencyName}. All rights reserved.</p>
          <p>Creative Technology Studio — Clean Code & Practical AI</p>
        </div>
      </div>
    </footer>
  );
}
