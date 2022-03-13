import { useState } from "react";
import Compressor from "compressorjs";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "../../styles/userforms.module.css";

const ManufacturerForm = () => {
  const [userRegisteration, setUserRegisteration] = useState({
    dispatchedtoid: "",
    lotnumber: "",
    primarychem: "",
    quantityforwarded: "",
    prescription: null,
  });
  const [Registering, setRegistering] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegisteration({ ...userRegisteration, [name]: value });
    console.log(`${[name]}`, value);
  };

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.

        //  setCompressedFile(Response)
        setUserRegisteration({
          ...userRegisteration,
          prescription: compressedResult,
        });
      },
    });
  };

  const onSubmitRecaptcha = (e) => {
    console.log("RECAPTCHA VALUE", e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    setRegistering(true);

    if (error) {
      return setRegistering(false);
    }

    setRegistering(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userformContainer}>
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

        <p className={styles.title}>Manufacturer Forwarding Form</p>

        <div className={styles.lineBreak}></div>

        <div className={styles.detailsContainer}>
          <div className={styles.detailsHeader}>Details Of Dispatch</div>
          <p className={styles.detailsSubHeader}>
            These contacts are used to inform about orders.
          </p>

          <div className={styles.inputContainer}>
            <div className={styles.inputCol1}>
              <label htmlFor="dispatchedtoid">Dispatched To (ID)</label>
            </div>
            <div className={styles.inputCol2}>
              <input
                type="text"
                autoComplete="off"
                value={userRegisteration.dispatchedtoid}
                onChange={handleInput}
                name="dispatchedtoid"
                id="dispatchedtoid"
                placeholder="WAREHOUSE ID"
              />
            </div>

            <div className={styles.inputCol1}>
              <label htmlFor="lotnumber">Lot ID</label>
            </div>
            <div className={styles.inputCol2}>
              <input
                type="text"
                autoComplete="off"
                value={userRegisteration.lotnumber}
                onChange={handleInput}
                name="lotnumber"
                id="lotnumber"
                placeholder="LOT ID"
              />
            </div>
          </div>
        </div>

        <div className={styles.lineBreak}></div>

        <div className={styles.detailsContainer}>
          <div className={styles.detailsHeader}>Drug Details</div>
          <p className={styles.detailsSubHeader}>
            Details of the drugs forwarded
          </p>

          <div className={styles.inputContainer}>
            <div className={styles.inputCol1}>
              <label htmlFor="primarychem">Drug Name </label>
            </div>
            <div className={styles.inputCol2}>
              <input
                type="text"
                autoComplete="off"
                value={userRegisteration.primarychem}
                onChange={handleInput}
                name="primarychem"
                id="primarychem"
                placeholder="DRUG NAME"
              />
            </div>

            <div className={styles.inputCol1}>
              <label htmlFor="quantityforwarded">
                Quantity Forwarded (in lot)
              </label>
            </div>
            <div className={styles.inputCol2}>
              <input
                type="text"
                autoComplete="off"
                value={userRegisteration.quantityforwarded}
                onChange={handleInput}
                name="quantityforwarded"
                id="quantityforwarded"
                placeholder="QUANTITY FORWARDED"
              />
            </div>

            <div className={styles.inputCol1}>
              <label htmlFor="prescription">Upload Prescription</label>
            </div>
            <div className={styles.inputCol2}>
              <input
                type="file"
                autoComplete="off"
                // value={userRegisteration.prescription}
                accept="image/*,capture=camera"
                capture="”camera"
                // onChange={handleInput}
                onChange={handleCompressedUpload}
                name="prescription"
                className={styles.prescription}
              />
            </div>
          </div>
        </div>

        <div className={styles.recaptcha}>
          <ReCAPTCHA
            // for testing purpose only this key will work. For production, we need to give domain name while registering.
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onSubmitRecaptcha}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.submit}
          disabled={Registering}
        >
          {Registering ? "Submitting.." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default ManufacturerForm;
