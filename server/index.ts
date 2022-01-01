import express from 'express'
import routers from './routes'
import cors from 'cors'
import dotenv from 'dotenv'
import {Server} from 'socket.io'
import { createServer } from 'http'
import { connect } from './config/database/mysql.config'
import EventEmitter from 'events'

const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true
    }
})

io.on('connection', socket=>{
    console.log('connected' + socket.id)
    socket.on('disconnect', ()=>{
        console.log('disconnected' + socket.id)
    })
    
    socket.on('register-socket', (data)=>{
        io.sockets.emit('register-socket-sender', data)
    })
})


dotenv.config()
app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
connect()
routers(app)


const port = process.env.SERVER_PORT || 8001
server.listen(port)

