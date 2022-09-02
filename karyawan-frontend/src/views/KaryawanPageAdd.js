import FormKaryawanAdd from "../components/FormKaryawanAdd";

export default function KaryawanPageAdd (){

  return (
    <div className="container">
      <div className="card-header ml-auto mr-auto">
        <h3 className="card-title text-center">Input Data Karyawan</h3>
        <div className="container">
          <FormKaryawanAdd></FormKaryawanAdd>
        </div>
      </div>
    </div>
  )
}