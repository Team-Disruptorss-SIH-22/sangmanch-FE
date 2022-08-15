import React, { useState, useContext } from "react";
import { GrClose } from "react-icons/gr";
import eventContext from "context/event/eventContext";
import authContext from "context/auth/authContext";

import styles from "../../../styles/user/viewReport.module.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ViewReport = (props) => {
  const { reviewEvent, error, clearError, loading } = useContext(eventContext);
  const { user } = useContext(authContext);

  const [report, setReport] = useState({
    id: "1",
    name: "Diwali",
    date: "27-10-2021",
    peopleReached: "123",
    expenses: "12,500",
    budget: "15,000",
    city: "New Delhi",
    invoice: "https://cloudinary.com/"
  });

  useEffect(() => {
    if (!loading && error) {
      console.log(Date.now());
      toast.error(error);
      clearError();
    }
  }, [loading, error]);

  return (
    <div className={styles.outer}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.alertHeaderContainer}>
            <div className={styles.heading}>
              <p>View Report - {props.eventID}</p>
            </div>
            <div onClick={props.handleClose} style={{ cursor: "pointer" }}>
              <GrClose />
            </div>
          </div>

          <div className={styles.reportContainer}>
            <div className={styles.singleReport}>
              <span>ID</span>
              <span>:</span>
              <span>[ID]</span>
            </div>

            <div className={styles.singleReport}>
              <span>Name</span>
              <span>:</span>
              <span>[Name]</span>
            </div>

            <div className={styles.singleReport}>
              <span>Date</span>
              <span>:</span>
              <span>[Date]</span>
            </div>

            <div className={styles.singleReport}>
              <span>People Reached</span>
              <span>:</span>
              <span>[People Reached]</span>
            </div>

            <div className={styles.singleReport}>
              <span>People Reached</span>
              <span>:</span>
              <span>[People Reached]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
