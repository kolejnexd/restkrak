"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CheckoutForm } from '../checkout/CheckoutForm';

export const CartDrawer = () => {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  const [view, setView] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset view when closing
  useEffect(() => {
    if (!isOpen) {
        // slight delay to let animation finish before resetting view
        const t = setTimeout(() => setView('cart'), 300);
        return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-frame z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col border-l border-border-soft"
          >
            {/* Header */}
            <div className="p-4 border-b border-border-soft flex items-center justify-between bg-surface/50 backdrop-blur">
              <h2 className="text-xl font-serif font-bold flex items-center gap-2 text-ink">
                {view === 'cart' && <><ShoppingBag className="w-5 h-5" /> Twój koszyk</>}
                {view === 'checkout' && 'Realizacja zamówienia'}
                {view === 'success' && 'Sukces!'}
              </h2>
              <button onClick={closeCart} className="p-2 hover:bg-background-alt rounded-full transition-colors text-muted hover:text-ink">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 bg-background">
              {view === 'cart' && (
                <>
                  {items.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-muted gap-4">
                      <ShoppingBag className="w-16 h-16 opacity-20" />
                      <p>Twój koszyk jest pusty</p>
                      <button
                        onClick={closeCart}
                        className="text-primary font-medium hover:underline"
                      >
                        Wróć do menu
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border border-border-soft rounded-lg bg-surface shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex-1">
                            <h4 className="font-bold text-ink font-serif text-lg">{item.name}</h4>
                            <p className="text-sm text-gold font-medium">{item.parsedPrice.toFixed(2)} zł</p>
                          </div>
                          <div className="flex flex-col items-end gap-3">
                            <div className="flex items-center gap-2 bg-background-alt rounded-full p-1 border border-border-soft">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3 text-ink" />
                              </button>
                              <span className="text-sm font-bold w-4 text-center text-ink">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
                              >
                                <Plus className="w-3 h-3 text-ink" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted hover:text-primary transition-colors text-xs flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" /> Usuń
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {view === 'checkout' && (
                <CheckoutForm
                    onSuccess={() => setView('success')}
                    onCancel={() => setView('cart')}
                />
              )}

              {view === 'success' && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-24 h-24 bg-green-soft text-green rounded-full flex items-center justify-center"
                    >
                        <CheckCircle className="w-12 h-12" />
                    </motion.div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-2 text-ink">Dziękujemy!</h3>
                        <p className="text-muted">Twoje zamówienie zostało przyjęte.</p>
                        <p className="text-muted">Restauracja wkrótce je potwierdzi.</p>
                    </div>
                    <button
                        onClick={closeCart}
                        className="px-8 py-3 bg-primary text-white rounded-sm font-bold hover:bg-primary-hover transition-colors shadow-lg"
                    >
                        Zamknij
                    </button>
                </div>
              )}
            </div>

            {/* Footer (Cart View only) */}
            {view === 'cart' && items.length > 0 && (
              <div className="p-6 border-t border-border-soft bg-surface space-y-4 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center text-xl font-bold font-serif text-ink">
                  <span>Razem:</span>
                  <span>{cartTotal.toFixed(2)} zł</span>
                </div>
                <button
                  onClick={() => setView('checkout')}
                  className="w-full py-4 bg-primary text-white rounded-sm font-bold hover:bg-primary-hover transition-colors shadow-lg uppercase tracking-wide text-sm"
                >
                  Przejdź do kasy
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
