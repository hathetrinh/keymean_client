import {
GET_CLASS_DATA_REQUEST,
GET_CLASS_DATA_SUCCESS,
GET_CLASS_DATA_FAIL,

CLASS_CREATE_REQUEST,
CLASS_CREATE_SUCCESS,

} from './Constants';


export const getDataRequest = () => {
  return { type: GET_CLASS_DATA_REQUEST }
}

export const getDataSuccess = data => {
  return { type: GET_CLASS_DATA_SUCCESS, payload: data }
}

export const getDataFail = () => {
  return { type: GET_CLASS_DATA_FAIL }
}

export const createRequest = (params) => {
  return { type: CLASS_CREATE_REQUEST, payload: { params } }
}

export const createSuccess = (data) => {
  return { type: CLASS_CREATE_SUCCESS, payload: { data } }
}
