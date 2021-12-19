import React from 'react'
import Items from '../_Items/Items'
import './Comedy.scss'
import propTypes from 'prop-types'
ComedyPopular.propTypes = {
    comedyFilms: propTypes.arrayOf(propTypes.object)
};

function ComedyPopular(props: any) {
    //props
    const {comedyFilms}: {comedyFilms: object[]} = props

    //state

    const data = comedyFilms.map((elm: any, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='comedy-popular-films'>
            <p className='title'>COMEDY</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
        </div>
    )
}

export default ComedyPopular