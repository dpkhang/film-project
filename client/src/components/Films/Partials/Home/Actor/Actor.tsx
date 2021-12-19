import React, {} from 'react'
import Items from './Items/Items'
import './Actor.scss'
import {Link} from 'react-router-dom'

function Actor(props: any) {
    //props
    const {actors} = props

    const data = actors.map((actor: any, index: number)=>{
        return (
            <Items width={actor.width} height={actor.height} src={actor.src} name={actor.name} nationality={actor.nationality} key={index}/>
        )
    })

    return (
        <div className='actor'>
            <p>ACTORS</p>
            <div className='popular-actor'>
               {data}
            </div>
            <Link className='more' to='/films/actors'>More</Link>
        </div>
    )
}

export default Actor