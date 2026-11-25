"use client";
import { motion } from "framer-motion";

const cards = [
  { icon: "🌷", title: "Xinh đẹp", text: "Như những đóa hoa mùa xuân, các cậu làm cả lớp thêm rực rỡ mỗi ngày." },
  { icon: "📚", title: "Thông minh", text: "Từ tiếng Nga đến mọi môn học, các cậu luôn khiến bọn mình ngưỡng mộ." },
  { icon: "💖", title: "Đáng yêu", text: "Một nụ cười của các cậu cũng đủ làm tan những tiết học căng thẳng nhất." },
];

export default function Greeting() {
  return (
    <section id="loi-chuc" className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        className="gradient-text mb-12 text-center font-script text-5xl sm:text-6xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        Gửi các nàng C5K67
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            className="glass rounded-3xl p-8 text-center"
            initial={{ opacity: 0, x: i === 0 ? -60 : i === 2 ? 60 : 0, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", delay: i * 0.12 }}
            whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
          >
            <div className="mb-3 text-5xl animate-sway">{c.icon}</div>
            <h3 className="mb-2 font-script text-3xl text-rose-500">{c.title}</h3>
            <p className="text-rose-900/80">{c.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="mx-auto mt-14 max-w-2xl text-center text-lg leading-relaxed text-rose-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Nhân ngày Quốc tế Phụ nữ 8/3, chúc các bạn nữ lớp 11 Nga luôn khỏe mạnh, hạnh phúc, tự tin tỏa sáng và
        thực hiện được mọi ước mơ. Cảm ơn các cậu vì đã làm nên một C5K67 thật đáng nhớ! 🌸
      </motion.p>
    </section>
  );
}
