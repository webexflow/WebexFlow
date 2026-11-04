import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CTASection({
  headline = "Have an Idea? Let's Build It.",
  supportingText = "Tell us what you're planning. Let's turn your idea into something meaningful.",
  className = ""
}) {
  const hasWhatsapp = Boolean(siteConfig.whatsappNumber && siteConfig.whatsappNumber.trim());
  const whatsappUrl = hasWhatsapp ? `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}` : null;

  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-wf-plum border border-wf-borderDark shadow-2xl text-center relative overflow-hidden"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-wf-violet/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-wf-teal/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-wf-aubergine text-wf-mutedText border border-wf-borderDark">
              INITIATE A CONVERSATION
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
              {headline}
            </h2>

            <p className="text-base sm:text-lg text-wf-mutedText leading-relaxed font-normal">
              {supportingText}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-wf-violet hover:bg-wf-violet-hover transition-all duration-200 shadow-sm hover:shadow-wf-violet active:scale-[0.98] cursor-pointer group"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {hasWhatsapp ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-wf-aubergine border border-wf-borderDark hover:border-wf-violet transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-wf-teal" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              ) : (
                <a
                  href={siteConfig.emailLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-wf-aubergine border border-wf-borderDark hover:border-wf-violet transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-wf-mutedText" />
                  <span>EMAIL US DIRECTLY</span>
                </a>
              )}
            </div>

            <p className="text-xs font-mono text-wf-mutedText/70 pt-4">
              Official Email: <span className="text-white">{siteConfig.email}</span> • Instagram: <span className="text-white">{siteConfig.instagramHandle}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
