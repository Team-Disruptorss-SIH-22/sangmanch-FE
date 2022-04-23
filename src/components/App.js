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
  AdminDashboard,
  NationalView,
  Alerts,
  Drugs,
  Verify,
  Visualization,
  MedicalDashboard,
  MedicalDrugs
} from "./pages/index";

import MedicalStoreReceipt from "./pages/AuthForms/MedicalStoreReceipt";
import MedicalStoreSales from "./pages/AuthForms/MedicalStoreSales";
import PrescriptionUploading from "./pages/AuthForms/PrescriptionUploading";

import AdminRoute from "./HOC/AdminRoute";
import UserSignupRoute from "./HOC/UserSignupRoute";
import UserRoute from "./HOC/UserRoute";
import MedicalRoute from "./HOC/MedicalRoute";

import AuthState from "context/auth/AuthState";
import setAuthToken from "./Utils/SetAuthToken";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    //these three forms do not have any routes yet
    // <PrescriptionUploading/>
    // <MedicalStoreSales/>
    // <MedicalStoreReceipt/>

    <div className="App">
      <AuthState>
        <Router>
          <Switch>
            <UserRoute exact path="/" component={Home} />
            <UserRoute exact path="/login" component={Login} />
            <UserRoute exact path="/verify/:token" component={Verify} />
            {/* <MedicalStoreReceipt /> */}

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
            <AdminRoute
              exact
              path="/dashboard"
              title={"- ID"}
              component={AdminDashboard}
            />
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
            <AdminRoute
              exact
              path="/visualization"
              title={""}
              component={Visualization}
            />
            <AdminRoute exact path="/admin/404" title={""} component={Page404} />

            {/* MEDICAL STORE DASHBOARD */}
            <MedicalRoute
              exact
              path="/medical/overview"
              title={"- Overview"}
              component={MedicalDashboard}
            />

            <MedicalRoute
              exact
              path="/medical/drugs"
              title={"- Drugs Sold"}
              component={MedicalDrugs}
            />

            <MedicalRoute
              exact
              path="/medical/received"
              title={""}
              component={MedicalStoreReceipt}
            />

            <MedicalRoute
              exact
              path="/medical/sales"
              title={""}
              component={MedicalStoreSales}
            />

            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;
