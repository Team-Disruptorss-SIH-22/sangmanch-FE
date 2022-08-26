import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillSetting, AiFillInfoCircle, AiFillQuestionCircle } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

import Navbar from "components/pages/Navbar/AdminNavbar";
import AuthContext from "context/auth/authContext";
import SangmanchLogo from "assets/sangmanch_logo.png";
import styles from "styles/admin/adminLayout.module.css";

const UserLayout = ({ Component, title }) => {
  const { user } = useContext(AuthContext);

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
            <FaChartPie size={15} />
            <span>
              <Link to="/user/dashboard">Overview</Link>
            </span>
          </li>

          {user.role === "ICCRUser" && (
            <>
              <li>
                <MdDateRange size={18} />
                <span>
                  {/* <Link to="/user/events">User Reports</Link> */}
                  <Link to="/user/events">Events</Link>
                </span>
              </li>
              <li>
                <HiUserGroup size={18} />
                <span>
                  <Link to="/user/alumniconnect">Alumni Connect</Link>
                </span>
              </li>
            </>
          )}
          <li>
            <TbReport size={18} />
            <span>
              <Link to="/user/reports">Report Status</Link>
            </span>
          </li>
          <li>
            <BiSearchAlt size={18} />
            <span>
              <Link to="/search-reports">Search Reports</Link>
            </span>
          </li>
          <li>
            <AiFillInfoCircle size={18} />
            <span>
              {/* <Link to="/user/infographics">Infographics</Link> */}
              <Link to="/user/infographics">Infographics</Link>
            </span>
          </li>
          <li>
            <AiFillQuestionCircle size={18} />
            <span>
              <Link to="/user/requirements">Requirements</Link>
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

export default UserLayout;
