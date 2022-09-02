import {
  GET_JABATANS,
  GET_JABATAN,
  SET_LOADING,
  SET_ERROR
} from '../actionTypes';

const initialState = {
  jabatans: [],
  jabatan: {},
  loading: true,
  error: null
};

export default function jabatanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JABATANS:
      return { ...state, jabatans: action.payload };
    case GET_JABATAN:
      return {...state, jabatan: action.payload};
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
