import {pushState} from 'redux-router'
import { browserHistory } from 'react-router'
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
  statusText: null
}

export default (state = initialState, action) => {
  switch(action.type) {
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
