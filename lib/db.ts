import { neon } from "@neondatabase/serverless";
import { demoAdd, demoList, type Wish } from "./demo-wishes";

const url = process.env.DATABASE_URL;
const sql = url ? neon(url) : null;

export const isDemo = !sql;

let ready = false;
async function ensureTable() {
  if (!sql || ready) return;
  await sql`CREATE TABLE IF NOT EXISTS wishes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`;
  ready = true;
}

export async function listWishes(): Promise<Wish[]> {
  if (!sql) return demoList();
  await ensureTable();
  const rows = await sql`SELECT id, name, message, created_at FROM wishes ORDER BY id DESC LIMIT 50`;
  return rows.map((r) => ({
    id: Number(r.id),
    name: String(r.name),
    message: String(r.message),
    created_at: new Date(r.created_at as string).toISOString(),
  }));
}

export async function addWish(name: string, message: string): Promise<Wish> {
  if (!sql) return demoAdd(name, message);
  await ensureTable();
  const rows = await sql`INSERT INTO wishes (name, message) VALUES (${name}, ${message})
    RETURNING id, name, message, created_at`;
  const r = rows[0];
  return {
    id: Number(r.id),
    name: String(r.name),
    message: String(r.message),
    created_at: new Date(r.created_at as string).toISOString(),
  };
}
