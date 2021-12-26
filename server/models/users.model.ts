import  { conn } from '../config/database/mysql.config'
import bcrypt from 'bcrypt' 

interface User  {
    id?: string
    email?: string,
    password?: string
}

const login = (email:string, password:string): Promise<any> => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10)
        .then((hash)=>{
            password = hash
            console.log(password)
            const query  = 'select * from users where email =  ? and password = ?'
            conn.query(query, [email, password], (err, result)=>{
                if(err) {
                    reject(err)
                }
                if(result.length > 0) {
                    resolve(result)
                }
                resolve(null)
            })
        })
        .catch(err=>{
            console.error(err)
        })
    })
}

const register = (user: User)=> {
    return new Promise((resolve, reject) => {
        bcrypt.hash(user.password as string, 10)
        .then((hash)=>{
            user.password = hash
            const query = 'insert into users set ?'
            conn.query(query, user, (err )=>{
                if(err) {
                    reject(err)
                }else {
                    resolve(user)
                }
            })
        })
        .catch(err=>{
            console.error(err)
        })
    })
}

const put = (id: string, user: object)=>{
    return new Promise((resolve, reject)=>{
        const query = 'update users set ? where id = ?'
        conn.query(query, [user, id], (err, result)=>{
            if(err) reject(err)
            resolve(result)
        })
    })
}


const findByEmail = (email:string): Promise<any> =>{
    return new Promise((resolve, reject) => {
        const query = 'select * from users where email = ?'
        conn.query(query, email, (err, result)=>{
            if(err) reject(err)
            else if (result.length > 0) 
                    resolve(result[0])
                else
                    resolve(null)
        })
    })
}

const findById = (uid:string) =>{
    return new Promise((resolve, reject)=>{
        const query:string = 'select * from users where id =  ?'
        conn.query(query, uid, (err, result)=>{
            if(err) reject(err)
            else if(result.length > 0) 
                    resolve(result)
                else
                    resolve(null)
        })
    })
}

export = {
    login,
    register,
    put,
    findById,
    findByEmail
}