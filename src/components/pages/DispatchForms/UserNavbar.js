import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/forms/userNavbar.module.css";
// import AccessAlarmIcon from '@mui/icons-material';

const UserNavbar = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<div className={styles.userNavbar}>
			<div className={styles.headersContainer}>
				<Link to='/' className={styles.logoIcon}>
					<img src="https://narcoticsindia.nic.in/images/acs.png" alt="logo-icon" />
				</Link>
				<div className={styles.headers2}>
					<p className={styles.title2}>NCB DAAS</p>
					<p className={styles.titleDetails2}>Drugs Analytics and Alerting System</p>
				</div>
			</div>

			<div className={styles.userIconAction}>
				<div
					className={styles.profile}
					onClick={() => {
						setMenuToggle(!menuToggle);
					}}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/618/618631.png"
						alt="user-icon"
					/>
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
	);
};

export default UserNavbar;
