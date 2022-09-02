import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { inputDepartment } from "../store/actionCreators/department";


export default function FormAddDepartment (){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newDepartment, setnewDepartment] = useState({
    nama_department: ''
  })

  const handleChange = (event) => {
    setnewDepartment({
      ...newDepartment,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newDepartment);
    dispatch(inputDepartment(newDepartment))
    navigate('/')
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
            <div className="col-md-6 ml-auto mr-auto">
              <div className="form-group">
                <h6 className="card-title">Nama Departemen</h6>
                <input type="title" className="form-control" name="nama_department" value={newDepartment.nama_department} placeholder="Masukkan Nama Departemen" onChange={handleChange} />
              </div>
            </div>
          <div className="update col-md-6 ml-auto mr-auto">
            <button type="submit" className="btn btn-primary btn-round">Add Department</button>
          </div>
        </form>
    </>
  )
}