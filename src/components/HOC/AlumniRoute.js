import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AlumniLayout, UserLayout } from "../pages";
import Loader from "components/pages/Loader";

const AlumniRoute = ({ component, title, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
            <AlumniLayout Component={component} title={title} {...props} />
      }
    />
  );
};

export default AlumniRoute;
