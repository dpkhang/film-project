import React, { useState } from 'react'
import './Home.scss'
import Slider from '../Partials/Home/Slider/Slider'
import NewTrailers from '../Partials/Home/NewTrailers/NewTrailers'
import Actors from '../Partials/Home/Actor/Actor'
import PopularFilm from '../Partials/Home/PopularFilm/PopularFilm'
import CategoriesFilm from '../Partials/Home/CategoriesFilm/CategoriesFilm'

Home.propTypes = {
    
};

function Home(props: any) {
    //props
    //state
    const [newTrailers] = useState([
        {
            url: '/img/main/it.jpg',
            title: 'IT'
        },
        {
            url: '/img/main/avenger.jpg',
            title: 'Avenger Endgame'
        },
        {
            url: '/img/main/jurassic.jpg',
            title: 'Jurassic World'
        },
        {
            url: '/img/main/kongvsgodzilla.jpg',
            title: 'Kong vs Godzilla'
        },
        {
            url: '/img/main/naruto.jpg',
            title: 'Naruto'
        },
        {
            url: '/img/main/xmen.jpg',
            title: 'X-Men'
        },
        {
            url:'/img/main/theconjuring.jpg',
            title: 'The Conjuring'
        }
    ])
    const [slider] = useState([   
        {
            url:'/img/banner/jurassic-world.jpg',
            active: 1
        },
        {
            url:'/img/banner/it.jpg',
            active: 0
        },
        {
            url:'/img/banner/avenger-endgame.jpg',
            active: 0
        },
        {
            url:'/img/banner/kong-vs-godzilla.jpg',
            active: 0
        },
        {
            url:'/img/banner/naruto.jpg',
            active: 0
        },
        {
            url:'/img/banner/xmen.jpg',
            active: 0
        }])
    const [actors] = useState([
        {
            src: '/img/actors/ngothanhvan.jpg',
            width:'13',
            height: '19',
            name: 'Ngo Thanh Van',
            nationality: 'VietNamese'
        },
        {
            src: '/img/actors/robert.jpg',
            width: '14',
            height: '21',
            name: 'Robert Downey Jr.',
            nationality: 'American'
        },
        {
            src: '/img/actors/angeliajolie.jpg',
            width: '15',
            height: '23',
            name: 'Angelina Jolie',
            nationality: 'American'
        },
        {
            src: '/img/actors/Chris.jpeg',
            width: '14',
            height: '21',
            name: 'Chris Evans',
            nationality: 'American'
        },
        {
            src: '/img/actors/Dwayne.jpg',
            width: '13',
            height: '19',
            name: 'Dwayne Johnson',
            nationality: 'American'
        }])
    const [categories] = useState([
        {
            name: 'Action',
            url: '/img/categories/action.jpg'
        },
        {
            name: 'Romance',
            url: '/img/categories/romance.jpg'
        },
        {
            name: 'Cartoon',
            url: '/img/categories/cartoon.jpg'
        },
        {
            name: 'Horror',
            url: '/img/categories/horror.jpg'
        },
        {
            name: 'Comedy',
            url: '/img/categories/comedy.jpg'
        }
    ]) 

    const [popularFilms] = useState([
        {
            name: 'Avatar',
            url: '/img/films/avatar.jpg'
        },
        {
            name: 'Bo gia',
            url: '/img/films/bogia.jpg'
        },
        {
            name: 'Fast & Furious',
            url: '/img/films/fast&furious.jpg'
        },
        {
            name: 'Parasite',
            url: '/img/films/kysinhtrung.jpg'
        },
        {
            name: 'Nhu Y Truyen',
            url: '/img/films/nyt.jpg'
        }
    ] as object[])

    return (
        <div className='home'>
            <Slider slider={slider}/>
            <NewTrailers newTrailers={newTrailers}/>
            <PopularFilm popularFilms={popularFilms} />
            <CategoriesFilm categories={categories}/>
            <Actors actors={actors} />
        </div>
    )
}

export default Home
