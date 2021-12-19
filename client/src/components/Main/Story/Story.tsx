import React, { useEffect } from 'react'
import './Story.scss'
import $ from 'jquery'
Story.propTypes = {
    
};

function Story() {
    //props

    //state

    //hook  

    useEffect(()=>{
        $(window).scroll((e)=>{
            if($(window).scrollTop() as number > window.innerHeight - window.innerHeight/2 && $(window).scrollTop() as number < window.innerHeight + 35*15){
                $('.main-story-background').css('opacity', 1)
                $('.main-story-background .main-story').css('transform', 'translateX(0rem)')
            }    
            else {
                $('.main-story-background').css('opacity', .2)
                $('.main-story-background .main-story').css('transform', 'translateX(6rem)')
            }
        })
    }, [])
    //handle


    return (
        <div className='main-story-background'>
            <div className='main-story'>
                <div className='col main-story-text'>
                    <p>Hippo will bring for you any experiences.</p>
                    <p>Watching with high quality. </p>
                    <p>Providing any famous TV shows...</p>
                </div>
                <div className='col main-story-img'>
                    <video loop={true} autoPlay={true} muted={true} >
                        <source src="/video/main/action.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Story