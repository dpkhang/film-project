import React, {useEffect, useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'
import './Register.scss'
import { getUserByUsername, registerAPI } from '../../API/ConnectAPI'
import { useSelector, useDispatch } from 'react-redux'
import { saveUser } from '../../redux/actions/user'
import uniqid from 'uniqid'

function Register() {

    //State
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validSubmit, setValidSubmit] = useState(0)
    const [focus, setFocus] = useState('')

    //ref
    const err_username: any = useRef(null)
    const err_password: any = useRef(null)
    const err_confirm_password: any = useRef(null)
    const err_email: any = useRef(null)

    //redux
    const selector = useSelector((state:any)=>state.user.data)
    const dispatch = useDispatch()

    //local
    const navigate = useNavigate()

    //Handle
    const handleChange = (e: any)=>{
        const {name, value} = e.target
        if(name === 'confirmPassword'){
            setConfirmPassword(value)
        }else {
            const mergeUser = {
                ...user,
                [name]: value
            }
            setUser(mergeUser)
        }
        setFocus(name)
    }

    useEffect(()=>{
        (async ()=>{
            const passwordRegexp = /(?=.*[A-Z])(?=.*\d)(?=.*[a-z])[A-Za-z0-9]{10,20}$/
            const usernameRegexp = /^[A-Za-z0-9]{7,20}$/
            const emailRegexp = /^([A-Za-z0-9.]+)@([A-Za-z0-9.]+)\.([A-Za-z]){3,8}$/
            let validUsername = 1, validPassword = 1
            let validConfirmPassword = 1, validEmail = 1
            console.log(focus)
            if(!usernameRegexp.test(user.username) && focus === 'username'){
                validUsername = 0
                err_username.current.innerHTML = 'Username is from 8 characters.'
            }else{
                if(focus === 'username') {
                    const existedUsername: any = await getUserByUsername(user.username)
                    if(existedUsername.res.data.data.length > 0){
                        validUsername =  0 
                        err_username.current.innerHTML = 'Username is existed.'
                    }else{
                        validUsername = 1
                        err_username.current.innerHTML = ''
                    } 
                } 
                else{
                    validUsername = 1
                    err_username.current.innerHTML = ''
                } 
            }
    
            if(!emailRegexp.test(user.email) && focus ==='email'){
                validEmail = 0
                err_email.current.innerHTML = 'example@gmail.com'
            }else{
                validEmail = 1
                err_email.current.innerHTML = ''
            }
    
            if(!passwordRegexp.test(user.password) && focus ==='password'){
                validPassword = 0
                err_password.current.innerHTML = 'password is from 10-20: lower, upper & number.'
            } else {
                validPassword = 1
                err_password.current.innerHTML = ''
            }
    
            if(user.password !== confirmPassword && focus === 'confirmPassword'){
                validConfirmPassword = 0
                err_confirm_password.current.innerHTML = 'Password do not match.'
            }else {
                validConfirmPassword = 1
                err_confirm_password.current.innerHTML = ''
            }
    
            if(validUsername && validPassword && validConfirmPassword && validEmail)
                setValidSubmit(1)
            else
                setValidSubmit(0)            
        })()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, confirmPassword])

    const handleSubmit = async (e: any)=>{
        e.preventDefault()
        try {
            if(validSubmit){
                const mergeUser = {
                    id: uniqid() + '-' + Math.round(Math.random() * 10000) + '-' + uniqid() + '-' + Math.round(Math.random() * 10000) + '-u',
                    ...user
                }
                const result: any = await registerAPI(mergeUser)
                if(result.res.status === 200){
                    const cookies = new Cookies()
                    cookies.set('accessToken', result.res.data.data.token)
                    cookies.set('uid', result.res.data.data.id)
                    const action = saveUser(result.res.data.data)
                    dispatch(action)
                    alert(result.res.data.message)
                    navigate('/films')
                    console.log(selector)
                }
                else{
                    alert('Register is failed!')
                }
            }
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        document.title ='Register | Hippo Movies'
    }, [])


    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <h1 className='title'>REGISTER</h1>
                <div className='main'>
                    <div className='input-item'>
                        <p>Username:</p>
                        <div className='input-element'>
                            <input type='text' name='username' onChange={handleChange}/>
                            <p className='err-text' ref={err_username}>404</p>
                        </div>
                        <p>Password:</p>
                        <div className='input-element'>
                            <input type='password' name='password' onChange={handleChange}/>
                            <p className='err-text' ref={err_password}>404</p>
                        </div>
                        <p>Re-password:</p>
                        <div className='input-element'>
                            <input type='password' name='confirmPassword' onChange={handleChange}/>
                            <p className='err-text' ref={err_confirm_password}>404</p>
                        </div>
                        <p>Email:</p>
                        <div className='input-element'>
                            <input type='text' name='email' onChange={handleChange}/>
                            <p className='err-text' ref={err_email} >404</p>
                        </div>
                        <div className='input-submit'>
                            <input className='button-item' type='submit' name='username'/>
                            <Link className='button-item' to='/'>Exit</Link>
                        </div>
                    </div>
                    <div className='img-item'>
                        <img src='/img/svg/connections-2099068.svg' alt=''/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register
