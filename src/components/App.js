import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  PublicRoute,
  PrivateRoute,
  Signup,
  Login,
  Home,
  About,
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

  UserInfographics

} from "./pages/index";

import AuthState from "context/auth/AuthState";
import EventState from "context/event/EventState";
import setAuthToken from "./Utils/SetAuthToken";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    //these three forms do not have any routes yet
    <div className="App">
      <AuthState>
        <EventState>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/verify/:token" component={Verify} />

              {/* ADMIN */}
              <PrivateRoute
                exact
                path="/dashboard"
                title={""}
                component={AdminDashboard}
              />
              <PrivateRoute exact path="/reports" title={""} component={Reports} />
              <PrivateRoute
                exact
                path="/infographics"
                title={""}
                component={AdminInfographics}
              />
              <AdminRoute exact path="/settings" title={""} component={Settings} />
              <AdminRoute exact path="/reportstatus" title={""} component={ReportStatus} />
              <PrivateRoute exact path="/settings" title={""} component={Settings} />


              {/* USER */}
              <PrivateRoute
                exact
                path="/user/dashboard"
                title={""}
                component={UserDashboard}
              />
              <PrivateRoute
                exact
                path="/user/reports"
                title={""}
                component={UserReports}
              />
              <PrivateRoute
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



              <PrivateRoute exact path="/user/settings" title={""} component={Settings} />
              <PrivateRoute exact path="/user/events" title={""} component={Events} />

              <Route path="*" component={Page404} />
              {/* hello */}
            </Switch>
          </Router>
        </EventState>
      </AuthState>
    </div>
  );
}

export default App;
//comment
