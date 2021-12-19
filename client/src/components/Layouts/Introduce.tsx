import React from 'react';
import IntroduceTag from '../Introduce/Introduce'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'

function Introduce(props: any) {

    const navigate = useNavigate()
    if(new Cookies().get('accessToken'))
        navigate('/films')

    return (
        <IntroduceTag></IntroduceTag>
    );
}

export default Introduce;