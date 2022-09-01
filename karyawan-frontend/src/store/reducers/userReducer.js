import {
  SET_LOADING,
  SET_ERROR,
  SET_USER
} from '../actionTypes';

const initialState = {
  user: {},
  userLoading: true,
  userError: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_LOADING:
      return { ...state, userLoading: action.payload };
    case SET_ERROR:
      return { ...state, userError: action.payload };
    default:
      return state;
  }
}
