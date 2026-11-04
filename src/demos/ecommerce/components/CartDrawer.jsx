import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ecommerceData } from '../data/ecommerceData';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQty, onRemove, onClear }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 490;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleConfirmOrder = () => {
    setCheckedOut(true);
    setTimeout(() => {
      onClear();
      setCheckedOut(false);
      setIsCheckout(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#171717]/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F5F1E9] text-[#171717] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#B5A18D]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#171717]" />
              <h2 className="font-display text-lg font-bold uppercase tracking-wider">
                Shopping Bag ({cart.reduce((c, i) => c + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#B5A18D]/20 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {isCheckout ? (
              <div className="space-y-4 py-4">
                {checkedOut ? (
                  <div className="text-center py-12 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="font-display text-xl font-bold">Demo Order Confirmed</h3>
                    <p className="text-xs text-[#171717]/70">
                      This is a frontend demonstration. No payment was processed and no card was billed.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base uppercase tracking-wider">
                      Demo Order Summary
                    </h3>
                    <div className="p-4 rounded-xl bg-white border border-[#B5A18D]/30 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Items ({cart.length}):</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Standard Delivery:</span>
                        <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t border-[#B5A18D]/20 text-sm">
                        <span>Total Due:</span>
                        <span>₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-900 rounded-lg text-xs leading-relaxed">
                      <strong>Interactive E-Commerce Prototype:</strong> No backend APIs, database connections, or real payment gateways are active.
                    </div>
                    <button
                      onClick={handleConfirmOrder}
                      className="w-full py-3.5 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                    >
                      Complete Test Order
                    </button>
                    <button
                      onClick={() => setIsCheckout(false)}
                      className="w-full text-xs font-mono underline text-[#171717]/70 cursor-pointer"
                    >
                      ← Back to Bag
                    </button>
                  </div>
                )}
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#B5A18D] mx-auto stroke-1" />
                <p className="font-display text-base font-medium">Your shopping bag is empty.</p>
                <p className="text-xs text-[#171717]/60">Explore our minimal collections to add garments.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className="p-4 rounded-xl bg-white border border-[#B5A18D]/30 flex gap-4 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover rounded bg-[#F5F1E9] flex-shrink-0"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-display font-semibold text-xs text-[#171717]">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#171717]/60">
                        Size: {item.selectedSize} • ₹{item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <div className="flex items-center border border-[#B5A18D]/50 rounded">
                          <button
                            onClick={() => onUpdateQty(item.id, item.selectedSize, -1)}
                            className="p-1 hover:bg-[#B5A18D]/20 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.selectedSize, 1)}
                            className="p-1 hover:bg-[#B5A18D]/20 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemove(item.id, item.selectedSize)}
                          className="text-[#171717]/50 hover:text-rose-500 transition-colors cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {!isCheckout && cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#B5A18D]/30 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#171717]/70">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#171717]/70">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Complimentary' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#171717] pt-1 border-t border-[#B5A18D]/20">
                  <span>Estimated Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
