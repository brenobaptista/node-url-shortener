import { Router } from 'express'
import { findOriginalUrlByHash } from '../models/hash.js'

const router = Router()

router.get('/:hash', async (req, res) => {
  try {
    const originalUrl = await findOriginalUrlByHash(req.params.hash)

    if (originalUrl) {
      res.status(200).json({ message: 'Found', original_url: originalUrl })
    } else {
      res.status(404).json({ message: 'Not Found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
