import FormAddDepartment from "../components/FormAddDepartment";

export default function DepartmentAddPage (){

  return (
    <div className="container">
      <div className="card-header ml-auto mr-auto">
        <h3 className="card-title text-center">Input Department Baru</h3>
        <div className="container">
          <FormAddDepartment></FormAddDepartment>
        </div>
      </div>
    </div>
  )
}