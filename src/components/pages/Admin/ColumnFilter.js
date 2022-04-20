import React from "react";

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column;
	return <input value={filterValue || ""} onChange={(e) => setFilter(e.target.value)} placeholder="Search" />;
};
