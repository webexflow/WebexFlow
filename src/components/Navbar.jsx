import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-wf-aubergine/90 backdrop-blur-md border-b border-wf-borderDark py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with subtle hover motion */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-wf-violet rounded-md"
            aria-label={`${siteConfig.agencyName} Homepage`}
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              src="/WEBEXFLOW_logo_transparent.png"
              alt={`${siteConfig.agencyName} logo`}
              className="h-9 w-auto object-contain"
            />
            <span className="sr-only">{siteConfig.agencyName}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 px-2.5 lg:px-3 py-1.5 rounded-full bg-wf-plum/70 border border-wf-borderDark/70 backdrop-blur-md shadow-inner">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 lg:px-4 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors duration-200 ${
                    isActive ? 'text-white font-semibold' : 'text-wf-mutedText hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-wf-plum-light border border-wf-violet/40 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-wf-violet hover:bg-wf-violet-hover transition-all duration-200 shadow-sm hover:shadow-wf-violet active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg bg-wf-plum border border-wf-borderDark text-wf-mutedText hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-wf-violet"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-wf-violet" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-wf-aubergine/98 border-b border-wf-borderDark px-6 py-6 space-y-4 backdrop-blur-xl shadow-2xl mt-3"
          >
            <nav className="flex flex-col space-y-1">
              {siteConfig.navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm uppercase tracking-wider font-medium transition-all ${
                      isActive
                        ? 'bg-wf-plum text-white font-semibold border-l-2 border-wf-violet'
                        : 'text-wf-mutedText hover:bg-wf-plum/50 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-4 border-t border-wf-borderDark flex flex-col gap-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-lg text-xs uppercase tracking-wider font-semibold text-white bg-wf-violet hover:bg-wf-violet-hover shadow-sm"
              >
                <span>Let's Talk — Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex justify-between items-center text-xs text-wf-mutedText pt-2">
                <a href={siteConfig.emailLink} className="hover:text-wf-violet transition-colors">
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wf-violet transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
