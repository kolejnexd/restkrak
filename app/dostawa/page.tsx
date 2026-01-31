import type { Metadata } from "next";
import { DeliverySection } from "@/components/DeliverySection";

export const metadata: Metadata = {
    title: "Dostawa | Restauracja Krakoski",
    description: "Zamów jedzenie z dostawą do domu. Pyszne.pl, Uber Eats, Wolt, Glovo. Szybka dostawa na Kazimierzu i w całym Krakowie.",
};

export default function DeliveryPage() {
    return (
        <div className="pt-24">
            <DeliverySection />
        </div>
    );
}
