import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/signup.module.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Inside HandleSubmit");
    let error = false;
    setLoggingIn(true);

    if (!email || !password) {
      toast.error("Please enter both Email and Password");
      error = true;
    }

    if (error) {
      return setLoggingIn(false);
    }
  };

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

        <form className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.forPassword}>
              <label htmlFor="password">PASSWORD</label>
              <Link to="/" className={styles.forgotPassword}>
                <p>Forgot Password?</p>
              </Link>
            </div>
            <div className={styles.inputPassword}>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button className={styles.showPassword} onClick={togglePassword}>
                {passwordShown ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
                    alt="hide-password"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                    alt="show-password"
                  />
                )}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.submit}
            disabled={loggingIn}
          >
            {loggingIn ? "Logging In.." : "Log In"}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Don't Have an Account? <Link to="/">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
