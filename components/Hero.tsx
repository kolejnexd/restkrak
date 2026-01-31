"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { COMPANY_DATA, ROUTES } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative bg-[#F6F3EE] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block opacity-20 pointer-events-none">
        <div className="absolute top-10 right-20 w-[1px] h-[400px] bg-gradient-to-b from-primary to-transparent" />
        <div className="absolute top-40 right-40 w-[1px] h-[300px] bg-gradient-to-b from-secondary to-transparent delay-100" />
        <div className="absolute top-20 right-60 w-[1px] h-[200px] bg-gradient-to-b from-gold to-transparent delay-200" />

        {/* Frames */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[500px] border border-border-strong rounded-sm transform translate-x-1/4" />
        <div className="absolute bottom-20 right-20 w-[200px] h-[200px] border border-border-soft rounded-sm" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">
                {COMPANY_DATA.location.district} · {COMPANY_DATA.location.city}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink leading-[1.1] mb-6">
                Restauracja Krakoski <br />
                <span className="text-muted font-normal text-3xl md:text-4xl lg:text-5xl block mt-2">
                  Tradycyjne Smaki
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted font-light border-l-4 border-secondary pl-6 py-1">
                Polska kuchnia, krakowska gościnność i domowa atmosfera przy ulicy Miodowej.
              </h2>
            </div>

            {/* Mobile Image Injection - Elegant Layout */}
            <div className="md:hidden w-full my-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-md">
              <Image
                src="/restauracja-krakoski-kazimierz-hero.webp"
                alt="Wnętrze Restauracji Krakoski"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
              Zapraszamy do serca krakowskiego Kazimierza na kulinarną podróż po smakach polskiej tradycji.
              W "Krakoskim" łączymy miłość do lokalnego folkloru z pasją do gotowania.
              Jesteśmy restauracją samoobsługową, gdzie szybko i smacznie zjesz domowy obiad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
              <Link href={ROUTES.delivery} className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto justify-center">Zamów z Dostawą</Button>
              </Link>
              <Link href={ROUTES.menu} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto justify-center">Zobacz Menu</Button>
              </Link>
            </div>

            {/* AI-SEO Fact Box */}
            <div className="bg-white/50 backdrop-blur-sm border border-border-soft p-4 rounded-sm mt-8 max-w-md shadow-sm">
              <h3 className="font-bold text-sm text-ink mb-2">Szybkie fakty:</h3>
              <ul className="text-sm text-muted space-y-1">
                <li className="flex gap-2">📍 <span className="font-medium">Adres:</span> {COMPANY_DATA.location.address}, {COMPANY_DATA.location.district}</li>
                <li className="flex gap-2">⏰ <span className="font-medium">Otwarte:</span> {COMPANY_DATA.hours.standard}</li>
                <li className="flex gap-2">📞 <span className="font-medium">Telefon:</span> {COMPANY_DATA.contact.phone}</li>
                <li className="flex gap-2">🛵 <span className="font-medium">Dostawa:</span> Pyszne, Uber Eats, Wolt, Glovo</li>
              </ul>
            </div>
          </motion.div>

          {/* Visual Mobile/Tablet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 lg:col-span-6 relative hidden md:block"
          >
            <div className="w-full relative border border-border-strong bg-background-alt p-8 shadow-sm">
              <div className="absolute inset-4 border border-ink/10" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/10 z-0" />
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-secondary/10 z-0" />

              <div className="relative z-10 w-full border border-dashed border-plaster/40 p-2">
                <Image
                  src="/restauracja-krakoski-kazimierz-hero.webp"
                  alt="Wnętrze Restauracji Krakoski na Kazimierzu - tradycyjny wystrój"
                  width={600}
                  height={400} // Aspect ratio based on actual image checks if possible, or standard.
                  className="w-full h-auto object-cover opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};