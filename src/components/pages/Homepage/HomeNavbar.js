import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import ncb__logo from "../../../assets/ncb__logo.png";
import styles from "../../../styles/Landing/homeNavbar.module.css";

const HomeNavbar = () => {
	return (
		<nav className={styles.navbar__wrapper}>
			<div className={styles.navbar}>
				<ul className={styles.links__banner}>
					<li className={styles.logo}>
						<Link to="/">
							<img src={ncb__logo} alt="NCB Logo" />
						</Link>
						<p>NCB DAAS</p>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="https://narcoticsindia.nic.in/" target="_blank">
							About NCB
						</Link>
					</li>
					<li>
						<Link to="/admin/signup" target="_blank">
							Admin
						</Link>
					</li>
				</ul>
				<ul className={styles.links__auth}>
					<li className={styles.login}>
						<Link to="/login" target="_blank">
							Login
						</Link>
					</li>
					<li>
						<div className={styles.dropdown}>
							<div className={styles.dropbtn}>
								Signup
								<MdArrowDropDown size={20} />
							</div>
							<div className={styles.dropdown__content}>
								<ul>
									<li>
										<Link to="manufacturer/signup">Manufacturer</Link>
									</li>
									<li>
										<Link to="warehouse/signup">Warehouse</Link>
									</li>
									<li>
										<Link to="medical/signup">Medical Store</Link>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default HomeNavbar;
