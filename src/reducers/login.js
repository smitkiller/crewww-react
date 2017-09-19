import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from '../constants/actionTypes'

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  statusText: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "persist/REHYDRATE":{
      return{...state, ...action.payload}
    } 
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
          'isAuthenticated': true,
          'userName':action.name,
          'token': true,
          'statusText': 'You have been successfully logged in.'
      });
    case LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
          'isAuthenticated': false,
          'token': null,
          'userName': null,
          'statusText': 'Invalid username/password.'
      });

    default:
      return state
  }
}
