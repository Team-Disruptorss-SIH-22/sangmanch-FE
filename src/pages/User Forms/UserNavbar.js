import styles from "../../styles/userforms.module.css";
// import AccessAlarmIcon from '@mui/icons-material';

const UserNavbar = () => {
  return (
    <div className={styles.userNavbar}>
      <div className={styles.headersContainer}>
        <div className={styles.logoIcon}>
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

      <div className={styles.headersUserIcon}></div>
    </div>
  );
};

export default UserNavbar;
