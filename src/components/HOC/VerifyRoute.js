import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "context/auth/authContext";

const VerifyRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated !== null &&
        (isAuthenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={user.role === "ICCRUser" ? "/user/events" : "/user/overview"} />
        ))
      }
    />
  );
};

export default VerifyRoute;
