import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AdminRoute,
  UserRoute,
  UserSignupRoute,
  FormRoute,
  DoctorRoute,
  MedicalRoute,
  Login,
  Home,
  AdminSignup,
  Page404,
  ManufacturerForm,
  WarehouseForm,
  MedicalStoreReceipt,
  MedicalStoreSales,
  PrescriptionUploading,
  DrugProgress,
  AdminDashboard,
  NationalView,
  Alerts,
  Drugs,
  Verify,
  Visualization,
  MedicalDashboard,
  MedicalDrugs,
  DoctorDashboard,
  DoctorPrescriptions
} from "./pages/index";

import AuthState from "context/auth/AuthState";
import FormState from "context/forms/FormState";
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
                title={"Overview"}
                component={MedicalDashboard}
              />

              <MedicalRoute
                exact
                path="/medical/drugs"
                title={"Sales Data"}
                component={MedicalDrugs}
              />

              <MedicalRoute
                exact
                path="/medical/received"
                title={"Sales Data"}
                component={MedicalStoreReceipt}
              />

              <MedicalRoute
                exact
                path="/medical/sales"
                title={"Sales Data"}
                component={MedicalStoreSales}
              />
              <MedicalRoute exact path="/medical/404" title={""} component={Page404} />

              {/* DOCTOR DASHBOARD */}
              <DoctorRoute
                exact
                path="/doctor/overview"
                title={"Overview"}
                component={DoctorDashboard}
              />

              <DoctorRoute
                exact
                path="/doctor/prescription"
                title={"Prescriptions"}
                component={DoctorPrescriptions}
              />

              <DoctorRoute
                exact
                path="/doctor/form"
                title={""}
                component={PrescriptionUploading}
              />

              <DoctorRoute exact path="/doctor/404" title={""} component={Page404} />

              <Route path="*" component={Page404} />
            </Switch>
          </Router>
        </FormState>
      </AuthState>
    </div>
  );
}

export default App;
