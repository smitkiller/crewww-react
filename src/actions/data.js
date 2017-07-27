import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'
import { DATAS_ENDPOINT } from '../constants/endpoints'
import {
  LOAD_DATAS_REQUEST,
  LOAD_DATAS_SUCCESS,
  LOAD_DATAS_FAILURE
} from '../constants/actionTypes'

export const loadDatas = () => ({
  [CALL_API]: {
    endpoint: DATAS_ENDPOINT,
    headers: {
      'Access-Control-Allow-Origin': 'https://crewww-c780d.firebaseapp.com'
    },
    method: 'GET',
    mode: 'no-cors',
    types: [LOAD_DATAS_REQUEST, LOAD_DATAS_SUCCESS, LOAD_DATAS_FAILURE]
  }
})
