import { profileAPI, usersAPI } from "../api/api";
import {stopSubmit} from "redux-form"

const ADD_POST = "profile/ADD_POST";
const SET_PROFILE_DATA = "profile/SET_PROFILE_DATA";
const SET_STATUS = "profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";
const SET_PROFILE_EDIT_MODE = "profile/SET_PROFILE_EDIT_MODE";

let initialState = {
  postsData: [
    { id: 1, message: "Hello1", likeCount: "20" },
    { id: 2, message: "Hello2", likeCount: "25" },
    { id: 3, message: "Hello3", likeCount: "30" },
  ],
  profileData: {photos: {}},
  status: "",
  profileEditMode: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: "6", message: action.text, likeCount: "0" },
        ],
      };
    case SET_PROFILE_DATA:
      return { ...state, profileData: action.profileData };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profileData: { ...state.profileData, photos: action.photos },
      };
    case SET_PROFILE_EDIT_MODE:
      return {
        ...state,
        profileEditMode: action.editMode,
      };
    default:
      return state;
  }
};

const setStatus = (status) => ({ type: SET_STATUS, status });
export const addPost = (text) => ({ type: ADD_POST, text });
const setProfileData = (profileData) => ({
  type: SET_PROFILE_DATA,
  profileData,
});
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const setProfileEditMode = (editMode) => ({ type: SET_PROFILE_EDIT_MODE, editMode})
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setProfileData(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.setPhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfileData = (profile) => async (dispatch, getState) => {
  let response = await profileAPI.saveProfileData(profile);
  if (response.data.resultCode === 0) {
    dispatch(setProfileEditMode(false))
    dispatch(getUserProfile(getState().profilePage.profileData.userId))
  } else {
    dispatch(stopSubmit("profileData", {_error: response.data.messages[0]}))
  }
};

export default profileReducer;
