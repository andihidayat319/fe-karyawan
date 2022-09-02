import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DepartmentAddPage from "./views/DepartmentPageAdd ";
import HomePage from "./views/HomePage";
import JabatanAddPage from "./views/JabatanAddPage";
import KaryawanPageAdd from "./views/KaryawanPageAdd";

export default function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/karyawan/add" element={<KaryawanPageAdd />}/>
        {/* <Route path="/karyawan/edit/:id" element={}/> */}
        <Route path="/department/add" element={<DepartmentAddPage />}/>
        <Route path="/jabatan/add" element={<JabatanAddPage />}/>
      </Routes>
    </>
  )
};