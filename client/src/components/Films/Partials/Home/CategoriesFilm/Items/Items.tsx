import React from 'react'
import PropTypes from 'prop-types'
import './Items.scss'
import {Link} from 'react-router-dom'

Items.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
};

function Items(props: any) {

    const onMouseOverHandling = (e: any) =>{
        e.target.nextSibling.style.letterSpacing = '.3rem'
        e.target.nextSibling.style.color = '#ffffff'
        e.target.nextSibling.nextSibling.firstChild.classList.add('scale-img')
    }

    const onMouseOutHandling = (e: any) =>{
        e.target.nextSibling.style.letterSpacing = '0rem'
        e.target.nextSibling.style.color = 'rgba(252, 252, 252, 0.599)'
        e.target.nextSibling.nextSibling.firstChild.classList.remove('scale-img')
    }

    return (
        <div className= 'categories-item' onMouseOver= {onMouseOverHandling} onMouseOut={onMouseOutHandling}>
            <Link to ='/films' title={props.title}></Link>
            <p>{props.title}</p>
            <div className='img'>
                <img src={props.url} alt={props.title}/> 
            </div>
        </div>
    )
}

export default Items
