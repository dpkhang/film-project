import userProducer from './user'
import filmsProducer from './films'
import { combineReducers } from 'redux'

export default combineReducers({
    user: userProducer,
    films: filmsProducer
})