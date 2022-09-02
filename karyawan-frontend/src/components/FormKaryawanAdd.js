import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDepartments } from "../store/actionCreators/department";
import { inputKaryawan } from "../store/actionCreators/karyawan";

export default function FormKaryawanAdd (){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {departments} = useSelector((state) => state.departmentReducer)
  // const {jabatan} = useSelector((state) => state.jabatanReducer)
  useEffect(() => {
    dispatch(getDepartments())
  }, [dispatch])

  const [newKaryawan, setnewKaryawan] = useState({
    name: '', id_jabatan: '', age: '', gender: '', tanggal_lahir: '', alamat: ''
  })

  const handleChange = (event) => {
    setnewKaryawan({
      ...newKaryawan,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newKaryawan);
    dispatch(inputKaryawan(newKaryawan))
    navigate('/')
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
            <div className="col-md-6 ml-auto mr-auto">
              <div className="form-group">
                <h6 className="card-title">Nama</h6>
                <input type="title" className="form-control" name="name" value={newKaryawan.name} placeholder="Masukkan Nama" onChange={handleChange} />
              </div>
            </div>
          <div className="col-md-6 ml-auto mr-auto">
            <div className="form-group">
              <h6 className="card-title">Usia</h6>
              <input type="text" className="form-control" name="age" value={newKaryawan.age} placeholder="Masukkan Usia" onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6 ml-auto mr-auto">
            <div className="form-group">
            <h6 className="card-title">Gender</h6>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="L"
                    name='gender'
                    onChange={handleChange}
                  />
                  Laki-laki
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="P"
                    name='gender'
                    onChange={handleChange}
                  />
                  Perempuan
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6 ml-auto mr-auto">
            <div className="form-group">
              <h6 className="card-title">Alamat</h6>
              <input type="text" className="form-control" name="alamat" value={newKaryawan.alamat} placeholder="Masukkan Alamat" onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6 ml-auto mr-auto">
            <div className="form-group">
            <h6 className="card-title">Departemen</h6>
              <select className="form-control" name="departmentId">
                <option>Pilih Department...</option>
                {departments.map(el => {
                  return (
                    <option key={el.id}  value={el.id}>{el.nama_department}</option>
                  )
                })}
              </select>
            </div>
          </div>
          {/* <div className="col-md-6 ml-auto mr-auto">
            <div className="form-group">
            <h6 className="card-title">Jabatan</h6>
              <select className="form-control" name="departmentId">
                <option>Pilih Jabatan...</option>
                {jabatan.map(el => {
                  return (
                    <option key={el.id}  value={el.id}>{el.nama_department}</option>
                  )
                })}
              </select>
            </div>
          </div> */}
          <div className="update col-md-6 ml-auto mr-auto">
            <button type="submit" className="btn btn-primary btn-round">Add Karyawan</button>
          </div>
        </form>
    </>
  )
}