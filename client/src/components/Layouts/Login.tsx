/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import LoginTag from '../Login/Login'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

interface Props{

}

function Login(props: Props) {
    const cookies = new Cookies()
    const navigate = useNavigate()

    useEffect(()=>{
        if(cookies.get('accessToken')){
            if(cookies.get('uid').match(/-u$/i))
                navigate('/films')
            else 
                navigate('/admin')
        }
    }, [])

    return ( 
        <div style={{  backgroundColor: '#171925', height: '100vh', position:'relative', zIndex: '1', paddingTop:'10rem'}}>
            <LoginTag/> 
        </div>  
    );
}

export default Login