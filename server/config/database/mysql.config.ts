import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

const conn = mysql.createConnection({
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT as unknown as number,
    host: process.env.MYSQL_HOST
})

const connect = ()=>{
    conn.connect((err: any)=>{
        if(err) {
            console.error(err)
            console.log('Connection is not established!')
            process.exit(1)
        }
        console.log('Connection is established!')
    })
}

export {
    conn,
    connect
}