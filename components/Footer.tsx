"use client";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Bow, Heart, KawaiiFlower } from "./Kawaii";

export default function Footer() {
  const shower = () => {
    const end = Date.now() + 2500;
    const colors = ["#ff5c8d", "#ffb3c8", "#c77dff", "#ffd166"];
    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0 }, colors, shapes: ["circle", "star"] });
      confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1 }, colors, shapes: ["circle", "star"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <footer className="px-5 pb-24 pt-10 text-center">
      <div className="mb-4 flex items-end justify-center gap-3">
        <KawaiiFlower size={56} color="#c9a7ff" className="animate-sway" />
        <Bow size={64} className="animate-float" />
        <KawaiiFlower size={56} color="#ffb347" className="animate-sway" style={{ animationDelay: ".5s" }} />
      </div>
      <motion.button
        onClick={shower}
        className="candy-btn rounded-full bg-gradient-to-b from-purple-300 to-pink-400 px-8 py-3.5 text-lg font-bold text-white"
        whileHover={{ scale: 1.08, rotate: 2 }}
        whileTap={{ scale: 0.92 }}
      >
        Rải hoa thêm lần nữa ✿
      </motion.button>
      <p className="mt-8 font-script text-2xl text-rose-500 sm:text-3xl">Chúc các cậu luôn rạng rỡ</p>
      <p className="mt-2 flex items-center justify-center gap-1 font-hand text-sm font-semibold text-rose-400">
        08/03 · C5K67 · 11 Nga <Heart size={16} />
      </p>
    </footer>
  );
}
