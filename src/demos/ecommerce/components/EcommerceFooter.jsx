import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ecommerceData } from '../data/ecommerceData';

export default function EcommerceFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#171717] text-[#F5F1E9] pt-20 pb-12 border-t border-[#171717]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-2xl font-black tracking-[0.2em] uppercase block">
              {ecommerceData.brand.name}
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B5A18D]">
              {ecommerceData.brand.tagline}
            </p>
            <p className="text-xs text-[#F5F1E9]/70 leading-relaxed max-w-sm font-light">
              Architectural silhouettes, regenerative materials, and conscious craftsmanship tailored for contemporary living.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B5A18D]">
              Collections
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#F5F1E9]/70">
              <li><Link to="/demos/ecommerce/shop" className="hover:text-white">Shop All</Link></li>
              <li><Link to="/demos/ecommerce/shop?cat=Outerwear" className="hover:text-white">Overcoats & Blazers</Link></li>
              <li><Link to="/demos/ecommerce/shop?cat=Knitwear" className="hover:text-white">Cashmere Knitwear</Link></li>
              <li><Link to="/demos/ecommerce/shop?cat=Bottoms" className="hover:text-white">Tailored Trousers</Link></li>
              <li><Link to="/demos/ecommerce/shop?cat=Accessories" className="hover:text-white">Leather Accessories</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B5A18D]">
              Newsletter Dispatch
            </p>
            <p className="text-xs text-[#F5F1E9]/70">
              Receive seasonal private view invitations and editorial lookbooks.
            </p>
            {subscribed ? (
              <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 pt-2">
                <Check className="w-3.5 h-3.5" />
                <span>Subscribed to dispatch list (Demo)</span>
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-3.5 py-2.5 rounded bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#B5A18D] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white text-[#171717] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#B5A18D] transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5F1E9]/50">
          <p>© 2026 {ecommerceData.brand.name}. Interactive Retail Demonstration.</p>
          <Link to="/demos" className="hover:text-white transition-colors">
            ← Back to Webex_Flow Demos
          </Link>
        </div>
      </div>
    </footer>
  );
}
