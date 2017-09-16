import {createReducer} from '../utils'
import {pushState} from 'redux-router'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from '../constants/actionTypes'

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
          'isAuthenticating': false,
          'isAuthenticated': true,
          'token': action.payload.token,
          'statusText': 'You have been successfully logged in.'
      });
    case LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
          'isAuthenticating': false,
          'isAuthenticated': false,
          'token': null,
          'userName': null,
          'statusText': 'Authentication Error'
      });
    default:
      return state
  }
}
