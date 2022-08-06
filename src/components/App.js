import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AdminRoute,
  OldUserRoute,
  UserRoute,
  UserSignupRoute,
  Login,
  Home,
  AdminSignup,
  Page404,
  AdminDashboard,
  AdminInfographics,
  Reports,
  UserDashboard,
  UserReports,
  Infographics,
  ReportStatus,
  // Drugs,
  Events,
  Verify,
  Settings,
  UserInfographics,
  ReviewReport,
} from "./pages/index";

import AuthState from "context/auth/AuthState";
import FormState from "context/forms/FormState";
import setAuthToken from "./Utils/SetAuthToken";
import About from "./pages/About/About";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    //these three forms do not have any routes yet
    <div className="App">
      <AuthState>
        <FormState>
          <Router>
            <Switch>
              <OldUserRoute exact path="/" component={Home} />
              <OldUserRoute exact path="/about" component={About} />
              <OldUserRoute exact path="/login" component={Login} />
              <OldUserRoute exact path="/verify/:token" component={Verify} />
              {/* <UserRoute exact path="/medical" component={MedicalStoreReciept} /> */}

              {/* User Signup */}
              <UserSignupRoute
                exact
                path="/signup/manufacturer"
                titleRole={"Manufacturer"}
              />
              <UserSignupRoute exact path="/signup/admin" component={AdminSignup} />

              {/* ADMIN */}
              <AdminRoute exact path="/dashboard" title={""} component={AdminDashboard} />

              <AdminRoute exact path="/reports" title={""} component={Reports} />

              <AdminRoute
                exact
                path="/infographics"
                title={""}
                component={AdminInfographics}
              />
              <AdminRoute exact path="/settings" title={""} component={Settings} />
              <AdminRoute exact path="/reportstatus" title={""} component={ReportStatus} />

              {/* USER */}
              <UserRoute
                exact
                path="/user/dashboard"
                title={""}
                component={UserDashboard}
              />
              <UserRoute exact path="/user/reports" title={""} component={UserReports} />
              <UserRoute
                exact
                path="/user/infographics"
                title={""}
                component={UserInfographics}
              />
              <UserRoute exact path="/user/settings" title={""} component={Settings} />

              <UserRoute exact path="/user/reportstatus" title={""} component={ReportStatus} />
              <UserRoute exact path="/user/reviewreport" title={""} component={ReviewReport} />

              <UserRoute exact path="/user/events" title={""} component={Events} />
              <UserRoute exact path="/user/404" title={""} component={Page404} />


              <Route path="*" component={Page404} />
              {/* hello */}
            </Switch>
          </Router>
        </FormState>
      </AuthState>
    </div>
  );
}

export default App;
//comment
