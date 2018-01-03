import * as Api from '../utils/api'

export const DELETE_DESK = 'DELETE_DESK'
export const ADD_DESK = 'ADD_DESK'
export const FETCH_DESK = 'FETCH_DESK'


/******** INIT STATE *********/
export function setDefaultDesks () {
    return dispatch => {
        Api.setDefaultDesks()
            .then((data) => {
                dispatch( setDesk(data) );
            });
    };
}

export function setDesk (data) {
    return {
      type: FETCH_DESK,
      data
    }
}


/******** INIT STATE *********/

export function getDesk () {
    return dispatch => {
        Api.fetchDesks()
            .then((res) => {
                dispatch( setDesk(res) );
            });
    };
}










export function deleteDesk (entries) {
    return {
      type: DELETE_DESK,
      entries,
    }
}
  
export function addDesk (entry) {
    return {
        type: ADD_DESK,
        entry,
    }
}