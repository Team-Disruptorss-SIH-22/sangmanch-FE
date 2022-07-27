import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "context/auth/authContext";

const OldUserRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated, user } = useContext(authContext);
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated !== null &&
				(isAuthenticated === false ? (
					<Component {...props} />
				) : (
					<Redirect to={`${user.role}/dispatch`} />
				))
			}
		/>
	);
};

export default OldUserRoute;
