import { MetadataRoute } from "next";
import { ROUTES } from "@/lib/constants";

export const dynamic = "force-static";

const BASE_URL = "https://krakoski-kazimierz.pl";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = Object.values(ROUTES).map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "/" ? 1 : 0.8,
    }));

    return [
        ...routes,
    ];
}
