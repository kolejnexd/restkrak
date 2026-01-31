"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Utensils, MapPin } from "lucide-react";

export const InfoSection = () => {
    const features = [
        { icon: Clock, title: "Szybka Obsługa", desc: "Samoobsługowy system, dzięki któremu zjesz pyszny obiad bez czekania." },
        { icon: Utensils, title: "Domowe Smaki", desc: "Gotujemy tak, jak u mamy. Tradycyjne receptury i świeże składniki." },
        { icon: MapPin, title: "Serce Kazimierza", desc: "Idealne miejsce na posiłek podczas zwiedzania historycznej dzielnicy." },
    ];

    return (
        <section className="py-20 bg-background overflow-hidden" id="o-nas">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative order-2 md:order-1 hidden md:block">
                        <div className="absolute -inset-4 border-2 border-border-strong rounded-sm z-0" />
                        <div className="relative z-10 aspect-[4/5] bg-background-alt overflow-hidden transition-all duration-700">
                            <Image
                                src="/restauracja-krakoski-kazimierz-hero.webp" // Reusing hero image as it is the only real asset.
                                alt="Wnętrze Restauracji Krakoski"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 md:order-2 space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">O nas</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">Tradycja w Nowoczesnym Wydaniu</h2>
                            <div className="w-20 h-1 bg-gold mb-6" />

                            {/* Mobile Image Injection - Elegant Layout */}
                            <div className="md:hidden w-full my-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-md">
                                <Image
                                    src="/restauracja-krakoski-kazimierz-hero.webp"
                                    alt="Wnętrze Restauracji Krakoski"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>


                            <p className="text-muted text-lg leading-relaxed mb-6">
                                Jesteśmy miejscem, gdzie czas zwalnia, a smaki przywołują najcieplejsze wspomnienia z dzieciństwa.
                                W "Krakoskim" nie sili się na ekstrawagancję – stawiamy na szczerość na talerzu.
                            </p>
                            <p className="text-muted text-lg leading-relaxed">
                                Nasza restauracja samoobsługowa to odpowiedź na potrzeby współczesnego Kazimierza – chcesz zjeść szybko,
                                tanio, ale przede wszystkim smacznie i domowo. Zapraszamy do stołu!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-start p-4 hover:bg-background-alt transition-colors rounded-sm border border-transparent hover:border-border-soft">
                                    <feature.icon className="w-8 h-8 text-primary mb-3" />
                                    <h4 className="font-bold text-ink mb-1">{feature.title}</h4>
                                    <p className="text-xs text-muted">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};