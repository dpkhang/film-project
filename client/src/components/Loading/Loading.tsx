import React from 'react'
import './Loading.scss'

interface Props {

}

function Loading(props: Props) {
    return (
        <div className="loading-background">
            <svg className="loading-data">
                <circle r="40" cx="50%" cy="50%"/>
            </svg>
        </div>
    )
}

export default Loading