"use client";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function Footer() {
  const shower = () => {
    const end = Date.now() + 2500;
    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0 }, colors: ["#ff5c8d", "#ffb3c8", "#c77dff"] });
      confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1 }, colors: ["#ff5c8d", "#ffb3c8", "#c77dff"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <footer className="px-6 pb-20 pt-10 text-center">
      <motion.button
        onClick={shower}
        className="rounded-full bg-gradient-to-r from-purple-400 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        Rải hoa thêm lần nữa 🌸
      </motion.button>
      <p className="mt-8 font-script text-3xl text-rose-500">Chúc các cậu luôn rạng rỡ ✨</p>
      <p className="mt-2 text-sm text-rose-400">08/03 · C5K67 · 11 Nga 💖</p>
    </footer>
  );
}
