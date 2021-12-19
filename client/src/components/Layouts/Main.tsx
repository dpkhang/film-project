/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Search from '../Main/Search/Search'
import Ask from '../Main/Ask/Ask'
import Download from '../Main/Download/Download'
import Story from '../Main/Story/Story'
import Enjoy from '../Main/Enjoy/Enjoy'
import Menu from '../Main/Menu/Menu'
import Footer from '../Footer/Footer'
import Cookies from 'universal-cookie'
import $ from 'jquery'
import { useNavigate } from 'react-router'

const Main= () =>{


    const navigate = useNavigate()
    const cookies = new Cookies()
    useEffect(()=>{
        document.title = 'Hippo Movies'
        $(window).scrollTop(0)
        if(cookies.get('accessToken'))
            if(cookies.get('uid').match(/-u$/i))
                navigate('/films')
            else {
                navigate('/admin')
            }
    }, [])




    return (
        <div style={{  backgroundColor: '#171925', position:'relative', zIndex: '1'}}>   
            <Menu></Menu>
            <Search></Search>
            <Story></Story>
            <Enjoy></Enjoy>
            <Download></Download>
            <Ask></Ask>
            <Footer/>
        </div>
    )
}

export default Main