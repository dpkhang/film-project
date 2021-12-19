import React from 'react'
import Items from './Items/Items'
import './CategoriesFilm.scss'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
CategoriesFilm.propTypes = {
    categories: propTypes.arrayOf(propTypes.object)
};

function CategoriesFilm(props: any) {
    //props
    const {categories} = props

    //state

    const data = categories.map((elm: any, idx: number)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='categories-films'>
            <p className='title'>CATEGORIES</p>
            <div className='item-block'>
                <div className='show-item'>
                    {data}
                </div>
            </div>
            <Link className='more' to='/films/categories'>More</Link>
        </div>
    )
}

export default CategoriesFilm