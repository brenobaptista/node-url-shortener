import pool from './db.js'

export const findOriginalUrlByHash = async (hash) => {
  const result = await pool.query(
    'SELECT original_url FROM urls WHERE hash = $1',
    [hash]
  )
  return result.rows[0]?.original_url
}
