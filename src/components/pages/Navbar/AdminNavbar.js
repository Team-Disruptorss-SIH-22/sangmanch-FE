import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";

// ICONS
import { BsSearch } from "react-icons/bs";
import { FaBell, FaUserCircle } from "react-icons/fa";

// LOCAL IMPORTS
import authContext from "context/auth/authContext";
import styles from "../../../styles/admin/adminNavbar.module.css";

const Navbar = (props) => {

  const { isAuthenticated, user } = useContext(authContext);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push(`${user.role}/dispatch`);
    }
  }, [isAuthenticated]);

	return (
		<nav className={styles.navbar}>
			<div className={styles.heading_primary}>{props.title}</div>
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
	);
};

export default Navbar;