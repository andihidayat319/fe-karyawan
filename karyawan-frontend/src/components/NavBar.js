import { Link } from "react-router-dom";
export default function NavBar(){
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/">
            <p className="navbar-brand">CMS Karyawan </p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">
                    <p className="nav-link active" aria-current="page">Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/karyawan/add">
                    <p className="nav-link" aria-current="page">Add Karyawan</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/department/add">
                    <p className="nav-link" aria-current="page">Add Department</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/jabatan/add">
                    <p className="nav-link" aria-current="page">Add Jabatan</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  )
}