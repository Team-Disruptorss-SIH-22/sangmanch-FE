import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "styles/admin/settings.module.css";

const Comp = (props) => {
  return (
    <div className={styles.outerBlock}>
      <div className={styles.innerBlock}>
        <h3>{props.heading}</h3>
        <p>{props.para}</p>
      </div>
      <button className={props.btn === "Delete Account" ? styles.delBtn : styles.button}>
        {props.btn}
      </button>
    </div>
  );
};

const Settings = () => {
  return (
    <div className={styles.settingContainer}>
      <Comp
        heading="Profile Settings"
        para="You cannot change your profile settings from the dashboard. To change any data, raise a ticket to the Governing Body"
        btn="Raise Ticket"
      />
      <Comp
        heading="Change password"
        para="Requires old password ad OTP confirmation from Official Email ID"
        btn="Reset Password"
      />
      <Comp
        heading="Revoke Report"
        para="Requires confirmation code from Governing Body to revoke any errenous report submitted"
        btn="Revoke Report"
      />
      <Comp
        heading="Delete Account"
        para="Requires confirmation code from ICCR General Assembly to revoke any errenous report submitted"
        btn="Delete Account"
      />
    </div>
  );
};

export default Settings;
