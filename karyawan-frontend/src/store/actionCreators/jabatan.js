import {
  GET_JABATANS,
  GET_JABATAN,
  SET_LOADING,
  SET_ERROR
} from '../actionTypes';

// const url = `http://localhost:3000/jabatan/`;
const url = 'https://karyawan-be.herokuapp.com/jabatan/';

export const jabatans = (payload) => {
  return { type: GET_JABATANS, payload };
};
export const jabatan = (payload) => {
  return { type: GET_JABATAN, payload };
};
export const loading = (payload) => {
  return { type: SET_LOADING, payload };
};

export const error = (payload) => {
  return { type: SET_ERROR, payload };
};

export const getJabatans = () => {
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
      dispatch(jabatans(data));
    })
    .catch((error) => {
      dispatch(error(error));
    })
    .finally(() => {
      dispatch(loading(false));
    });
  }
}
export const filterJabatan = ({id_jabatan: id}) => {
  console.log(id)
  return (dispatch) => {
    dispatch(loading(true))
    dispatch(error(null))
    fetch(url+id)
      .then((response) => {
        if (!response.ok) throw new Error('cannot get');
        return response.json();
      })
      .then((data) => {
        dispatch(jabatan(data));
      })
      .catch((error) => {
        dispatch(error(error));
      })
      .finally(() => {
        dispatch(loading(false));
      });
  }
}
export const inputJabatan = (jabatan) => {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jabatan)
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed Input Jabatan');
    })
    .catch(error => {
      console.log(error);
    })
  }
}