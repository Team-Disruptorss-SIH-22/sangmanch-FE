import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import IccrLogo from "assets/icons/iccr_logo.svg";
import Sangmanch from "assets/sangmanch_logo.svg";
import styles from "../../../styles/Home/homeNavbar.module.css";
import authContext from "context/auth/authContext";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeNavbar = (props) => {
  const { isAuthenticated, user } = useContext(authContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isAuthenticated === true) {
      console.log(props);
      props.history?.push(`${user.role}/dispatch`);
    }
  }, [isAuthenticated]);

  const modalClickHandler = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeModal);
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <>
      <div className={styles.top_Default_Bar}>
        <div className={styles.top_navbar_wrapper}>
          <div className={styles.leftSide}>
            <img className={styles.emblemLogoContainer} src={IccrLogo} alt="logo" />
            <span className={styles.logo_heading}>
              Indian Council for
              <br></br>
              Cultural Relations
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
      </div>

      <nav className={styles.navbar__wrapper}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logo__center}>
              <img src={Sangmanch} alt="NCB Logo" />
            </Link>
          </div>

          <div className={styles.nav_right_col}>
            <ul className={styles.links__banner}>
              <li>
                <a href="https://narcoticsindia.nic.in/" target="_blank" rel="noreferrer">
                  About Sangmanch
                </a>
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
              <li>
                <Link to="https://iccr.gov.in/home" target="_blank">
                  ICCR Website
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
            <div className={styles.phoneMenu} onClick={modalClickHandler}>
              <GiHamburgerMenu size={30} onClick={() => setShowModal((curr) => !curr)} />
              <div
                className={`${styles.phoneMenuPopup} ${
                  showModal ? styles.activeModal : ""
                }`}
              >
                <ul>
                  <li>
                    <a
                      href="https://narcoticsindia.nic.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
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
                  <li>
                    <Link to="/signup/manufacturer">SignUp</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
