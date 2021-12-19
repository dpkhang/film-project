import React from 'react'
import Items from '../_Items/Items'
import './Horror.scss'
import propTypes from 'prop-types'
HorrorPopular.propTypes = {
    horrorFilms: propTypes.arrayOf(propTypes.object)
};

function HorrorPopular(props: any) {
    //props
    const {horrorFilms}:{horrorFilms: object[]} = props

    //state

    const data = horrorFilms.map((elm: any, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='horror-popular-films'>
            <p className='title'>HORROR</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
        </div>
    )
}

export default HorrorPopular