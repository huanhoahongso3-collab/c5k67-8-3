"use client";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bow, Heart, KawaiiFlower, Sparkle, Star } from "./Kawaii";

export default function Envelope() {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = gone ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [gone]);

  const openIt = () => {
    if (open) return;
    setOpen(true);
    const fire = (ratio: number, o: confetti.Options) =>
      confetti({ origin: { y: 0.6 }, colors: ["#ff5c8d", "#ffb3c8", "#c77dff", "#ffd166", "#fff"], ...o, particleCount: Math.floor(200 * ratio) });
    fire(0.3, { spread: 40, startVelocity: 55 });
    fire(0.4, { spread: 100, decay: 0.91 });
    fire(0.3, { spread: 140, startVelocity: 30, scalar: 1.2 });
    setTimeout(() => setGone(true), 1900);
  };

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-50 h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7 }}
        >
          <Star size={32} className="absolute left-[12%] top-[18%] animate-sway" />
          <KawaiiFlower size={56} color="#c9a7ff" className="absolute right-[10%] top-[14%] animate-float" />
          <Sparkle size={22} color="#fff" className="absolute bottom-[22%] left-[16%] animate-pulse" />
          <motion.p
            className="mb-8 px-6 text-center font-script text-2xl text-rose-600 sm:text-3xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
          >
            Có điều bất ngờ dành cho các nàng C5K67 ♡
          </motion.p>
          <button
            onClick={openIt}
            aria-label="Mở thiệp"
            className="relative h-44 w-[min(18rem,78vw)] sm:h-56 sm:w-96 outline-none"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-b from-pink-300 to-rose-400 shadow-2xl"
              animate={open ? {} : { rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            />
            <motion.div
              className="absolute inset-x-3 top-3 rounded-xl bg-white p-3 text-center shadow"
              initial={{ y: 0 }}
              animate={open ? { y: -90 } : { y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="font-script text-2xl text-rose-500">8/3 ♡</span>
            </motion.div>
            <div
              className="absolute inset-x-0 bottom-0 h-3/5 rounded-b-2xl bg-gradient-to-t from-rose-400 to-pink-300"
              style={{ clipPath: "polygon(0 100%, 50% 25%, 100% 100%)" }}
            />
            <motion.div
              className="absolute inset-x-0 top-0 h-3/5 origin-top rounded-t-2xl bg-gradient-to-b from-rose-400 to-pink-300"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              animate={open ? { rotateX: 180, opacity: 0.6 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
            />
            {!open && (
              <motion.span
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <Heart size={52} color="#fff" />
              </motion.span>
            )}
            <Bow size={64} className="absolute -top-5 left-1/2 -translate-x-1/2 animate-sway" color="#ffd166" />
          </button>
          <p className="mt-10 font-hand text-base font-semibold text-rose-500">{open ? "Chúc mừng 8/3! ✿" : "Chạm vào để mở thiệp nè ♡"}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
