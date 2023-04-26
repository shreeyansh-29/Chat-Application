import * as types from "../actionTypes";

export const signInRequest = (payload) => {
  return {
    type: types.SIGN_IN_REQUEST,
    payload,
  };
};

export const signInSuccess = (payload) => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload,
  };
};

export const signInError = (payload) => {
  return {
    type: types.SIGN_IN_ERROR,
    payload,
  };
};

export const signInClear = () => {
  return {type: types.SIGN_IN_CLEAR};
};
