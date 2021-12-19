import React, { useEffect } from 'react'
import './Enjoy.scss'
import $ from 'jquery'
Enjoy.propTypes = {
    
};

function Enjoy() {
    //props

    //state 

    //hook

    useEffect(()=>{
        $(window).scroll((e)=>{
            if($(window).scrollTop() as number > window.innerHeight + 35*15 - window.innerHeight/2 && $(window).scrollTop() as number < window.innerHeight + 70*15){
                $('.main-enjoy-background').css('opacity', 1)
                $('.main-enjoy-background .main-enjoy').css('transform', 'translateX(0rem)')
            }    
            else {
                $('.main-enjoy-background').css('opacity', .2)
                $('.main-enjoy-background .main-enjoy').css('transform', 'translateX(-6rem)')
            }
        })
    }, [])

    return (
        <div className='main-enjoy-background'>
            <div className="main-enjoy">
                <div className="col main-enjoy-video">
                    <video loop autoPlay muted >
                        <source src="/video/main/film.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col main-enjoy-text">
                    <p>Enjoying on TV, Laptop...</p>
                    <p>Relaxing in the weekend.</p>
                    <p>Happiness with your family.</p>
                    <p>Stay with your lover.</p>
                </div>
            </div>
        </div>
    );
}

export default Enjoy