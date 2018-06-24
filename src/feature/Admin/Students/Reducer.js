import {
  GET_STUDENT_DATA_SUCCESS,
} from './Constants';

const initialState = {
  students: [],
  studentDetail: {},
  error: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_STUDENT_DATA_SUCCESS: {
      return {
        students: action.payload,
        error: {},
        studentDetail: {},
      }
    }
    default:
      return state;
  }
};
