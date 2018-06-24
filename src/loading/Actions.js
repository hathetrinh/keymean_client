export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const startLoading = (status) => {
  debugger
  return {type: START_LOADING, payload: {status}};
}

export const endLoading = (status) => {
  return {type: END_LOADING, payload: {status}};
}
