import express from 'express'
import routers from './routes'
import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from './config/database/mysql.config'
const app = express()

dotenv.config()
app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
connect()
routers(app)

const port = process.env.SERVER_PORT || 8001
app.listen(port)