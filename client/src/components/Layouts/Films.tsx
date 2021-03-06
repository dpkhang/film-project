import React, { useEffect, useState } from 'react'
import Menu from '../Films/Partials/FilmsMenu/FilmsMenu'
import Explorer from '../Films/Partials/Explorer/Explorer'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import routes from '../../routes/CustomerRoute'
import MapRoute from '../RouterConfig/MapRoute'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { checkTimeOutToken } from '../../API/AxiosAPI'


function Films(props: any) {
    //cookies

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, setCookies, removeCookies] = useCookies(['uid', 'accessToken'])

    //states
    const [left, setLeft] = useState('-30rem')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const selector = useSelector((state: any)=>state.user.data)

    
    useEffect(()=>{
        document.title = 'Film | Hippo Movies'
    }, [])

    const handleShowExplorer = ()=>{
        setLeft('0rem')
    }

    const handleHideExplorer = ()=>{
        setLeft('-30rem')
    }

    const navigate = useNavigate()
    useEffect(()=>{
            (async function() {
                if(cookies.accessToken){
                    const checkToken = await checkTimeOutToken(cookies.accessToken)
                    if(checkToken && checkToken.res.data.verify === 0) {
                        removeCookies('uid')
                        removeCookies('accessToken')
                        navigate('/')
                    }
                }else{
                    removeCookies('uid')
                        removeCookies('accessToken')
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