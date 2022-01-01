import React, { useState } from 'react'
import $ from 'jquery'
import './UpdateFrame.scss'
import { putUser } from '../../../../../../API/AxiosAPI'
import Cookies from 'universal-cookie'
import Dialog from '../../../../../Dialog/Alert'

interface User {
    id?: string,
    email?: string,
    phone?: string,
    first_name?: string,
    last_name?: string
}
interface Props {
    user : User
}

const UpdateFrame = (props: Props) => {
    //props

    const userProps: User = props.user

    //state
    const [user, setUser]= useState({
        email: userProps.email,
        phone: userProps.phone,
        first_name: userProps.first_name,
        last_name: userProps.last_name
    })

    const [dialog, setDialog] = useState({
        active: 0,
        children: '',
        data: {} 
    })

    //handle

    const handleClick = (e: any)=>{
        if(e.target.getAttribute('class') && e.target.getAttribute('class').match(/^title/i))
            {
                $(e.target).addClass('active')
                $(e.target.nextSibling).css('display', 'block')
                $(e.target.nextSibling).focus()
            }
    }

    const handleActiveDialog = (active: number) =>{
        const dialogCustom = {
            ...dialog,
            active
        }
        setDialog(dialogCustom)
    }

    const handleChange = (e: any)=>{
        const {name, value} = e.target
        const mergeUser  = {
            ...user,
            [name]: value,
        }
        setUser(mergeUser)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const cookies = new Cookies()
            const userData = {
                ...user,
                id: cookies.get('uid'),
            }
            const result: any = await putUser(userData)
            if(result.res.status === 200) {
                const mergeUser = {
                    email: result.res.data.data.email,
                    phone: result.res.data.data.phone,
                    first_name: result.res.data.data.first_name,
                    last_name: result.res.data.data.last_name
                }
                const dialog = {
                    active: 1,
                    children: result.res.data.message,
                    data: {}
                }
                setDialog(dialog)
                setUser(mergeUser)
            } else {
                const dialog = {
                    active: 1,
                    children: 'Updated failed!',
                    data: {}
                }
                setDialog(dialog)
            }
        }catch(err){
            console.log(err)
            const dialog = {
                active: 1,
                children: 'Error happened!',
                data: {}
            }
            setDialog(dialog)
        }
    }

    return (
        <div className="update-frame-background">
            <Dialog active={dialog.active} onChangeActive = {handleActiveDialog} >{dialog.children}</Dialog>
            <p className="update-frame-title">Update Profile</p>
            <form onSubmit={handleSubmit}>
                <div className="items" onClick={handleClick}>
                    <p className="title">Email</p>
                    <input type="text" name="email" id="" value={user.email} onChange={handleChange}/>
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">Phone number</p>
                    <input type="text" name="phone" id="" value={user.phone} onChange={handleChange}/>
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">First name</p>
                    <input type="text" name="first_name" id="" value={user.first_name} onChange={handleChange}/>
                </div>
                <div className="items" onClick={handleClick}>
                    <p className="title">Last name</p>
                    <input type="text" name="last_name" id="" value={user.last_name} onChange={handleChange}/>
                </div>
                <div className="items-submit">
                    <input type="submit" className="btn btn-update" value="Update" />
                    <button className="btn btn-clear">Clear</button>
                </div>
            </form>
        </div>
    );
}
export default UpdateFrame