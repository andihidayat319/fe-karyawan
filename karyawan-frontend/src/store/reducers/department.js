import {
  GET_DEPARTMENTS,
  SET_LOADING,
  SET_ERROR
} from '../actionTypes';

const initialState = {
  departments: [],
  loading: true,
  error: null
};

export default function departmentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return { ...state, departments: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
