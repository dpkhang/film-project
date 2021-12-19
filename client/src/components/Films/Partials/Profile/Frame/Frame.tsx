import React from 'react'
import UpdateFrame from './UpdateFrame/UpdateFrame'
import VIPFrame from './VIPFrame/VIPFrame'
import PropTypes from 'prop-types'
import './Frame.scss'
Frame.propTypes = {
    frameType: PropTypes.string,
    user: PropTypes.object
};

function Frame(props: any) {

    //props

    const {frameType, user}:{frameType: string, user: object } = props;

    return (
        <div className="frame-profile-background">
            {frameType === 'vip' ? <VIPFrame/> : <UpdateFrame user={user}/>}
        </div>
    );
}

export default Frame;