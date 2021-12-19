import React, {} from 'react'
import {Link} from 'react-router-dom'
import './Items.scss'
import propTypes from 'prop-types'

Items.propTypes = {
    width: propTypes.string,
    height: propTypes.string,
    name: propTypes.string,
    nationality: propTypes.string,
    src: propTypes.string,
}

function Items(props: any) {

    const style = {
        width: props.width ? props.width + 'rem' : '18rem',
        height: props.height ? props.height + 'rem' : '20rem',
    }
    const fontSize = props.width ? parseInt(props.width)/6:3

    return (
        <div className='items-films-vision' style={{width: style.width}}>
            <div  className='block' style={style}>
                <div className='item-flip'>
                    <div className='img-item'>
                        <img src={props.src} alt=''/>
                    </div>
                    <div className='content-item'>
                        <p className='title' style={{fontSize: fontSize+'rem'}} title={props.name}>{props.name}</p>
                        <p className='director' style={{fontSize: fontSize - 1 +'rem'}}>{props.nationality}</p>
                        <div className='button'>
                            <Link className='button-link' to=''>More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Items