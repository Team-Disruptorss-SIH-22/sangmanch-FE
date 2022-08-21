import React from "react";
import Spinner from "assets/ICCR_loader.gif";
import styles from "../../styles/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={Spinner} alt="Loader" />
    </div>
  );
};

export default Loader;
