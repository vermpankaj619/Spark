import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from './profileReducer'
import CartReducer from "./CartReducer";
import merReducer from "./merReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile:profileReducer,
  cart:CartReducer,
  mer:merReducer
});
