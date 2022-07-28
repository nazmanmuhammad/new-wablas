import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'
import cors from 'cors'

const app = http.createServer((req, res) => {
    //your stuff
  });

const host = process.env.HOST || undefined

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

const listenerCallback = () => {
    init()
    console.log(`Server is listening on http://${host ? host : 'localhost'}:${process.env.PORT}`)
}

if (host) {
    app.listen(process.env.PORT, host, listenerCallback)
} else {
    app.listen(process.env.PORT, listenerCallback)
}

nodeCleanup(cleanup)

export default app
