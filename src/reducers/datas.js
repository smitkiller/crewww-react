import {
  LOAD_DATAS_SUCCESS,
  LOAD_DATA_SUCCESS
} from '../constants/actionTypes'

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_DATAS_SUCCESS:
      return action.payload.title
    case LOAD_DATA_SUCCESS:
      return [action.payload]
    default:
      return state
  }
}

