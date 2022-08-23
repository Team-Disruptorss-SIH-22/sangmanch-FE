import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "context/auth/authContext";
import Loader from "components/pages/Loader";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user, loading } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Loader />
        ) : (
          isAuthenticated !== null &&
          (isAuthenticated === false ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={user.role === "ICCRUser" ? "/user/events" : "/user/dashboard"}
            />
          ))
        )
      }
    />
  );
};

export default PublicRoute;
