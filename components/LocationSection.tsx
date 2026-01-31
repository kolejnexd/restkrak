"use client";

import React from "react";
import { Button } from "./ui/Button";
import { COMPANY_DATA } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const LocationSection = () => {
    return (
        <section className="relative min-h-[600px] flex flex-col md:flex-row" id="kontakt">
            {/* Map Side (Left) */}
            <div className="w-full md:w-1/2 min-h-[400px] md:min-h-full bg-border-soft relative transition-all duration-500">
                {/* Simple iframe map for now, cleaner than API */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10247.054104529685!2d19.928203487158207!3d50.05326100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b253012025b%3A0x256972d55046ca87!2sRestauracja%20Krakoski!5e0!3m2!1spl!2spl!4v1769381611756!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Content Side (Right) */}
            <div className="w-full md:w-1/2 bg-ink text-white p-12 md:p-20 flex flex-col justify-center">
                <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Lokalizacja</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Jak dojechać?</h2>

                <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Adres</h4>
                            <p className="text-white/60">{COMPANY_DATA.location.address}</p>
                            <p className="text-white/60">{COMPANY_DATA.location.zip} {COMPANY_DATA.location.city}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Godziny Otwarcia</h4>
                            <p className="text-white/60">{COMPANY_DATA.hours.standard}</p>
                            <p className="text-white/40 text-xs mt-1">Kuchnia czynna do 21:00</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Phone className="text-primary mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Kontakt</h4>
                            <a href={`tel:${COMPANY_DATA.contact.phone}`} className="text-white/60 hover:text-white transition-colors block">{COMPANY_DATA.contact.phone}</a>
                            <a href={`mailto:${COMPANY_DATA.contact.email}`} className="text-white/60 hover:text-white transition-colors block">{COMPANY_DATA.contact.email}</a>
                        </div>
                    </div>
                </div>

                <a href={COMPANY_DATA.location.googleMapsLink} target="_blank">
                    <Button variant="primary" size="lg" className="w-full md:w-auto">
                        Nawiguj w Mapach Google
                    </Button>
                </a>
            </div>
        </section>
    );
};
