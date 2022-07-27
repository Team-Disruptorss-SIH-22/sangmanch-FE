import React from "react";
import { Route } from "react-router-dom";
import { UserLayout } from "../pages";

const UserRoute = ({ component, title, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => <UserLayout Component={component} title={title} {...props} />}
		/>
	);
};

export default UserRoute;
