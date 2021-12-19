
interface Action {
    type: string,
    payload: object[] | object
}

const initial = {
    films: [],
    method: 'get'
}

export default function filmsProducer(state=initial, action: Action){
    switch(action.type){
        case 'GET_FILMS': {
            return  {
                ...state,
                films: action.payload
            }
        }

        default: {
            return state
        }
    }
}