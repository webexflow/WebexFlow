import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, LayoutGrid, Cpu, ArrowUpRight, Check } from 'lucide-react';

const iconMap = {
  Globe: Globe,
  LayoutGrid: LayoutGrid,
  Cpu: Cpu,
};

export default function ServiceCard({ service, index, theme = 'dark' }) {
  const IconComponent = iconMap[service.icon] || Globe;
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between ${
        isLight
          ? 'bg-white border border-wf-borderSubtle hover:border-wf-violet/60 shadow-sm hover:shadow-xl'
          : 'bg-wf-plum border border-wf-borderDark hover:border-wf-violet/60 shadow-lg hover:shadow-2xl'
      }`}
    >
      <div>
        {/* Header Index & Icon */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-inherit">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${
                isLight
                  ? 'bg-wf-lavender text-wf-violet border-wf-borderSubtle group-hover:border-wf-violet'
                  : 'bg-wf-aubergine text-wf-violet border-wf-borderDark group-hover:border-wf-violet'
              }`}
            >
              <IconComponent className="w-5 h-5 text-wf-violet group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <span
              className={`text-xs font-mono uppercase tracking-widest ${
                isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'
              }`}
            >
              {service.badge}
            </span>
          </div>

          <span
            className={`font-mono text-xl font-bold ${
              isLight ? 'text-wf-borderSubtle' : 'text-wf-plum-light'
            }`}
          >
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-bold font-display mb-3 group-hover:text-wf-violet transition-colors ${
            isLight ? 'text-wf-darkText' : 'text-white'
          }`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-8 ${
            isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'
          }`}
        >
          {service.shortDescription}
        </p>

        {/* Selected Capabilities */}
        <div className="space-y-2.5 mb-8">
          <p
            className={`text-[11px] font-mono uppercase tracking-wider ${
              isLight ? 'text-wf-mutedLight/70' : 'text-wf-mutedText/70'
            }`}
          >
            Capabilities:
          </p>
          <ul className="space-y-2">
            {service.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-2 text-xs ${
                  isLight ? 'text-wf-darkText' : 'text-wf-mutedText'
                }`}
              >
                <Check className="w-3.5 h-3.5 text-wf-teal flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-inherit">
        <Link
          to={`/services#${service.id}`}
          className={`inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-wider font-semibold transition-colors group-hover:text-wf-violet ${
            isLight ? 'text-wf-darkText' : 'text-white'
          }`}
        >
          <span>Explore Service</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-wf-violet" />
        </Link>
      </div>
    </motion.div>
  );
}
