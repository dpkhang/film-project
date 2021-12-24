import React, {useEffect } from 'react'
import './Menu.scss'
import LinkMenu from '../../RouterConfig/LinkMenu'
import $ from 'jquery'
import {Link} from 'react-router-dom'

function Menu() {
    //props

    //state

    //ref

    //handle


    const listMenu = [
        {
            label:['Contact '],
            to: '/contact',
        },
        {
            label:['Introduce '],
            to: '/introduce',
        },
        {
            label:['Login '],
            to: '/login',
        },
    ]

    const handleMenuBackground = (e: any)=>{
        if($('.main-menu').length !== 0){
            let offset: any = $('.main-menu').offset()
            let top: number = offset.top
            $('.main-menu').toggleClass('main-menu-background-active', top !== 0)    
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleMenuBackground)
        return ()=>{
            window.removeEventListener('scroll', handleMenuBackground)
        }
    }, [])

    let menu = listMenu.map((value: any, index)=>{
        return (
            <LinkMenu className="li-master-menu" label={value.label} to={value.to} key={index}/>
        )
    })

    return (
        <div className='main-menu'>
            <div className="row-menu">
                <Link to='/' className="row-menu-title">
                    <img src='/img/logo/header-logo.png' alt=''/>
                </Link>
                <ul>
                    {menu}
                </ul>
            </div>
        </div>
    );
}

export default Menu
