import * as types from "../actionTypes";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case types.SIGN_IN_REQUEST:
      return {...state, isLoading: true};
    case types.SIGN_IN_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
        error: action.payload,
      };
    case types.SIGN_IN_CLEAR: {
      return {
        data: null,
        isLoading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};
