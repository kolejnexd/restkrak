import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchemaJSONLD } from "@/components/SchemaJSONLD";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartTrigger } from "@/components/cart/CartTrigger";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Restauracja Krakoski | Kazimierz, Kraków",
    description: "Polska kuchnia, domowa atmosfera i tradycyjne smaki na Kazimierzu. Zapraszamy na pierogi, zupy i klasyki polskiego stołu. Miodowa 39.",
    metadataBase: new URL("https://krakoski-kazimierz.pl"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-ink`}>
                <CartProvider>
                    <SmoothScroll />
                    <SchemaJSONLD />
                    <Header />
                    <main className="min-h-screen flex flex-col pt-20">
                        {children}
                    </main>
                    <Footer />
                    <CartDrawer />
                    <CartTrigger />
                </CartProvider>
            </body>
        </html>
    );
}
