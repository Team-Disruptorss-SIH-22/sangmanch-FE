import React, { useEffect, useState } from "react";
import styles from "../../../styles/user/viewReport.module.css";
import axios from "axios";
import { format } from "date-fns";
import { GrClose } from "react-icons/gr";

const statusMapping = {
  "-1": "Rejected by Finance Manager",
  "-2": "Rejected by Governing Body",
  0: "Pending on Finance Manager",
  1: "Pending on Governing Body",
  2: "Completed"
};

const ViewReport = ({ event, handleClose }) => {
  const url = "https://sangmanch.herokuapp.com";
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const { data } = await axios.get(`${url}/api/event/comments/${event._id}`);
    setComments(data.data.comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className={styles.outer}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.alertHeaderContainer}>
            <div className={styles.heading}>
              <p>View Report </p>
            </div>
            <div onClick={handleClose} style={{ cursor: "pointer" }}>
              <GrClose />
            </div>
          </div>

          <div className={styles.reportContainer}>
            <div className={styles.singleReport}>
              <span>Status</span>
              <span>:</span>
              <span
                className={
                  event.status < 0
                    ? styles.rejected
                    : event.status < 2
                    ? styles.pending
                    : styles.accepted
                }
              >
                <strong>{statusMapping[event.status]}</strong>
              </span>
            </div>
            <div className={styles.singleReport}>
              <span>Name</span>
              <span>:</span>
              <span>{event.name}</span>
            </div>
            <div className={styles.singleReport}>
              <span>Type</span>
              <span>:</span>
              <span>{event.type}</span>
            </div>

            <div className={styles.singleReport}>
              <span>Date</span>
              <span>:</span>
              <span>{format(new Date(event.date), "dd/MM/yyyy")}</span>
            </div>

            <div className={styles.singleReport}>
              <span>People Reached</span>
              <span>:</span>
              <span>{event.peopleReached}</span>
            </div>

            <div className={styles.singleReport}>
              <span>Expenses</span>
              <span>:</span>
              <span>{event.expenses}</span>
            </div>

            {event.budget && (
              <div className={styles.singleReport}>
                <span>Budget</span>
                <span>:</span>
                <span>{event.budget}</span>
              </div>
            )}

            <div className={styles.singleReport}>
              <span>Location</span>
              <span>:</span>
              <span>
                {event.city}, {event.country}
              </span>
            </div>

            <div className={styles.singleReport}>
              <span>Invoice</span>
              <span>:</span>
              <a target="_blank" href={event.invoice}>
                View Invoice{" "}
              </a>
            </div>
            {(comments[0] || comments[1]) && (
              <>
                <div className={styles.separator} />
                <p className={styles.commentsHeading}>Comment Trail</p>
              </>
            )}
            {comments.map(
              (comment, idx) =>
                comment && (
                  <div key={idx} className={styles.comment}>
                    <div className={styles.commentHeader}>
                      {idx === 0 ? "Finance Manager :" : "Governing Body :"}
                    </div>
                    <div className={styles.commentBody}>{comment}</div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
