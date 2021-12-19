import React, {useState} from 'react'
import  './Popular.scss'
import Action from '../Partials/Popular/Action/Action'
import Adventure from '../Partials/Popular/Adventure/Adventure'
import Cartoon from '../Partials/Popular/Cartoon/Cartoon'
import Drama from '../Partials/Popular/Drama/Drama'
import Horror from '../Partials/Popular/Horror/Horror'
import Comedy from '../Partials/Popular/Comedy/Comedy'
import Romance from '../Partials/Popular/Romance/Romance'

interface Props {

}

const Popular = (props: Props) => {
    //props

    //state
    const [films] = useState([
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
    ])

    return (
        <div className="popular">
            <Action actionFilms={films}></Action>
            <Adventure adventureFilms={films}></Adventure>
            <Cartoon cartoonFilms={films}></Cartoon>
            <Horror horrorFilms={films}></Horror>
            <Comedy comedyFilms={films}></Comedy>
            <Drama dramaFilms={films}></Drama>
            <Romance romanceFilms={films}></Romance>
        </div>
    )
}

export default Popular
