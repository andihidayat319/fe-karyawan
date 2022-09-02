import { combineReducers } from 'redux';
import departmentReducer from './department';
import jabatanReducer from './jabatan';
import karyawanReducer from './karyawan';

export default combineReducers({
  departmentReducer, jabatanReducer, karyawanReducer
});