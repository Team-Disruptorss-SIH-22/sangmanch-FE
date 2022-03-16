import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/adminDashboard.module.css";
import { BsSearch } from "react-icons/bs";
import { FaBell, FaUser, FaUserCircle, FaChartPie, FaLightbulb } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { AiFillAlert, AiOutlineAreaChart, AiFillSetting } from "react-icons/ai";

const AdminDashboard = () => {
	const [menuToggle, setMenuToggle] = useState(false);

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

						<div className={styles.menuAction}>
							<div
								className={styles.menu__profile}
								onClick={() => {
									setMenuToggle(!menuToggle);
								}}
							>
								<span>NCB Officer - 1</span>
								<FaUserCircle size={20} />
							</div>

							{menuToggle && (
								<div className={styles.menu}>
									<h3>USER ID</h3>
									<ul>
										<li>
											<img
												src="https://cdn-icons-png.flaticon.com/512/929/929872.png"
												alt="settings"
											/>
											<Link to={"/manufacturer/settings"}>Settings</Link>
										</li>
										<li>
											<img
												src="https://cdn-icons-png.flaticon.com/512/1250/1250678.png"
												alt="logout"
											/>
											<Link to={"/manufacturer/logout"}>Log Out</Link>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</nav>
			</main>
		</div>
	);
};

export default AdminDashboard;
