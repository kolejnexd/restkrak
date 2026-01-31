"use client";

import { usePathname } from "next/navigation";
import { COMPANY_DATA } from "@/lib/constants";

export const SchemaJSONLD = () => {
    const pathname = usePathname();
    const baseUrl = "https://krakoski-kazimierz.pl";

    // Breadcrumb Logic
    const generateBreadcrumbs = () => {
        // Basic root item
        const items = [{ name: "Strona Główna", item: baseUrl }];

        // Only generate specific breadcrumbs for known routes to keep it clean
        if (pathname !== "/") {
            const path = pathname.replace("/", "");
            const nameMap: Record<string, string> = {
                "menu": "Menu",
                "dostawa": "Dostawa",
                "kontakt": "Kontakt",
                "polityka-prywatnosci": "Polityka Prywatności",
                "regulamin": "Regulamin"
            };

            if (nameMap[path]) {
                items.push({ name: nameMap[path], item: `${baseUrl}/${pathname}` });
            }
        }

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.item
            }))
        };
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": COMPANY_DATA.name,
        "image": [
            "https://krakoski-kazimierz.pl/restauracja-krakoski-kazimierz-hero.webp" // Updated domain for consistency
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_DATA.location.address,
            "addressLocality": COMPANY_DATA.location.city,
            "postalCode": COMPANY_DATA.location.zip,
            "addressCountry": "PL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.054363,
            "longitude": 19.946342
        },
        "url": baseUrl,
        "telephone": COMPANY_DATA.contact.phone,
        "servesCuisine": "Polish",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "11:00",
                "closes": "22:00"
            }
        ],
        "menu": `${baseUrl}/menu`,
        "acceptsReservations": "False",
        "sameAs": [
            COMPANY_DATA.social.facebook,
            COMPANY_DATA.social.instagram
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Restauracja Krakoski",
        "url": baseUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/menu?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Czy w restauracji jest obsługa kelnerska?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tak. W naszej restauracji zapewniamy obsługę kelnerską do stolika. Po zajęciu miejsca zamówienie przyjmuje kelner, a dania są serwowane bezpośrednio do stolika, dzięki czemu możesz spokojnie cieszyć się posiłkiem i atmosferą Kazimierza." }
            },
            {
                "@type": "Question",
                "name": "Czy oferujecie dowóz jedzenia?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tak, przez Pyszne.pl, Uber Eats, Wolt i Glovo." }
            },
            {
                "@type": "Question",
                "name": "W jakich godzinach jesteście otwarci?",
                "acceptedAnswer": { "@type": "Answer", "text": "Codziennie od 11:00 do 22:00." }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs()) }}
            />
        </>
    );
};
