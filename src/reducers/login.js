import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from '../constants/actionTypes'

const initialState = {
  userName: null,
  authed: false,
  statusText: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "persist/REHYDRATE":{
      return {...state, ...action.payload}
    } 
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
          'authed': true,
          'userName':action.name,
          'statusText': 'You have been successfully logged in.'
      });
    case LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
          'authed': false,
          'userName': null,
          'statusText': 'Invalid username/password.'
      });
     case LOGOUT_USER:
         return Object.assign({}, state, {
          'authed': false,
          'userName': null
      });
    default:
      return state
  }
}
