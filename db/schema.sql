CREATE TABLE IF NOT EXISTS wishes (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  message    TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
