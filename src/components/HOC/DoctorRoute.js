import React from "react";
import { Route } from "react-router-dom";
import { DoctorLayout } from "../pages";

const DoctorRoute = ({ component, title, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => <DoctorLayout Component={component} title={title} {...props} />}
		/>
	);
};

export default DoctorRoute;
