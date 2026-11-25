"use client";
import { motion } from "framer-motion";

type S = { className?: string; style?: React.CSSProperties };

/* ---------- Flowers & leaves (original inline SVG) ---------- */
export function Tulip({ color = "#f06292", className, style }: S & { color?: string }) {
  return (
    <svg viewBox="0 0 60 140" className={className} style={style} aria-hidden>
      <path d="M30 58 C30 90 28 115 30 140" stroke="#5fb87f" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M30 125 C8 114 4 88 11 70 C24 82 30 102 30 125Z" fill="#7ccf9b" />
      <path d="M30 128 C52 118 56 94 49 78 C36 90 30 108 30 128Z" fill="#6bc08c" />
      <path d="M8 22 C6 50 18 64 30 64 C42 64 54 50 52 22 C44 32 37 14 30 3 C23 14 16 32 8 22Z" fill={color} />
      <path d="M30 3 C23 14 20 36 30 64 C40 36 37 14 30 3Z" fill="#fff" opacity=".28" />
      <path d="M8 22 C6 50 18 64 30 64 C22 48 20 32 22 18 C16 24 12 24 8 22Z" fill="#000" opacity=".07" />
    </svg>
  );
}

export function Rose({ color = "#f06292", className, style }: S & { color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <circle cx="50" cy="50" r="38" fill={color} />
      <path d="M50 20 C72 20 82 42 70 58 C60 70 38 68 32 52 C27 38 40 28 52 32 C62 36 62 50 52 52 C46 53 44 46 49 44" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 56 C22 78 44 90 62 84" fill="none" stroke="#000" strokeOpacity=".12" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Leaf({ className, style, color = "#7ccf9b" }: S & { color?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} style={style} aria-hidden>
      <path d="M2 15 C14 -2 44 -2 58 15 C44 32 14 32 2 15Z" fill={color} />
      <path d="M4 15 H54" stroke="#fff" strokeOpacity=".5" strokeWidth="1.5" />
    </svg>
  );
}

export function Butterfly({ color = "#b48ae8", className, style }: S & { color?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} style={style} aria-hidden>
      <g className="animate-flap" style={{ transformOrigin: "30px 25px" }}>
        <path d="M30 25 C20 0 2 4 4 20 C5 32 18 32 30 25Z" fill={color} />
        <path d="M30 25 C40 0 58 4 56 20 C55 32 42 32 30 25Z" fill={color} />
        <path d="M30 27 C20 46 8 46 12 34 C16 28 24 28 30 27Z" fill={color} opacity=".8" />
        <path d="M30 27 C40 46 52 46 48 34 C44 28 36 28 30 27Z" fill={color} opacity=".8" />
        <circle cx="15" cy="17" r="4" fill="#fff" opacity=".6" />
        <circle cx="45" cy="17" r="4" fill="#fff" opacity=".6" />
      </g>
      <rect x="29" y="14" width="2" height="22" rx="1" fill="#5a2a4a" />
    </svg>
  );
}

/* A fan-shaped bouquet. Percent-based so it scales with its container width. */
const FAN = [
  { x: 50, h: 96, r: 0, c: "#f06292" },
  { x: 36, h: 86, r: -16, c: "#ffb3c8" },
  { x: 64, h: 88, r: 15, c: "#b48ae8" },
  { x: 22, h: 72, r: -30, c: "#ffe27a" },
  { x: 78, h: 74, r: 29, c: "#ff8fb1" },
  { x: 10, h: 56, r: -44, c: "#cdb4f0" },
  { x: 90, h: 58, r: 43, c: "#f9a8c9" },
];
export function Bouquet({ className = "", grow = false }: { className?: string; grow?: boolean }) {
  return (
    <div className={`relative aspect-[5/6] ${className}`} aria-hidden>
      {FAN.map((f, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{ left: `${f.x}%`, height: `${f.h}%`, x: "-50%", rotate: f.r, transformOrigin: "50% 100%" }}
          initial={grow ? { scaleY: 0, opacity: 0 } : false}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.15 + i * 0.12 }}
        >
          <Tulip color={f.c} className="h-full w-auto animate-sway-slow" style={{ animationDelay: `${i * 0.3}s`, transformOrigin: "50% 100%" }} />
        </motion.div>
      ))}
      {/* ribbon tie */}
      <div className="absolute bottom-[6%] left-1/2 h-[7%] w-[22%] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 shadow" />
    </div>
  );
}

export function FlowerPot({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <Tulip color="#f06292" className="absolute bottom-[34%] left-[18%] h-[70%] w-auto -rotate-12 animate-sway-slow" />
      <Tulip color="#b48ae8" className="absolute bottom-[34%] left-[40%] h-[86%] w-auto animate-sway-slow" style={{ animationDelay: ".4s" }} />
      <Tulip color="#ffe27a" className="absolute bottom-[34%] right-[16%] h-[66%] w-auto rotate-12 animate-sway-slow" style={{ animationDelay: ".8s" }} />
      <svg viewBox="0 0 100 50" className="absolute bottom-0 left-0 w-full" aria-hidden>
        <path d="M14 8 H86 L78 48 H22Z" fill="#ffc9a8" />
        <rect x="10" y="2" width="80" height="12" rx="5" fill="#ffb088" />
        <path d="M30 24 Q50 34 70 24" stroke="#fff" strokeOpacity=".7" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ---------- Gift box: lid pops open ---------- */
export function GiftBox({ open, color = "#ffb3c8", dark = "#f48fb1", className }: { open: boolean; color?: string; dark?: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden style={{ overflow: "visible" }}>
      <rect x="14" y="44" width="72" height="48" rx="5" fill={color} />
      <rect x="44" y="44" width="12" height="48" fill="#ffe27a" />
      <rect x="14" y="84" width="72" height="8" rx="4" fill="#000" opacity=".06" />
      <motion.g
        animate={open ? { y: -34, rotate: -24, x: -8 } : { y: 0, rotate: 0, x: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 11 }}
        style={{ transformBox: "fill-box", transformOrigin: "0% 100%" }}
      >
        <rect x="9" y="30" width="82" height="16" rx="5" fill={dark} />
        <rect x="44" y="30" width="12" height="16" fill="#ffe27a" />
        <ellipse cx="37" cy="24" rx="13" ry="9" fill="#ffe27a" transform="rotate(-18 37 24)" />
        <ellipse cx="63" cy="24" rx="13" ry="9" fill="#ffe27a" transform="rotate(18 63 24)" />
        <circle cx="50" cy="28" r="6" fill="#ffd23f" />
      </motion.g>
    </svg>
  );
}

/* ---------- Scrapbook helpers ---------- */
export function Tape({ className = "" }: { className?: string }) {
  return <span className={`tape ${className}`} aria-hidden />;
}

export function Ribbon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`ribbon ${className}`}>{children}</span>;
}

export function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div className="mb-10 text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}>
      <div className="mb-2 flex items-center justify-center gap-3 font-hand text-sm font-semibold tracking-[0.25em] text-pink-500">
        <span className="h-px w-8 bg-pink-300" /> {eyebrow} <span className="h-px w-8 bg-pink-300" />
      </div>
      <h2 className="font-serif text-[clamp(1.9rem,7.5vw,3.25rem)] font-semibold italic leading-tight text-purple-700">{title}</h2>
      {sub && <p className="mx-auto mt-3 max-w-lg font-hand text-base font-semibold text-rose-500 sm:text-lg">{sub}</p>}
    </motion.div>
  );
}
