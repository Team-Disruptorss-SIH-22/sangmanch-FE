import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/footer.module.css";
import Iccr_logo from "assets/icons/iccr_logo.svg";

const Footer = () => {
  return (
    <>
      <footer className={styles.upper_footer}>
        <div className={styles.footer_infos_container}>
          <div className={styles.footer_info_col}>
            <p className={styles.footer_info_rowHeader}>Medical Store</p>

            <div className={styles.heading_underline}></div>

            <Link to="/">
              <span>Sales Form</span>
            </Link>
            <Link to="/">
              <span>Received Report</span>
            </Link>
            <Link to="/">
              <span>Registration</span>
            </Link>
            <Link to="/">
              <span>Dashboard</span>
            </Link>
          </div>

          <div className={styles.footer_multiple_cols_containter}>
            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>Manufacturer</p>

              <div className={styles.heading_underline}></div>

              <Link to="/">
                <span>Dispatch Report</span>
              </Link>
              <Link to="/">
                <span>Registration</span>
              </Link>
            </div>

            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>Doctor</p>

              <div className={styles.heading_underline}></div>

              <Link to="/">
                <span>Get Prescription</span>
              </Link>
              <Link to="/">
                <span>Registration</span>
              </Link>
              <Link to="/">
                <span>Dashboard</span>
              </Link>
            </div>
          </div>

          <div className={styles.footer_multiple_cols_containter}>
            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>Admin</p>

              <div className={styles.heading_underline}></div>

              <Link to="/">
                <span>Registration</span>
              </Link>
              <Link to="/">
                <span>Dashboard</span>
              </Link>
            </div>

            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>Warehouse</p>

              <div className={styles.heading_underline}></div>

              <Link to="/">
                <span>Received Report</span>
              </Link>
              <Link to="/">
                <span>Registration</span>
              </Link>
            </div>
          </div>

          <div className={styles.pageDivider}></div>

          <div className={styles.footer_info_col + " " + styles.footer_address_info}>
            <p className={styles.footer_info_rowHeader}>Contact us</p>

            <div className={styles.heading_underline}></div>

            <span>
              West Block No. 1, Wing. 5, <br />
              near Central Water Commission, Sector 1, <br />
              Rama Krishna Puram, New Delhi, Delhi 110066 <br />
            </span>
            <span>
              <b>Telephone Number</b>: +91-11-26761000, +91-11-26761144, +91-11-26761105{" "}
            </span>
            <span>
              <b>Email Id</b>: <Link to="/">adops-ncb@nic.in</Link>
            </span>
          </div>
        </div>
      </footer>

      <footer className={styles.down_footer}>
        <div className={styles.footer__content}>
          <p className={styles.footer__text}>© ICCR | Team Disruptorss </p>
          <div className={styles.logo}>
            <img src={Iccr_logo} alt="Sangmanch Logo" />
            <p>Indian Council for Cultural Relations</p>
          </div>
          <div className={styles.footer__links}>
            <span className={styles.footer__link}>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
