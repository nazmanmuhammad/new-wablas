import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'
import cors from 'cors'

const app = express()

const host = process.env.HOST || undefined
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

if (host) {
    app.listen(port, "0.0.0.0", listenerCallback)
} else {
    app.listen(port, listenerCallback)
}

nodeCleanup(cleanup)

export default app
