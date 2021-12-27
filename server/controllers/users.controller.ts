import {Request, Response, NextFunction} from 'express'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import {google} from 'googleapis'
import UserModel from '../models/users.model'
import JWTHelper from '../helpers/jwt.helper'
import dotenv from 'dotenv'

dotenv.config()
interface User {
    id: string,
    password: string,
    email?: string,
    token?: string,
    permission?: string
}


const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body as User
        if(!email || !password)
            return res.sendStatus(400)
        let user = await UserModel.findByEmail(email)
        if(user && await bcrypt.compare(password, user.password)) {
            const token = JWTHelper.createToken(user, "2h")
            delete user.password
            return res.status(200).json({
                message: 'Login successfully',
                data: {
                    ...user,
                    token
                }
            })
        }else{
            return res.sendStatus(400)
        }
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
        const {id,password, permission} = req.body as User
        const {email} = req.user as User
        if(!id ||!password || !email)
            return res.sendStatus(400)
        const user = {
            id, password, email, permission
        }
        const checkEmail = await UserModel.findByEmail(email)
        if(checkEmail) 
            return res.status(200).json({
                message: 'Email was signed up!',
                check: 1
            })
        const result: any = await UserModel.register(user)
        const token = JWTHelper.createToken({id, password, email}, "2h")
        delete result.password
        console.log(token)
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
        const {email} = req.body

        if(!email) return res.sendStatus(404)

        const checkEmail = await UserModel.findByEmail(email)
        if(checkEmail) return res.status(200).json({
            message: 'Email was signed up!',
            check: 1
        })

        const tokenRegister = JWTHelper.createToken({email: email}, '15m')

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
            to: email,
            subject: 'Confirm your account on Hippo Movies',
            html: ` <form style="padding: 0 20px; width: 600px; height: 300px; margin: 0 auto; border: 1px solid lightgrey; border-radius: 10px;">
                        <h1 style="margin-bottom: 15px; width: 100%; color: #9c2ec4; text-align: center;">HIPPO MOVIES</h1>
                        <h3 style="color: grey; font-size: 17px;">Confirm your account on Hippo Movies!</h3>
                        <p style="font-size: 17px; width: 100%; color: grey">Hi!</p>
                        <p style="font-size: 17px; width: 100%; color: grey; text-align: justify;">Thank for registering for your account on Hippo. Before we get started, we need to confirm this is you. Click below to confirm email:</p>
                        <p style="margin-top: 10px;">
                            <a  style="
                                    display: block;
                                    width: 150px; 
                                    height: 35px; 
                                    background-color: blue; 
                                    color: white; 
                                    font-size: 17px; 
                                    text-align: center; 
                                    line-height: 35px; 
                                    border-radius: 4px;
                                    text-decoration: none;" 
                                href="http://localhost:3000/register/${tokenRegister}">
                                Confirm!
                            </a>
                        </p>
                    </form>`
        })

        console.log("Message sent: %s", info.accepted)
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
        return res.status(200).json({
            message: 'Checking your email, please!',
            check: 0
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
            result = await UserModel.findByEmail(username)
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
