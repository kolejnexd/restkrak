import type { Metadata } from "next";
import { MenuExplorer } from "@/components/MenuExplorer";

export const metadata: Metadata = {
    title: "Menu | Restauracja Krakoski",
    description: "Sprawdź nasze menu. Tradycyjne dania kuchni polskiej, ręcznie lepione pierogi i domowe zupy.",
};

export default function MenuPage() {
    return (
        <div className="pt-24">
            <MenuExplorer />
        </div>
    );
}
