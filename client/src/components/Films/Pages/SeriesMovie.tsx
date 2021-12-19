import React, { useEffect } from 'react'
import Film from '../Partials/Overview/Films/Films'
import FilmsFilter from '../Partials/Overview/FilmsFilter/FilmsFilter'
import './SeriesMovies.scss'


function SeriesMoviePage(props: any) {
    useEffect(()=>{
        document.title ='Series Movies | Hippo Movies'
    }, [])
    return (
        <div className='series-movies-master'>
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
            </div>
        </div>
    )
}

export default SeriesMoviePage