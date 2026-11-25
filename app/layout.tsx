import type { Metadata, Viewport } from "next";
import { Baloo_2, Mali, Pacifico, Playfair_Display } from "next/font/google";
import "./globals.css";

const script = Pacifico({ subsets: ["vietnamese", "latin"], weight: "400", variable: "--font-script" });
const body = Baloo_2({ subsets: ["vietnamese", "latin"], variable: "--font-body" });
const serif = Playfair_Display({ subsets: ["vietnamese", "latin"], style: ["normal", "italic"], variable: "--font-serif" });
const hand = Mali({ subsets: ["vietnamese", "latin"], weight: ["400", "600"], variable: "--font-hand" });

export const metadata: Metadata = {
  title: "Chúc mừng 8/3 – C5K67 11 Nga 🌸",
  description: "Gửi các nàng lớp 11 Nga – C5K67 những lời chúc 8/3 ngọt ngào nhất.",
};
export const viewport: Viewport = { themeColor: "#fffaf3", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${script.variable} ${body.variable} ${hand.variable} ${serif.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
