"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#ffb3c8", "#f48fb1", "#d9c4f5", "#ffe27a", "#f9a8c9", "#fff"];

function drawFlower(ctx: CanvasRenderingContext2D, c: string) {
  ctx.fillStyle = c;
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.arc(0, -7, 5.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle = "#fff6b0";
  ctx.beginPath();
  ctx.arc(0, 0, 4, 0, Math.PI * 2);
  ctx.fill();
}

export default function FallingPetals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    // Path2D is browser-only, so create it inside the effect (not at module scope / SSR)
    const PETAL = new Path2D("M0 -11 C9 -6 9 7 0 13 C-9 7 -9 -6 0 -11Z");
    const SPARK = new Path2D("M0 -10 C1 -3 3 -1 10 0 C3 1 1 3 0 10 C-1 3 -3 1 -10 0 C-3 -1 -1 -3 0 -10Z");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, h = 0, raf = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const count = window.innerWidth < 640 ? 12 : window.innerWidth < 1024 ? 22 : 34;
    const mk = (initial: boolean) => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : -30,
      s: 0.7 + Math.random() * 1.1,
      v: 0.6 + Math.random() * 1.1,
      ph: Math.random() * Math.PI * 2,
      sw: 0.01 + Math.random() * 0.02,
      k: Math.floor(Math.random() * 3),
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      r: Math.random() * 6,
    });
    const items = Array.from({ length: count }, () => mk(true));
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < items.length; i++) {
        const p = items[i];
        p.y += p.v;
        p.ph += p.sw;
        p.r += 0.015;
        ctx.save();
        ctx.translate(p.x + Math.sin(p.ph) * 40, p.y);
        ctx.rotate(Math.sin(p.r) * 0.7);
        ctx.scale(p.s, p.s);
        ctx.globalAlpha = 0.85;
        if (p.k === 0) { ctx.fillStyle = p.c; ctx.fill(PETAL); }
        else if (p.k === 1) { ctx.fillStyle = "#ffd23f"; ctx.fill(SPARK); }
        else drawFlower(ctx, p.c);
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

  return <canvas ref={ref} className="pointer-events-none fixed left-0 top-0 z-30 h-full w-full" aria-hidden />;
}
