import axios from 'axios';
import { store } from '../../';

import config from 'services/config';
// import { API_BASE, ACCESSTOKEN_VALUE_PREFIX } from './constants';
import {startLoading, endLoading} from '../../loading/Actions'
// import { errorHandler } from './handleError';

// const DEFAULT_CONFIG = {
//   baseURL: config.baseURL,
//   timeout: 60000,
//   auth: {
//     username: config.username,
//     password: config.password,
//   },
//   params: {},
// }

const baseURL = config.baseURL

export const HTTP_CODE = {
  RES_OK: 0,
  RES_TOKEN_FAIL: 401,
  RES_PARAM_WRONG: 201,
  RES_VALIDATE_ERROR: 800,
  RES_REGISTER_FAIL: 801,
  RES_EXCEPTION_FAIL: 999,
}

const client = (hasSetLoadingPage = true) => {
  let token = undefined // getToken();
  const defaultOptions = token ? {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
      "AccessToken": localStorage.getItem('jwtToken'),
    },
    hasSetLoadingPage,
  } : {};

  axios.interceptors.request.use(function (config) {
    config.hasSetLoadingPage && store.dispatch(startLoading(true));
    return config;
  }, function (error) {
    store.dispatch(endLoading(false));
    console.log(`server Error: ${ error}`)
  });

  axios.interceptors.response.use(
    function (response) {
      response.config.hasSetLoadingPage && store.dispatch(endLoading(false));
      return response;
    },
    function (err) {
      store.dispatch(endLoading(false));
      if(err.response.status === HTTP_CODE.RES_TOKEN_FAIL) {
        // removeToken()
        // removeCurrentUser()
        window.location.href = '/login'
      } else {
        console.log(`server Error: ${ err}`)
      }
    });

  return {
    get: (url, options = {}) => axios.get(baseURL + url, {...defaultOptions, ...options}),
    post: (url, data, options = {}) => axios.post(baseURL + url, data, {...defaultOptions, ...options}),
    put: (url, data, options = {}) => axios.put(baseURL + url, data, {...defaultOptions, ...options}),
    delete: (url, options = {}) => axios.delete(baseURL + url, {...defaultOptions, ...options}),
  };
};

export default client;
