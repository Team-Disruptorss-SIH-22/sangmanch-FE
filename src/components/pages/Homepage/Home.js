import React from "react";

import HomeNavbar from "./HomeNavbar";
import Footer from "../Footer";
import img__1 from "../../../assets/home/img1.png";
import img__2 from "../../../assets/home/img2.png";
import img__3 from "../../../assets/home/img3.png";
import img__4 from "../../../assets/home/img4.png";

import styles from "../../../styles/Home/home.module.css";

const Home = (props) => {
	return (
		<div className={styles.container}>
			<HomeNavbar {...props} />
			<div className={styles.left}>
				<div className={styles.image__container}>
					<img src={img__1} alt="" className={styles.img__1} />
				</div>
				<div>
					<div className={styles.showcase__text}>
						<div className={styles.heading}>
							<p>Help Us In Tracking</p>
							<p className={styles.text__primary}>Illegal Drug Sales</p>
						</div>
						<div className={styles.info}>
							DAAS (Drug Analysis and Alerting System) is a nationalized framework to
							track the procurement of the drugs described as prescription required drugs
							in the NDPS act 1985. The data collected is stored in secured government
							channels and monitored for abnormal sales.
						</div>
					</div>
					<div className={styles.button}>Learn More</div>
				</div>
				<img src={img__2} className={styles.img__2} alt="" />
				<img src={img__3} className={styles.img__3} alt="" />
				<img src={img__4} className={styles.img__4} alt="" />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
