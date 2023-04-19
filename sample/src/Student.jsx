import { useState } from "react";

function Student() {
  //setting default value to current state
  const [student, setStudent] = useState({
    id: 1001,
    name: "Dara",
    gender: "M",
    grade: 12,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    //spread operator
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    //no refreshing the page
    e.preventDefault();
    alert(JSON.stringify(student, "", 1));
  };

  return (
    <>
      <div className="container bg-danger-subtle text-white shadow rounded p-5 mt-5 myBg">
        <h1 className="lead">Change Student Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="id">
              Student ID : {student.id ? student.id : "Please enter id"}
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={student.id ? student.id : ""}
              onChange={handleChange}
            />
            {student.id ? (
              ""
            ) : (
              <div class="alert alert-danger" role="alert">
                Please enter student id
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Student Name : {student.name ? student.name : "Please enter name"}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={student.name ? student.name : ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="gender">
              Student Gender :{" "}
              {student.gender ? student.gender : "Please enter gender"}
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={student.gender ? student.gender : ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="grade">
              Student Grade :{" "}
              {student.grade ? student.grade : "Please enter grade"}
            </label>
            <input
              type="text"
              className="form-control"
              id="grade"
              name="grade"
              value={student.grade ? student.grade : ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Student;
