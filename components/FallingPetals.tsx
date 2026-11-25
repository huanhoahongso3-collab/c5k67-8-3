"use client";
import { useEffect, useRef } from "react";

const HEART = new Path2D("M0 8 C-14 -4 -12 -14 -6 -14 C-2 -14 0 -10 0 -8 C0 -10 2 -14 6 -14 C12 -14 14 -4 0 8Z");
const STAR = new Path2D("M0 -12 L3.5 -4 L12 -3 L5.5 3 L7.5 12 L0 7.5 L-7.5 12 L-5.5 3 L-12 -3 L-3.5 -4Z");
const COLORS = ["#ff8fb1", "#ffb3c8", "#c9a7ff", "#ffd166", "#ff7aa8", "#9fd8ff"];

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, h = 0, raf = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const count = window.innerWidth < 640 ? 16 : 30;
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
        ctx.globalAlpha = 0.9;
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#fff";
        if (p.k === 0) { ctx.fillStyle = p.c; ctx.stroke(HEART); ctx.fill(HEART); }
        else if (p.k === 1) { ctx.fillStyle = p.c; ctx.stroke(STAR); ctx.fill(STAR); }
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

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-30" aria-hidden />;
}
