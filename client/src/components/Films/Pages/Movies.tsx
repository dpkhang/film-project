import React, { useEffect } from 'react'
import Film from '../Partials/Overview/Films/Films'
import FilmsFilter from '../Partials/Overview/FilmsFilter/FilmsFilter'
import './Movies.scss'

function MoviePage(props: any) {
    useEffect(()=>{
        document.title ='Movies | Hippo Movies'
    })

    return (
        <div className='movies-master'>
            <FilmsFilter/>
            <div className='container'>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
                <Film></Film>
            </div>
        </div>
    )

}

export default MoviePage