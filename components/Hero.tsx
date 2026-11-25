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
    <section className="relative flex h-screen-safe flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Cloud size={110} className="absolute left-2 top-10 h-auto w-20 animate-float opacity-90 md:top-16 md:w-32" />
      <Cloud size={80} className="absolute right-2 top-24 h-auto w-14 animate-float opacity-90 md:right-10 md:top-32 md:w-24" style={{ animationDelay: "1s" }} />
      <Star size={34} className="absolute left-[8%] top-[30%] animate-sway md:left-[16%]" />
      <Star size={24} color="#c9a7ff" className="absolute right-[10%] top-[22%] animate-sway md:right-[18%]" />
      <Heart size={30} className="absolute bottom-[12%] left-[8%] animate-float md:bottom-[22%] md:left-[12%]" />
      <Heart size={38} color="#ffb3c8" className="absolute bottom-[10%] right-[8%] animate-float md:bottom-[26%] md:right-[11%]" style={{ animationDelay: "1.2s" }} />
      <Sparkle size={22} color="#ffd166" className="absolute right-[30%] top-[14%] animate-pulse" />
      <Sparkle size={16} color="#ff8fb1" className="absolute left-[28%] top-[20%] animate-pulse" />

      <motion.div className="relative" initial={{ scale: 0, rotate: -40 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", delay: 0.2 }}>
        <Bow size={70} className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 animate-sway" />
        <KawaiiFlower size={130} className="h-auto w-28 animate-float sm:w-36 lg:w-44" />
      </motion.div>

      <h1 className="gradient-text animate-shimmer mt-6 min-h-[1.3em] font-script text-[clamp(2.25rem,11vw,4.5rem)] leading-tight lg:text-8xl">
        {TITLE.slice(0, n)}
        <span className="animate-pulse">|</span>
      </h1>
      <motion.p
        className="mt-6 max-w-xl font-hand text-base font-semibold text-rose-600 sm:text-xl lg:max-w-2xl lg:text-2xl"
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
        className="candy-btn mt-10 rounded-full bg-gradient-to-b from-pink-300 to-rose-400 px-8 py-3.5 text-lg font-bold text-white"
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
