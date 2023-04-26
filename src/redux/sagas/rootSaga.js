import {all} from "redux-saga/effects";
import {watchSignInSaga} from "./signInSaga";

export default function* RootSaga() {
  yield all([watchSignInSaga()]);
}
