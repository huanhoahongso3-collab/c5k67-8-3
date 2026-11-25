"use client";
import { useEffect, useRef, useState } from "react";

// Generative "music box" lullaby, synthesized with Web Audio (no audio file, no copyright).
// Note names -> frequency (C major pentatonic-ish, gentle)
const N: Record<string, number> = {
  C4: 261.63, D4: 293.66, E4: 329.63, G4: 392.0, A4: 440.0,
  C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.0,
};
// Each bar: 8 eighth notes
const MELODY = [
  ["E5", "G5", "E5", "C5", "D5", "E5", "D5", "C5"],
  ["A4", "C5", "E5", "C5", "A4", "C5", "D5", "E5"],
  ["G5", "E5", "D5", "C5", "D5", "E5", "G5", "E5"],
  ["D5", "C5", "A4", "G4", "A4", "C5", "D5", "C5"],
];
const BASS = ["C4", "A4", "C4", "G4"];
const STEP = 0.42; // seconds per eighth note

export default function MusicToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const stateRef = useRef({ bar: 0, step: 0, next: 0 });

  const ping = (ctx: AudioContext, freq: number, t: number, vol: number, dur: number) => {
    const o = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o2.type = "triangle";
    o.frequency.value = freq;
    o2.frequency.value = freq * 2;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    o2.connect(g);
    g.connect(ctx.destination);
    o.start(t);
    o2.start(t);
    o.stop(t + dur + 0.05);
    o2.stop(t + dur + 0.05);
  };

  const schedule = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const s = stateRef.current;
    while (s.next < ctx.currentTime + 0.3) {
      const note = MELODY[s.bar][s.step];
      ping(ctx, N[note], s.next, 0.16, 1.4);
      if (s.step === 0 || s.step === 4) ping(ctx, N[BASS[s.bar]] / 2, s.next, 0.1, 2.0);
      s.next += STEP;
      s.step++;
      if (s.step >= 8) {
        s.step = 0;
        s.bar = (s.bar + 1) % MELODY.length;
      }
    }
  };

  const start = () => {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = ctxRef.current ?? new AC();
    ctxRef.current = ctx;
    ctx.resume();
    stateRef.current.next = ctx.currentTime + 0.1;
    timerRef.current = window.setInterval(schedule, 120);
    setOn(true);
  };

  const stop = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = null;
    ctxRef.current?.suspend();
    setOn(false);
  };

  useEffect(() => () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    ctxRef.current?.close();
  }, []);

  return (
    <button
      onClick={on ? stop : start}
      aria-label={on ? "Tắt nhạc" : "Bật nhạc"}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[55] flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-pink-100 text-2xl shadow-lg"
    >
      <span className={`font-bold text-pink-500 ${on ? "animate-bounce" : "opacity-60"}`}>{on ? "♪" : "♡"}</span>
    </button>
  );
}
