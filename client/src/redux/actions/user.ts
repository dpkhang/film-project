export const saveUser = (user:object)=>{
    return {
        type: 'USER_LOGIN',
        payload: user
    }
}

