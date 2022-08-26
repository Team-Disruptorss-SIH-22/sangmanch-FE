import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillSetting, AiFillInfoCircle, AiFillQuestionCircle } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { MdOutlineBackupTable } from "react-icons/md";
import { TbReport } from "react-icons/tb";

import Navbar from "components/pages/Navbar/AdminNavbar";
import SangmanchLogo from "assets/sangmanch_logo.png";
import styles from "styles/admin/adminLayout.module.css";

const AlumniLayout = ({ Component, title }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={SangmanchLogo} alt="Sangmanch Logo" />
          </Link>
        </div>
        <ul className={styles.collection}>
          <li>
            <BsNewspaper size={15} />
            <span>
              <Link to="/alumni/news">What's New!</Link>
            </span>
          </li>

          <li>
            <MdOutlineBackupTable size={18} />
            <span>
              <Link to="/alumni/requests">Requests</Link>
            </span>
          </li>

          <div className={styles.divider}></div>
          <li>
            <AiFillSetting size={18} />
            <span>
              <Link to="/alumni/settings">Settings</Link>
            </span>
          </li>
        </ul>
      </aside>
      <main className={styles.contentWrapper}>
        <Navbar />
        <Component />
      </main>
    </div>
  );
};

export default AlumniLayout;
