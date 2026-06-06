import { useEffect,useState } from "react";
import axios from "axios";
import "./ListEmployee.css";
import { useNavigate } from "react-router-dom";

function ListEmployee(){
    const [employees,setEmployess] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchEmployee();
    },[]);
    
    const fetchEmployee=async()=>{
        try{
         const res = await axios.get("http://localhost:5000/employee/getall");
         setEmployess(res.data.employees);
        }catch(error){
           console.log(error); 
        }
    }

    const deleteEmployee = async(id)=>{
        try{
          await axios.delete(`http://localhost:5000/employee/delete/${id}`);
          console.log("employee deleted");
          fetchEmployee();
        }catch(error){
            console.log(error);
        }
    }

    return (
  <div className="employee-container">
    <h1 className="employee-title">Employee List</h1>

    <div className="employee-grid">
      {employees.map((emp) => (
        <div className="employee-card" key={emp._id}>
          <h3>{emp.name}</h3>

          <p className="employee-info">
            <span>Email:</span> {emp.email}
          </p>

          <p className="employee-info">
            <span>Position:</span> {emp.position}
          </p>

          <p className="employee-info">
            <span>Salary:</span> ₹{emp.salary}
          </p>

          <div className="employee-actions">
            <button className="edit-btn"  onClick={() => navigate(`/edit/${emp._id}`)}>Edit</button>
            <button className="delete-btn" onClick={()=>deleteEmployee(emp._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default ListEmployee;