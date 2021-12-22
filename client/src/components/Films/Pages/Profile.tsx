import React, {useState, useEffect} from 'react'
import UpdateProfile from '../Partials/Profile/UpdateProfile/UpdateProfile'
import Frame from '../Partials/Profile/Frame/Frame'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {getUserById} from '../../../API/ConnectAPI'
import './Profile.scss'

function Profile(props: any) {

    //state
    const [user, setUser] = useState<object>({
        username: '',
        name: '',
        email: '',
        phone: '',
        first_name: '',
        last_name: '',
    })

    const [frameType, setFrameType] = useState('vip')


    //hook
    const navigate = useNavigate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cookies = new Cookies()


    useEffect(()=>{
        (async function(){
            try {
                const uid = cookies.get('uid')
                if(uid){
                    const result: any = await getUserById(uid)
                    if(result.res.status === 200){
                        const data = result.res.data.data[0]
                        const mergeUser = {
                            username: data.username,
                            name: data.first_name === null && data.last_name === null ? data.username : data.first_name + ' ' + data.last_name,
                            email: data.email,
                            phone: data.phone,
                            first_name: data.first_name,
                            last_name: data.last_name
                        }
                        setUser(mergeUser)
                    }
                }else {
                    cookies.remove('accessToken')
                    navigate('/')
                }
            }catch(err){
                console.log(err)
                alert('This page is failed!')
                cookies.remove('accessToken')
                navigate('/')
            }
        })()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //handle
    const handleClickToChangeFrame = (frameType: any)=>{
        setFrameType(frameType)
    }

    return (
        <div className="profile">
            <UpdateProfile user={user} onClickToChangeFrame={handleClickToChangeFrame}/>
            <Frame user={user} frameType = {frameType}/>
        </div>
    );
}

export default Profile