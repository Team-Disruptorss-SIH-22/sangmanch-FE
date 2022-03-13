import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminLogin, UserLogin, Home, ManufacturerSignup, WarehouseSignup, MedicalStoreSignup, OfficerSignup, Page404, ManufacturerForm } from "../pages/index";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path={"/admin/login"} element={<AdminLogin/>}/>
          <Route exact path={"/user/login"} element={<UserLogin/>}/>
          <Route exact path="/manufacturer/signup" element={<ManufacturerSignup/>}/>
          <Route exact path="/warehouse/signup" element={<WarehouseSignup/>}/>
          <Route exact path="/medical/signup" element={<MedicalStoreSignup/>}/>
          <Route exact path="/officer/signup" element={<OfficerSignup/>}/>


          <Route exact path="/manufacturer/forms" element={<ManufacturerForm/>}/>


          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
