import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import ncb__logo from "../../../assets/ncb__logo.png";
import styles from "../../../styles/Home/homeNavbar.module.css";
import authContext from "context/auth/authContext";

const HomeNavbar = (props) => {
  const { isAuthenticated, user } = useContext(authContext);

  useEffect(() => {
    if (isAuthenticated === true) {
      console.log(props);
      props.history.push(`${user.role}/dispatch`);
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className={styles.top_Default_Bar}>
        <div className={styles.leftSide}>
          <img
            className={styles.emblemLogoContainer}
            src="https://www.cowin.gov.in/assets/images/emblem-gov.svg"
          />
          <span className={styles.logo_heading}>
            Ministry of <br></br>Home Affairs
          </span>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.font_size_change}>
            <button>A +</button>
            <button className={styles.currentFontSize}>A</button>
            <button>A -</button>
          </div>

          <div className={styles.language_change}>
            <select name="languages" className={styles.languages}>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujrati">Gujrati</option>
              <option value="Punjabi">Punjabi</option>
            </select>
          </div>
        </div>
      </div>

      <nav className={styles.navbar__wrapper}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logo__center}>
              <img src={ncb__logo} alt="NCB Logo" />
              <p>NCB DAAS</p>
            </Link>
          </div>

          <div className={styles.nav_right_col}>
            <ul className={styles.links__banner}>
              <li>
                <a href="https://narcoticsindia.nic.in/" target="_blank" rel="noreferrer">
                  About NCB
                </a>
              </li>
              <li>
                <Link to="/admin/signup" target="_blank">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/admin/signup" target="_blank">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/admin/signup" target="_blank">
                  Contact Us
                </Link>
              </li>
            </ul>

            <ul className={styles.links__auth}>
              <li className={styles.login}>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <div className={styles.dropdown}>
                  <div className={styles.dropbtn}>
                    Signup
                    <MdArrowDropDown size={20} />
                  </div>
                  <div className={styles.dropdown__content}>
                    <ul>
                      <li>
                        <Link to="/signup/manufacturer">Manufacturer</Link>
                      </li>
                      <li>
                        <Link to="/signup/warehouse">Warehouse</Link>
                      </li>
                      <li>
                        <Link to="/signup/medical">Medical Store</Link>
                      </li>
                      <li>
                        <Link to="/signup/doctor">Doctor</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
