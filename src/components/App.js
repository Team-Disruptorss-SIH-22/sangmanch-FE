import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  PublicRoute,
  PrivateRoute,
  AlumniRoute,
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
  Events,
  Verify,
  Settings,
  UserInfographics,
  Requirements,
  AlumniLayout,
  AlumniNews,
  AlumniConnect,
  AlumniSignup,
  AlumniRequests,
  SearchReports
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
              <PublicRoute exact path="/alumni/signup" component={AlumniSignup} />
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
                path="/search-reports"
                title={""}
                component={SearchReports}
              />
              <PrivateRoute
                exact
                path="/user/infographics"
                title={""}
                component={UserInfographics}
              />
              <PrivateRoute
                exact
                path="/user/requirements"
                title={""}
                component={Requirements}
              />
              <PrivateRoute exact path="/user/settings" title={""} component={Settings} />
              <PrivateRoute exact path="/user/events" title={""} component={Events} />
              <PrivateRoute
                exact
                path="/user/alumniconnect"
                title={""}
                component={AlumniConnect}
              />

              <AlumniRoute exact path="/alumni/news" title={""} component={AlumniNews} />
              <AlumniRoute
                exact
                path="/alumni/requests"
                title={""}
                component={AlumniRequests}
              />
              <AlumniRoute
                exact
                path="/alumni/settings"
                title={""}
                component={Settings}
              />

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
