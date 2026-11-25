import { NextResponse } from "next/server";
import { addWish, isDemo, listWishes } from "@/lib/db";

export const dynamic = "force-dynamic";

const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 5;
}

const clean = (s: unknown, max: number) =>
  typeof s === "string"
    ? s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, max)
    : "";

export async function GET() {
  try {
    return NextResponse.json({ demo: isDemo, wishes: await listWishes() });
  } catch {
    return NextResponse.json({ error: "Không tải được lời chúc" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Gửi chậm lại một chút nhé 🌸" }, { status: 429 });
  }
  let body: { name?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }
  const name = clean(body.name, 40);
  const message = clean(body.message, 200);
  if (!name || !message) {
    return NextResponse.json({ error: "Nhập tên và lời chúc nhé!" }, { status: 400 });
  }
  try {
    return NextResponse.json({ wish: await addWish(name, message) }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Không gửi được, thử lại nhé" }, { status: 500 });
  }
}
