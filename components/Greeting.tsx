"use client";
import { motion } from "framer-motion";
import { Rose, SectionTitle, Tape, Tulip } from "./Art";

const notes = [
  { icon: <Tulip color="#f06292" className="h-24 w-auto" />, title: "Xinh xắn", text: "Như những đóa tulip đầu xuân, các cậu làm cả lớp thêm rực rỡ mỗi ngày.", rot: -3 },
  { icon: <Tulip color="#b48ae8" className="h-24 w-auto" />, title: "Giỏi giang", text: "Từ tiếng Nga đến mọi môn học, các cậu luôn khiến bọn mình ngưỡng mộ.", rot: 2 },
  { icon: <Tulip color="#ffcf4a" className="h-24 w-auto" />, title: "Đáng yêu", text: "Một nụ cười của các cậu cũng đủ làm tan những tiết học căng thẳng nhất.", rot: -1.5 },
];

export default function Greeting() {
  return (
    <section id="loi-chuc" className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow="GỬI CÁC NÀNG" title="Những điều tuyệt vời ở các cậu" />

      <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
        {notes.map((c, i) => (
          <motion.div
            key={c.title}
            className="paper polaroid text-center"
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: c.rot }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", delay: i * 0.12 }}
            whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
          >
            <Tape />
            <div className="flex h-36 items-end justify-center rounded-sm bg-gradient-to-b from-pink-50 to-pink-100 pb-2">{c.icon}</div>
            <h3 className="mt-4 font-serif text-2xl font-semibold italic text-purple-700">{c.title}</h3>
            <p className="mt-1 px-1 font-hand text-[0.95rem] font-semibold text-rose-700/90">{c.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="paper ruled relative mx-auto mt-16 max-w-2xl px-7 pb-8 pt-9 sm:px-10 lg:max-w-3xl"
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Tape />
        <Rose color="#f06292" className="absolute -right-4 -top-5 h-14 w-14 rotate-12 drop-shadow animate-float" />
        <p className="font-serif text-xl italic text-purple-700">Gửi các bạn nữ lớp 11 Nga,</p>
        <p className="font-hand text-base font-semibold text-rose-800 sm:text-lg">
          Nhân ngày Quốc tế Phụ nữ 8/3, chúc các cậu luôn khỏe mạnh, hạnh phúc, tự tin tỏa sáng và thực hiện được mọi ước
          mơ. Cảm ơn các cậu vì đã làm nên một C5K67 thật đáng nhớ!
        </p>
        <p className="mt-2 text-right font-script text-xl text-rose-500">— Cả lớp ♡</p>
      </motion.div>
    </section>
  );
}
