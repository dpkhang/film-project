import React, { useEffect } from 'react'
import $ from 'jquery'
import './Ask.scss'

Ask.propTypes = {
    
};

function Ask() {
    //props

    //state

    //ref

    //hook

    useEffect(()=>{
        $(window).scroll((e)=>{
            if($(window).scrollTop() as number > window.innerHeight + 110*15 - window.innerHeight/2){
                $('.main-ask-background').css('opacity', 1)
                $('.main-ask-background .main-ask').css('transform', 'translateY(0rem)')
            }    
            else {
                $('.main-ask-background').css('opacity', .1)
                $('.main-ask-background .main-ask').css('transform', 'translateY(6rem)')
            }
        })
    }, [])
    //handle

    const handleClick = (e: any)=>{
        $(e.target).next().slideToggle()  
        const elm: any = $('.ask-question .question')
        for (let value of elm) {
            console.log($(e.target))
            if($(e.target)[0] !== value) {
                $(value).next().slideUp()
            }
        }
    }

    useEffect(()=>{

    })

    return (
        <div className="main-ask-background">
            <div className="main-ask">
                <div className="row">
                    <p className="title">Some Frequently Ask Questions </p>
                </div>
                <div className="row ask-question">
                    <p className="question" onClick={handleClick}>What is Hippo Movies ?</p>
                    <div className="content">
                        <p className="text">
                            Hippo movies is a movies application. 
                        </p>
                        <p className="text">
                            Hippo supports any films, show categories. It help you relax after school or after work.
                        </p>
                    </div>
                </div>
                <div className="row ask-question">
                    <p className="question" onClick={handleClick}>How much does Hippo cost ?</p>
                    <div className="content">
                        <p className="text">
                            Cost for Hippo will from $5 to $20 for a month.
                        </p>
                        <p className="text">
                            Hippo supports for you many packages to help choose easily.
                        </p>
                    </div>
                </div>
                <div className="row ask-question">
                    <p className="question" onClick={handleClick}>Is good for kids ?</p>
                    <div className="content">
                        <p className="text">
                            Yes, sir! Hippo has to many Kids shows for your children.
                        </p>
                        <p className="text">
                            Hippo supports learning shows for children. 
                        </p>
                    </div>
                </div>
                <div className="row ask-question">
                    <p className="question" onClick={handleClick}>What do you do with Hippo ?</p>
                    <div className="content">
                        <p className="text">
                            Hippo has an extensive library of feature films, documentaries, TV shows, anime, award-winning Hippo originals, and more. 
                        </p>
                        <p className="text">
                            Watch as much as you want, anytime you want
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ask;