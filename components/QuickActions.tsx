"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ROUTES } from "@/lib/constants";
import { UtensilsCrossed, Truck, MapPin } from "lucide-react";

export const QuickActions = () => {
    const actions = [
        {
            title: "Zobacz Menu",
            subtitle: "Sprawdź co dziś serwujemy",
            icon: UtensilsCrossed,
            color: "border-gold",
            href: ROUTES.menu
        },
        {
            title: "Zamów z Dostawą",
            subtitle: "Pyszne, Uber, Wolt, Glovo",
            icon: Truck,
            color: "border-primary",
            href: ROUTES.delivery
        },
        {
            title: "Jak dojechać",
            subtitle: "Miodowa 39, Kazimierz",
            icon: MapPin,
            color: "border-secondary",
            href: ROUTES.contact
        },
    ];

    return (
        <section className="bg-background-alt py-8 border-y border-border-soft">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {actions.map((action, idx) => (
                        <Link key={idx} href={action.href} className="w-full">
                            <motion.div
                                whileHover={{ y: -4 }}
                                className={`flex items-center p-6 bg-background border-l-4 ${action.color} shadow-sm hover:shadow-md transition-all text-left group`}
                            >
                                <div className="mr-4 text-ink/80 group-hover:text-ink group-hover:scale-110 transition-transform">
                                    <action.icon size={40} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-lg text-ink">{action.title}</h3>
                                    <p className="text-sm text-muted">{action.subtitle}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
