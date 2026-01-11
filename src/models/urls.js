import pool from './db.js'

export const createUrl = async (hash, originalUrl) => {
  await pool.query(
    'INSERT INTO urls (original_url, hash) VALUES ($1, $2)',
    [originalUrl, hash]
  )
}

export const isHashAvailable = async (hash) => {
  const result = await pool.query(
    'SELECT id FROM urls WHERE hash = $1',
    [hash]
  )
  return result.rows.length === 0
}
