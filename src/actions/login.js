import { login,logout } from '../Auth/auth';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
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

export function logoutUser(){
   return dispatch=>{
    dispatch(logoutRequest());
    logout()
    .then(()=>{
      dispatch(logoutSuccess());
      //dispatch(pushState(null, '/app'));
    })
      .catch((error)=>{
        dispatch(logoutFailure());
      })
  }
}

function logoutRequest(){
 return{
    type:LOGOUT_USER_REQUEST
 }
}

function logoutSuccess(){
 return{
    type:LOGOUT_USER_SUCCESS
 }
}

function logoutFailure(){
 return{
    type:LOGOUT_USER_FAILURE
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
