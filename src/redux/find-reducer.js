import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utilities/object-helpers"

const SET_FOLLOW = "find/SET_FOLLOW";
const SET_UNFOLLOW = "find/SET_UNFOLLOW";
const SET_USERS = "find/SET_USERS";
const SET_TOTAL_COUNT = "find/SET_TOTAL_COUNT";
const SET_PAGE_NUMBER = "find/SET_PAGE_NUMBER";
const SET_IS_FETCHING = "find/SET_IS_FETCHING";
const SET_FOLLOWING = "find/SET_FOLLOWING";

let initialState = {
  usersData: [],
  pageSize: 5,
  pageNumber: 1,
  totalCount: 0,
  isFetching: false,
  followingInProgress: [],
};

const findReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.id, "id", {followed: true})
      };
    case SET_UNFOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.id, "id", {followed: false})
      };
    case SET_USERS:
      return {
        ...state,
        usersData: [...action.users],
      };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.pageNumber };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((el) => el !== action.userId),
      };
    default:
      return state;
  }
};

const follow = (id) => ({ type: SET_FOLLOW, id: id });
const unfollow = (id) => ({ type: SET_UNFOLLOW, id: id });
const setUsers = (users) => ({ type: SET_USERS, users: users });
const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
const setPageNumber = (pageNumber) => ({
  type: SET_PAGE_NUMBER,
  pageNumber,
});
const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
const following = (inProgress, userId) => ({
  type: SET_FOLLOWING,
  inProgress,
  userId,
});

export const requestUsers = (pageSize, pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let data = await usersAPI.getUsers(pageSize, pageNumber);
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
  dispatch(setIsFetching(false));
  dispatch(setPageNumber(pageNumber));
};

const followUnfollowFlow = async (dispatch, apiMethod, reducerMethod, userId) => {
  dispatch(following(true, userId));
  let resultCode = await apiMethod(userId);
  if (resultCode === 0) {
    dispatch(reducerMethod(userId));
    dispatch(following(false, userId));
  }
}

export const setUnfollow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, usersAPI.setUnfollow.bind(usersAPI), unfollow, userId)
};

export const setFollow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, usersAPI.setFollow.bind(usersAPI), follow, userId)
};

export default findReducer;
