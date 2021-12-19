import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FilmDetail from '../Partials/Detail/FilmDetail'

const DetailPage = () => {
    return (
        <div>
            <Routes>
                <Route path='/film/:slug' element={<FilmDetail/>}></Route>
                <Route path="/actor/: slug" element={<FilmDetail/>}></Route>
            </Routes>
        </div>
    )
}

export default DetailPage