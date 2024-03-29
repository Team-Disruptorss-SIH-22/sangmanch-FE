import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserLayout } from "../pages";
import authContext from "context/auth/authContext";
import Loader from "components/pages/Loader";

const PrivateRoute = ({ component, title, ...rest }) => {
  const { isAuthenticated, loading } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Loader />
        ) : (
          isAuthenticated !== null &&
          (isAuthenticated ? (
            <UserLayout Component={component} title={title} {...props} />
          ) : (
            <Redirect to={"/login"} />
          ))
        )
      }
    />
  );
};

export default PrivateRoute;
