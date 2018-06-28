import {
  GET_COURSE_DATA_REQUEST,
  GET_COURSE_DATA_SUCCESS,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
} from './Constants';

export const getDataRequest = () => {
  return { type: GET_COURSE_DATA_REQUEST }
}

export const getDataSuccess = data => {
  return { type: GET_COURSE_DATA_SUCCESS, payload: data }
}

export const createRequest = (params) => {
  return { type: COURSE_CREATE_REQUEST, payload: { params } }
}

export const createSuccess = (data) => {
  return { type: COURSE_CREATE_SUCCESS, payload: { data } }
}
