import React from "react";

import HomeNavbar from "./HomeNavbar";
import Footer from "../Footer";

import styles from "../../../styles/Home/home.module.css";

const Home = (props) => {
	return (
		<div className={styles.container}>
			<HomeNavbar {...props} />
			{/* Carousel */}
			{/* Cards */}
			{/* FAQ */}
			<Footer />
		</div>
	);
};

export default Home;
