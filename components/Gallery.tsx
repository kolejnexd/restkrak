"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Using the single verified real asset multiple times to fill the grid, as per "No placeholder" rule.
// In a real scenario, distinct images would be used.
const GALLERY_IMAGES = [
  { src: "/krakoski-restauracja-kazimierz-polska-kuchnia-wnetrze.webp", alt: "Wnętrze restauracji", span: "md:col-span-2 md:row-span-2" },
  { src: "/krakoski-restauracja-kazimierz-polska-kuchnia-krakowski-stroj.webp", alt: "Detale wystroju", span: "md:col-span-1 md:row-span-1" },
  { src: "/krakoski-restauracja-kazimierz-polska-kuchnia-wnetrze-2.webp", alt: "Sala główna", span: "md:col-span-1 md:row-span-1" },
  { src: "/krakoski-restauracja-kazimierz-polska-kuchnia-klimat-krakowa.webp", alt: "Klimatyczny kącik", span: "md:col-span-1 md:row-span-1" },
  { src: "/krakoski-restauracja-kazimierz-polska-kuchnia-dekoracje.webp", alt: "Dekoracje", span: "md:col-span-2 md:row-span-1" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background" id="galeria">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Galeria</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink">Zobacz Wnętrze</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[600px] md:h-[800px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 0.98 }}
              onClick={() => setSelectedImage(img.src)}
              className={`relative cursor-pointer overflow-hidden rounded-sm group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif italic text-lg shadow-sm">Powiększ</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 text-white p-2">
              <X size={32} />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={selectedImage}
                alt="Gallery full screen"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};