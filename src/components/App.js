import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminLogin, Home, ManufacturerSignup } from "../pages/index";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/admin-login" element={<AdminLogin/>}/>
          <Route exact path="/manufacturer-signup" element={<ManufacturerSignup/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
