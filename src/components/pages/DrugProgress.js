import React from "react";
import styles from "../../styles/drugProgress.module.css";

const DrugProgress = () => {
	return (
		<div>
			<div className={styles.flex}>
				<div className={styles.container__wrap}>
					<div className={styles.flex__between}>
						<div className={`${styles.order__tracking} ${styles.completed}`}>
							<span className={styles.is_complete}></span>
							<p>Manufacturer</p>
						</div>
						<div className={`${styles.order__tracking} ${styles.completed}`}>
							<span className={styles.is_complete}></span>
							<p>Warehouse - 1</p>
						</div>
						<div className={`${styles.order__tracking} ${styles.completed}`}>
							<span className={styles.is_complete}></span>
							<p>Warehouse - 2</p>
						</div>
						<div className={`${styles.order__tracking} ${styles.completed}`}>
							<span className={styles.is_complete}></span>
							<p>Warehouse - 3</p>
						</div>
						<div className={`${styles.order__tracking}`}>
							<span className={styles.is_complete}></span>
							<p>Medical Store</p>
						</div>
					</div>
				</div>
			</div>
			<table className={styles.styled__table}>
				<thead>
					<tr>
						<th>S.No</th>
						<th>Disptached From</th>
						<th>Out Time</th>
						<th>Quantity</th>
						<th>Alert</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Manufacturer: ID</td>
						<td>12th December 2021, 09:46pm</td>
						<td>100</td>
						<td className={styles.alert__green}>False</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Warehouse: ID</td>
						<td>13th December 2021, 04:15am</td>
						<td>90</td>
						<td className={styles.alert__red}>True</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Warehouse: ID</td>
						<td>13th December 2021, 04:15am</td>
						<td>90</td>
						<td className={styles.alert__red}>True</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Warehouse: ID</td>
						<td>13th December 2021, 04:15am</td>
						<td>90</td>
						<td className={styles.alert__red}>True</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default DrugProgress;
