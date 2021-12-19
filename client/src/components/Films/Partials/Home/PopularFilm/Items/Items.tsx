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
        e.target.nextSibling.classList.add('active')
        e.target.nextSibling.nextSibling.firstChild.classList.add('scale-img')
    }

    const onMouseOutHandling = (e: any) =>{
        e.target.nextSibling.classList.remove('active')
        e.target.nextSibling.nextSibling.firstChild.classList.remove('scale-img')
    }

    return (
        <div className= 'new-trailer-item' onMouseOver= {onMouseOverHandling} onMouseOut={onMouseOutHandling}>
            <Link to ='/films' title={props.title}></Link>
            <i className="fas fa-play-circle"></i>
            <div className='img'>
                <img src={props.url} alt={props.title}/> 
            </div>
        </div>
    )
}

export default Items
