import React from "react";
import styles from "../../../styles/admin/adminLayout.module.css";
import Navbar from "../Navbar/AdminNavbar";
import { FaUser, FaChartPie, FaLightbulb } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { AiFillAlert, AiOutlineAreaChart, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const MedicalLayout = ({ Component, title }) => {
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
              <Link to="/medical/overview">Overview</Link>
            </span>
          </li>
          <li>
            <GiMedicines />
            <span>
              <Link to="/medical/drugs">Drugs</Link>
            </span>
          </li>
          <li>
            <FaLightbulb />
            <span>
              <Link to="/medical/received">Receiving Form</Link>
            </span>
          </li>
          <li>
            <AiOutlineAreaChart />
            <span>
              <Link to="/medical/sales">Sales Form</Link>
            </span>
          </li>

          <div className={styles.divider}></div>
          <li>
            <AiFillSetting />
            <span>
              <Link to="/admin/404">Settings</Link>
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

export default MedicalLayout;
