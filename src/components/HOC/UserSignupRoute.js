import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "context/auth/authContext";

import { UserSignup } from "components/pages";

const UserSignupRoute = ({ titleRole, ...rest }) => {
  const { isAuthenticated, user } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated !== null &&
        (isAuthenticated === false ? (
          <UserSignup {...props} titleRole={titleRole} />
        ) : (
          <Redirect to={user.role === "ICCRUser" ? "/user/events" : "/user/overview"} />
        ))
      }
    />
  );
};

export default UserSignupRoute;
