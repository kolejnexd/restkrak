"use client";

import React, { useEffect, useState } from 'react';
import { ShoppingBasket } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartTrigger = () => {
  const { toggleCart, itemsCount } = useCart();
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (itemsCount > 0) {
      setIsBouncing(true);
      const t = setTimeout(() => setIsBouncing(false), 300);
      return () => clearTimeout(t);
    }
  }, [itemsCount]);

  return (
    <AnimatePresence>
      {itemsCount > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isBouncing ? 1.2 : 1,
            opacity: 1
          }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={toggleCart}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover transition-colors"
          aria-label="Koszyk"
        >
          <ShoppingBasket className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-gold text-ink text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
            {itemsCount}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
