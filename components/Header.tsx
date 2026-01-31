"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, ShoppingBag } from "lucide-react";
import { COMPANY_DATA, ROUTES } from "@/lib/constants";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Robust lock
      document.body.style.touchAction = "none"; // Prevent touch scroll
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Menu", href: ROUTES.menu },
    { name: "Dostawa", href: ROUTES.delivery },
    { name: "Kontakt", href: ROUTES.contact },
  ];

  return (

    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border-soft py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif font-bold text-2xl md:text-3xl text-ink z-50">
            Krakoski
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <span className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" /> Otwarte dziś: {COMPANY_DATA.hours.standard}
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium hover:text-primary transition-colors relative group",
                  pathname === link.href ? "text-primary" : "text-muted"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link href={ROUTES.delivery}>
              <Button variant="primary" size="sm">Zamów online</Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved outside header to prevent transform/transition context issues */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 md:hidden h-[100dvh]",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif font-bold text-ink hover:text-primary transition-colors text-center"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-6">
          <Link href={ROUTES.delivery} onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full justify-center">Zamów z dostawą</Button>
          </Link>
          <div className="flex justify-center gap-12 text-muted mt-4">
            <a href={`tel:${COMPANY_DATA.contact.phone.replace(/\s/g, '')}`} className="flex flex-col items-center gap-1 hover:text-primary">
              <Phone size={24} /> <span className="text-xs">Zadzwoń</span>
            </a>
            <a href={COMPANY_DATA.location.googleMapsLink} target="_blank" className="flex flex-col items-center gap-1 hover:text-primary">
              <MapPin size={24} /> <span className="text-xs">Dojazd</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};