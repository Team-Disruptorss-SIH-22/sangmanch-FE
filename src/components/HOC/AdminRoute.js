import React from "react";
import { Route } from "react-router-dom";
import { AdminLayout } from "../pages";

const AdminRoute = ({ component, title, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => <AdminLayout Component={component} title={title} {...props} />}
		/>
	);
};

export default AdminRoute;
