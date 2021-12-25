import  { conn } from '../config/database/mysql.config'

const login = (email:string, password:string): Promise<any> => {
    return new Promise((resolve, reject) => {
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
}

const register = (user:object)=> {
    return new Promise((resolve, reject) => {
        const query = 'insert into users set ?'
        conn.query(query, user, (err, result)=>{
            if(err) {
                reject(err)
            }else {
                resolve(user)
            }
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


const findByUsername = (username:string) =>{
    return new Promise((resolve, reject) => {
        const query = 'select * from users where username = ?'
        conn.query(query, username, (err, result)=>{
            if(err) reject(err)
            else if (result.length > 0) 
                    resolve(result)
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
    findByUsername
}