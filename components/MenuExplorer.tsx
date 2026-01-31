"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { ROUTES, COMPANY_DATA } from "@/lib/constants";

import { CATEGORIES, MENU_ITEMS } from "@/lib/menu-data";
import { AddToCartButton } from "./cart/AddToCartButton";

export const MenuExplorer = () => {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<(typeof MENU_ITEMS)[0] | null>(null);

  const filteredItems = MENU_ITEMS.filter(
    (item) =>
      (activeCategory === "Wszystkie" || item.category === activeCategory) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-4">Nasze Menu</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Tradycyjne receptury, świeże składniki i domowy smak. Sprawdź, co dziś serwujemy.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur py-4 mb-8 border-b border-border-soft">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-background-alt text-muted hover:bg-border-soft"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Szukaj dania..."
                aria-label="Szukaj dania w menu"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-border-soft bg-background-alt focus:outline-none focus:border-primary text-sm"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group bg-surface border border-border-soft p-6 rounded-sm cursor-pointer hover:border-primary/50 hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-bold text-lg text-ink group-hover:text-primary transition-colors pr-2">{item.name}</h3>
                    {item.price && <span className="font-medium text-gold whitespace-nowrap">{item.price}</span>}
                </div>
                <p className="text-sm text-muted mb-4 line-clamp-2">{item.description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                    {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-background-alt text-muted px-2 py-1 rounded-sm">{tag}</span>
                    ))}
                </div>
              </div>

              <div className="flex justify-end">
                  <AddToCartButton item={{...item, id: item.id.toString()}} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={ROUTES.menu}>
            <Button variant="outline" size="lg" className="group">
              Pełne Menu <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal / Bottom Sheet */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-surface md:rounded-lg rounded-t-xl z-50 w-full md:w-[500px] p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 p-2 hover:bg-background-alt rounded-full">
                <X className="w-5 h-5 text-muted" />
              </button>

              <div className="pt-2">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">{selectedItem.category}</span>
                <h3 className="font-serif font-bold text-3xl text-ink mb-2">{selectedItem.name}</h3>
                <p className="text-xl font-medium text-gold mb-6">{selectedItem.price}</p>
                <p className="text-muted leading-relaxed mb-8">{selectedItem.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full">
                      <AddToCartButton item={{...selectedItem, id: selectedItem.id.toString()}} variant="full" />
                  </div>
                  <a href={`tel:${COMPANY_DATA.contact.phone}`} className="w-full mt-4">
                    <Button variant="outline" className="w-full justify-center h-[52px]">Zadzwoń</Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
