import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Compressor from "compressorjs";
import styles from "../../../styles/forms/medicalstore.module.css";

const MedicalStoreSales = () => {
  const [userRegisteration, setUserRegisteration] = useState({
    soldto: "",
    prescribedby: "",
    lotnumber: "",
    drugname: "",
    drugpotency: "",
    quantitysold: "",
    prescription: null
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

  //    //image compression
  //    const [compressedFile, setCompressedFile] = useState(null);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.

        //  setCompressedFile(Response)
        setUserRegisteration({ ...userRegisteration, prescription: compressedResult });
      }
    });
  };

  //captcha code
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <div className={styles.heading}>
        <h2>Medical store sales form</h2>
        <h5>Fill in the data to report the forwarded data.</h5>
      </div>

      <div className={styles.container}>
        <div className={styles.loginPageContainer}>
          <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
            <div className={styles.titleform}>
              <h3>Details of Dispatch</h3>
              <h5>These contacts are used to inform about orders</h5>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="soldto"> </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.soldto}
                onChange={handleInput}
                name="soldto"
                id="soldto"
                placeholder="Sold To (Aadhar No:)"
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="prescribedby"> </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.prescribedby}
                onChange={handleInput}
                name="prescribedby"
                id="prescribedby"
                placeholder="Prescribed By (IMC ID)"
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

            <div className={styles.inputContainer}>
              <label htmlFor="drugname"> </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.drugname}
                onChange={handleInput}
                name="drugname"
                id="drugname"
                placeholder="Drug Name"
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="drugpotency"> </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.drugpotency}
                onChange={handleInput}
                name="drugpotency"
                id="drugpotency"
                placeholder="Drug Potency"
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="quantitysold"> </label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.quantitysold}
                onChange={handleInput}
                name="quantitysold"
                id="quantitysold"
                placeholder="Quantity Sold"
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="prescription"> </label>
              <input
                className="form-field"
                type="file"
                autoComplete="off"
                // value={userRegisteration.prescription}
                accept="image/*,capture=camera"
                capture="”camera"
                // onChange={handleInput}
                onChange={handleCompressedUpload}
                name="prescription"
                id="prescription"
                placeholder="Upload Prescription"
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

export default MedicalStoreSales;
