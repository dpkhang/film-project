import React from 'react'
import './Films.scss'
import { Link } from 'react-router-dom'
import $ from 'jquery'

interface Props {

}

function Films(props: Props) {

    const handleClickFavorite = (e: React.MouseEvent) => {
        $(e.target).toggleClass('active-favorite')
    }

    return (
        <div className='component-film'>
            <div className='img-film'>
                <img src='/img/banner/jurassic-world.jpg' alt='' />
            </div>
            <div className='title-film'>
                <p className='title'>Title Film</p>
                <i className='fas fa-heart' onClick={handleClickFavorite}></i>
                <p className='director'>James</p>
                <div className='button-see'>
                    <Link to='/films/details/film/hello'>See</Link>
                    <Link to='/films/details'>Trailer</Link>
                </div>
            </div>
        </div>
    )
}

export default Films