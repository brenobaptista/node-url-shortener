import { Router } from 'express'
import hash from './hash.js'
import urls from './urls.js'

const router = Router()

router.use(urls)
router.use(hash)

export default router
