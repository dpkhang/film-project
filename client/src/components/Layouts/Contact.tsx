import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../redux/actions/user';
import ContactTag from '../Contact/Contact'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Contact(props: any) {

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


    const navigate = useNavigate()
    if(new Cookies().get('accessToken'))
        navigate('/films')

    return (
        <>
        <ContactTag></ContactTag>
        <button onClick={handleClick}>kkk</button>
        </>
    );
}

export default Contact