import * as Api from '../utils/api'

export const DELETE_DESK = 'DELETE_DESK'
export const ADD_DESK = 'ADD_DESK'
export const SET_DESK = 'SET_DESK'


/******** INIT STATE *********/

export function setDefaultDesks (data) {
    return {
        type: SET_DESK,
        data
    }
}

//
// export function getDesk () {
//     return dispatch => {
//         Api.fetchDesks()
//             .then((res) => {
//                 dispatch( setDesk(res) );
//             });
//     };
// }
//
// export function deleteDesk (entries) {
//     return {
//       type: DELETE_DESK,
//       entries,
//     }
// }
//
// export function addDesk (entry) {
//     return {
//         type: ADD_DESK,
//         entry,
//     }
// }
