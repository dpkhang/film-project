import User from '../controllers/users.controller'
import Middleware from '../middlewares/auth.middleware'

const routers = (app: any)=>{
    app.post('/api/auth/login', User.login)
    app.post('/api/auth/register', User.verifyWithMailer)
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
    
}

export default routers