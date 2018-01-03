import { combineReducers } from 'redux'
import deskReducer from './desks'
import cardsReducer from './cards'

export default combineReducers({
    deskReducer,
    cardsReducer
})