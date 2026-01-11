import pool from './db.js'

export const runMigrations = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS urls (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      original_url TEXT NOT NULL,
      hash CHAR(7) NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
}
