import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'
import { login, resetPassword } from '../Auth/auth'
import { browserHistory } from 'react-router'
import { pushState } from 'redux-router'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from '../constants/actionTypes'

export function loginUser(values){
  return dispatch=>{
    dispatch(loginRequest());
    login(values.email,values.password)
    .then(()=>{
      dispatch(loginSuccess(values.email));
      //dispatch(pushState(null, '/app'));
    })
      .catch((error)=>{
        dispatch(loginFailure());
      })
  }
}

function loginFailure(){
  return{
    type:LOGIN_USER_FAILURE
  }
}
function loginSuccess(name){
  return{
    type:LOGIN_USER_SUCCESS,
    name
  }
}
function loginRequest(){
  return{
    type:LOGIN_USER_REQUEST
  }
}
