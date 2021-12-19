import axios, {AxiosRequestConfig} from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'

export default async function connectAPI(method: string, url: string, data: object={}, token?: string){
    let timeout = true
    return await axios({
        method, 
        url, 
        data, 
        headers: {'Authorization': token && 'Bearer ' + token }
    } as AxiosRequestConfig<any>)
    .then(res=>({res, timeout}))
    .catch(err=>console.log(err))
}


//Auth API
const loginAPI = async (data: object)=>{
    const res = await connectAPI('post', '/auth/login', data)
    return res
}

const registerAPI = async (data: object)=>{
    const res = await connectAPI('post', '/auth/register', data)
    return res
}

const putUser = async (data: object)=>{
    const res = await connectAPI('put', `/auth`, data)
    return res
}

const getUserByUsername = async (username: string)=>{
    const res = await connectAPI('get', `/auth?username=${username}`)
    return res
}

const getUserById = async (id: string)=> {
    const res = await connectAPI('get',`/auth?uid=${id}`)
    return res
}

const checkTimeOutToken = async (token: string='', data: object={})=>{
    const res = await connectAPI('get', `/auth/check-token`, data, token)
    return res
}

export {
    loginAPI,
    registerAPI,
    putUser,
    getUserByUsername,
    getUserById,
    checkTimeOutToken
}