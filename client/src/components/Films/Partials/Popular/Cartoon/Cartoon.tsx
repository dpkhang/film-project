import React from 'react'
import Items from '../_Items/Items'
import './Cartoon.scss'
import propTypes from 'prop-types'
PopularFilms.propTypes = {
    cartoonFilms: propTypes.arrayOf(propTypes.object)
};

function PopularFilms(props: any) {
    //props
    const {cartoonFilms}:{cartoonFilms: object[]} = props

    //state

    const data = cartoonFilms.map((elm: any, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='cartoon-popular-films'>
            <p className='title'>CARTOON</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
        </div>
    )
}

export default PopularFilms