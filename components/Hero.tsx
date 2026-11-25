"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bow, Cloud, Heart, KawaiiFlower, Sparkle, Star } from "./Kawaii";

const TITLE = "Chúc mừng 8/3";

export default function Hero() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v < TITLE.length ? v + 1 : v)), 110);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Cloud size={110} className="absolute left-2 top-16 animate-float opacity-90" />
      <Cloud size={80} className="absolute right-4 top-32 animate-float opacity-90" style={{ animationDelay: "1s" }} />
      <Star size={34} className="absolute left-[14%] top-[34%] animate-sway" />
      <Star size={24} color="#c9a7ff" className="absolute right-[16%] top-[26%] animate-sway" />
      <Heart size={30} className="absolute bottom-[22%] left-[10%] animate-float" />
      <Heart size={38} color="#ffb3c8" className="absolute bottom-[26%] right-[9%] animate-float" style={{ animationDelay: "1.2s" }} />
      <Sparkle size={22} color="#ffd166" className="absolute right-[30%] top-[14%] animate-pulse" />
      <Sparkle size={16} color="#ff8fb1" className="absolute left-[28%] top-[20%] animate-pulse" />

      <motion.div className="relative" initial={{ scale: 0, rotate: -40 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", delay: 0.2 }}>
        <Bow size={70} className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 animate-sway" />
        <KawaiiFlower size={130} className="animate-float" />
      </motion.div>

      <h1 className="gradient-text animate-shimmer mt-6 min-h-[1.3em] font-script text-5xl sm:text-7xl">
        {TITLE.slice(0, n)}
        <span className="animate-pulse">|</span>
      </h1>
      <motion.p
        className="mt-6 max-w-xl font-hand text-lg font-semibold text-rose-600 sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        Gửi các nàng của lớp <span className="rounded-full bg-pink-200 px-3 py-0.5">11 Nga – C5K67</span> ♡
        <br />
        Những cô gái xinh xắn, giỏi giang và đáng yêu nhất quả đất nè!
      </motion.p>
      <motion.a
        href="#loi-chuc"
        className="candy-btn mt-10 rounded-full bg-gradient-to-b from-pink-300 to-rose-400 px-8 py-3 font-bold text-white"
        whileHover={{ scale: 1.08, rotate: -2 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { repeat: Infinity, duration: 1.8 } }}
      >
        Xem lời chúc nè ♡
      </motion.a>
    </section>
  );
}
