import { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeNavbar from "../Homepage/HomeNavbar";
import Footer from "../Footer";

import styles from "../../../styles/forms/signup.module.css";
import authContext from "context/auth/authContext";

const UserLogin = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const { email, password } = user;
  const {
    isAuthenticated,
    user: loggedUser,
    error,
    login,
    clearError
  } = useContext(authContext);

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push(`${loggedUser.role}/dispatch`);
    }
  }, [isAuthenticated, props.history]);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    setLoggingIn(true);

    if (error) {
      setLoggingIn(false);
      return;
    }
    login(user);
    if (!error) toast.success("Logged in Successfully");
  };

  useEffect(() => {
    if (error) {
      setLoggingIn(false);
      toast.error(error);
      clearError();
    }
  }, [error]);

  return (
    <Fragment>
      <HomeNavbar />
      <div className={styles.container}>
        <div className={styles.loginPageContainer}>
          <div className={styles.logoIcon}>
            <img src="https://narcoticsindia.nic.in/images/acs.png" alt="logo-icon" />
          </div>

          <div className={styles.headers}>
            <p className={styles.title}>NCB DAAS</p>
            <p className={styles.titleDetails}>Drugs Analytics and Alerting System</p>
            <p className={styles.loginTitle}>Log In</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
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
                  name="password"
                  value={password}
                  required
                  onChange={onChange}
                  autoComplete="off"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className={styles.showPassword}
                  onClick={togglePassword}
                >
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

            <button type="submit" className={styles.submit} disabled={loggingIn}>
              {loggingIn ? "Logging In.." : "Log In"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UserLogin;
