import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/footer.module.css";
import Iccr_logo from "assets/icons/iccr_logo.svg";

const Footer = () => {
  return (
    <>
      <footer className={styles.upper_footer}>
        <div className={styles.footer_infos_container}>
          <div className={styles.footer_multiple_cols_containter}>
            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>ICCR User</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>Events</span>
              </Link>
              <Link to="/">
                <span>Report Status</span>
              </Link>
              <Link to="/">
                <span>Infographics</span>
              </Link>
            </div>

            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>Finance Manager</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>Review Report</span>
              </Link>
              <Link to="/">
                <span>Report status</span>
              </Link>
            </div>
          </div>

          <div className={styles.footer_multiple_cols_containter}>
            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>Governing Body</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>Review Report</span>
              </Link>
              <Link to="/">
                <span>Infographics</span>
              </Link>
            </div>

            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>General Assembly</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>Register New User</span>
              </Link>
              <Link to="/">
                <span>Review Reports</span>
              </Link>
              <Link to="/">
                <span>Infographics</span>
              </Link>
            </div>
          </div>

          <div className={styles.pageDivider}></div>

          <div className={styles.footer_info_col + " " + styles.footer_address_info}>
            {/* <p className={styles.footer_info_rowHeader}>Contact us</p>

            <div className={styles.heading_underline}></div> */}

            <span>
              Indian Council for Cultural Relations <br />
              Azad Bhawan, I. P Estate, New Delhi - 110002
            </span>
            <span>
              Telephone Number: Email Id:
              <b>Telephone Number</b>: +91-11-23379309
            </span>
            <span>
              <b>Email Id</b>:{" "}
              <a href="mailto:ccd2.iccr@gov.in">ccd2[dot]iccr[at]gov[dot]in</a>
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
