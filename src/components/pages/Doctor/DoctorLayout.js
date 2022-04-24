import React from "react";
import styles from "../../../styles/admin/adminLayout.module.css";
import Navbar from "../Navbar/AdminNavbar";
import { FaChartPie, FaLightbulb } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const DoctorLayout = ({ Component, title }) => {
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
            <span>
              <Link to="/doctor/overview">Overview</Link>
            </span>
          </li>
          <li>
            <GiMedicines />
            <span>
              <Link to="/doctor/prescription">Prescription</Link>
            </span>
          </li>
          <li>
            <FaLightbulb />
            <span>
              <Link to="/doctor/form">Prescription Form</Link>
            </span>
          </li>
          <div className={styles.divider}></div>
          <li>
            <AiFillSetting />
            <span>
              <Link to="/doctor/404">Settings</Link>
            </span>
          </li>
        </ul>
      </aside>
      <main className={styles.contentWrapper}>
        <Navbar title={title} />
        <Component />
      </main>
    </div>
  );
};

export default DoctorLayout;
