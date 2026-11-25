"use client";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Wish = { id: number; name: string; message: string; created_at: string };
const TINTS = ["bg-pink-100", "bg-purple-100", "bg-amber-100", "bg-rose-100", "bg-sky-100"];

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
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.7 }, colors: ["#ff5c8d", "#c77dff", "#ffd166"] });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Lỗi");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        className="gradient-text text-center font-script text-5xl sm:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Tường lời chúc 💌
      </motion.h2>
      <p className="mb-8 mt-3 text-center text-rose-700">Gửi một lời chúc nhỏ đến các bạn nữ của lớp nhé!</p>
      {demo && (
        <p className="mb-6 text-center text-xs text-rose-400">(Chế độ demo – dữ liệu mẫu, chưa kết nối cơ sở dữ liệu)</p>
      )}

      <form onSubmit={submit} className="glass mx-auto mb-12 max-w-xl space-y-3 rounded-3xl p-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={40}
          placeholder="Tên của bạn"
          className="w-full rounded-xl border border-pink-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={200}
          rows={3}
          placeholder="Viết lời chúc 8/3..."
          className="w-full resize-none rounded-xl border border-pink-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
        />
        {err && <p className="text-sm text-red-500">{err}</p>}
        <motion.button
          disabled={busy}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          className="w-full rounded-full bg-gradient-to-r from-pink-400 to-rose-500 py-3 font-semibold text-white shadow-lg disabled:opacity-60"
        >
          {busy ? "Đang gửi..." : "Gửi lời chúc 💖"}
        </motion.button>
      </form>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {wishes.map((w, i) => (
            <motion.div
              key={w.id}
              layout
              initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: (i % 3) - 1 }}
              transition={{ type: "spring", delay: Math.min(i, 8) * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`mb-4 break-inside-avoid rounded-2xl p-5 shadow-md ${TINTS[w.id % TINTS.length]}`}
            >
              <p className="text-rose-900">{w.message}</p>
              <p className="mt-3 text-right font-script text-xl text-rose-500">— {w.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
