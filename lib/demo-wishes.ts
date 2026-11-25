export type Wish = { id: number; name: string; message: string; created_at: string };

const now = Date.now();
const seed: [string, string][] = [
  ["Bạn nam demo 1", "Chúc các cậu 8/3 thật xinh, thật vui và luôn điểm 10 nha! 🌸"],
  ["Bạn nam demo 2", "Cảm ơn các cậu đã làm lớp 11 Nga luôn rạng rỡ ✨"],
  ["Bạn nam demo 3", "Mong các cậu luôn cười thật tươi, mọi ước mơ đều thành hiện thực 💖"],
  ["Bạn nam demo 4", "Chúc các nàng học giỏi, xinh đẹp và không bao giờ phải làm bài tập về nhà 😆"],
  ["Bạn nam demo 5", "C5K67 mà thiếu các cậu thì mất vui lắm. Chúc mừng 8/3! 🌷"],
  ["Bạn nam demo 6", "Chúc các cậu như hoa, luôn tỏa hương và rực rỡ 🌹"],
  ["Bạn nam demo 7", "Happy Women's Day! Chúc các cậu mãi hạnh phúc 🎀"],
  ["Bạn nam demo 8", "Tuổi học trò đẹp nhất vì có các cậu. Yêu cả lớp nữ! 💐"],
];

// In-memory demo store (used only when DATABASE_URL is not set)
const store: Wish[] = seed.map(([name, message], i) => ({
  id: i + 1,
  name,
  message,
  created_at: new Date(now - (seed.length - i) * 3600_000).toISOString(),
}));

export const demoList = () => [...store].reverse().slice(0, 50);
export const demoAdd = (name: string, message: string): Wish => {
  const w: Wish = {
    id: store.length + 1,
    name,
    message,
    created_at: new Date().toISOString(),
  };
  store.push(w);
  return w;
};
