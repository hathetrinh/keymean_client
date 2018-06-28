import {
  GET_CLASS_DATA_SUCCESS,
} from './Constants';

const initialState = {
  classes: [],
  classDetail: {},
  error: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CLASS_DATA_SUCCESS: {
      return {
        classes: action.payload,
        error: {},
        classDetail: {},
      }
    }
    default:
      return state;
  }
};
