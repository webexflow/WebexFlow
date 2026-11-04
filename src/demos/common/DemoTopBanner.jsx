import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Sparkles } from 'lucide-react';

const ALL_DEMOS = [
  { name: 'Photography Website', industry: 'Photography', path: '/demos/photography' },
  { name: 'School Website', industry: 'Education', path: '/demos/school' },
  { name: 'Hospital Website', industry: 'Healthcare', path: '/demos/hospital' },
  { name: 'E-commerce Website', industry: 'Fashion E-Commerce', path: '/demos/ecommerce' },
  { name: 'Restaurant Website', industry: 'Fine Dining', path: '/demos/restaurant' },
  { name: 'Real Estate Website', industry: 'Real Estate', path: '/demos/real-estate' },
];

export default function DemoTopBanner({ demoName, industry }) {
  const [showSwitch, setShowSwitch] = useState(false);

  return (
    <div className="relative z-[60] bg-[#111820] text-white border-b border-white/10 text-xs py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Agency Attribution */}
        <div className="flex items-center gap-2">
          <Link
            to="/demos"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-electric hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Webex_Flow</span>
          </Link>
          <span className="text-white/20">|</span>
          <span className="font-mono text-[11px] text-steel">
            Interactive Concept Demo: <strong className="text-white font-semibold">{demoName}</strong> ({industry})
          </span>
        </div>

        {/* Right: Quick Switcher */}
        <div className="relative">
          <button
            onClick={() => setShowSwitch(!showSwitch)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-electric" />
            <span>Switch Demo</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {showSwitch && (
            <div className="absolute right-0 top-full mt-1 w-56 rounded-lg bg-[#111820] border border-white/15 shadow-2xl p-2 space-y-1 z-50">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-2 py-1">
                All 6 Industry Demos:
              </p>
              {ALL_DEMOS.map((d) => (
                <Link
                  key={d.path}
                  to={d.path}
                  onClick={() => setShowSwitch(false)}
                  className={`block px-2.5 py-1.5 rounded text-xs transition-colors ${
                    d.name === demoName
                      ? 'bg-electric text-white font-semibold'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="block font-medium">{d.name}</span>
                  <span className="text-[10px] text-slate-400 block">{d.industry}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
