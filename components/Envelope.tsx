"use client";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bouquet, Butterfly, Ribbon, Tulip } from "./Art";

// Pop-up greeting card: tap the cover and it swings open to reveal a growing bouquet.
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
    const colors = ["#f06292", "#ffb3c8", "#b48ae8", "#ffe27a", "#fff"];
    setTimeout(() => {
      confetti({ particleCount: 70, spread: 100, origin: { y: 0.55 }, colors, startVelocity: 45 });
      confetti({ particleCount: 50, spread: 140, origin: { y: 0.55 }, colors, scalar: 1.2, shapes: ["circle", "star"] });
    }, 700);
    setTimeout(() => setGone(true), 2800);
  };

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-50 flex h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#fff1f6]"
          style={{ backgroundImage: "radial-gradient(ellipse at 20% 10%, #ffd0e0, transparent 55%), radial-gradient(ellipse at 85% 90%, #e2d2fa, transparent 55%)" }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.7 }}
        >
          <Butterfly className="absolute left-[10%] top-[16%] w-10 animate-drift" />
          <Butterfly color="#f06292" className="absolute bottom-[18%] right-[12%] w-8 animate-drift" style={{ animationDelay: "2s" }} />

          <motion.p
            className="mb-8 px-6 text-center font-hand text-lg font-semibold text-purple-700 sm:text-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
          >
            Một tấm thiệp nhỏ dành cho các nàng C5K67 ♡
          </motion.p>

          <button onClick={openIt} aria-label="Mở thiệp" className="perspective relative aspect-[3/4] w-[min(17rem,70vw)] outline-none sm:w-80">
            {/* inside page */}
            <div className="paper absolute inset-0 flex flex-col items-center justify-end overflow-hidden rounded-r-xl rounded-l-sm bg-[#fffdf8] px-4 pb-5 text-center">
              <p className="absolute top-5 font-serif text-xl italic text-purple-700 sm:text-2xl">Happy Women&apos;s Day</p>
              {open && <Bouquet grow className="w-[78%]" />}
              <p className="mt-1 font-script text-2xl text-rose-500">8 / 3</p>
            </div>
            {/* cover */}
            <motion.div
              className="backface-hidden absolute inset-0 origin-left overflow-hidden rounded-r-xl rounded-l-sm bg-gradient-to-br from-pink-300 to-rose-400 shadow-2xl"
              animate={{ rotateY: open ? -168 : 0 }}
              transition={{ duration: 1.1, ease: [0.5, 0, 0.2, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-3 rounded-lg border-2 border-dashed border-white/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="flex items-end gap-1">
                  <Tulip color="#fff" className="h-16 w-auto -rotate-12 animate-sway-slow" />
                  <Tulip color="#ffe27a" className="h-24 w-auto animate-sway-slow" style={{ animationDelay: ".3s" }} />
                  <Tulip color="#fff" className="h-16 w-auto rotate-12 animate-sway-slow" style={{ animationDelay: ".6s" }} />
                </div>
                <span className="font-script text-5xl text-white drop-shadow">8/3</span>
              </div>
            </motion.div>
            {!open && (
              <motion.span
                className="absolute -right-3 -top-3 z-10"
                animate={{ rotate: [-6, 6, -6], scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              >
                <Ribbon className="!px-3 !py-1 text-sm">Mở nè!</Ribbon>
              </motion.span>
            )}
          </button>
          <p className="mt-10 font-hand text-base font-semibold text-rose-500">{open ? "Chúc mừng 8/3! ✿" : "Chạm vào thiệp để mở ♡"}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
