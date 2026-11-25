import type { Metadata, Viewport } from "next";
import { Baloo_2, Mali, Pacifico } from "next/font/google";
import "./globals.css";

const script = Pacifico({ subsets: ["vietnamese", "latin"], weight: "400", variable: "--font-script" });
const body = Baloo_2({ subsets: ["vietnamese", "latin"], variable: "--font-body" });
const hand = Mali({ subsets: ["vietnamese", "latin"], weight: ["400", "600"], variable: "--font-hand" });

export const metadata: Metadata = {
  title: "Chúc mừng 8/3 – C5K67 11 Nga 🌸",
  description: "Gửi các nàng lớp 11 Nga – C5K67 những lời chúc 8/3 ngọt ngào nhất.",
};
export const viewport: Viewport = { themeColor: "#ffd1e0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${script.variable} ${body.variable} ${hand.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
