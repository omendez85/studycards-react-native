import * as cardsActions from '../actions/cards'

function cardsReducer (state = {}, action) {
  switch (action.type) {
    case cardsActions.DELETE_QUESTION :
      return {
        ...state,
        ...action.entries,
      }
    case cardsActions.ADD_QUESTION :
      return {
        ...state,
        ...action.entry
      }
    default :
      return state
  }
}

export default cardsReducer