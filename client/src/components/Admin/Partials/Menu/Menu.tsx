import React from 'react'
import './Menu.scss'
import Li from '../../../RouterConfig/LinkMenu'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
interface Props {

}

function Menu(props: Props) {

    const menuList = [
        {
            label: 'Home',
            to: '/admin',
        },
        {
            label: 'Films',
            to: '/admin/films',
        },
        {
            label: 'Categories',
            to: '/admin/categories',
        },
        {
            label: 'Directors',
            to: '/admin/directors',
        },
        {
            label: 'Actors',
            to: '/admin/actors',
        },
        {
            label: 'Users',
            to: '/admin/users',
        }
    ]

    const LiList = menuList.map((item, idx)=>{
        return (
            <Li label={item.label} to={item.to} className="admin-menu-item" key={idx}></Li>
        )
    })

    const handleLogout = (e: any)=>{
        const cookies= new Cookies()
        cookies.remove('accessToken')
        cookies.remove('uid')
    }

    return (
        <div className="admin-menu-header-background">
            <div className="admin-menu-logo">
                <img src="/img/logo/header-logo.png" alt="" />
            </div>
            <div className="admin-menu-header">
                <ul>
                    {LiList}
                    <li  className="admin-menu-item admin-menu-item-logout">
                        <Link to='/' onClick={handleLogout}>Log out</Link>
                    </li> 
                </ul>
            </div>
        </div>
    );
}

export default Menu;