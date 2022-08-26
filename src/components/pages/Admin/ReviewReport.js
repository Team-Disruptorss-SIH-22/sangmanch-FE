import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

import styles from "../../../styles/user/reviewReport.module.css";

const ReviewReport = (props) => {
  const [report, setReport] = useState({
    username: "",
    pin: "",
    comments: "",
    status: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.outer}>
      <div className={styles.content}>
        <div className={styles.alertHeaderContainer}>
          <div className={styles.heading}>
            <p>Review Report - {props.id}</p>
          </div>
          <div onClick={props.handleClose} style={{ cursor: "pointer" }}>
            <GrClose />
          </div>
        </div>
        <div className={styles.container}>
          <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="username">
                Username<span style={{ color: "red" }}> *</span>
              </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={report.username}
                onChange={handleInput}
                name="username"
                id="username"
                placeholder="Enter username"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="pin">
                4 digit Pin<span style={{ color: "red" }}> *</span>
              </label>
              <input
                className="form-field"
                type="password"
                autoComplete="off"
                value={report.pin}
                onChange={handleInput}
                name="pin"
                id="pin"
                placeholder="Enter password"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="comments">
                Comments <span style={{ color: "red" }}> *</span>
              </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={report.comments}
                onChange={handleInput}
                name="comments"
                id="comments"
                placeholder="Enter comments"
              />
            </div>
            <label htmlFor="accepted" className={styles.checkboxContainer}>
              <input
                type="radio"
                value="accepted"
                onChange={handleInput}
                name="status"
                id="accepted"
              />
              Accepted
            </label>
            <label htmlFor="rejected" className={styles.checkboxContainer}>
              <input
                type="radio"
                value="rejected"
                onChange={handleInput}
                name="status"
                id="rejected"
              />
              Rejected
            </label>
            <div className={styles.buttonContainer}>
              <button
                onClick={props.handleClose}
                className={styles.buttonCommon + " " + styles.cancel}
              >
                Cancel
              </button>
              <button type="submit" className={styles.buttonCommon + " " + styles.submit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewReport;
