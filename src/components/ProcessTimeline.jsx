import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code2, CheckSquare2, Rocket } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Understand the client's business, goals and requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "STRATEGIZE",
    description: "Plan the solution, structure, functionality and design.",
    icon: Compass,
  },
  {
    step: "03",
    title: "CREATE",
    description: "Design and develop the digital experience.",
    icon: Code2,
  },
  {
    step: "04",
    title: "TEST",
    description: "Test responsiveness, functionality, performance and user experience.",
    icon: CheckSquare2,
  },
  {
    step: "05",
    title: "LAUNCH",
    description: "Deploy the solution and provide agreed support.",
    icon: Rocket,
  }
];

export default function ProcessTimeline({ theme = 'dark' }) {
  const isLight = theme === 'light';

  return (
    <div className="relative py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                isLight
                  ? 'bg-white border-wf-borderSubtle hover:border-wf-violet/60 shadow-sm'
                  : 'bg-wf-plum border-wf-borderDark hover:border-wf-violet/60 shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-inherit">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isLight ? 'bg-wf-lavender text-wf-darkText' : 'bg-wf-aubergine text-white'
                    }`}
                  >
                    PHASE {item.step}
                  </span>
                  <Icon className="w-4 h-4 text-wf-violet" />
                </div>

                <h3
                  className={`text-lg font-bold font-display tracking-tight mb-2 ${
                    isLight ? 'text-wf-darkText' : 'text-white'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed ${
                    isLight ? 'text-wf-mutedLight' : 'text-wf-mutedText'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-inherit flex items-center justify-between text-[10px] font-mono text-wf-mutedText/60">
                <span>0{index + 1} / 05</span>
                <span className="w-1.5 h-1.5 rounded-full bg-wf-teal" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
