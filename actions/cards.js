import API from '../utils/api'

export const DELETE_QUESTION = 'DELETE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function deleteCard (entries) {
    return {
      type: DELETE_QUESTION,
      entries,
    }
  }
  
export function addCard (entry) {
    return {
        type: ADD_QUESTION,
        entry,
    }
}