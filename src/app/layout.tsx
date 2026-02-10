import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dokyun Lim | Aquascaper Portfolio",
  description:
    "아쿠아스케이퍼 임도균의 포트폴리오. 국제 아쿠아스케이핑 대회 다수 수상작을 만나보세요.",
  keywords: ["aquascaping", "아쿠아스케이프", "임도균", "Dokyun Lim", "IAPLC", "AGA", "KIAC"],
  openGraph: {
    title: "Dokyun Lim | Aquascaper",
    description: "International Award-Winning Aquascaper",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
