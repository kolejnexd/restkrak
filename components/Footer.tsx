import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { COMPANY_DATA, ROUTES } from "@/lib/constants";

export const Footer = () => {
    return (
        <footer className="bg-footer text-background-alt pt-20 pb-10 border-t border-gold/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16 text-center md:text-left">

                    {/* Brand & Socials - Wider Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="font-serif font-bold text-4xl text-white block hover:text-gold transition-colors duration-300">
                            Krakoski
                        </Link>
                        <p className="text-white/60 text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                            Tradycyjna kuchnia polska w sercu Kazimierza. Prawdziwe smaki, które łączą pokolenia, serwowane w atmosferze krakowskiej gościnności.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center md:justify-start pt-4">
                            <a
                                href={COMPANY_DATA.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold hover:border-gold hover:text-ink transition-all duration-300 group"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href={COMPANY_DATA.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold hover:border-gold hover:text-ink transition-all duration-300 group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 md:col-start-7 space-y-6">
                        <h3 className="font-serif font-medium text-xl text-gold tracking-wide">Nawigacja</h3>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><Link href={ROUTES.home} className="hover:text-white transition-colors py-1 block">Strona Główna</Link></li>
                            <li><Link href={ROUTES.menu} className="hover:text-white transition-colors py-1 block">Nasze Menu</Link></li>
                            <li><Link href={ROUTES.delivery} className="hover:text-white transition-colors py-1 block">Zamów Dostawę</Link></li>
                            <li><Link href={ROUTES.contact} className="hover:text-white transition-colors py-1 block">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Contact (NAP) */}
                    <div className="md:col-span-3 space-y-6">
                        <h3 className="font-serif font-medium text-xl text-gold tracking-wide">Kontakt</h3>
                        <div className="space-y-4 text-sm text-white/70">
                            <div className="space-y-1">
                                <p className="font-medium text-white">{COMPANY_DATA.name}</p>
                                <p>{COMPANY_DATA.location.address}</p>
                                <p>{COMPANY_DATA.location.zip} {COMPANY_DATA.location.city}</p>
                            </div>

                            <div className="space-y-1">
                                <a href={`tel:${COMPANY_DATA.contact.phone.replace(/\s/g, '')}`} className="block hover:text-gold transition-colors">{COMPANY_DATA.contact.phone}</a>
                                <a href={`mailto:${COMPANY_DATA.contact.email}`} className="block hover:text-gold transition-colors">{COMPANY_DATA.contact.email}</a>
                            </div>

                            <div className="pt-2">
                                <span className="text-gold/80 text-xs uppercase tracking-wider block mb-1">Otwarte:</span>
                                <span className="text-white font-medium">{COMPANY_DATA.hours.standard}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 gap-4">
                    <p>&copy; {new Date().getFullYear()} Restauracja Krakoski. Smak Tradycji.</p>
                    <div className="flex gap-6">
                        <Link href={ROUTES.privacy} className="hover:text-white/60 transition-colors">Polityka Prywatności</Link>
                        <Link href={ROUTES.terms} className="hover:text-white/60 transition-colors">Regulamin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
