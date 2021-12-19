import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface Payload {
    id?: string,
    username?: string, 
    password?: string,
    email?: string
}

const createToken = (payload: Payload) =>{
    try {
        const {id, username}= payload
        const accessToken = jwt.sign({id, username}, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn: "2h"})
        return accessToken
    }catch(err){
        console.log(err)
    }
}

const verifyToken = (token: string, key: string) =>{
    try {
        const decode:any = jwt.verify(token, key, {expiresIn: "2h"} as jwt.VerifyOptions)
        const user: Payload = {
            id: decode.id,
            username: decode.username
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