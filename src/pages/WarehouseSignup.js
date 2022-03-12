import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/signup.module.css";

const WarehouseSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [Registering, setRegistering] = useState(false);
  const [warehouseId, setWarehouseId] = useState("");

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Inside HandleSubmit");
    let error = false;
    setRegistering(true);

    if (!email || !password || !confirmPassword || !warehouseId) {
      toast.error("Please enter all the fields");
      error = true;
    }

    if (password !== confirmPassword) {
      toast.error("Both Passwords don't match!");
      error = true;
    }

    console.log(password, confirmPassword);

    if (error) {
      return setRegistering(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginPageContainer}>
        <div className={styles.headersContainer}>
          <div className={styles.logoIcon2}>
            <img
              src="https://narcoticsindia.nic.in/images/acs.png"
              alt="logo-icon"
            />
          </div>

          <div className={styles.headers2}>
            <p className={styles.title2}>NCB DAAS</p>
            <p className={styles.titleDetails2}>
              Drugs Analytics and Alerting System
            </p>
          </div>
        </div>

        <p className={styles.loginTitle}>Warehouse Sign Up</p>

        <form className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="id">WAREHOUSE ID</label>
            <input
              type="text"
              id="id"
              value={warehouseId}
              onChange={(e) => setWarehouseId(e.target.value)}
              placeholder="WAREHOUSE ID"
            />
          </div>

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
            <label htmlFor="password">PASSWORD</label>
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
                    src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                    alt="show-password"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
                    alt="hide-password"
                  />
                )}
              </button>
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="confirm-password">VERIFY PASSWORD</label>
            <div className={styles.inputPassword}>
              <input
                type={confirmPasswordShown ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Password"
              />
              <button className={styles.showPassword} onClick={toggleConfirmPassword}>
                {confirmPasswordShown ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                    alt="show-confirm-password"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
                    alt="hide-confirm-password"
                  />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.submit}
            disabled={Registering}
          >
            {Registering ? "Registering.." : "Sign Up"}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Already have an Account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseSignup;
