import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { UtensilsCrossed } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="relative">
                <UtensilsCrossed className="w-24 h-24 text-gold/20" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-serif text-gold">
                    404
                </span>
            </div>

            <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink">
                    Wygląda na to, że zabłądziłeś
                </h2>
                <p className="text-muted text-lg max-w-md mx-auto">
                    Strona, której szukasz, nie została znaleziona.
                    Wróć do nas na pyszną ucztę.
                </p>
            </div>

            <div className="pt-4">
                <Link href="/">
                    <Button size="lg" className="min-w-[200px]">
                        Wróć do Strony Głównej
                    </Button>
                </Link>
            </div>
        </div>
    );
}
