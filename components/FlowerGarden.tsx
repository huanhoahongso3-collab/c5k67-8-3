"use client";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { flowerWishes } from "@/lib/wishes-data";

const FLOWERS = ["🌹", "🌷", "🌸", "🌺", "🌼", "💐", "🪻", "🌻"];

export default function FlowerGarden() {
  const [picked, setPicked] = useState<{ i: number; msg: string } | null>(null);

  const pick = (i: number, e: React.MouseEvent) => {
    const msg = flowerWishes[Math.floor(Math.random() * flowerWishes.length)];
    setPicked({ i, msg });
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      shapes: ["circle"],
      colors: ["#ff5c8d", "#ffb3c8", "#c77dff"],
    });
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <motion.h2
        className="gradient-text font-script text-5xl sm:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Vườn hoa may mắn
      </motion.h2>
      <p className="mb-10 mt-3 text-rose-700">Chạm vào một bông hoa để nhận lời chúc dành riêng cho cậu 🌼</p>

      <div className="grid grid-cols-4 gap-4 sm:gap-8">
        {FLOWERS.map((f, i) => (
          <motion.button
            key={i}
            onClick={(e) => pick(i, e)}
            className="text-5xl sm:text-6xl"
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: i * 0.07 }}
            whileHover={{ scale: 1.3, rotate: 12 }}
            whileTap={{ scale: 0.8 }}
            aria-label="Chọn hoa"
          >
            <span className="inline-block animate-sway" style={{ animationDelay: `${i * 0.25}s` }}>{f}</span>
          </motion.button>
        ))}
      </div>

      <div className="perspective mx-auto mt-12 min-h-[11rem] max-w-md">
        <AnimatePresence mode="wait">
          {picked && (
            <motion.div
              key={picked.msg + picked.i}
              className="glass rounded-3xl p-8"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-2 text-4xl">{FLOWERS[picked.i]}</div>
              <p className="font-script text-2xl leading-snug text-rose-600 sm:text-3xl">{picked.msg}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
