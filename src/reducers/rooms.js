import {
  LOAD_ROOMS_SUCCESS
} from '../constants/actionTypes'


const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ROOMS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

