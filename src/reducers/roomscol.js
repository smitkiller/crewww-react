import {
  LOAD_ROOMSCOL_SUCCESS
} from '../constants/actionTypes'
import _ from 'lodash';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ROOMSCOL_SUCCESS:
      return action.payload
    default:
      return state
  }
}


export const getRoomsColById = (state, id) => (
 // console.log('gooooooodddd',id)
  //state.pages.find((page,key) => key === +id) || { title: '', content: '' }
 _.find(state.roomscol,(roomcol,key)=> key === id) || {title: '' , content: '' , id : ''}
 // state.pages.find((page,key) => key === +id) || {title: '' , content: '' }
)