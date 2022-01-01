import React, {useState, useEffect} from 'react'
import UpdateProfile from '../Partials/Profile/UpdateProfile/UpdateProfile'
import Frame from '../Partials/Profile/Frame/Frame'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {getUserById} from '../../../API/AxiosAPI'
import './Profile.scss'

function Profile(props: any) {
    //cookies

    const [cookies,, removeCookies] = useCookies(['uid', 'accessToken'])

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


    useEffect(()=>{
        (async function(){
            try {
                const uid = cookies.uid
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
                    removeCookies('accessToken')
                    navigate('/')
                }
            }catch(err){
                console.log(err)
                alert('This page is failed!')
                removeCookies('accessToken')
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