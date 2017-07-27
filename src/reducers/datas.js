import {
  LOAD_DATAS_SUCCESS,
  LOAD_DATA_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_DATAS_SUCCESS:
      return action.payload
    case LOAD_DATA_SUCCESS:
      return [action.payload]
    default:
      return state
  }
}

export const getDataById = (state, id) => (
  state.datas.find((data) => data.id === +id) || { title: '', detial: '',name:'',email:'',tel:'' }
)
