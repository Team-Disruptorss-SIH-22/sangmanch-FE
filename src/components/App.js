import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AdminRoute,
  NonAuthRoute,
  Signup,
  UserRoute,
  Login,
  Home,
  About,
  Page404,
  AdminDashboard,
  AdminInfographics,
  Reports,
  UserDashboard,
  UserReports,
  Events,
  Verify,
  Settings,
  UserInfographics
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
    <div className="App">
      <AuthState>
        <FormState>
          <Router>
            <Switch>
              <NonAuthRoute exact path="/" component={Home} />
              <NonAuthRoute exact path="/about" component={About} />
              <NonAuthRoute exact path="/signup" component={Signup} />
              <NonAuthRoute exact path="/login" component={Login} />
              <NonAuthRoute exact path="/verify/:token" component={Verify} />

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
              <UserRoute exact path="/user/events" title={""} component={Events} />
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
