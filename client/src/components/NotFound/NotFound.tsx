import React from 'react'
import './NotFound.scss'

function NotFound(props: any) {
    return (
        <div className='not-found'>
            <img src ='/img/svg/404-error.svg' alt=''/>
            <h1>This is not webpage you are looking for</h1>
        </div>
    );
}

export default NotFound
