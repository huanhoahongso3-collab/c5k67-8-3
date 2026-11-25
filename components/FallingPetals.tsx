"use client";
import { useEffect, useRef } from "react";

const GLYPHS = ["🌸", "🌷", "💖", "🌹", "✨", "🎀"];

export default function FallingPetals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, h = 0, raf = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const count = window.innerWidth < 640 ? 18 : 34;
    const mk = (initial: boolean) => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : -30,
      s: 14 + Math.random() * 18,
      v: 0.6 + Math.random() * 1.2,
      ph: Math.random() * Math.PI * 2,
      sw: 0.01 + Math.random() * 0.02,
      g: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      r: Math.random() * 6,
    });
    const items = Array.from({ length: count }, () => mk(true));
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < items.length; i++) {
        const p = items[i];
        p.y += p.v;
        p.ph += p.sw;
        p.r += 0.01;
        const x = p.x + Math.sin(p.ph) * 40;
        ctx.save();
        ctx.translate(x, p.y);
        ctx.rotate(Math.sin(p.r) * 0.6);
        ctx.globalAlpha = 0.85;
        ctx.font = `${p.s}px serif`;
        ctx.fillText(p.g, 0, 0);
        ctx.restore();
        if (p.y > h + 30) items[i] = mk(false);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-30" aria-hidden />;
}
