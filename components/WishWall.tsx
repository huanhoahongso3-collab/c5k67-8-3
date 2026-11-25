"use client";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionTitle, Tape } from "./Art";

type Wish = { id: number; name: string; message: string; created_at: string };
const TINTS = ["bg-[#fff0f5]", "bg-[#f3ecff]", "bg-[#fff8dc]", "bg-[#e9f8f0]", "bg-[#e8f3ff]"];

export default function WishWall() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [demo, setDemo] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("/api/wishes")
      .then((r) => r.json())
      .then((d) => {
        setWishes(d.wishes ?? []);
        setDemo(!!d.demo);
      })
      .catch(() => setErr("Không tải được lời chúc"));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      const r = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Lỗi");
      setWishes((w) => [d.wish, ...w]);
      setName("");
      setMessage("");
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.7 }, colors: ["#f06292", "#b48ae8", "#ffe27a"], shapes: ["circle", "star"] });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Lỗi");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow="BẢNG TIN" title="Tường lời chúc" sub="Gửi một lời chúc nhỏ đến các bạn nữ của lớp nhé!" />
      {demo && <p className="-mt-6 mb-6 text-center text-xs text-rose-400">(Chế độ demo – dữ liệu mẫu, chưa kết nối cơ sở dữ liệu)</p>}

      <form onSubmit={submit} className="paper ruled relative mx-auto mb-14 max-w-xl space-y-3 px-5 pb-6 pt-8 sm:px-7 lg:max-w-2xl" style={{ transform: "rotate(-0.8deg)" }}>
        <Tape />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={40}
          placeholder="Tên của bạn"
          className="w-full rounded-lg border-2 border-pink-200 bg-white px-4 py-3 font-hand text-base font-semibold outline-none focus:border-pink-400"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={200}
          rows={3}
          placeholder="Viết lời chúc 8/3..."
          className="w-full resize-none rounded-lg border-2 border-pink-200 bg-white px-4 py-3 font-hand text-base font-semibold outline-none focus:border-pink-400"
        />
        {err && <p className="text-sm text-red-500">{err}</p>}
        <motion.button
          disabled={busy}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="candy-btn w-full rounded-full bg-gradient-to-b from-pink-300 to-rose-400 py-3.5 text-lg font-bold text-white disabled:opacity-60"
        >
          {busy ? "Đang gửi..." : "Gửi lời chúc ♡"}
        </motion.button>
      </form>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
        <AnimatePresence>
          {wishes.map((w, i) => (
            <motion.div
              key={w.id}
              layout
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: [-2, 1.5, -1, 2.5, 0][i % 5] }}
              transition={{ type: "spring", delay: Math.min(i, 8) * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`paper relative mb-7 break-inside-avoid px-5 pb-4 pt-6 ${TINTS[w.id % TINTS.length]}`}
            >
              <Tape className="!w-14" />
              <p className="font-hand font-semibold text-rose-900">{w.message}</p>
              <p className="mt-3 text-right font-script text-base text-rose-500">— {w.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
