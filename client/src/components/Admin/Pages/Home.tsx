import React, { useEffect, useState } from 'react'
import './Home.scss'
import $ from 'jquery'
interface Props {

}

function Home(props: Props) {
    //states

    const [rotate, setRotate] = useState<number>(0);

    //handle

    const handleClickToShowSetting = (e: React.MouseEvent)=>{
        setRotate(()=>rotate === 0 ? 180 : 0)
    }

    useEffect(()=>{
        $('.admin-home-background .admin-home-setting-btn i').css('transform', `rotateZ(${rotate}deg)`)
    },[rotate])

    return (
        <div className="admin-home-background">
            <div className="col left-col">
                <div className="block admin-home-info-login">
                    <h2>Information</h2>
                    <p>Username: adminwebsite</p>
                    <p>Name: Dinh Phuc Khang</p>
                    <p className="admin-home-setting-btn" onClick={handleClickToShowSetting}>
                        <i className="fas fa-cog"></i>
                        <span>Setting</span>
                    </p>
                </div>
                <div className="block admin-home-"></div>
            </div>
            <div className="col right-col">
                <div className="quantity">Item</div>
                <div className="quantity">Item</div>
                <div className="quantity">Item</div>
                <div className="quantity">Item</div>
            </div>
        </div>
    );
}

export default Home;