"use client";
import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = 0;
    const spawn = (x: number, y: number) => {
      const now = performance.now();
      if (now - last < 60) return;
      last = now;
      const el = document.createElement("span");
      el.textContent = ["♡", "✿", "★", "❀"][Math.floor(Math.random() * 4)];
      el.style.cssText = `position:fixed;left:${x}px;top:${y}px;pointer-events:none;z-index:60;color:${["#ff5c8d","#c77dff","#ffb703","#ff8fb1"][Math.floor(Math.random()*4)]};font-size:${12 + Math.random() * 12}px;transition:transform 1s ease-out,opacity 1s ease-out;transform:translate(-50%,-50%);opacity:1`;
      document.body.appendChild(el);
      requestAnimationFrame(() => {
        el.style.transform = `translate(${(Math.random() - 0.5) * 60}px,${20 + Math.random() * 50}px) scale(.4) rotate(${Math.random() * 90}deg)`;
        el.style.opacity = "0";
      });
      setTimeout(() => el.remove(), 1000);
    };
    const move = (e: PointerEvent) => spawn(e.clientX, e.clientY);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", move);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
    };
  }, []);
  return null;
}
