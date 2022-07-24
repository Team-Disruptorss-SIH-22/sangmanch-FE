import React from "react";
import styles from "../../../styles/admin/adminLayout.module.css";
import Navbar from "../Navbar/AdminNavbar";
import SangmanchLogo from "../../../assets/sangmanch_logo.svg";
import { MdDateRange } from "./react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { AiFillAlert, AiFillSetting } from "react-icons/ai";
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
            <FaChartPie />
            <span>
              <Link to="/dashboard">Overview</Link>
            </span>
          </li>
          <li>
            <MdDateRange />
            <span>
              <Link to="/drugs">User Reports</Link>
            </span>
          </li>
          <li>
            <TbReport />
            <span>
              <Link to="/national">Report Status</Link>
            </span>
          </li>
          <li>
            <AiFillAlert />
            <span>
              <Link to="/alerts">Infographics</Link>
            </span>
          </li>
          {/* <li>
            <FaUser />
            <span>
              <Link to="/admin/404">Agents [Escalation]</Link>
            </span>
          </li>
          <li>
            <AiOutlineAreaChart />
            <span>
              <Link to="/visualization">Visualizations</Link>
            </span>
          </li> */}

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
