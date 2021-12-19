import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './UpdateProfile.scss'
import $ from 'jquery'

UpdateProfile.propTypes = {
    user: PropTypes.object,
    onClickToChangeFrame: PropTypes.func
};

function UpdateProfile(props: any) {
    //props
        const {user, onClickToChangeFrame}: {user: any, onClickToChangeFrame: any} = props

    //state

    //hook

    useEffect(()=>{
        $('.update-profile-background .btn-update')[0].style.letterSpacing = '4px'
    }, [])
    //handle

    const handleClick =(e: any)=>{
        onClickToChangeFrame(e.target.dataset.frame)
        e.target.style.letterSpacing = '4px'
        for(let value of $('.update-profile-background .btn-update') as any)
            if(value.dataset.frame !== e.target.dataset.frame) {
                value.removeAttribute('style')
            }
    }

    return (
        <div className="update-profile-background">
            <div className="update-profile">
                <img src="/img/main/jurassic.jpg" alt="" />
                <div className="show-details">
                    <p className="show">{user.name}</p>
                    <p className="show">{user.username}</p>
                    <p className="show">{user.email}</p>
                    <p className="show">{user.phone}</p>
                </div>
                <button className="btn btn-update" data-frame='vip' onClick={handleClick}>Manage VIP</button>
                <button className="btn btn-update" data-frame='update' onClick={handleClick}>Edit Profile</button>
            </div>
        </div>
    );
}

export default UpdateProfile