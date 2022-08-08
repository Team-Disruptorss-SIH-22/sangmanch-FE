import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ICONS
import { BsSearch } from "react-icons/bs";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

// LOCAL IMPORTS
import authContext from "context/auth/authContext";
import styles from "../../../styles/admin/adminNavbar.module.css";

const Navbar = (props) => {
  const { isAuthenticated, user } = useContext(authContext);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push(`${user.role}/dispatch`);
    }
  }, [isAuthenticated]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.heading_primary}>{props.title}</div>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__logo}>
          <i>
            <BsSearch />
          </i>
          <i>
            <FaBell />
          </i>
        </div>
        <div className={styles.divider__v}></div>

        <div className={styles.menuAction}>
          <div
            className={styles.menu__profile}
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
          >
            <span>Welcome User!</span>
            <FaUserCircle size={20} />
          </div>

          {menuToggle && (
            <div className={styles.menu}>
              <h3>USER ID</h3>
              <ul>
                <li>
                  <FiSettings size={20} className={styles.menu_image} />
                  <Link to={"/manufacturer/settings"}>Settings</Link>
                </li>
                <li>
                  <BiLogOut size={20} className={styles.menu_image} />
                  <Link to={"/manufacturer/logout"}>Log Out</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
