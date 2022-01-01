import { Express } from 'express'
import User from '../controllers/users.controller'
import Middleware from '../middlewares/auth.middleware'

const routers = (app: Express)=>{
    app.post('/api/auth/login', User.login)
    app.post('/api/auth/verify-email', User.verifyWithMailer)
    app.post('/api/auth/register', Middleware.authTokenRegister, User.register)
    app.get('/api/auth/check-token', Middleware.authToken, (req: any, res: any)=>{
        return res.status(200).json({
            message: 'Authentication successfully',
            data: {
                user: req.user,
            }
        })
    })
    app.put('/api/auth', User.put)
    app.get('/api/auth', User.find)
    app.get('/', (req,res)=>{
        res.redirect('http://localhost:3000')
    })
    
}

export default routers