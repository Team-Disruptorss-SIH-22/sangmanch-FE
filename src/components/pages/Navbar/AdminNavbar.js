import React, { useContext, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

// ICONS
import { BsSearch } from "react-icons/bs";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

// LOCAL IMPORTS
import authContext from "context/auth/authContext";
import styles from "../../../styles/admin/adminNavbar.module.css";

const Navbar = (props) => {
  const { isAuthenticated, user, logout } = useContext(authContext);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    if (isAuthenticated === true) {
      if (user.role === "ICCRUser") props.history?.push("/user/events");
      else props.history?.push("/user/dashboard");
    }
  }, [isAuthenticated]);

  const onLogout = () => {
    logout();
    toast.success("Logged out successfully");
    props.history?.push("/");
  };

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
            <span>Welcome {user?.name}!</span>
            <FaUserCircle size={20} />
          </div>

          {menuToggle && (
            <div className={styles.menu}>
              <h3>Quick Actions</h3>
              <ul>
                <li>
                  <FiSettings size={20} className={styles.menu_image} />
                  <Link to={"/user/settings"}>Settings</Link>
                </li>
                <li>
                  <BiLogOut size={24} className={styles.menu_image} />
                  <div onClick={onLogout}>Log Out</div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
