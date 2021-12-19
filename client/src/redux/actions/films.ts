export const getFilms  = (films: object[])=>{
    return {
        type: 'GET_FILMS',
        payload: films
    }
}