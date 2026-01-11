import express from 'express'
import { runMigrations } from './models/migrations.js'
import routes from './routes/index.js'

await runMigrations()

const app = express()
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
