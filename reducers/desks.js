import * as deskActions from '../actions/desks'


function desksReducer (state = [], action) {
    console.log(state)
    switch (action.type) {
        case deskActions.FETCH_DESK :
            return {
                ...state,
                ...action.data,
            }
        case deskActions.DELETE_DESK :
            return {
                ...state,
                ...action.entries,
            }
        case deskActions.ADD_DESK :
            return {
                ...state,
                ...action.entry
            }
    default :
        return state
    }
}

export default desksReducer
