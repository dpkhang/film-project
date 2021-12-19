import React from 'react'
import Items from '../_Items/Items'
import './Action.scss'
import propTypes from 'prop-types'
PopularFilms.propTypes = {
    actionFilms: propTypes.arrayOf(propTypes.object)
};

function PopularFilms(props: any) {
    //props
    const {actionFilms}:{actionFilms: object[]} = props

    //state

    const data = actionFilms.map((elm: any, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='action-popular-films'>
            <p className='title'>ACTION</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
        </div>
    )
}

export default PopularFilms