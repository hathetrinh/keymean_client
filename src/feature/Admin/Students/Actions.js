import {
GET_STUDENT_DATA_REQUEST,
GET_STUDENT_DATA_SUCCESS,
GET_STUDENT_DATA_FAIL,

STUDENT_CREATE_REQUEST,
STUDENT_CREATE_SUCCESS,
STUDENT_CREATE_FAIL,

STUDENT_GET_DETAIL_REQUEST,
STUDENT_GET_DETAIL_SUCCESS,
STUDENT_GET_DETAIL_FAIL,

STUDENT_DELETE_REQUEST,
STUDENT_DELETE_SUCCESS,
STUDENT_DELETE_FAIL,
} from './Constants';


export const getDataRequest = () => {
  return { type: GET_STUDENT_DATA_REQUEST }
}

export const getDataSuccess = data => {
  return { type: GET_STUDENT_DATA_SUCCESS, payload: data }
}

export const getDataFail = () => {
  return { type: GET_STUDENT_DATA_FAIL }
}

export const createRequest = (params) => {
  return { type: STUDENT_CREATE_REQUEST, payload: { params } }
}

export const createSuccess = (data) => {
  return { type: STUDENT_CREATE_SUCCESS, payload: { data } }
}

export const createFail = (data) => {
  return { type: STUDENT_CREATE_FAIL, payload: { data } }
}

export const getDetail = (id) => {
  return { type: STUDENT_GET_DETAIL_REQUEST, payload: { id } }
}

export const getDetailSuccess = (data) => {
  return { type: STUDENT_GET_DETAIL_SUCCESS, payload: { data } }
}

export const getDetailFail = () => {
  return { type: STUDENT_GET_DETAIL_FAIL }
}

export const deleteRequest = (id) => {
  return { type: STUDENT_DELETE_REQUEST, payload: { id } }
}

export const deleteSuccess = (data) => {
  return { type: STUDENT_DELETE_SUCCESS, payload: { data } }
}

export const deleteFail = data => {
  return { type: STUDENT_DELETE_FAIL, payload: { data } }
}
