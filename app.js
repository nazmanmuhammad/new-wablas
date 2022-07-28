import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'
import cors from 'cors'

const app = express()

const host = process.env.HOST || undefined
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

const listenerCallback = () => {
    init()
    console.log(`Server is listening on http://${host ? host : 'localhost'}:${PORT}`)
}

if (host) {
    app.listen(PORT, host, listenerCallback)
} else {
    app.listen(PORT, listenerCallback)
}

nodeCleanup(cleanup)

export default app
