import React from "react";
import styles from "../../styles/adminDashboard.module.css";
import { BsSearch } from "react-icons/bs";
import { FaBell, FaUser, FaUserCircle, FaChartPie, FaLightbulb } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { AiFillAlert, AiOutlineAreaChart, AiFillSetting } from "react-icons/ai";

const AdminDashboard = () => {
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
				<nav className={styles.navbar}>
					<div className={styles.heading_primary}>Drug View - ID</div>
					<div className={styles.navbar__menu}>
						<div className={styles.navbar__logo}>
							<i>
								<BsSearch />
							</i>
							<i>
								<FaBell />
							</i>
						</div>
						<div className={styles.divider__v}></div>
						<div className={styles.menu__profile}>
							<span>NCB Officer - 1</span>
							<FaUserCircle size={20} />
						</div>
					</div>
				</nav>
			</main>
		</div>
	);
};

export default AdminDashboard;
