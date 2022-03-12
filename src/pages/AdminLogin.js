import { Link } from "react-router-dom";
import styles from "../styles/adminlogin.module.css";

const AdminLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginPageContainer}>
        <div className={styles.logoIcon}>
          <img
            src="https://narcoticsindia.nic.in/images/acs.png"
            alt="logo-icon"
          />
        </div>

        <div className={styles.headers}>
          <p className={styles.title}>NCB DAAS</p>
          <p className={styles.titleDetails}>
            Drugs Analytics and Alerting System
          </p>
          <p className={styles.loginTitle}>Log In</p>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label for="email">EMAIL</label>
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.forPassword}>
              <label for="password">PASSWORD</label>
              <Link to="/" className={styles.forgotPassword}><p>Forgot Password?</p></Link>
            </div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className={styles.submit}>Log In</button>
        </div>

        <div className={styles.footer}>
          <p>Don't Have an Account? <Link to="/">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
