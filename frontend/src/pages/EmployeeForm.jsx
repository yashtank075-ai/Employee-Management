import { useState } from "react";
import axios from "axios";
import "./EmployeeForm.css";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/employee/create",
        employee
      );

      alert("Employee created successfully");

      setEmployee({
        name: "",
        email: "",
        position: "",
        salary: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error creating employee");
    }
  };

  return (
    <div className="form-container">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h2>Add Employee</h2>

        <input
          type="text"
          name="name"
          value={employee.name}
          placeholder="Enter Employee Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={employee.email}
          placeholder="Enter Employee Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          value={employee.position}
          placeholder="Enter Employee Position"
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          value={employee.salary}
          placeholder="Enter Employee Salary"
          onChange={handleChange}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;