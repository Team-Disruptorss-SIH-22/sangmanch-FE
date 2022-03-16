import React from "react";

import HomeNavbar from "./HomeNavbar";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.png";
import Img3 from "./images/img3.png";
import Img4 from "./images/img4.png";

import styles from "../../../styles/home.module.css";

const Home = () => {
	return (
		<div>
			<HomeNavbar />
			
			<div className={styles.pageContainer}>

				<div className={styles.leftbox}>
					<img src={Img1} width="500 px" />
					<div className={styles.info}>
						<div className={styles.title}>
							<b>
								<h1>
									<p className={styles.title}>Help Us In Tracking</p>
									<p className={styles.title}> Illegal Drugs</p>
								</h1>
							</b>
						</div>

						<p>
							DAAS (Drug Analysis and Alerting System) is a nationalized framework to
							track the procurement of the drugs described as prescription required drugs
							in the NDPS act 1985. The data collected is stored in secured government
							channels and monitored for abnormal sales
						</p>

						<button className={styles.but}>
							{" "}
							<span>Learn more</span>
						</button>

					</div>
				</div>

				<div className={styles.middlebox}>
					<img className={styles.img2} src={Img2} width="300 px" />
				</div>

				<div className={styles.rightbox}>
					<img className={styles.img3} src={Img3} width="300 px" />
					<img className={styles.img4} src={Img4} width="200 px" />
				</div>
			</div>
		</div>
	);
};

export default Home;
