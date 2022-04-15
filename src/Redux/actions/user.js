import {
  CLEAR_FORM,
  INPUT_CHANGE,
  LOG_OUT,
  REQUEST_GET_PROFILE,
  REQUEST_LOG_IN,
  REQUEST_SIGN_IN,
  SIGN_IN,
} from './types';

//-----------------------------------------------------------//
//---------------------- AUTH ACTIONS -----------------------//
//-----------------------------------------------------------//

export const reqlogIn = (event) => ({
  type: REQUEST_LOG_IN,
  event,
});

export const reqSignIn = (payload) => ({
  type: REQUEST_SIGN_IN,
  payload,
});

export const logOut = (event) => ({
  type: LOG_OUT,
  event,
});

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const reqGetProfile = () => ({
  type: REQUEST_GET_PROFILE,
});

//-----------------------------------------------------------//
//---------------------- FORM ACTIONS -----------------------//
//-----------------------------------------------------------//

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const changeInput = (keyName, value) => ({
  type: INPUT_CHANGE,
  keyName,
  value,
});
