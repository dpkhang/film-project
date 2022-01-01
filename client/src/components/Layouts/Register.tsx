import React, { useEffect } from 'react'
import RegisterTag from '../Register/Register'
import { useNavigate, useParams } from 'react-router-dom'
import {useCookies} from 'react-cookie'
import { sendSocket } from '../../API/SocketIO'

function Register(props:any) {
    //cookies 
    const[cookies] = useCookies(['uid', 'accessToken'])
    
    const navigate = useNavigate()

    const params = useParams()
    

    useEffect(()=>{
        sendSocket('register-socket', params.token as string)
        if(cookies.accessToken) 
            if(cookies.uid.match(/-u$/i))
                navigate('/films')
            else
                navigate('/admin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <div style={{  backgroundColor: '#171925', height: '100vh', position:'relative', zIndex: '1', paddingTop:'5rem'}}>
            <RegisterTag></RegisterTag>
        </div>
        
    );
}

export default Register