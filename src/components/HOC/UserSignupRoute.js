import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserSignup } from "../pages";
import authContext from "context/auth/authContext";

const UserSignupRoute = ({ component, titleRole, ...rest }) => {
	const { isAuthenticated, user } = useContext(authContext);
	return !isAuthenticated ? (
		<Route
			{...rest}
			render={(props) => <UserSignup titleRole={titleRole} {...props} />}
		/>
	) : (
		<Redirect to={`${user.role}/dispatch`} />
	);
};

export default UserSignupRoute;
