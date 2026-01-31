"use client";

import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { MenuItem } from '../../types';

interface AddToCartButtonProps {
  item: MenuItem;
  variant?: 'small' | 'full';
}

export const AddToCartButton = ({ item, variant = 'small' }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening item details if nested
    addToCart(item);
  };

  if (variant === 'full') {
    return (
      <button
        onClick={handleAdd}
        className="w-full mt-4 bg-primaryRed text-white py-3 px-6 rounded-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Dodaj do zamówienia
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className="p-2 bg-altBg text-ink hover:bg-primaryRed hover:text-white rounded-full transition-colors"
      aria-label={`Dodaj ${item.name} do koszyka`}
    >
      <Plus className="w-5 h-5" />
    </button>
  );
};
