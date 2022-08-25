import React from "react";
import styles from "../../../styles/admin/adminLayout.module.css";
import Navbar from "../Navbar/AdminNavbar";
import SangmanchLogo from "../../../assets/sangmanch_logo.png";
import { MdDateRange } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { AiFillSetting, AiFillInfoCircle, AiFillQuestionCircle } from "react-icons/ai";
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
              <Link to="/dashboard">Overview</Link>
            </span>
          </li>
          <li>
            <MdDateRange size={18} />
            <span>
              <Link to="/reports">User Reports</Link>
            </span>
          </li>
          <li>
            <TbReport size={18} />
            <span>
              <Link to="/reports">Report Status</Link>
            </span>
          </li>
          <li>
            <AiFillInfoCircle size={18} />
            <span>
              <Link to="/infographics">Infographics</Link>
            </span>
          </li>
          <li>
            <AiFillQuestionCircle size={18} />
            <span>
              <Link to="/requirements">Requirements</Link>
            </span>
          </li>
          <div className={styles.divider}></div>
          <li>
            <AiFillSetting size={18} />
            <span>
              <Link to="/settings">Settings</Link>
            </span>
          </li>
        </ul>
      </aside>
      <main className={styles.contentWrapper}>
        <Navbar title={"General Assembly Dashboard" + title} />
        <Component />
      </main>
    </div>
  );
};

export default AdminLayout;
