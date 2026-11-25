"use client";
import { motion } from "framer-motion";
import { Bunny, Cat, Cloud, Heart, KawaiiFlower } from "./Kawaii";

const cards = [
  { icon: <KawaiiFlower size={84} color="#ff8fb1" />, title: "Xinh xắn", text: "Như những đóa hoa mùa xuân, các cậu làm cả lớp thêm rực rỡ mỗi ngày." },
  { icon: <Bunny size={84} />, title: "Giỏi giang", text: "Từ tiếng Nga đến mọi môn học, các cậu luôn khiến bọn mình ngưỡng mộ." },
  { icon: <Cat size={84} />, title: "Đáng yêu", text: "Một nụ cười của các cậu cũng đủ làm tan những tiết học căng thẳng nhất." },
];

export default function Greeting() {
  return (
    <section id="loi-chuc" className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        className="gradient-text wavy mb-12 text-center font-script text-4xl sm:text-5xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        Gửi các nàng C5K67
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            className="glass rounded-[2rem] p-8 text-center"
            initial={{ opacity: 0, x: i === 0 ? -60 : i === 2 ? 60 : 0, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", delay: i * 0.12 }}
            whileHover={{ y: -8, rotate: i % 2 ? 2 : -2 }}
          >
            <div className="mb-3 flex justify-center animate-float" style={{ animationDelay: `${i * 0.4}s` }}>{c.icon}</div>
            <h3 className="mb-2 font-script text-2xl text-rose-500">{c.title}</h3>
            <p className="font-hand text-rose-800/90">{c.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="relative mx-auto mt-16 max-w-2xl rounded-[2rem] bg-pink-100/80 px-8 py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Heart size={36} className="absolute -left-3 -top-4 animate-float" />
        <Cloud size={70} className="absolute -bottom-6 -right-4 animate-float" />
        <p className="font-hand text-lg font-semibold leading-relaxed text-rose-700">
          Nhân ngày Quốc tế Phụ nữ 8/3, chúc các bạn nữ lớp 11 Nga luôn khỏe mạnh, hạnh phúc, tự tin tỏa sáng và
          thực hiện được mọi ước mơ. Cảm ơn các cậu vì đã làm nên một C5K67 thật đáng nhớ! ♡
        </p>
      </motion.div>
    </section>
  );
}
