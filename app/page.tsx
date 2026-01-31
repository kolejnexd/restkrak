import { Hero } from "@/components/Hero";
import { QuickActions } from "@/components/QuickActions";
import { InfoSection } from "@/components/InfoSection";
import dynamic from "next/dynamic";

// Critical components loaded instantly: Hero, QuickActions, InfoSection
// Lazy load below-the-fold components
const MenuExplorer = dynamic(() => import("@/components/MenuExplorer").then(mod => mod.MenuExplorer), {
    loading: () => <div className="h-96 md:h-[600px] bg-background flex items-center justify-center text-muted animate-pulse">Ładowanie menu...</div>
});
const DeliverySection = dynamic(() => import("@/components/DeliverySection").then(mod => mod.DeliverySection));
const Gallery = dynamic(() => import("@/components/Gallery").then(mod => mod.Gallery));
const FAQSection = dynamic(() => import("@/components/FAQSection").then(mod => mod.FAQSection));
const LocationSection = dynamic(() => import("@/components/LocationSection").then(mod => mod.LocationSection));

export default function Home() {
    return (
        <>
            <Hero />
            <QuickActions />
            <InfoSection />
            <MenuExplorer />
            <DeliverySection />
            <Gallery />
            <FAQSection />
            <LocationSection />
        </>
    );
}


