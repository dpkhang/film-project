import React, { useEffect } from 'react'
import './FilmDetail.scss'
import $ from 'jquery'
interface Props  {

}

const FilmDetail = (props: Props) => {


    useEffect(()=>{
        $(window).scrollTop(0)
        
    }, [])

    return (
        <div className="film-detail">
            <div className="film-detail-background">
                <img src="/img/main/jurassic.jpg" alt="" />
            </div>
            <div className="film-detail-content">
                <div className="image-content">
                    <p className="split"></p>
                    <img src="/img/main/jurassic.jpg" alt="" />
                </div>
                <div className="btn-watch">
                    <button className="btn btn-see">Watch</button>
                    <a href="#content" className="btn btn-trailer" >Trailer</a>
                </div>
                <div className="detail-content">
                    <div className="introduce">
                        <p className="content">JURASSIC PARK 4</p>
                        <p className="content">2015</p>
                        <p className="content">Colin Trevorrow</p>
                        <p className="content">Action</p>
                        <p className="content">150 minutes</p>
                    </div>
                    <div className="detail-actor">
                        <p className="actor-image">
                            <img src="/img/actors/Chris.jpeg" alt="" />
                        </p>
                        <p className="actor-image">
                            <img src="/img/actors/Chris.jpeg" alt="" />
                        </p>
                        <p className="actor-image">
                            <img src="/img/actors/Chris.jpeg" alt="" />
                        </p>
                        <p className="actor-image">
                            <img src="/img/actors/Chris.jpeg" alt="" />
                        </p>
                    </div>
                    <div className="description">
                        <p className="content" id="content">
                        Jurassic World is a 2015 American science fiction action film. It is the fourth installment of the Jurassic Park franchise and the first in the Jurassic World trilogy. Directed by Colin Trevorrow, written by Rick Jaffa and Amanda Silver, alongside Derek Connolly and Trevorrow from a story by Jaffa and Silver, 
                        and produced by Frank Marshall and Patrick Crowley, the film stars Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, and Irrfan Khan. Set 22 years after the events of Jurassic Park, 
                        Jurassic World takes place on the same fictional island of Isla Nublar, located off the Pacific coast of Costa Rica. A successful theme park of cloned dinosaurs, dubbed Jurassic World, has operated on the island for years, bringing 
                        John Hammond's dream to fruition. The park plunges into chaos when a transgenic dinosaur escapes from its enclosure and goes on a rampage, while a conspiracy orchestrated by the park's staff creates more dangers.
                        </p>
                    </div>
                    <div className="trailer-watching" id="trailer-watching">
                       
                    </div>
                </div>
                <div className="offer">
                    <p className="split"></p>
                    <div className="content">
                        <p className="offer-image">
                            <img src="/img/main/jurassic.jpg" alt="" />
                        </p>
                        <p className="offer-image">
                            <img src="/img/main/jurassic.jpg" alt="" />
                        </p>
                        <p className="offer-image">
                            <img src="/img/main/jurassic.jpg" alt="" />
                        </p>
                        <p className="offer-image">
                            <img src="/img/main/jurassic.jpg" alt="" />
                        </p>
                        <p className="offer-image">
                            <img src="/img/main/jurassic.jpg" alt="" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmDetail