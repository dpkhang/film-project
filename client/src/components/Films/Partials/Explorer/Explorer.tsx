import React, { } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import './Explorer.scss'
Explorer.propTypes = {
    left: PropTypes.string,
    onHideExplorer: PropTypes.func
};

function Explorer(props: any) {

    //cookies
    const [,, removeCookies] = useCookies(['uid', 'accessToken'])

    //props
    const { left , onHideExplorer} = props

    //hooks
   // const history = useHistory()


    const handleHideExplorer = (e: any)=>{
        onHideExplorer()
    }

    const handleLogout = (e: any)=>{
        removeCookies('uid', {path: '/'})
        removeCookies('accessToken', {path: '/'})
    }

    return (
        <div className="master-films-explorer" style={{left: left}}>
            <img src="/img/main/jurassic.jpg" alt="" className="wallpaper"/>
            <p className="avatar"><img src="/img/main/jurassic.jpg" alt="" /></p>
            <ul className="menu" onClick={handleHideExplorer}>
                <li><Link to="/films/profile/">Profiles</Link></li>
                <li><Link to="/films/favorite">Favorite</Link></li>
                <li><Link to="/films/history">History</Link></li>
                <li><Link to="/films/help">Help</Link></li>
                <li><Link to="/films/security-policy">Security</Link></li>
                <li><Link to="/films/setting">Setting</Link></li>
                <li><Link to ="/" onClick={handleLogout}>Log out</Link></li>
            </ul>
            <div className="contact">
                <p>Address: Ninh Kieu, Can Tho</p>
                <p>Phone: 0939305459</p>
                <p>Website: http://hippomovies.com</p>
            </div>
        </div>
    );
}

export default Explorer