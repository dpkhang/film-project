import React, {useEffect, useRef, useState} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import {useCookies} from 'react-cookie'
import './Register.scss'
import { registerAPI } from '../../API/AxiosAPI'
import { useSelector, useDispatch } from 'react-redux'
import { saveUser } from '../../redux/actions/user'
import Alert from '../Dialog/Alert'
import uniqid from 'uniqid'

function Register() {
    
    //cookies
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, setCookies] = useCookies(['uid','accessToken'])

    //states
    const [user, setUser] = useState({
        password: '',
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validSubmit, setValidSubmit] = useState(0)
    const [focus, setFocus] = useState('')
    const [alert, setAlert] = useState({
        children: '',
        active: 0
    })

    //ref
    const err_password: any = useRef(null)
    const err_confirm_password: any = useRef(null)

    //redux
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const selector = useSelector((state:any)=>state.user.data)
    const dispatch = useDispatch()

    //local
    const navigate = useNavigate()

    //hooks
    const params = useParams()

    useEffect(()=>{
        (async ()=>{
            const passwordRegexp = /(?=.*[A-Z])(?=.*\d)(?=.*[a-z])[A-Za-z0-9]{10,20}$/
          //  const emailRegexp = /^([A-Za-z0-9.]+)@([A-Za-z0-9.]+)\.([A-Za-z]){3,8}$/
            let validUsername = 1, validPassword = 1
            let validConfirmPassword = 1, validEmail = 1
    
            if(!passwordRegexp.test(user.password) && focus ==='password'){
                validPassword = 0
                err_password.current.innerHTML = 'Password is from 10-20: lower, upper & number.'
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

    useEffect(() => {
        document.title ='Register | Hippo Movies'
    }, [])

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

    const handleChangeActive = (active: number)=>{
        setAlert({
            ...alert,
            active
        })
    }

    const handleSubmit = async (e: any)=>{
        e.preventDefault()
        try {
            if(validSubmit){
                const mergeUser = {
                    ...user,
                    permission: 'user',
                    id: uniqid() + '-' + Math.round(Math.random() * 10000) + '-' + uniqid() + '-' + Math.round(Math.random() * 10000) + '-u',
                }
                const result: any = await registerAPI(mergeUser, params.token as string)
                if(result && result.res.status === 200){
                    if(result.res.data.check) {
                        setAlert({
                            children: result.res.data.message,
                            active: 1
                        })
                    }else {
                        if(!result.res.data.verify){
                            setCookies('uid', result.res.data.data.id, {path:'/'})
                            setCookies('accessToken', result.res.data.data.token, {path: '/'})
                            const action = saveUser(result.res.data.data)
                            dispatch(action)
                            setAlert({
                                children: result.res.data.data.message,
                                active: 1
                            })
                            navigate('/films')
                        } else {
                            setAlert({
                                children: 'Register unsuccessfully!',
                                active: 1
                            })
                        }
                    }
                }
                else{
                    setAlert({
                        children: 'Register unsuccessfully!',
                        active: 1
                    })
                }
            }
        }catch(err){
            console.log(err)
        }
        
    }




    return (
        <div className='register'>
            <Alert onChangeActive={handleChangeActive} active={alert.active}>{alert.children}</Alert>
            <form onSubmit={handleSubmit}>
                <h1 className='title'>REGISTER</h1>
                <div className='main'>
                    <div className='input-item'>
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
                        <div className='input-submit'>
                            <input className='button-item' type='submit' name='username' value="Submit"/>
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
