import crypto from 'node:crypto'

const generateHash = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const bytes = crypto.randomBytes(7)
  let hash = ''
  for (let i = 0; i < 7; i++) {
    hash += chars[bytes[i] % chars.length]
  }
  return hash
}

export default generateHash
