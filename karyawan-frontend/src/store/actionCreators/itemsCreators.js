import {
  GET_ITEMS,
  UPDATE_ITEMS,
  SET_LOADING,
  SET_ERROR
} from '../actionTypes';
import Swal from 'sweetalert2'
// const url = `http://localhost:3000`
const url = 'https://letseat-backend.herokuapp.com'


export const getAllItems = (payload) => {
  return { type: GET_ITEMS, payload };
};

export const loadingItems = (payload) => {
  return { type: SET_LOADING, payload };
};

export const errorItems = (payload) => {
  return { type: SET_ERROR, payload };
};

export const updateItems = (payload) => {
  return {type: UPDATE_ITEMS, payload };
}

export  const getItems = () => {
  return (dispatch, getState) => {
    dispatch(loadingItems(true));
    dispatch(errorItems(null));
    fetch(url+'/admin',{
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then((response) => {
        if (!response.ok) throw new Error('cannot fetch');
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(getAllItems(data));
      })
      .catch((error) => {
        dispatch(errorItems(error));
      })
      .finally(() => {
        dispatch(loadingItems(false));
      });
  };
}

export const createItem = (item) => {
  return (dispatch, getState) => {
    fetch(url+'/admin', {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        access_token: localStorage.getItem('access_token')
      },
      body: JSON.stringify(item)
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to create new menu');
      dispatch(getItems())
      Swal.fire('Created!', `${item.name} was Created`, 'success')
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err
      })
    })
  }
}

export const deleteItem = (id) => {
  return (dispatch, getState) => {
    fetch(url+'/admin/'+id, {
    method: "DELETE",
    headers: {access_token: localStorage.getItem('access_token')}
  })
  .then((response) => {
    if (!response.ok) throw new Error('Failed to delete')
    Swal.fire(
      'Deleted!',
      'Your item has been deleted.',
      'success'
    )
    dispatch(getItems())
  })
  .catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error
    })
  });
  }
}

export const detailItem = (id) => {
  console.log(id)
  return (dispatch) => {
    dispatch(loadingItems(true));
    dispatch(errorItems(null));
    fetch(url+'/admin/'+id,{
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then((response) => {
        if (!response.ok) throw new Error('cannot fetch');
        return response.json();
      })
      .then((data) => {
        dispatch(updateItems(data));
      })
      .catch((error) => {
        dispatch(errorItems(error));
      })
      .finally(() => {
        dispatch(loadingItems(false));
      });
  }
}
export const updateItem = ({item, id}) => {
  return (dispatch, getState) => {
    fetch(url+'/admin/'+id, {
      method: "PUT",
      headers: { 
        'Content-Type': 'application/json',
        access_token: localStorage.getItem('access_token')
      },
      body: JSON.stringify(item)
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to update menu');
      dispatch(getItems())
      Swal.fire('Updated!', `Menu with id ${id} was updated`, 'success')
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err
      })
    })
  }
}