/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import $ from 'jquery'
import './Dialog.scss'

interface Props {
    onChangeActive: (active: number) => void, 
    onConfirm: (confirm: number)=> void,
    active: number, 
    children: string,
}

function Confirm({onChangeActive, onConfirm, active, children}: Props) {

    //hooks
    
    useEffect(()=>{
        if(active) {
            $('.dialog-background').css('display', 'block')
            setTimeout(() =>{
                $('.dialog-background').css('opacity', 1)
                $('.dialog-background .dialog').css('top', 0)
            }, 1)
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
        onConfirm(1)
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
                        <input type="submit" className="btn btn-go" value="Go"/>
                        <input type="button" className="btn btn-cancel" value="Cancel"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Confirm;