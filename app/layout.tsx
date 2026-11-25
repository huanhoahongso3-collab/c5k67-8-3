import type { Metadata, Viewport } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";
import "./globals.css";

const script = Dancing_Script({ subsets: ["vietnamese", "latin"], variable: "--font-script" });
const body = Quicksand({ subsets: ["vietnamese", "latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Chúc mừng 8/3 – C5K67 11 Nga 🌸",
  description: "Gửi các nàng lớp 11 Nga – C5K67 những lời chúc 8/3 ngọt ngào nhất.",
};
export const viewport: Viewport = { themeColor: "#ffd1e0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${script.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
