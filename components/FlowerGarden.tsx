"use client";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { flowerWishes } from "@/lib/wishes-data";
import { Bunny, Cat, KawaiiFlower } from "./Kawaii";

const COLORS = ["#ff8fb1", "#c9a7ff", "#ffb347", "#7fd6ff", "#ff7aa8", "#9be58f", "#ffa3d7", "#ffd166"];

export default function FlowerGarden() {
  const [picked, setPicked] = useState<{ i: number; msg: string } | null>(null);

  const pick = (i: number, e: React.MouseEvent) => {
    const msg = flowerWishes[Math.floor(Math.random() * flowerWishes.length)];
    setPicked({ i, msg });
    confetti({
      particleCount: 45,
      spread: 75,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      shapes: ["circle", "star"],
      colors: ["#ff5c8d", "#ffb3c8", "#c77dff", "#ffd166"],
    });
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24 text-center">
      <motion.h2
        className="gradient-text wavy font-script text-[clamp(1.75rem,8vw,3rem)] leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Vườn hoa may mắn
      </motion.h2>
      <p className="mb-10 mt-3 font-hand font-semibold text-rose-600">Chạm vào một bông hoa để nhận lời chúc dành riêng cho cậu ♡</p>

      <div className="grid grid-cols-4 gap-x-2 gap-y-4 sm:gap-6 lg:grid-cols-8">
        {COLORS.map((c, i) => (
          <motion.button
            key={i}
            onClick={(e) => pick(i, e)}
            className="flex justify-center p-1"
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: i * 0.07 }}
            whileHover={{ scale: 1.25, rotate: 12 }}
            whileTap={{ scale: 0.8 }}
            aria-label="Chọn hoa"
          >
            <KawaiiFlower size={72} color={c} className="h-auto w-full max-w-[84px] animate-sway drop-shadow-md" style={{ animationDelay: `${i * 0.25}s` }} />
          </motion.button>
        ))}
      </div>

      <div className="perspective mx-auto mt-10 min-h-[13rem] max-w-md lg:max-w-lg">
        <AnimatePresence mode="wait">
          {picked && (
            <motion.div
              key={picked.msg + picked.i}
              className="glass rounded-[2rem] p-8"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-2 flex justify-center">{picked.i % 2 ? <Bunny size={64} /> : <Cat size={64} />}</div>
              <p className="font-hand text-lg font-semibold leading-snug text-rose-600 sm:text-xl lg:text-2xl">{picked.msg}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
