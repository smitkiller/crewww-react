import {
  LOAD_ROOMSCOL_SUCCESS
} from '../constants/actionTypes'
import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ROOMSCOL_SUCCESS:
      return action.payload
    default:
      return state
  }
}


