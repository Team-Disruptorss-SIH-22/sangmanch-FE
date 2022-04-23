import React from "react";
import { Route } from "react-router-dom";
import { MedicalLayout } from "../pages";

const MedicalRoute = ({ component, title, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => <MedicalLayout Component={component} title={title} {...props} />}
		/>
	);
};

export default MedicalRoute;
