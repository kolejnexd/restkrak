import { ImageResponse } from "next/og";

// export const runtime = "edge"; // Not compatible with static export
export const dynamic = "force-static";

export const alt = "Restauracja Krakoski - Tradycyjne Smaki";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F6F3EE",
                    backgroundImage: "linear-gradient(#E2DBD2 1px, transparent 1px), linear-gradient(90deg, #E2DBD2 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    border: "20px solid #C9C1B6",
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid #C9C1B6",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}>
                    <div style={{ color: "#C61F2D", fontSize: 24, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>Kazimierz · Kraków</div>
                    <div style={{ fontSize: 80, fontWeight: "bold", fontFamily: "serif", color: "#141312", lineHeight: 1 }}>Restauracja</div>
                    <div style={{ fontSize: 80, fontWeight: "bold", fontFamily: "serif", color: "#141312", lineHeight: 1, marginBottom: 20 }}>Krakoski</div>
                    <div style={{ fontSize: 32, color: "#5F5B55", fontFamily: "serif", fontStyle: "italic" }}>Tradycyjne polskie smaki</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
