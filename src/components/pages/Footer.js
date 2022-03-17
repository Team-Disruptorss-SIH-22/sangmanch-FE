import React from "react";
import styles from "../../styles/footer.module.css";
import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<p className={styles.footer__text}>Copyright © 2022. All Rights Reserved</p>
				<div className={styles.social}>
					<i className={styles.social__icon}>
						<FaGithub size={18} />
					</i>
					<i className={styles.social__icon}>
						<FaInstagram size={18} />
					</i>
					<i className={styles.social__icon}>
						<FaTwitter size={18} />
					</i>
					<i className={styles.social__icon}>
						<FaFacebook size={18} />
					</i>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
