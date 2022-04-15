import { REMOVE_ERROR, SHOW_ERROR } from './types';

export const setError = (errorMessage) => ({
  type: SHOW_ERROR,
  payload: errorMessage,
});

export const removeError = () => ({
  type: REMOVE_ERROR,
});
