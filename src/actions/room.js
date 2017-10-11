import { CALL_API } from 'redux-api-middleware';
import { ROOMSCOL_ENDPOINT } from '../constants/endpoints';
import {
  LOAD_ROOMSCOL_REQUEST,
  LOAD_ROOMSCOL_SUCCESS,
  LOAD_ROOMSCOL_FAILURE,
  CREATE_ROOMSCOL_REQUEST,
  CREATE_ROOMSCOL_SUCCESS,
  CREATE_ROOMSCOL_FAILURE

} from '../constants/actionTypes';

export const loadRoomscol = () => ({
  [CALL_API]: {
    endpoint: ROOMSCOL_ENDPOINT,
    method: 'GET',
    types: [LOAD_ROOMSCOL_REQUEST, LOAD_ROOMSCOL_SUCCESS, LOAD_ROOMSCOL_FAILURE]
  }
})

export const createRoomscol = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ROOMSCOL_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
        types: [
          CREATE_ROOMSCOL_REQUEST,
          {
            type: CREATE_ROOMSCOL_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((roomscol) => {
               // dispatch(push(`/pages/${page.id}`))
                dispatch(loadRoomscol());

                return roomscol
              })
            }
          },
          CREATE_ROOMSCOL_FAILURE
        ]
      }
    }
  )

)