import Films from '../components/Admin/Pages/Films'
import Categories from '../components/Admin/Pages/Categories'
import Actors from '../components/Admin/Pages/Actors'
import Directors from '../components/Admin/Pages/Directors'
import Users from '../components/Admin/Pages/Users'
import Homes from '../components/Admin/Pages/Home'

const routes = [
    {
        path: '/',
        component: ()=> <Homes/>
    },
    {
        path: '/films',
        component: ()=><Films/>
    },
    {
        path: '/categories',
        component: ()=> <Categories/>
    },
    {
        path: '/actors',
        component: ()=> <Actors/>
    },
    {
        path: '/directors',
        component: ()=> <Directors/>
    },
    {
        path: '/users',
        component: ()=> <Users/>
    },
]

export default routes