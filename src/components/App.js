import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Login,
  Home,
  AdminSignup,
  Page404,
  ManufacturerForm,
  WarehouseForm,
  MedicalStoreForm,
  DrugProgress,
  Dashboard,
  NationalView,
  Alerts,
  Drugs,
  Verify
} from "./pages/index";

import AdminRoute from "./HOC/AdminRoute";
import UserSignupRoute from "./HOC/UserSignupRoute";
import UserRoute from "./HOC/UserRoute";
import AuthState from "context/auth/AuthState";
import setAuthToken from "./Utils/SetAuthToken";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <AuthState>
        <Router>
          <Switch>
            <UserRoute exact path="/" component={Home} />
            <UserRoute exact path="/login" component={Login} />
            <UserRoute exact path="/verify/:token" component={Verify} />

            {/* User Signup */}
            <UserSignupRoute
              exact
              path="/signup/manufacturer"
              titleRole={"Manufacturer"}
            />
            <UserSignupRoute exact path="/signup/warehouse" titleRole={"Warehouse"} />
            <UserSignupRoute exact path="/signup/medical" titleRole={"Medical Store"} />
            <UserSignupRoute exact path="/signup/doctor" titleRole={"Doctor"} />
            <Route exact path="/signup/admin" component={AdminSignup} />

            <Route exact path="/manufacturer/dispatch" component={ManufacturerForm} />
            <Route exact path="/warehouse/dispatch" component={WarehouseForm} />
            <Route exact path="/medical/dispatch" component={MedicalStoreForm} />

            {/* ADMIN */}
            <AdminRoute exact path="/dashboard" title={"- ID"} component={Dashboard} />
            <AdminRoute
              exact
              path="/drug/:id"
              component={DrugProgress}
              title={"- Progress"}
            />
            <AdminRoute
              exact
              path="/national"
              component={NationalView}
              title={"- National"}
            />

            <AdminRoute exact path="/alerts" title={"- Alerts"} component={Alerts} />
            <AdminRoute exact path="/drugs" title={""} component={Drugs} />
            <AdminRoute exact path="/admin/404" title={""} component={Page404} />

            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;
