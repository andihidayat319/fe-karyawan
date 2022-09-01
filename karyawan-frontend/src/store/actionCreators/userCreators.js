import {SET_USER,SET_ERROR } from '../actionTypes'
import Swal from 'sweetalert2'
const url = 'https://letseat-backend.herokuapp.com'
// const url = `http://localhost:3000`
function displaySuccess(value){
  Swal.fire({
      position: 'center',
      icon: 'success',
      title: value,
      showConfirmButton: false,
      timer: 1500
  })
}
export const setUser = (payload) => {
  return { type: SET_USER, payload };
};

export const setError = (payload) => {
  return { type: SET_ERROR, payload };
};
export const loginAdmin = (user) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(url+`/admin/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      .then((respon) => {
        if(!respon.ok) throw new Error ('gagal fetch')
        return respon.json()
      })
      .then((data) => {
        displaySuccess('Login Success')
        dispatch(setUser(data))
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)
        localStorage.setItem('id', data.id)
        localStorage.setItem('role', data.role)
        resolve()
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err}`,
        })
        dispatch({
          type: SET_ERROR,
          payload: err
        })
        reject()
      })
  })
}}

export function registerAdmin(newUser) {
  return (dispatch) => {
    fetch(url+`/admin/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
    })
    .then((respon) => {
      if(!respon.ok) throw new Error ('gagal fetch')
      return respon.json()
    })
    .then(() => {
      Swal.fire('Saved!', 'User Created', 'success')
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err}`,
      })
    });
  }
}

