/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import LoginTag from '../Login/Login'
import { useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'

interface Props{

}

function Login(props: Props) {
    //cookies

    const [cookies] = useCookies(['uid', 'accessToken'])
    
    //history
    const navigate = useNavigate()

    useEffect(()=>{
        if(cookies.accessToken){
            if(cookies.uid.match(/-u$/i))
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