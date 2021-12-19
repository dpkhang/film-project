import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { loginAPI } from '../../API/ConnectAPI'
import { saveUser } from '../../redux/actions/user'
import Dialog from '../Dialog/Alert'

const Login=()=> {
    //state
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const [dialog, setDialog] = useState({
        active: 0,
        children: ''
    })
    
    //redux
    const selector = useSelector((state:any)=>state.user.data)
    const dispatch = useDispatch()
    //local
    const navigate = useNavigate()

    //handle
    const handleChange = (e: any)=>{
        const {name, value} = e.target
        const mergeUser = {
            ...user,
            [name]: value,
        }
        setUser(mergeUser)
    }

    const handleChangeActive = (active: number)=>{
        const state = {
            ...dialog,
            active
        }
        setDialog(state)
    }

    const handleSubmit = async (e: any)=>{
        try {
            e.preventDefault()
            const result: any = await loginAPI(user)
            if(result && result.res.status === 200) {
                const action = saveUser(result.res.data.data)
                const cookies = new Cookies()
                cookies.set('accessToken', result.res.data.data.token)
                cookies.set('uid', result.res.data.data[0].id)
                console.log(selector)
                dispatch(action)
                if(result.res.data.data[0].permission === 'admin')
                    navigate('/admin')
                else {
                    navigate ('/films')
                }
            }else {
                setDialog({
                    active: 1,
                    children: 'Invalid username or password!'
                })
            }
        }catch(err){
            console.log(err)
            setDialog({
                active: 1,
                children: 'Server Error!'
            })
        }
    }

    useEffect(() => {
        document.title = 'Login | Hippo Movies'
    }, [])

    return (
        <div className='login'>
            <Dialog onChangeActive={handleChangeActive} active={dialog.active}>{dialog.children}</Dialog>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <div className='input-item'>
                <p>Username:</p>
                <div className='input-element'>
                    <i className="fas fa-user"></i>
                    <input type='text' id='username' name='username' onChange={handleChange}/>
                </div>
                <p>Password:</p>
                <div className='input-element'>
                    <i className="fas fa-lock"></i>
                    <input type='password' id='password' name='password' onChange={handleChange}/>
                </div>
                </div>
                <div className='register-question-item'>
                    <Link to='/register'>Register</Link>
                </div>
                <div className='input-submit'>
                <input className='button-item' type='submit' value='Login'/>
                <Link className='button-item' to='/' type='button'>Exit</Link>
                </div>
            </form>
        </div>
    );
}

export default Login
