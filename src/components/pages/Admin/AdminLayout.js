import React from "react";
import styles from "../../../styles/admin/adminLayout.module.css";
import Navbar from "./UserNavbar";
import { FaUser, FaChartPie, FaLightbulb } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { AiFillAlert, AiOutlineAreaChart, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminLayout = ({ Component, title }) => {
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
              <Link to="/dashboard">Overview</Link>
            </span>
          </li>
          <li>
            <GiMedicines />
            <span>
              <Link to="/drugs">Drugs</Link>
            </span>
          </li>
          <li>
            <FaLightbulb />
            <span>
              <Link to="/national">National View</Link>
            </span>
          </li>
          <li>
            <AiFillAlert />
            <span>
              <Link to="/alerts">Alerts</Link>
            </span>
          </li>
          <li>
            <FaUser />
            <span>
              <Link to="/admin/404">Agents [Escalation]</Link>
            </span>
          </li>
          <li>
            <AiOutlineAreaChart />
            <span>
              <Link to="/admin/404">Visualizations</Link>
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
        <Navbar title={"Drug View " + title} />
        <Component />
      </main>
    </div>
  );
};

export default AdminLayout;
