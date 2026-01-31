import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true, // Required for static export (no server-side image processing)
    },
};

export default nextConfig;
