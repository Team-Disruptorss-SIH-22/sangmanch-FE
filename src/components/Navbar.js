import React from "react";
import styles from "../styles/adminNavbar.module.css";
import { BsSearch } from "react-icons/bs";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = ({ title }) => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.heading_primary}>{title}</div>
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
	);
};

export default Navbar;
