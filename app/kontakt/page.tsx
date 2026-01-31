import type { Metadata } from "next";
import { LocationSection } from "@/components/LocationSection";

export const metadata: Metadata = {
    title: "Kontakt | Restauracja Krakoski",
    description: "Skontaktuj się z nami. Adres: Miodowa 39, Kraków. Telefon, godziny otwarcia i mapa dojazdu.",
};

export default function ContactPage() {
    return (
        <div className="pt-24">
            <LocationSection />
        </div>
    );
}
