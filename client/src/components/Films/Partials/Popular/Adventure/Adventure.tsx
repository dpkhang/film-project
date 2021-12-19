import React from 'react'
import Items from '../_Items/Items'
import './Adventure.scss'
import propTypes from 'prop-types'
PopularFilms.propTypes = {
    adventureFilms: propTypes.arrayOf(propTypes.object)
};

function PopularFilms(props: any) {
    //props
    const {adventureFilms}: {adventureFilms: object[]} = props

    //state

    const data = adventureFilms.map((elm: any, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='adventure-popular-films'>
            <p className='title'>ADVENTURE</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
        </div>
    )
}

export default PopularFilms