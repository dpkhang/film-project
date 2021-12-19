import React, {useEffect} from 'react'
import './Download.scss'
import $ from 'jquery'
Download.propTypes = {
    
};

function Download() {
    //props

    //state

    //hook
    useEffect(()=>{
        $(window).scroll((e)=>{
            if($(window).scrollTop() as number > window.innerHeight + 70*15 - window.innerHeight/2 && $(window).scrollTop() as any < window.innerHeight + 110*15){
                $('.main-download-background').css('opacity', 1)
                $('.main-download-background .main-download').css('transform', 'translateX(0rem)')
            }    
            else {
                $('.main-download-background').css('opacity', .2)
                $('.main-download-background .main-download').css('transform', 'translateX(6rem)')
            }
        })
    }, [])
    //handle

    return (
        <div className="main-download-background">
            <div className="main-download">
                <div className="col main-download-text">
                    <div className="text">
                        <p>Hippo is supported on Smartphone, Tablet...</p>
                        <p>You can download in Android or iOS.</p>
                    </div>
                    <div className="img">
                        <img className="play-store" src="/img/logo/download-play-store.png" alt="" />
                        <img className="app-store" src="/img/logo/download-app-store.png" alt="" />
                    </div>
                </div>
                <div className="col main-download-phone-image">
                    <img src="/img/logo/smartphone.png" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Download;
