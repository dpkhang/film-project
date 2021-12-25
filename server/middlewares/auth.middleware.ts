import { NextFunction, Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import  JWTHelper from '../helpers/jwt.helper'

declare global {
    namespace Express {
        interface Request {
            user: object,
        }
    }
}

const authToken = (req: Request, res: Response, next: NextFunction) => {
    const authTokenHeader = req.headers.authorization
    const token = authTokenHeader && authTokenHeader.split(' ')[1]
    if(!token) {
        return res.sendStatus(404)
    }

    try {
        const decode = JWTHelper.verifyToken(token, process.env.ACCESS_TOKEN_SECRET as string, "2h")
        if(!decode) {
            console.log(decode)
            return res.status(200).json({
                message: 'Verify is fail because session expired',
                verify: 0
            })
        }
        req.user  = decode as object
        next()
    }catch(err) {
        console.error(err)  
    }
}

const authTokenRegister = (req: Request, res: Response, next: NextFunction) => {
    const authTokenHeader = req.headers.authorization
    const token = authTokenHeader && authTokenHeader.split(' ')[1]
    if(!token) {
        return res.sendStatus(400)
    }
    try {
        const decode = JWTHelper.verifyToken(token, process.env.ACCESS_TOKEN_SECRET as string, "15m")
        if(!decode) {
            console.log(decode)
            return res.status(200).json({
                message: 'Verify is fail because session expired',
                verify: 0
            })
        }
        req.user  = decode as object
        next()
    }catch(err) {
        console.error(err)  
    }
}

export = {
    authToken,
    authTokenRegister
}
