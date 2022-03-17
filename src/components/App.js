import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
	DrugProgress,
	Dashboard,
	NationalView,
	Alerts
} from "./pages/index";

import AdminRoute from "./HOC/AdminRoute";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/manufacturer/signup" component={ManufacturerSignup} />
					<Route exact path="/warehouse/signup" component={WarehouseSignup} />
					<Route exact path="/medical/signup" component={MedicalStoreSignup} />
					<Route exact path="/admin/signup" component={AdminSignup} />
					<Route exact path="/manufacturer/dispatch" component={ManufacturerForm} />
					<Route exact path="/warehouse/dispatch" component={WarehouseForm} />
					<Route exact path="/medical/dispatch" component={MedicalStoreForm} />
					{/* ADMIN */}
					<AdminRoute exact path="/dashboard" title={"ID"} component={Dashboard} />
					<AdminRoute
						exact
						path="/progress/:id"
						component={DrugProgress}
						title={"Progress"}
					/>
					<AdminRoute exact path="/national" title={"National View"} component={NationalView} />
					<AdminRoute exact path="/alerts" title={"Alerts"} component={Alerts} />
					
					<Route path="*" component={Page404} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
