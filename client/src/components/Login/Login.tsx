import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loginAPI } from '../../API/AxiosAPI'
import { saveUser } from '../../redux/actions/user'
import Dialog from '../Dialog/Alert'

const Login=()=> {

    //cookies
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, setCookies] = useCookies(['accessToken', 'uid'])

    //hooks
    const navigate = useNavigate()
    const location = useLocation()

    //states
    const [user, setUser] = useState({
        email: location.state ? location.state as string : '',
        password: '',
    })
    const [dialog, setDialog] = useState({
        active: 0,
        children: ''
    })
    
    //redux
    const selector = useSelector((state:any)=>state.user.data)
    const dispatch = useDispatch()

    //hooks
    useEffect(() => {
        document.title = 'Login | Hippo Movies'
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                setCookies("accessToken", result.res.data.data.token, {path:'/'})
                setCookies('uid', result.res.data.data.id, {path:'/'})
                console.log(selector)
                dispatch(action)
                if(result.res.data.data.permission === 'admin')
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

    return (
        <div className='login'>
            <Dialog onChangeActive={handleChangeActive} active={dialog.active}>{dialog.children}</Dialog>
            <form onSubmit={handleSubmit}>
                <h1>SIGN IN</h1>
                <div className='input-item'>
                <p>Email:</p>
                <div className='input-element'>
                    <i className="fas fa-user"></i>
                    <input type='text' id='username' name='email' value={user.email} required onChange={handleChange}/>
                </div>
                <p>Password:</p>
                <div className='input-element'>
                    <i className="fas fa-lock"></i>
                    <input type='password' id='password' name='password' required onChange={handleChange}/>
                </div>
                </div>
                <div className='register-question-item'>
                    <Link to='/'>Register</Link>
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
