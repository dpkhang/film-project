import React from 'react'
import Items from '../_Items/Items'
import './Romance.scss'
import propTypes from 'prop-types'
RomancePopular.propTypes = {
    romanceFilms: propTypes.arrayOf(propTypes.object)
};

function RomancePopular(props: any) {
    //props
    const {romanceFilms}:{romanceFilms: object[]} = props

    //state

    const data = romanceFilms.map((elm: any, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='romance-popular-films'>
            <p className='title'>ROMANCE</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
        </div>
    )
}

export default RomancePopular