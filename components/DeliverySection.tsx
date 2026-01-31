"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { COMPANY_DATA } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export const DeliverySection = () => {
    return (
        <section className="py-20 bg-background-alt border-y border-border-soft">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Dostawa do domu</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink">Głodny? Zamów do domu!</h2>
                        <p className="text-muted text-lg leading-relaxed">
                            Ciesz się smakiem "Krakoskiego" bez wychodzenia z domu.
                            Jesteśmy dostępni na wszystkich najpopularniejszych platformach.
                            Średni czas dostawy to 30-45 minut.
                        </p>

                        <div className="bg-green-50 border border-green-200 p-6 rounded-sm mt-8">
                            <h4 className="font-bold text-green-800 mb-2">Too Good To Go</h4>
                            <p className="text-green-700 text-sm mb-4">Ratuj jedzenie i płać mniej! Sprawdź nasze paczki niespodzianki w aplikacji.</p>
                            <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-100 w-full md:w-auto">Sprawdź dostępność</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "Pyszne.pl", color: "bg-[#FF8000]", text: "text-white", link: COMPANY_DATA.delivery.pyszne },
                            { name: "Uber Eats", color: "bg-[#06C167]", text: "text-white", link: COMPANY_DATA.delivery.uber },
                            { name: "Wolt", color: "bg-[#009DE0]", text: "text-white", link: COMPANY_DATA.delivery.wolt },
                            { name: "Glovo", color: "bg-[#FFC244]", text: "text-black", link: COMPANY_DATA.delivery.glovo },
                        ].map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${platform.color} ${platform.text} p-8 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-2 group h-40`}
                            >
                                <span className="font-bold text-xl">{platform.name}</span>
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
