import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Home, ManufacturerSignup, WarehouseSignup, MedicalStoreSignup } from "../pages/index";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/manufacturer-signup" element={<ManufacturerSignup/>}/>
          <Route exact path="/warehouse-signup" element={<WarehouseSignup/>}/>
          <Route exact path="/medicalstore-signup" element={<MedicalStoreSignup/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
