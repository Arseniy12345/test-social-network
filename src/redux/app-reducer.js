import { setAuth } from "./auth-reducer";

const INITIALAZE_SUCCSES = "app/INITIALAZE_SUCCSES";

let initialState = {
  initialaze: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALAZE_SUCCSES:
      return {
        ...state,
        initialaze: true,
      };
    default:
      return state;
  }
};

export const initialazeSuccses = () => ({ type: INITIALAZE_SUCCSES });

export const setInitialaze = () => (dispatch) => {
  let promise = dispatch(setAuth());
  promise.then(() => {
    dispatch(initialazeSuccses());
  });
};

export default appReducer;
