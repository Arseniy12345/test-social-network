import { stopSubmit } from "redux-form";
import { authAPI, securityAPI, profileAPI } from "../api/api";

const SET_AUTH_DATA = "auth/SET_AUTH_DATA";
const SET_IS_AUTH = "auth/SET_IS_AUTH";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";
const SET_PHOTO_AUTH_USER = "auth/SET_PHOTO_AUTH_USER";

let initialState = {
  data: {
    userId: null,
    email: null,
    login: null,
  },
  isAuth: false,
  captchaUrl: null,
  photo: "",
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
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url,
      };
    case SET_PHOTO_AUTH_USER:
      return {
        ...state,
        photo: action.url,
      };
    default:
      return state;
  }
};

const setAuthData = (data) => ({ type: SET_AUTH_DATA, data });
const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth });
const setCaptchaUrl = (url) => ({ type: SET_CAPTCHA_URL, url });
const setPhotoAuthUser = (url) => ({ type: SET_PHOTO_AUTH_USER, url });

const setPhotoUrl = (id) => async (dispatch) => {
  let response = await profileAPI.getProfile(id);
  dispatch(setPhotoAuthUser(response.data.photos.small));
}

export const setAuth = () => {
  return async (dispatch) => {
    let data = await authAPI.setAuth();
    if (data.resultCode === 0) {
      dispatch(setAuthData(data.data));
      dispatch(setIsAuth(true));
      dispatch(setPhotoUrl(data.data.id))
    }
  };
};

export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(setAuth());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
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

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  dispatch(setCaptchaUrl(response.data.url));
};

export default authReducer;
