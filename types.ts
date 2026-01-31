import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string; // String because prices might be dynamic or "ask at counter"
  tags?: string[];
  category: string; // Changed from strict union to string to allow flexibility with data
}

// export type MenuCategory = 'Zupy' | 'Dania główne' | 'Pierogi i Naleśniki' | 'Dodatki i Surówki'; // Removed strict union for simplicity

export interface DeliveryPlatform {
  name: string;
  url: string;
  color: string;
  textColor?: string;
  icon?: React.ReactNode;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'interior' | 'food' | 'detail';
  span?: boolean; // For masonry layout
}

export interface Colors {
  bg: string;
  altBg: string;
  surface: string;
  borderSoft: string;
  borderStrong: string;
  ink: string;
  muted: string;
  primaryRed: string;
  secondaryBlue: string;
  gold: string;
  green: string;
  cyanGlow: string;
  frameBlack: string;
  footerDark: string;
}

// Order & Cart Types

export interface CartItem extends MenuItem {
  quantity: number;
  parsedPrice: number; // Numeric price for calculations
}

export type OrderStatus = 'new' | 'accepted' | 'preparing' | 'in_delivery' | 'completed' | 'cancelled';
export type DeliveryMethod = 'delivery' | 'pickup';
export type PaymentMethod = 'cash' | 'card_on_delivery';

export interface CustomerDetails {
  fullName: string;
  phoneNumber: string;
  email: string; // Optional but good for confirmation
  address?: string; // Required for delivery
  postalCode?: string;
  city?: string;
  notes?: string;
}

export interface Order {
  id?: string; // Supabase generated
  created_at?: string;
  status: OrderStatus;
  delivery_method: DeliveryMethod;
  payment_method: PaymentMethod;
  customer_details: CustomerDetails;
  items: CartItem[];
  total_amount: number;
  delivery_cost: number;
}
