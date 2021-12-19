import New from '../components/Films/Pages/New'
import Popular from '../components/Films/Pages/Popular'
import Movies from '../components/Films/Pages/Movies'
import SeriesMovies from '../components/Films/Pages/SeriesMovie'
import Trailers from '../components/Films/Pages/Trailer'
import NotFound from '../components/NotFound/NotFound'
import Details from '../components/Films/Pages/Detail'
import Home from '../components/Films/Pages/Home'
import Actors from '../components/Films/Pages/Actor'
import Profile from '../components/Films/Pages/Profile'
import History from '../components/Films/Pages/History'
import Favorite from '../components/Films/Pages/Favorite'
const MasterSubRouter= [
    {
        path: '/',
        component: ()=> <Home/>
    },
    {
        path: '/new',
        component: ()=> <New/>
    },
    {
        path: '/popular',
        component: ()=> <Popular/>
    },
    {
        path: '/movies',
        component: ()=> <Movies/>
    },
    {
        path: '/series-movies',
        component: ()=> <SeriesMovies/>
    },
    {
        path: '/details/*',
        component: ()=> <Details />
    },
    {
        path: '/trailers',
        component: ()=> <Trailers/>
    },
    {
        path: '/actors',
        component: ()=> <Actors></Actors>
    },
    {
        path: '/profile',
        component: ()=> <Profile></Profile>
    },
    {
        path: '/history',
        component: ()=> <History></History>
    },
    {
        path: '/favorite',
        component: ()=> <Favorite></Favorite>
    },
    {
        path: '',
        component: ()=> <NotFound/>
    },
]

export default MasterSubRouter