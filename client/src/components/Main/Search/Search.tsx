import React, {useEffect} from 'react'
import './Search.scss'
import {Link} from 'react-router-dom'
import $ from 'jquery'

Search.propTypes = {
    
};

function Search() {
    //props

    //state

    //hook
    useEffect(()=>{
        setTimeout(()=>{
            $('.main-login-background .account .item-btn').css("opacity", "1")
            $('.main-login-background .main-login-text .hippo-img').css("right", "0")
            $('.main-login-background .main-login-text .text').css("left", "0")
        }, 100)
    }, [])

    return (
        <div className='main-login-background'>
            <div className='blur'>
                <div className='main-login'>
                    <div className='main-login-text'>
                        <div className='col'>
                            <img src='/img/logo/logo.jpg' alt=''className="hippo-img" />
                            <div className='text'>
                                <p>Unlimited movies,</p> 
                                <p>TV shows, and more.</p>
                                <p>Watch anythings. Cancel anytime</p>
                            </div>
                        </div>
                    </div>
                    <div className='main-login account'>
                        <Link className="item-btn btn" to="/login">Sign in</Link>
                        <Link className="item-btn btn-sign-up" to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search