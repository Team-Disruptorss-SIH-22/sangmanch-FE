import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "context/auth/authContext";

const FormRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user } = useContext(authContext);
  console.log("hello");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated !== null &&
        (isAuthenticated === true ? <Component {...props} /> : <Redirect to={"/login"} />)
      }
    />
  );
};

export default FormRoute;
