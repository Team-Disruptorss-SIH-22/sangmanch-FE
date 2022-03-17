import React from "react";
import styles from "../../styles/footer.module.css";
import ncb__logo from "../../assets/ncb__logo.png";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<p className={styles.footer__text}>Copyright © 2022. All Rights Reserved</p>
				<div className={styles.logo}>
					<img src={ncb__logo} alt="NCB Logo" />
					<p>NCB DAAS</p>
				</div>
				<div className={styles.footer__links}>
					<span className={styles.footer__link}> Terms of Service</span>
					<span className={styles.footer__link}>|</span>
					<span className={styles.footer__link}> Privacy Policy</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
