import { checkHttpStatus, parseJSON } from '../utils'
import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'
import { LOGIN_ENDPOINT } from '../constants/endpoints'
import { pushState } from 'redux-router';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  RECEIVE_PROTECTED_DATA,
  FETCH_PROTECTED_DATA_REQUEST
} from '../constants/actionTypes'


export const loginUser = (values) => ({
  [CALL_API]: {
    endpoint: `${LOGIN_ENDPOINT}/?email=${values.email}&password=${values.password}`,
    method: 'GET',
    types: [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE]
  }
})
