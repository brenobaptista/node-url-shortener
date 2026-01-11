import { Router } from 'express'
import generateHash from '../lib/generateHash.js'
import { createUrl, isHashAvailable } from '../models/urls.js'

const router = Router()

router.post('/urls', async (req, res) => {
  try {
    const { original_url } = req.body
    const hash = await findAvailableHash()
    await createUrl(hash, original_url)

    res.status(201).json({ message: 'Created', hash })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

const findAvailableHash = async () => {
  let hash = ''
  while (!hash) {
    const temp = generateHash()
    const isAvailable = await isHashAvailable(temp)
    if (isAvailable) hash = temp
  }
  return hash
}

export default router
