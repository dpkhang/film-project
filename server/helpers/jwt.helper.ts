import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface Payload {
    id?: string,
    username?: string, 
    password?: string,
    email?: string
}

const createToken = (payload: Payload, expiresIn: string) =>{
    try {
        const {id, email}= payload
        const accessToken = jwt.sign({id, email}, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn: expiresIn})
        return accessToken
    }catch(err){
        console.log(err)
    }
}

const verifyToken = (token: string, key: string, expiresIn: string) =>{
    try {
        const decode:any = jwt.verify(token, key, {expiresIn: expiresIn} as jwt.VerifyOptions)
        const user: Payload = {
            id: decode.id,
            email:decode.email
        }
        return user
    }catch(err){
        console.log(err)
    }
}

export = {
    createToken,
    verifyToken
}