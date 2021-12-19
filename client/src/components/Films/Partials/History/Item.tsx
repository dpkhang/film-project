import React from 'react'
import './Item.scss'

function Item() {
    return (
        <div className="history-item-background">
            <div className="history-item">
                <div className="image-content">
                    <img src="/img/main/jurassic.jpg" alt="" />
                </div>
                <div className="text-content">
                    <div className="text-item-group">
                        <p className="text-item title-text-item">TITLE FILMS</p>
                        <p className="text-item year-text-item">Year: 2019</p>
                        <p className="text-item director-text-item">Director: James</p>
                        <p className="text-item time-text-item">Time: 150m</p>
                    </div>
                    <div className="btn-item-group">
                        <button className="btn-item btn-delete">Remove</button>
                        <button className="btn-item">See</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item