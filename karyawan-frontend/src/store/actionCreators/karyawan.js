import {
  GET_KARYAWANS,
  UPDATE_KARYAWAN,
  SET_LOADING,
  SET_ERROR
} from '../actionTypes';

// const url = `http://localhost:3000/karyawan/`;
const url = 'https://karyawan-be.herokuapp.com/karyawan/';

export const karyawans = (payload) => {
  return { type: GET_KARYAWANS, payload };
};
export const karyawan = (payload) => {
  return { type: UPDATE_KARYAWAN, payload };
};
export const loading = (payload) => {
  return { type: SET_LOADING, payload };
};

export const error = (payload) => {
  return { type: SET_ERROR, payload };
};

export const getKaryawans = () => {
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
      dispatch(karyawans(data));
    })
    .catch((error) => {
      dispatch(error(error));
    })
    .finally(() => {
      dispatch(loading(false));
    });
  }
}

export const inputKaryawan = (karyawan) => {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(karyawan)
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed Input Karyawan');
      dispatch(getKaryawans())
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const detailKaryawan = (id) => {
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
        dispatch(karyawan(data));
      })
      .catch((error) => {
        dispatch(error(error));
      })
      .finally(() => {
        dispatch(loading(false));
      });
  }
}

export const editKaryawan = ({karyawan, id}) => {
  return (dispatch) => {
    fetch(url+id, {
      method: "PUT",
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(karyawan)
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to Edit Karyawan');
      dispatch(getKaryawans())
    })
    .catch(err => {
      console.log(err);
    })
  }
}
export const deleteKaryawan = (id) => {
  return (dispatch) => {
    fetch(url+id, {
    method: "DELETE"
  })
  .then((response) => {
    if (!response.ok) throw new Error('Failed to delete')
    dispatch(getKaryawans())
  })
  .catch((error) => {
    console.log(error);
  });
  }
}
