"use client";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { flowerWishes } from "@/lib/wishes-data";
import { GiftBox, SectionTitle, Tape, Tulip } from "./Art";

const BOXES = [
  { c: "#ffb3c8", d: "#f48fb1", f: "#f06292" },
  { c: "#d9c4f5", d: "#b48ae8", f: "#ffcf4a" },
  { c: "#bdebd3", d: "#7ccf9b", f: "#f06292" },
  { c: "#ffe9a6", d: "#ffd23f", f: "#b48ae8" },
  { c: "#ffc9a8", d: "#ffa573", f: "#f9a8c9" },
  { c: "#c6e4ff", d: "#8cc8f5", f: "#f06292" },
];

export default function GiftBoxes() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [msg, setMsg] = useState("");

  const pick = (i: number, e: React.MouseEvent) => {
    if (openIdx === i) {
      setOpenIdx(null);
      return;
    }
    setOpenIdx(i);
    setMsg(flowerWishes[Math.floor(Math.random() * flowerWishes.length)]);
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      colors: ["#f06292", "#ffb3c8", "#b48ae8", "#ffe27a"],
      shapes: ["circle", "star"],
    });
  };

  return (
    <section className="relative z-10 mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 sm:py-24">
      <SectionTitle eyebrow="QUÀ 8/3" title="Hộp quà bất ngờ" sub="Chạm vào một hộp quà để mở ra lời chúc dành riêng cho cậu" />

      <div className="grid grid-cols-3 gap-x-3 gap-y-10 pt-16 lg:grid-cols-6">
        {BOXES.map((b, i) => (
          <motion.button
            key={i}
            onClick={(e) => pick(i, e)}
            aria-label="Mở hộp quà"
            className="relative mx-auto aspect-square w-full max-w-[120px] outline-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring" }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.92 }}
          >
            <motion.div
              className="absolute bottom-[46%] left-1/2 h-[120%] w-[45%] -translate-x-1/2"
              animate={openIdx === i ? { y: "-12%", opacity: 1, scale: 1 } : { y: "55%", opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 120, damping: 9, delay: openIdx === i ? 0.12 : 0 }}
              style={{ transformOrigin: "50% 100%" }}
            >
              <Tulip color={b.f} className="h-full w-auto" />
            </motion.div>
            <GiftBox open={openIdx === i} color={b.c} dark={b.d} className="relative h-full w-full drop-shadow-md" />
          </motion.button>
        ))}
      </div>

      <div className="mx-auto mt-12 min-h-[10rem] max-w-md lg:max-w-lg">
        <AnimatePresence mode="wait">
          {openIdx !== null && (
            <motion.div
              key={msg + openIdx}
              className="paper relative mx-auto px-7 py-8"
              initial={{ opacity: 0, y: 30, rotate: -4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: -1.5, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 140, damping: 14 }}
            >
              <Tape />
              <p className="font-serif text-lg italic text-purple-700 sm:text-xl lg:text-2xl">{msg}</p>
              <p className="mt-3 font-script text-lg text-rose-500">♡ 8/3 ♡</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
