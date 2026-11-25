"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bouquet, Butterfly, Leaf, Ribbon } from "./Art";

const TITLE = "Chúc mừng 8/3";

export default function Hero() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v < TITLE.length ? v + 1 : v)), 120);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative z-10 mx-auto flex h-screen-safe max-w-6xl flex-col items-center justify-center gap-6 overflow-hidden px-6 pb-6 pt-10 text-center md:flex-row md:gap-10 md:text-left">
      <Butterfly className="absolute left-[8%] top-[10%] w-10 animate-drift md:w-14" />
      <Butterfly color="#f06292" className="absolute right-[10%] top-[18%] w-8 animate-drift md:w-10" style={{ animationDelay: "3s" }} />
      <Leaf className="absolute -left-4 bottom-[30%] w-24 rotate-[-20deg] opacity-80" />

      <div className="relative z-10 flex flex-col items-center md:flex-1 md:items-start">
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Ribbon>Ngày Quốc tế Phụ nữ</Ribbon>
        </motion.div>

        <motion.div
          className="mt-6 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-dashed border-purple-300 bg-white font-serif text-2xl font-semibold italic text-purple-700 shadow-lg sm:h-24 sm:w-24 sm:text-3xl"
          initial={{ scale: 0, rotate: -40 }}
          animate={{ scale: 1, rotate: -8 }}
          transition={{ type: "spring", delay: 0.4 }}
        >
          08·03
        </motion.div>

        <h1 className="gradient-text animate-shimmer mt-5 min-h-[1.3em] font-script text-[clamp(2.4rem,11vw,4.25rem)] leading-tight lg:text-8xl">
          {TITLE.slice(0, n)}
          <span className="animate-pulse">|</span>
        </h1>

        <motion.p
          className="mt-4 max-w-md font-serif text-lg italic text-purple-800 sm:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          Gửi các nàng lớp <b className="not-italic text-rose-500">11 Nga – C5K67</b>
          <br />
          xinh như hoa, rạng rỡ như nắng xuân.
        </motion.p>

        <motion.a
          href="#loi-chuc"
          className="candy-btn mt-8 rounded-full bg-gradient-to-b from-pink-300 to-rose-400 px-8 py-3.5 text-lg font-bold text-white"
          whileHover={{ scale: 1.06, rotate: -2 }}
          whileTap={{ scale: 0.94 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ y: { repeat: Infinity, duration: 1.8 } }}
        >
          Mở thiệp xem nè ♡
        </motion.a>
      </div>

      <motion.div
        className="relative z-0 w-[62%] max-w-[22rem] md:w-[44%] md:max-w-[30rem]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Bouquet className="w-full" />
      </motion.div>
    </section>
  );
}
