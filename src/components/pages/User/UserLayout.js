import React from "react";
import styles from "../../../styles/admin/adminLayout.module.css";
import Navbar from "../Navbar/AdminNavbar";
import SangmanchLogo from "../../../assets/sangmanch_logo.svg";
import { MdDateRange } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { AiFillSetting, AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminLayout = ({ Component, title }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={SangmanchLogo} alt="Sangmanch Logo" />
        </div>
        <ul className={styles.collection}>
          <li>
            <FaChartPie size={15} />
            <span>
              <Link to="/user/dashboard">Overview</Link>
            </span>
          </li>
          <li>
            <MdDateRange size={18} />
            <span>
              {/* <Link to="/user/events">User Reports</Link> */}
              <Link to="/user/events">Events</Link>
            </span>
          </li>
          <li>
            <TbReport size={18} />
            <span>
              <Link to="/user/reports">Report Status</Link>
            </span>
          </li>
          <li>
            <AiFillInfoCircle size={18} />
            <span>
              {/* <Link to="/user/infographics">Infographics</Link> */}
              <Link to="/user/infographics">Infographics</Link>
            </span>
          </li>
          <div className={styles.divider}></div>
          <li>
            <AiFillSetting size={18} />
            <span>
              <Link to="/user/settings">Settings</Link>
            </span>
          </li>
        </ul>
      </aside>
      <main className={styles.contentWrapper}>
        <Navbar title={"User Dashboard" + title} />
        <Component />
      </main>
    </div>
  );
};

export default AdminLayout;
