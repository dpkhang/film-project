import React, { useState } from 'react'
import Items from './Items/Items'
import './NewTrailers.scss'

function NewTrailers(props: any) {
    //props
    const {newTrailers} = props

    //state
    const [images] = useState(newTrailers)

    const onClickPrevious = (e: any) =>{
        let element = e.target.parentNode.nextSibling.firstChild
        let left = element.offsetLeft + 1200
        if(left > 0)
            e.preventDefault();
        else {
            element.style.left = left + 'px'
        }
    }

    const onClickNext= (e: any) => {
        let element = e.target.parentNode.nextSibling.firstChild
        let left = element.offsetLeft - 1200
        if(left < -1500)
            e.preventDefault();
        else {
            element.style.left = left + 'px'
        }
    }

    let item = images.map((image: any, idx: number)=>{
        return (
            <Items url={image.url} title={image.title} key={idx}/>
        )
    })

    return (
        <div className='new-trailers'>
            <p className='title'>NEW TRAILERS</p>
            <div className='next-and-previous'>
                <i className="fas fa-chevron-left" onClick={onClickPrevious}></i>
                <i className="fas fa-chevron-right" onClick={onClickNext}></i>
            </div>
            <div className='item-block'>
                <div className='show-item'>
                    {item}
                </div>
            </div>
        </div>
    )

}

export default NewTrailers
