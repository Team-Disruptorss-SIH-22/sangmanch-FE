import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	Login,
	Home,
	ManufacturerSignup,
	WarehouseSignup,
	MedicalStoreSignup,
	AdminSignup,
	Page404,
	ManufacturerForm,
	WarehouseForm,
	MedicalStoreForm,
	AdminDashboard
} from "./pages/index";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/manufacturer/signup" element={<ManufacturerSignup />} />
					<Route exact path="/warehouse/signup" element={<WarehouseSignup />} />
					<Route exact path="/medical/signup" element={<MedicalStoreSignup />} />
					<Route exact path="/admin/signup" element={<AdminSignup />} />

					<Route exact path="/manufacturer/dispatch" element={<ManufacturerForm />} />
					<Route exact path="/warehouse/dispatch" element={<WarehouseForm />} />
					<Route exact path="/medical/dispatch" element={<MedicalStoreForm />} />

					<Route exact path="/admin/dashboard" element={<AdminDashboard />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
