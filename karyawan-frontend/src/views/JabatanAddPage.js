import FormAddJabatan from "../components/FormAddJabatan";


export default function JabatanAddPage (){

  return (
    <div className="container">
      <div className="card-header ml-auto mr-auto">
        <h3 className="card-title text-center">Input Jenis Jabatan Baru</h3>
        <div className="container">
          <FormAddJabatan></FormAddJabatan>
        </div>
      </div>
    </div>
  )
}