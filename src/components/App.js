import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AdminRoute,
  UserRoute,
  UserSignupRoute,
  FormRoute,
  Login,
  Home,
  AdminSignup,
  Page404,
  ManufacturerForm,
  WarehouseForm,
  MedicalStoreReciept,
  MedicalStoreSales,
  PrescriptionUploading,
  DrugProgress,
  Dashboard,
  NationalView,
  Alerts,
  Drugs,
  Verify
} from "./pages/index";

import AuthState from "context/auth/AuthState";
import setAuthToken from "./Utils/SetAuthToken";
import FormState from "context/forms/FormState";

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
        <FormState>
          <Router>
            <Switch>
              <UserRoute exact path="/" component={Home} />
              <UserRoute exact path="/login" component={Login} />
              <UserRoute exact path="/verify/:token" component={Verify} />
              {/* <UserRoute exact path="/medical" component={MedicalStoreReciept} /> */}

              {/* User Signup */}
              <UserSignupRoute
                exact
                path="/signup/manufacturer"
                titleRole={"Manufacturer"}
              />
              <UserSignupRoute exact path="/signup/warehouse" titleRole={"Warehouse"} />
              <UserSignupRoute exact path="/signup/medical" titleRole={"Medical Store"} />
              <UserSignupRoute exact path="/signup/doctor" titleRole={"Doctor"} />
              <UserSignupRoute exact path="/signup/admin" component={AdminSignup} />

              <FormRoute
                exact
                path="/manufacturer/dispatch"
                component={ManufacturerForm}
              />
              <FormRoute exact path="/warehouse/dispatch" component={WarehouseForm} />

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
        </FormState>
      </AuthState>
    </div>
  );
}

export default App;
