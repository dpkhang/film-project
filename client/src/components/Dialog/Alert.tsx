/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import $ from 'jquery'
import './Dialog.scss'
import './Dialog.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
    onChangeActive: (active: number) => void, 
    active: number, 
    children: string,
    path?: string
}

const Alert = ({onChangeActive, active, children, path}: Props) => {
    //hooks

    const navigate = useNavigate()
    
    useEffect(()=>{
        if(active) {
            $('.dialog-background').css('display', 'block')
            setTimeout(() =>{
                $('.dialog-background').css('opacity', 1)
                $('.dialog-background .dialog').css('top', 0)
            }, 50)
        }else {
            $('.dialog-background').css('opacity', 0)
            $('.dialog-background .dialog').css('top', '-20rem')
            setTimeout(() =>{
                $('.dialog-background').css('display', 'none')
            }, 500)
        }
    },[active])

    //handle

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault()
        onChangeActive(0)
        if(path)
            navigate(path)
    }

    return (
        <div className="dialog-background">
            <form onSubmit={handleSubmit}>
                <div className="dialog">
                    <div className="text-content">
                        <p className="text title-text">Message:</p>
                        <p className="text children-text">
                            {children && children}
                        </p>
                    </div>
                    <div className="btn-content">
                        <input type="submit" className="btn" value="Go"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Alert