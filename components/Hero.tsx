"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TITLE = "Chúc mừng 8/3";

export default function Hero() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v < TITLE.length ? v + 1 : v)), 110);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div className="text-6xl animate-float sm:text-7xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
        🌸
      </motion.div>
      <h1 className="gradient-text animate-shimmer mt-4 min-h-[1.2em] font-script text-6xl font-bold sm:text-8xl">
        {TITLE.slice(0, n)}
        <span className="animate-pulse">|</span>
      </h1>
      <motion.p
        className="mt-6 max-w-xl text-lg text-rose-700 sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        Gửi các nàng của lớp <b>11 Nga – C5K67</b> 💐
        <br />
        Những cô gái xinh đẹp, thông minh và đáng yêu nhất!
      </motion.p>
      <motion.a
        href="#loi-chuc"
        className="mt-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 px-8 py-3 font-semibold text-white shadow-lg"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { repeat: Infinity, duration: 1.8 } }}
      >
        Xem lời chúc 💌
      </motion.a>
    </section>
  );
}
