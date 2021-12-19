import jwt from 'jsonwebtoken'
import  JWTHelper from '../helpers/jwt.helper'

const authToken = (req: any, res: any, next: any): void => {
    const authTokenHeader: string = req.headers.authorization
    const token: string = authTokenHeader && authTokenHeader.split(' ')[1]
    if(!token) {
        return res.sendStatus(404)
    }
    try {
        const decode = JWTHelper.verifyToken(token, process.env.ACCESS_TOKEN_SECRET as string)
        if(!decode) {
            console.log(decode)
            return res.status(200).json({
                message: 'Verify is fail because session expired',
                verify: 0
            })
        }
        req.user = decode
        next()
    }catch(err) {
        console.error(err)  
    }
}

export = {
    authToken
}
