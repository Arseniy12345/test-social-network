import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
const SET_IS_AUTH = "auth/SET_IS_AUTH";

let initialState = {
  data: {
    userId: null,
    email: null,
    login: null,
  },
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        data: action.data,
      };
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

const setAuthData = (data) => ({ type: SET_AUTH_DATA, data });
const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth });

export const setAuth = () => {
  return async (dispatch) => {
    let data = await authAPI.setAuth();
    if (data.resultCode === 0) {
      dispatch(setAuthData(data.data));
      dispatch(setIsAuth(true));
    }
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(setAuth());
    } else {
      dispatch(stopSubmit("login", { _error: response.data.messages }));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthData({ userId: null, email: null, login: null }));
      dispatch(setIsAuth(false));
    }
  };
};

export default authReducer;
