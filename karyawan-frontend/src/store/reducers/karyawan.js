import {
  GET_KARYAWANS,
  UPDATE_KARYAWAN,
  SET_LOADING,
  SET_ERROR
} from '../actionTypes';

const initialState = {
  karyawans: [],
  karyawan: {},
  loading: true,
  error: null
};

export default function karyawanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_KARYAWANS:
      return { ...state, karyawans: action.payload };
    case UPDATE_KARYAWAN:
      return {...state, karyawan: action.payload};
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
