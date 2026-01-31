import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string; // String because prices might be dynamic or "ask at counter"
  tags?: string[];
  category: MenuCategory;
}

export type MenuCategory = 'Zupy' | 'Dania główne' | 'Pierogi i Naleśniki' | 'Dodatki i Surówki';

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