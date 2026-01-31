"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "Czy w restauracji jest obsługa kelnerska?",
        answer: "Nie, jesteśmy restauracją samoobsługową. Zamówienia składasz przy ladzie, a my szybko je przygotowujemy. Dzięki temu jest taniej i szybciej!",
    },
    {
        question: "Czy oferujecie dowóz jedzenia?",
        answer: "Tak! Możesz zamówić nasze dania przez popularne aplikacje: Pyszne.pl, Uber Eats, Wolt oraz Glovo.",
    },
    {
        question: "W jakich godzinach jesteście otwarci?",
        answer: "Zapraszamy codziennie (od poniedziałku do niedzieli) w godzinach 11:00 - 22:00. Kuchnia przyjmuje zamówienia do 21:00.",
    },
    {
        question: "Czy macie w menu pierogi?",
        answer: "Oczywiście! To nasza specjalność. Codziennie lepimy świeże pierogi: ruskie, z mięsem oraz z kapustą i grzybami.",
    },
    {
        question: "Czy można płacić kartą?",
        answer: "Tak, akceptujemy płatności gotówką, kartą oraz BLIKiem.",
    },
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-background-alt border-y border-border-soft">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">Pytania i Odpowiedzi</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink">Często Zadawane Pytania</h2>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, idx) => (
                        <div key={idx} className="bg-surface border border-border-soft rounded-sm overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-background transition-colors"
                            >
                                <span className="font-serif font-bold text-lg text-ink">{item.question}</span>
                                {openIndex === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-muted" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-muted leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
