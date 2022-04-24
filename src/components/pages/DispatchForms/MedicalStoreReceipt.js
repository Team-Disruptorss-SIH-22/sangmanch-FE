import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../../../styles/forms/medicalstore.module.css";
const Multipleinputs = () => {
  const [userRegisteration, setUserRegisteration] = useState({
    intime: "",
    lotnumber: "",
    quantityforwarded: ""
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegisteration({ ...userRegisteration, [name]: value });
  };

  const handleSubmit = (e) => {
    //send data
    e.preventDefault();

    const newRecord = { ...userRegisteration, id: new Date().getTime().toString() };

    console.log(newRecord);

    setRecords([...records, newRecord]);
    console.log(newRecord);
  };

  //captcha code
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <div className={styles.heading}>
        <h2>Medical store received receipt</h2>
        <h5>Fill in the data to report the forwarded data.</h5>
      </div>

      <div className={styles.container}>
        <div className={styles.loginPageContainer}>
          <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
            <div className={styles.titleform}>
              <h3>Details of Consignment</h3>
              <h5>These contacts are used to inform about orders</h5>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="intime"> </label>
              <input
                className="form-field"
                type="time"
                autoComplete="off"
                value={userRegisteration.intime}
                onChange={handleInput}
                name="intime"
                id="intime"
                placeholder="In Time"
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="lotnumber"> </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.lotnumber}
                onChange={handleInput}
                name="lotnumber"
                id="lotnumber"
                placeholder="Lot ID"
              />
            </div>

            <div className={styles.titleform}>
              <h3> Drug Details </h3>
              <h5>Details of the drugs forwarded</h5>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="quantityforwarded"> </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.quantityforwarded}
                onChange={handleInput}
                name="quantityforwarded"
                id="quantityforwarded"
                placeholder="Quantity Forwarded"
              />
            </div>

            <div>
              <ReCAPTCHA
                sitekey="6Lc4z9QeAAAAAFkwnQjYTyaOJgAEFmF9na6lqWh5"
                onChange={onChange}
              />
            </div>
            <button type="submit" className={styles.submit}>
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Multipleinputs;
