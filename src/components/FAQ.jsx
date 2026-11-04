import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqsData } from '../data/faqs';

export default function FAQ({ limit = null, theme = 'dark' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const list = limit ? faqsData.slice(0, limit) : faqsData;
  const isLight = theme === 'light';

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-inherit">
      {list.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`transition-colors py-4 ${
              isLight ? 'border-wf-borderSubtle' : 'border-wf-borderDark'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full py-2 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
              aria-expanded={isOpen}
            >
              <span
                className={`text-base sm:text-lg font-semibold font-display tracking-tight transition-colors group-hover:text-wf-violet ${
                  isLight ? 'text-wf-darkText' : 'text-white'
                }`}
              >
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors flex-shrink-0 ${
                  isLight
                    ? 'border-wf-borderSubtle bg-white text-wf-darkText group-hover:border-wf-violet'
                    : 'border-wf-borderDark bg-wf-plum text-wf-mutedText group-hover:border-wf-violet'
                }`}
              >
                {isOpen ? <Minus className="w-3.5 h-3.5 text-wf-violet" /> : <Plus className="w-3.5 h-3.5 text-wf-violet" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={`pt-3 pb-2 text-sm leading-relaxed ${
                      isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'
                    }`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
