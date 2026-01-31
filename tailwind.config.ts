import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F6F3EE",
                "background-alt": "#EEE9E2",
                surface: "#FFFFFF",
                border: {
                    soft: "#E2DBD2",
                    strong: "#C9C1B6",
                },
                plaster: "#8E8A84",
                ink: "#141312",
                muted: "#5F5B55",
                primary: {
                    DEFAULT: "#C61F2D",
                    hover: "#9E1823",
                    soft: "#F6D6D9",
                },
                secondary: {
                    DEFAULT: "#1E5BB8",
                    hover: "#143E7D",
                    soft: "#D8E6FF",
                },
                gold: {
                    DEFAULT: "#D6A61D",
                    soft: "#FFF0C2",
                    brass: "#B8860B",
                },
                green: {
                    DEFAULT: "#2C6A45",
                    soft: "#D9F0E3",
                },
                cyan: {
                    DEFAULT: "#00CED1",
                    soft: "#CFF7F7",
                },
                frame: "#0F1011",
                footer: "#2A1D1B",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                serif: ["var(--font-geist-serif)"], // Placeholder, will set up real fonts in layout
            },
        },
    },
    plugins: [],
};
export default config;
