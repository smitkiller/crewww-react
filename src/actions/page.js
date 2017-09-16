import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'
import { PAGES_ENDPOINT } from '../constants/endpoints'
import {
  LOAD_PAGES_REQUEST,
  LOAD_PAGES_SUCCESS,
  LOAD_PAGES_FAILURE,

  LOAD_PAGE_REQUEST,
  LOAD_PAGE_SUCCESS,
  LOAD_PAGE_FAILURE,

  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAILURE,

  DELETE_PAGE_REQUEST,
  DELETE_PAGE_SUCCESS,
  DELETE_PAGE_FAILURE,

  UPDATE_PAGE_REQUEST,
  UPDATE_PAGE_SUCCESS,
  UPDATE_PAGE_FAILURE

} from '../constants/actionTypes'

export const loadPages = () => ({
  [CALL_API]: {
    endpoint: PAGES_ENDPOINT,
    method: 'GET',
    types: [LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS, LOAD_PAGES_FAILURE]
  }
})

export const loadPage = (id) => ({
  [CALL_API]: {
    endpoint: `${PAGES_ENDPOINT}/${id}`,
    method: 'GET',
    types: [LOAD_PAGE_REQUEST, LOAD_PAGE_SUCCESS, LOAD_PAGE_FAILURE]
  }
})

export const createPage = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: PAGES_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
        types: [
          CREATE_PAGE_REQUEST,
          {
            type: CREATE_PAGE_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((page) => {
                dispatch(push(`/pages/${page.id}`))
                return page
              })
            }
          },
          CREATE_PAGE_FAILURE
        ]
      }
    }
  )

)

export const deletePage = (id) => (
  (dispatch) =>
    dispatch({
  [CALL_API]: {
    endpoint: `${PAGES_ENDPOINT}/${id}`,
    method: 'DELETE',
    types: [DELETE_PAGE_REQUEST,
      {
        type:DELETE_PAGE_SUCCESS,
        payload:dispatch(push(`/home`))
      },
      DELETE_PAGE_FAILURE]
  }
})
)

export const updatePage = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: `${PAGES_ENDPOINT}/${values.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(values),
        types: [
          UPDATE_PAGE_REQUEST,
          {
            type: UPDATE_PAGE_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((page) => {
                dispatch(push(`/pages`))
                return page
              })
            }
          },
          UPDATE_PAGE_FAILURE
        ]
      }
    }
  )

)
