import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { ecommerceData } from '../data/ecommerceData';

export default function EcommerceNav({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F5F1E9]/95 backdrop-blur-md border-b border-[#B5A18D]/30 text-[#171717]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/demos/ecommerce" className="group">
          <span className="font-display text-xl sm:text-2xl font-black tracking-[0.2em] uppercase block">
            {ecommerceData.brand.name}
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#171717]/60 block -mt-0.5 font-medium">
            {ecommerceData.brand.tagline}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-semibold">
          <NavLink
            to="/demos/ecommerce"
            end
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#171717] border-b border-[#171717] pb-1' : 'text-[#171717]/60 hover:text-[#171717]'}`
            }
          >
            Editorial
          </NavLink>
          <NavLink
            to="/demos/ecommerce/shop"
            className={({ isActive }) =>
              `transition-colors ${isActive ? 'text-[#171717] border-b border-[#171717] pb-1' : 'text-[#171717]/60 hover:text-[#171717]'}`
            }
          >
            Shop All
          </NavLink>
          <Link
            to="/demos/ecommerce/shop?cat=Outerwear"
            className="text-[#171717]/60 hover:text-[#171717] transition-colors"
          >
            Outerwear
          </Link>
          <Link
            to="/demos/ecommerce/shop?cat=Knitwear"
            className="text-[#171717]/60 hover:text-[#171717] transition-colors"
          >
            Knitwear
          </Link>
        </nav>

        {/* Right Actions: Cart & Mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full hover:bg-white transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="View Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 text-[#171717]" />
            <span className="text-xs font-mono font-bold">({cartCount})</span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#171717]"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#F5F1E9] border-b border-[#B5A18D]/30 px-6 py-6 space-y-4 text-xs uppercase tracking-widest font-semibold">
          <NavLink
            to="/demos/ecommerce"
            end
            onClick={() => setOpen(false)}
            className="block py-1 text-[#171717]"
          >
            Editorial Home
          </NavLink>
          <NavLink
            to="/demos/ecommerce/shop"
            onClick={() => setOpen(false)}
            className="block py-1 text-[#171717]"
          >
            Shop All Collections
          </NavLink>
          <button
            onClick={() => {
              setOpen(false);
              onOpenCart();
            }}
            className="w-full py-3 bg-[#171717] text-white text-center mt-2"
          >
            Shopping Bag ({cartCount})
          </button>
        </div>
      )}
    </header>
  );
}
