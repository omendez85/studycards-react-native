import * as deskActions from '../actions/desks'


function desksReducer (state = [], action) {   
    switch (action.type) {
        case deskActions.SET_DESK :
            return {
                ...state,
                ...action.data,
            }
        case deskActions.DELETE_DESK :
            return {
                ...state,
                ...action.data,
            }
        case deskActions.ADD_DESK :
            return {
                ...state,
                ...action.data
            }
    default :
        return state
    }
}

export default desksReducer
