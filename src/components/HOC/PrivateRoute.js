import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Sidebar } from "../pages";
import authContext from "context/auth/authContext";

const PrivateRoute = ({ component, title, ...rest }) => {
  const { isAuthenticated } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Sidebar Component={component} title={title} {...props} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
