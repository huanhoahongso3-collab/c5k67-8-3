// Usage: DATABASE_URL=... npm run db:seed   (DEMO data only)
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("Missing DATABASE_URL");
  process.exit(1);
}
const sql = neon(url);
const run = async (file) => {
  const text = readFileSync(new URL(`../db/${file}`, import.meta.url), "utf8");
  for (const stmt of text.split(/;\s*$/m).map((s) => s.trim()).filter(Boolean)) {
    await sql.query(stmt);
  }
};
await run("schema.sql");
await run("seed.sql");
console.log("Seeded demo wishes.");
