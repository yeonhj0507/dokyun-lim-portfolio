import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dokyun Lim | Aquascaper Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a2e1a 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(74, 158, 122, 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(107, 196, 160, 0.1)",
          }}
        />

        {/* Label */}
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#6bc4a0",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            marginBottom: 16,
          }}
        >
          Aquascaper
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Dokyun Lim
        </div>

        {/* Korean name */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(255,255,255,0.5)",
            marginTop: 8,
          }}
        >
          임도균
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            width: 60,
            height: 3,
            background: "#4a9e7a",
            borderRadius: 2,
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        {/* Awards summary */}
        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>AGA 2025 — 1st Place</span>
          <span>·</span>
          <span>KIAC 2023 — #1 in Korea</span>
          <span>·</span>
          <span>10+ International Awards</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
