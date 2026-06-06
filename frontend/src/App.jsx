import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm";
import EditEmployee from "./pages/EditEmployee";
import ListEmployee from "./pages/ListEmployee";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
       <Route path="/employees" element={<ListEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;