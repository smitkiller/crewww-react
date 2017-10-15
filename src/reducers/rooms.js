import {
  LOAD_ROOMS_SUCCESS
} from '../constants/actionTypes'
import _ from 'lodash';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ROOMS_SUCCESS:
      return action.payload
    default:
      return state
  }
}


export const getRoomsById = (state, id) => (
 // console.log('gooooooodddd',id)
  //state.pages.find((page,key) => key === +id) || { title: '', content: '' }
 _.find(state.rooms,(rooom,key)=> key === id) || {title: '' , content: '' , id : ''}
 // state.pages.find((page,key) => key === +id) || {title: '' , content: '' }
)