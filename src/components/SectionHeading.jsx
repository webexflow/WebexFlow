import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  theme = 'dark',
  className = ''
}) {
  const isCenter = align === 'center';
  const isLight = theme === 'light';

  return (
    <div className={`space-y-4 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2"
        >
          <span
            className={`px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border ${
              isLight
                ? 'bg-wf-lavender-dark/70 text-wf-darkText border-wf-borderSubtle font-semibold'
                : 'bg-wf-plum/80 text-wf-mutedText border-wf-borderDark font-medium'
            }`}
          >
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display leading-[1.1] ${
          isLight ? 'text-wf-darkText' : 'text-white'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-wf-violet">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
