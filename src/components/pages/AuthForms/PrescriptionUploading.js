import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Compressor from "compressorjs";
import styles from "../../../styles/forms/medicalstore.module.css";
const PrescriptionUploading = () => {
  const [userRegisteration, setUserRegisteration] = useState({
    uniqueid: "",
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
      <div className={styles.titleContainer}>
        <p className={styles.title}>Prescription Uploading form</p>
        <p className={styles.titleSubheader}>
          Fill in the data to report the forwarded data.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.detailsContainer}>
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.titleform}>
              <p className={styles.detailsHeader}>Details of Patient</p>
              <p className={styles.detailsSubHeader}>Details of patients</p>
            </div>

            <div className={styles.inputContainer}>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.uniqueid}
                onChange={handleInput}
                name="uniqueid"
                id="uniqueid"
                placeholder="Unique ID"
              />
            </div>

            <p className={styles.detailsHeader}> Drug Details </p>
            <p className={styles.detailsSubHeader}>Details of Prescribed Drugs </p>

            <div className={styles.inputContainer}>
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
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={userRegisteration.quantitysold}
                onChange={handleInput}
                name="quantitysold"
                id="quantitysold"
                placeholder="Quantity Forwarded"
              />
            </div>

            <div className={styles.inputContainer}>
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

export default PrescriptionUploading;
