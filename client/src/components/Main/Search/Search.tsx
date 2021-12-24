import React, {useEffect, useState} from 'react'
import './Search.scss'
import $ from 'jquery'
import Dialog from '../../Dialog/Alert'
import { registerAPI } from '../../../API/ConnectAPI'
import Loading from '../../Loading/Loading';

Search.propTypes = {
    
};

function Search() {
    //props

    //state
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [email, setEmail] = useState('')
    
    const [dialog, setDialog] = useState({
        children: '',
        active: 0
    })

    const [isTimeout, setIsTimeout] = useState(true)
    //hook

    useEffect(()=>{
        setTimeout(()=>{
            $('.main-login-background .account .item-btn').css("opacity", "1")
            $('.main-login-background .main-login-text .hippo-img').css("right", "0")
            $('.main-login-background .main-login-text .text').css("left", "0")
        }, 100)
    }, [])

    //handles

    const handleChange = async (e: React.ChangeEvent<Element>)=>{
        const {value}: any = e.target
        setEmail(value)
    }



    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault()
        try {
            setIsTimeout(false)
            const result = await registerAPI({email: email})
            if(result && result.res.status === 200){
                setIsTimeout(result.timeout)
            }
        }catch(err) {
            setDialog({
                children: `Can't send Email!`,
                active: 1
            })
        }
    }

    const handleChangeActive = (active: number)=>{
        const state = {
            ...dialog,
            active
        }
        setDialog(state)
    }

    return (
        <div className='main-login-background'>
            {!isTimeout && <Loading/>}
            <Dialog onChangeActive={handleChangeActive} active={dialog.active}>{dialog.children}</Dialog>
            <div className='blur'>
                <div className='main-login'>
                    <div className='main-login-text'>
                        <div className='col'>
                            <img src='/img/logo/logo.jpg' alt=''className="hippo-img" />
                            <div className='text'>
                                <p>Unlimited movies,</p> 
                                <p>TV shows, and more.</p>
                                <p>Watch anythings. Cancel anytime</p>
                            </div>
                        </div>
                    </div>
                    <div className='main-login account'>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="email" onChange={handleChange} required placeholder="Please, Enter the email to sign up!"/>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search