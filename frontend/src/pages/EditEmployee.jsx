import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
  });

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/employee/${id}`
      );

      setEmployee(res.data.employee);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/employee/update/${id}`,
        employee
      );

      alert("Employee Updated Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error updating employee");
    }
  };

  return (
    <div className="form-container">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h2>Update Employee</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Employee Email"
          value={employee.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="position"
          placeholder="Enter Employee Position"
          value={employee.position}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Enter Employee Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Update Employee
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;