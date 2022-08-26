import React, { useState, useContext } from "react";
import { GrClose } from "react-icons/gr";
import eventContext from "context/event/eventContext";

import styles from "../../../styles/user/reviewReport.module.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ReviewConsent = ({ event, handleClose }) => {
  const [report, setReport] = useState({
    comment: "",
    status: ""
  });
  const { reviewEvent, error, clearError, loading } = useContext(eventContext);
  //   const { user } = useContext(authContext);

  useEffect(() => {
    if (!loading && error) {
      toast.error(error);
      clearError();
    }
  }, [loading, error]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      toast.success("Consent Submitted");
      handleClose();
    } catch (error) {}
  };

  return (
    <div className={styles.outer}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.alertHeaderContainer}>
            <div className={styles.heading}>
              <p>Volunteering Consent</p>
            </div>
            <div onClick={handleClose} style={{ cursor: "pointer" }}>
              <GrClose />
            </div>
          </div>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="comment">
                Comment <span style={{ color: "red" }}> *</span>
              </label>
              <textarea
                height="150px"
                className="form-field"
                autoComplete="off"
                value={report.comment}
                onChange={handleInput}
                name="comment"
                id="comment"
                placeholder="Enter comment"
                required
              />
            </div>
            <div className={styles.checkBoxSuperContainer}>
              <div className={styles.checkboxContainer}>
                <input
                  type="radio"
                  value={1}
                  onChange={handleInput}
                  name="status"
                  id="accepted"
                  required
                />
                <label htmlFor="accepted">Accept</label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="radio"
                  value={2}
                  onChange={handleInput}
                  name="status"
                  id="rejected"
                />
                <label htmlFor="rejected">Reject</label>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <button
                onClick={handleClose}
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

export default ReviewConsent;
