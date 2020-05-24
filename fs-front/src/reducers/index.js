import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import kudosReducer from "./kudosReducer";

export default combineReducers({
  form: formReducer,
  authReducer: authReducer,
  usersReducer: usersReducer,
  kudosReducer: kudosReducer,
});
