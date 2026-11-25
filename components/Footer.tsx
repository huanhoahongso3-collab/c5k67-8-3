"use client";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { FlowerPot, Ribbon } from "./Art";

export default function Footer() {
  const shower = () => {
    const end = Date.now() + 2500;
    const colors = ["#f06292", "#ffb3c8", "#b48ae8", "#ffe27a"];
    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0 }, colors, shapes: ["circle", "star"] });
      confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1 }, colors, shapes: ["circle", "star"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <footer className="relative z-10 px-5 pb-24 pt-10 text-center">
      <FlowerPot className="mx-auto mb-6 h-36 w-32" />
      <Ribbon>Chúc các cậu luôn rạng rỡ</Ribbon>
      <div>
        <motion.button
          onClick={shower}
          className="candy-btn mt-8 rounded-full bg-gradient-to-b from-purple-300 to-pink-400 px-8 py-3.5 text-lg font-bold text-white"
          whileHover={{ scale: 1.06, rotate: 2 }}
          whileTap={{ scale: 0.92 }}
        >
          Rải hoa thêm lần nữa ✿
        </motion.button>
      </div>
      <p className="mt-8 font-serif text-sm italic text-purple-700">08/03 · C5K67 · 11 Nga ♡</p>
    </footer>
  );
}
