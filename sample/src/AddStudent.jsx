import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function AddStudent() {
  const [student, setStudent] = useState({
    id: "1001",
    name: "Dara",
    age: 19,
    gender: "M",
  });

  const [students, setStudents] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (student.id && student.name && student.age && student.gender) {
      setStudents((prev) => [...prev, student]);
    } else {
      alert("សូមបញ្ចូលទិន្នន័យសិស្សអោយអស់សិន!");
    }
  };

  const handleRemove = (id) => {
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
  };

  return (
    <>
      <div className="myFont container text-white mt-5 mb-5">
        <div className="myBg p-4 shadow rounded">
          <h4>ព័ត៌មានសិស្ស</h4>
          <div>
            <div className="form-group mt-4">
              <label className="form-label" htmlFor="id">
                កូដសិស្ស ID ៖ {student.id ? student.id : ""}
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
                <Alert variant="warning" dismissible>
                  សូមបញ្ចូលកូដសិស្ស
                </Alert>
              )}
            </div>
            <div className="form-group mt-4">
              <label className="form-label" htmlFor="name">
                ឈ្មោះសិស្ស ៖ {student.name ? student.name : ""}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={student.name ? student.name : ""}
                onChange={handleChange}
              />
              {student.name ? (
                ""
              ) : (
                <Alert variant="warning" dismissible>
                  សូមបញ្ចូលឈ្មោះសិស្ស
                </Alert>
              )}
            </div>
            <div className="form-group mt-4">
              <label className="form-label" htmlFor="age">
                អាយុសិស្ស ​៖ {student.age ? student.age : ""}
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                value={student.age ? student.age : ""}
                onChange={handleChange}
              />
              {student.age ? (
                ""
              ) : (
                <Alert variant="warning" dismissible>
                  សូមបញ្ចូលអាយុសិស្ស
                </Alert>
              )}
            </div>
            <div className="form-group mt-4">
              <label className="form-label" htmlFor="gender">
                ភេទសិស្ស ៖ {student.gender ? student.gender : ""}
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                value={student.gender ? student.gender : ""}
                onChange={handleChange}
              />
              {student.gender ? (
                ""
              ) : (
                <Alert variant="warning" dismissible>
                  សូមបញ្ចូលភេទសិស្ស
                </Alert>
              )}
            </div>
            <div className="form-group mt-4">
              <button className="btn btn-success" onClick={handleAdd}>
                បញ្ចូលទិន្នន័យសិស្ស
              </button>
            </div>
          </div>
        </div>
        <div className="bg-info-subtle text-black p-4 mt-4 shadow rounded">
          {students.length !== 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>កូដសិស្ស</th>
                    <th>ឈ្មោះសិស្ស</th>
                    <th>អាយុសិស្ស</th>
                    <th>ភេទសិស្ស</th>
                    <th>សកម្មភាព</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, i) => (
                    <tr>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.gender}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemove(student.id)}
                        >
                          លុបទិន្នន័យសិស្ស
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>គ្មានទិន្នន័យសិស្សទេ</div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddStudent;
