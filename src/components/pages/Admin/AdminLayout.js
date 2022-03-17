import React from "react";
import styles from "../../../styles/admin/adminLayout.module.css";
import Navbar from "./AdminNavbar.js";
import { FaUser, FaChartPie, FaLightbulb } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { AiFillAlert, AiOutlineAreaChart, AiFillSetting } from "react-icons/ai";

const AdminLayout = ({ Component, title }) => {
	return (
		<div className={styles.container}>
			<aside className={styles.sidebar}>
				<div className={styles.logo}>
					<img src="https://narcoticsindia.nic.in/images/acs.png" alt="NCB Logo" />
					<p>NCB DAAS</p>
				</div>
				<ul className={styles.collection}>
					<li>
						<FaChartPie />
						<span>Overview</span>
					</li>
					<li>
						<GiMedicines />
						<span>Drugs</span>
					</li>
					<li>
						<FaLightbulb />
						<span>National View</span>
					</li>
					<li>
						<AiFillAlert />
						<span>Alerts</span>
					</li>
					<li>
						<FaUser />
						<span>Agents [Escalation]</span>
					</li>
					<li>
						<AiOutlineAreaChart />
						<span>Visualizations</span>
					</li>

					<div className={styles.divider}></div>
					<li>
						<AiFillSetting />
						<span>Settings</span>
					</li>
				</ul>
			</aside>
			<main className={styles.contentWrapper}>
				<Navbar title={"Drug View " + title} />
				<Component />
			</main>
		</div>
	);
};

export default AdminLayout;
