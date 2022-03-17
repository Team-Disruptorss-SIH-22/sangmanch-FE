import { useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import { BiSortUp } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { useTable } from "react-table";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import styles from "../../../styles/admin/alerts.module.css";

const MOCK_DATA = [
	{
		alert_id: 1,
		alert_details: "Nelco Laboratories, Inc.",
		customer_name: "Jason Maciaszczyk",
		date: "2020-02-26T18:26:51Z",
		priority: "Puce"
	},
	{
		alert_id: 2,
		alert_details: "Ventura Corporation Ltd. (San Juan, P.R)",
		customer_name: "Erie Pasley",
		date: "2020-12-08T13:11:06Z",
		priority: "Mauv"
	},
	{
		alert_id: 3,
		alert_details: "Matrixx Initiatives, Inc.",
		customer_name: "Melody Senton",
		date: "2021-01-04T10:20:07Z",
		priority: "Purple"
	},
	{
		alert_id: 4,
		alert_details: "PD-Rx Pharmaceuticals, Inc.",
		customer_name: "Lyssa Labden",
		date: "2020-05-29T11:25:36Z",
		priority: "Crimson"
	},
	{
		alert_id: 5,
		alert_details: "Dispensing Solutions, Inc.",
		customer_name: "Cahra Brompton",
		date: "2021-03-10T03:51:08Z",
		priority: "Blue"
	},
	{
		alert_id: 6,
		alert_details: "Sensible Life Products",
		customer_name: "Morten Rosenblatt",
		date: "2019-11-13T16:40:16Z",
		priority: "Teal"
	},
	{
		alert_id: 7,
		alert_details: "Mylan Pharmaceuticals Inc.",
		customer_name: "Doyle Sherrard",
		date: "2019-05-21T02:18:35Z",
		priority: "Red"
	},
	{
		alert_id: 8,
		alert_details: "Liberty Pharmaceuticals, Inc.",
		customer_name: "Selia Brasse",
		date: "2021-09-04T05:38:28Z",
		priority: "Yellow"
	},
	{
		alert_id: 9,
		alert_details: "Idelle Labs, Ltd",
		customer_name: "Pernell Dealey",
		date: "2019-07-22T03:01:49Z",
		priority: "Indigo"
	},
	{
		alert_id: 10,
		alert_details: "Parfums Christian Dior",
		customer_name: "Janaye Seaborn",
		date: "2021-02-15T08:55:23Z",
		priority: "Violet"
	},
	{
		alert_id: 11,
		alert_details: "Ventura Corporation LTD.",
		customer_name: "Ardis Rawling",
		date: "2020-02-28T01:25:12Z",
		priority: "Mauv"
	}
];

const COLUMNS = [
	{
		Header: "Alert ID",
		accessor: "alert_id"
	},
	{
		Header: "Alert Details",
		accessor: "alert_details"
	},
	{
		Header: "Customer Name",
		accessor: "customer_name"
	},
	{
		Header: "Date",
		accessor: "date"
	},
	{
		Header: "Priority",
		accessor: "priority"
	}
];

const Alerts = () => {
	//to store the values once and for all
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const tableInstance = useTable({
		columns,
		data
	});

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	return (
		<div className={styles.alertsContainer}>
			<div className={styles.alertHeaderContainer}>
				<p>All Alerts</p>

				<div className={styles.tableOperations + " " + styles.clrGrey}>
					<div className={styles.operation}>
						<BiSortUp />
						<p>Sort</p>
					</div>
					<div className={styles.operation}>
						<FaFilter />
						<p>Filter</p>
					</div>
				</div>
			</div>

			<div className={styles.tableContainer}>
				<table className={styles.table} {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th
										className={styles.tableHeaderRow + " " + styles.clrGrey}
										{...column.getHeaderProps()}
									>
										{column.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										{
											console.log(cell);
										}
										return (
											<td
												style={{
													color: cell?.column?.id === "priority" ? cell.value : ''
												}}
												className={styles.tableSingleCell}
												{...cell.getCellProps()}
											>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className={styles.footer}>
				<div className={styles.rowsPerPage}>
					<p>Rows per page:</p>
					<select name="1">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>

				<div className={styles.rowsPerPage}>
					<p> 1-8 of 1240</p>
					<Link to='/alerts'><FiArrowLeft /></Link>
					<Link to='/alerts'><FiArrowRight /></Link>
				</div>
			</div>
		</div>
	);
};

export default Alerts;
