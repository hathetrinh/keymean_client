import {
  GET_COURSE_DATA_SUCCESS,
} from './Constants';

const initialState = {
  courses: [],
  courseDetail: {},
  error: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_COURSE_DATA_SUCCESS: {
      return {
        ...state,
        courses: action.payload,
        error: {},
        courseDetail: {},
      }
    }
    default:
      return state;
  }
};
