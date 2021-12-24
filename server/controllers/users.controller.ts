import {Request, Response, NextFunction} from 'express'
import nodemailer from 'nodemailer'
import {google} from 'googleapis'
import UserModel from '../models/users.model'
import JWTHelper from '../helpers/jwt.helper'
import dotenv from 'dotenv'

dotenv.config()
interface User {
    id: string,
    username: string, 
    password: string,
    email?: string,
    token?: string
}


const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body as User
        console.log(username, password)
        if(!username || !password)
            return res.sendStatus(404)
        let user = await UserModel.login(username, password)
        console.log(user)
        const token = JWTHelper.createToken(user, "2h")
        delete user.password
        return res.status(200).json({
            message: 'Login successfully',
            data: {
                ...user,
                token
            }
        })
    }catch(err) {
        console.log(err)
        return res.status(500).json({
            message: 'Server Error!',
            err
        } as {message: string})
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const {id, username, password, email} = req.body as User
        if(!id || !username || !password || !email)
            return res.sendStatus(400)
        const user: object  = {
            id, username, password, email
        }
        const result: any = await UserModel.register(user)
        const token = JWTHelper.createToken({username, password, email}, "2h")
        delete result.password
        return res.status(200).json({
            message: 'Register successfully!',
            data: {
                ...result,
                token
            }
        } as {message: string, data: object})
    }catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Server Error!',
            err
        } as  {message: string})
    }
}

const verifyWithMailer = async (req: Request, res: Response)=>{
   try {
        const oAuth2Option = {
            clientId: process.env.GMAIL_API_CLIENT_ID, 
            clientSecret: process.env.GMAIL_API_CLIENT_SECRET, 
            redirectUri: process.env.GMAIL_API_REDIRECT_URI
        }
        const oAuth2Client = new google.auth.OAuth2(oAuth2Option)
        oAuth2Client.setCredentials({refresh_token: process.env.GMAIL_API_REFRESH_TOKEN})
        const accessToken = await oAuth2Client.getAccessToken()

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'khangphuc1@gmail.com',
                clientId: process.env.GMAIL_API_CLIENT_ID,
                clientSecret: process.env.GMAIL_API_CLIENT_SECRET,
                refreshToken: process.env.GMAIL_API_REFRESH_TOKEN,
                accessToken: accessToken as string
            }
        })

        let info = await transporter.sendMail({
            from: 'khangphuc1@gmail.com',
            to: req.body.email,
            subject: 'Confirm your account on Hippo Movies',
            html: ` <h2>Confirm your account on Hippo Movies!</h2>
                    <p style="font-size: 17px">Hi!</p>
                    <p style="font-size: 17px">Please, verify your email!</p>
                    <p>
                        <a  style="
                                display: block;
                                width: 150px; 
                                height: 45px; 
                                background-color: blue; 
                                color: white; 
                                font-size: 18px; 
                                text-align: center; 
                                line-height: 45px; 
                                text-decoration: none;" 
                            href="http://localhost:3000/login">
                            Verify Email!
                        </a>
                    </p>`
        })

        console.log("Message sent: %s", info.accepted)
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
        return res.status(200).json({
            message: 'verify email successfully!',
        })
   }catch(err) {
       res.status(500).json({
           message: 'Server Error!',
           err
       })
   }
    
}

const put = async (req: Request, res: Response) => {
    try {
        const {id, email, phone, first_name, last_name} = req.body
        if(!id || !email || !phone || !first_name || !last_name) 
            return res.sendStatus(400)
        const user ={
            email,
            phone,
            first_name,
            last_name
        }
        const result = await UserModel.put(id as string, user)
        if(result) {
            return res.status(200).json({
                message: 'Updated successfully!',
                data: user
            })
        }
        return res.status(200).json({
            message: 'Updated failed!',
            data: {}
        })
    }catch(err) {
        console.log(err)
        return res.status(500).json({
            message: 'Server Error!',
            err
        })
    }
}

const find = async (req: Request, res: Response) => {
    try {
        const {username, uid}: {username?: string, uid?: string} = req.query
        let result: any
        if(!username && !uid)
            res.sendStatus(404)
        if(username)
            result = await UserModel.findByUsername(username)
        if(uid) 
            result = await UserModel.findById(uid)
        if(result) {
            delete result.password
            res.status(200).json({
                message: 'ok!',
                data: result
            } as {message: string, data: object[]})
        }
        else res.status(200).json({
            message: 'Data is not found!',
            data: []
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: 'Server Error!',
            err
        })
    }
}

export = {
    login,
    register,
    verifyWithMailer,
    find,
    put
}
