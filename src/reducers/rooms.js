import {
  LOAD_ROOMS_SUCCESS,
  DELETE_ROOMS_SUCCESS,
  CREATE_ROOMS_SUCCESS
} from '../constants/actionTypes'


const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ROOMS_SUCCESS:
      return action.payload
      break;
    case DELETE_ROOMS_SUCCESS:
      return action.payload
      break;
    case CREATE_ROOMS_SUCCESS:
      return action.payload
      break;
    default:
      return state
  }
}

