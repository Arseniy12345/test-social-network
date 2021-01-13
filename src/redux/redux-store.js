import { applyMiddleware, combineReducers, createStore } from "redux";
import middlewareThunk from "redux-thunk";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import findReducer from "./find-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: messageReducer,
  findPage: findReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(middlewareThunk));

window.store = store;

export default store;
