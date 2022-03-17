import React from "react";
import styles from "styles/admin/drugs.module.css";

const Drugs = () => {
	const data = Array(20).fill({
		orderID: Math.random(),
		CurrentState: Date.now(),
		Alert: Math.random() > 0.5 ? true : false
	});

	return (
		<div>
			<table className={styles.styled__table}>
				<thead>
					<tr>
						<th>S.No</th>
						<th>Order ID</th>
						<th>Current State</th>
						<th>Alert</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, idx) => (
						<tr>
							<td>{idx}</td>
							<td>{row.orderID}</td>
							<td>{row.CurrentState}</td>
							<td className={styles.alert__green}>{`${row.Alert}`}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Drugs;
