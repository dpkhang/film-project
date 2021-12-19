import React from 'react'
import Items from '../_Items/Items'
import './Drama.scss'
import propTypes from 'prop-types'
DramaPopular.propTypes = {
    dramaFilms: propTypes.arrayOf(propTypes.object)
};

function DramaPopular(props: any) {
    //props
    const {dramaFilms}:{dramaFilms: object[]} = props

    //state

    const data = dramaFilms.map((elm: any, idx)=>{
        return (<Items url={elm.url} title={elm.name} key={idx}/>)
    })

    return (
        <div className='drama-popular-films'>
            <p className='title'>DRAMA</p>
            <div className='item-block'>
                <div className='show-item'>
                  {data}
                </div>
            </div>
        </div>
    )
}

export default DramaPopular