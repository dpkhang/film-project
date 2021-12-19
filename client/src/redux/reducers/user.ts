
const initial = {
    data: {},
    grant: 'admin'
}

export default function userReducer(state=initial, action: any){
    switch (action.type) {
        case 'USER_LOGIN': {
            const newData = action.payload
            return {
                ...state,
                data: newData
            }
        }
        case 'USER_REGISTER' : {
            return state
        }

        case 'USER_LOGOUT': {
            return state
        }

        default: {
            return state
        }
    }
}