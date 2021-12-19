import React, { useEffect, useState } from 'react'
import Menu from '../Films/Partials/FilmsMenu/FilmsMenu'
import Explorer from '../Films/Partials/Explorer/Explorer'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import routes from '../../routes/CustomerRoute'
import MapRoute from '../RouterConfig/MapRoute'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { checkTimeOutToken } from '../../API/ConnectAPI'

function Films(props: any) {

    //states
    const [left, setLeft] = useState('-30rem')

    const userSelector = useSelector((state: any)=>state.user.data)

    
    useEffect(()=>{
        document.title = 'Film | Hippo Movies'
        console.log(userSelector)
    }, [userSelector])

    const handleShowExplorer = ()=>{
        setLeft('0rem')
    }

    const handleHideExplorer = ()=>{
        setLeft('-30rem')
    }

    const navigate = useNavigate()
    const cookies = new Cookies()
    useEffect(()=>{
            (async function() {
                const checkToken = await checkTimeOutToken(cookies.get('accessToken'))
                console.log(checkToken)
                if(checkToken && checkToken.res.data.verify === 0) {
                    cookies.remove('accessToken')
                    cookies.remove('uid')
                    navigate('/')
                }
            })()
        return ()=>{
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (    
        <div className='wrap' style={{  backgroundColor: '#171925', position:'relative', zIndex: '1'}}>
            <Menu onShowExplorer={handleShowExplorer} onHideExplorer={handleHideExplorer}/>
            <Explorer  onHideExplorer={handleHideExplorer} left={left}></Explorer>
            <div onClick={handleHideExplorer} className='master' style={{width: '100%', overflow: 'hidden', height: 'auto'}}>  
                <MapRoute routes={routes}/>             
            </div>
            <Footer onHideExplorer={handleHideExplorer}/>
        </div>
    );
}

export default Films;