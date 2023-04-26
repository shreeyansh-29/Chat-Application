import * as types from "../actionTypes";
import {call, takeLatest, put} from "redux-saga/effects";
import networkService from "../service/networkService";
import {signInError, signInSuccess} from "../actions/signInAction";

export function* signInSaga(data) {
  try {
    let response = yield call(networkService.signIn, data);
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* watchSignInSaga() {
  yield takeLatest(types.SIGN_IN_REQUEST, signInSaga);
}
