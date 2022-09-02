import {
  GET_DEPARTMENTS,
  SET_LOADING,
  SET_ERROR
} from '../actionTypes';

// const url = `http://localhost:3000/department/`;
const url = 'https://karyawan-be.herokuapp.com/department/';

export const departments = (payload) => {
  return { type: GET_DEPARTMENTS, payload };
};
export const loading = (payload) => {
  return { type: SET_LOADING, payload };
};

export const error = (payload) => {
  return { type: SET_ERROR, payload };
};

export const getDepartments = () => {
  return (dispatch) => {
    dispatch(loading(true))
    dispatch(error(null))
    fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('cannot get');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dispatch(departments(data));
    })
    .catch((error) => {
      dispatch(error(error));
    })
    .finally(() => {
      dispatch(loading(false));
    });
  }
}
export const inputDepartment = (department) => {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(department)
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed Input Department');
    })
    .catch(error => {
      console.log(error);
    })
  }
}