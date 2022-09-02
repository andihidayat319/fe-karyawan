import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDepartments } from "../store/actionCreators/department";
import { inputJabatan } from "../store/actionCreators/jabatan";


export default function FormAddJabatan (){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {departments} = useSelector((state) => state.departmentReducer)
  useEffect(() => {
    dispatch(getDepartments())
  }, [dispatch])
  const [newJabatan, setnewJabatan] = useState({
    id_jabatan: '',
    nama_department: ''
  })

  const handleChange = (event) => {
    setnewJabatan({
      ...newJabatan,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newJabatan);
    dispatch(inputJabatan(newJabatan))
    navigate('/')
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
        <div className="col-md-6 ml-auto mr-auto">
            <div className="form-group">
            <h6 className="card-title">Nama Departemen</h6>
              <select className="form-control" name="departmentId"  value={newJabatan.id_jabatan} onChange={handleChange}>
                <option>Pilih Department...</option>
                {departments.map(el => {
                  return (
                    <option key={el.id}  value={el.id}>{el.nama_department}</option>
                  )
                })}
              </select>
            </div>
          </div>
            <div className="col-md-6 ml-auto mr-auto">
              <div className="form-group">
                <h6 className="card-title">Nama Jabatan</h6>
                <input type="text" className="form-control" name="nama_jabatan" value={newJabatan.nama_jabatan} placeholder="Masukkan Nama Departemen" onChange={handleChange} />
              </div>
            </div>
          <div className="update col-md-6 ml-auto mr-auto">
            <button type="submit" className="btn btn-primary btn-round">Add Jabatan </button>
          </div>
        </form>
    </>
  )
}