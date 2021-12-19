import React, { useEffect } from 'react'
import Menu from '../Admin/Partials/Menu/Menu'
import MapRoute from '../RouterConfig/MapRoute'
import routes from '../../routes/AdminRoute'
import './Admin.scss'
interface Props {

}

function Admin(props: Props) {

    useEffect(()=>{
        document.title = 'Admin | Hippo Movies'
    })

    return (
        <div className="admin">
            <div className="admin-content">
                <Menu></Menu>
                <div style={{width: '83%', height: '100vh'}}>
                    <MapRoute routes={routes}></MapRoute>
                </div>
            </div>
            <div className="admin-background"></div>
        </div>
    );
}

export default Admin;