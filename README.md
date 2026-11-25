# 8/3 – C5K67 11 Nga 🌸

Next.js 14 (App Router) + Tailwind + Framer Motion. Serverless-ready (Vercel) with Neon Postgres.

## Chạy
```bash
npm install
npm run dev
```
Không có `DATABASE_URL` → chạy **chế độ demo** (dữ liệu mẫu trong bộ nhớ).

## Kết nối Neon
1. Tạo project trên https://neon.tech, copy connection string.
2. Đặt `DATABASE_URL` (`.env.local` hoặc Vercel → Environment Variables).
3. Seed dữ liệu demo (tùy chọn): `DATABASE_URL=... npm run db:seed`
   (bảng `wishes` cũng tự được tạo khi gọi API lần đầu).

## Deploy
Import repo vào Vercel, đặt `DATABASE_URL`, deploy.

## Nhạc
Nút 🎵 góc phải dưới phát giai điệu hộp nhạc được tạo trực tiếp bằng Web Audio (không cần file âm thanh).
