import React, { useEffect } from 'react'
import RegisterTag from '../Register/Register'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Register(props:any) {
    const navigate = useNavigate()
    const cookies = new Cookies()

    useEffect(()=>{
        if(cookies.get('accessToken') && cookies.get('uid').match(/-u$/i))
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