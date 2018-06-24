import {
  GET_COURSE_DATA_REQUEST,
  GET_COURSE_DATA_SUCCESS,
} from './Constants';

export const getDataRequest = () => {
  return { type: GET_COURSE_DATA_REQUEST }
}

export const getDataSuccess = data => {
  return { type: GET_COURSE_DATA_SUCCESS, payload: data }
}
