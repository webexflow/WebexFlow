import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DemoTopBanner from '../../common/DemoTopBanner';
import EcommerceNav from './EcommerceNav';
import EcommerceFooter from './EcommerceFooter';
import CartDrawer from './CartDrawer';
import ProductModal from './ProductModal';
import ScrollToTop from '../../../components/ScrollToTop';

export default function EcommerceLayout() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  React.useEffect(() => {
    document.title = "E-commerce Website — Webex_Flow Demo";
  }, []);

  const addToCart = (product, selectedSize = 'M') => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, selectedSize, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, selectedSize, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.selectedSize === selectedSize) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id, selectedSize) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === selectedSize))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E9] text-[#171717] font-sans selection:bg-[#171717] selection:text-white">
      <ScrollToTop />
      <DemoTopBanner demoName="E-commerce Website" industry="Minimal Fashion E-Commerce" />
      <EcommerceNav cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Outlet
          context={{
            cart,
            addToCart,
            openProductModal: (prod) => setActiveProduct(prod),
            openCart: () => setIsCartOpen(true),
          }}
        />
      </main>

      <EcommerceFooter />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={activeProduct}
        isOpen={Boolean(activeProduct)}
        onClose={() => setActiveProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
}
