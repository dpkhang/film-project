
import React from 'react'
import NotFound from '../components/NotFound/NotFound'
import Main from '../components/Layouts/Main'
import Films from '../components/Layouts/Films'
import Introduce from '../components/Layouts/Introduce'
import Register from '../components/Layouts/Register'
import Contact from '../components/Layouts/Contact'
import Login from '../components/Layouts/Login'
import Admin from '../components/Layouts/Admin'
const routes = [
    { 
        path: '/',
        component: ()=> <Main/>,
    },
    {
        path: '/films/*',
        component: ()=> <Films/>,
    },
    { 
        path: '/contact',
        component: ()=> <Contact/>,
    },
    {
        path: '/introduce',
        component: ()=> <Introduce/>
    },
    {
        path: '/register',
        component: ()=> <Register/>,
    },
    {
        path: '/login',
        component: ()=> <Login/>,
    },
    {
        path: '/admin/*',
        component: ()=> <Admin/>,
    },
    {
        path: '*',
        component: ()=> <NotFound></NotFound>,
    }
]

export default routes