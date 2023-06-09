import {combineReducers} from "redux";
import {signInReducer} from "./signInReducer";

const rootReducer = combineReducers({
  signIn: signInReducer,
});

export default rootReducer;
