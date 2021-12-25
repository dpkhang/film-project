import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../redux/actions/user';
import ContactTag from '../Contact/Contact'
// import { useNavigate } from 'react-router-dom'
// import {useCookies} from 'react-cookie'

function Contact(props: any) {

    //cookies 

    const user = useSelector((state:any)=>state.user.data)
    const dispatch = useDispatch()

    const handleClick = () => {
        const newUser = {
            username: 'khang2',
            firstName: 'Dinh',
            lastName: 'Khang'
        }
        const action = saveUser(newUser)
        dispatch(action)
        console.log(user)
    }

    return (
        <>
        <ContactTag></ContactTag>
        <button onClick={handleClick}>kkk</button>
        </>
    );
}

export default Contact