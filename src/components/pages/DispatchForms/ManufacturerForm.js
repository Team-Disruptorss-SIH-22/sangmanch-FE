import { Fragment, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import styles from "../../../styles/forms/userforms.module.css";
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer";

const ManufacturerForm = () => {
  const [userRegisteration, setUserRegisteration] = useState({
    dispatchedtoid: "",
    lotnumber: "",
    primarychem: "",
    quantityforwarded: "",
    prescription: null
  });

  const [Registering, setRegistering] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegisteration({ ...userRegisteration, [name]: value });
    console.log(`${[name]}`, value);
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
    <Fragment>
      <UserNavbar />

      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Manufacturer Dispatch Report</p>
          <p className={styles.titleSubheader}>
            Fill in the data to report the forwarded data.
          </p>
        </div>

        <div className={styles.userformContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsHeader}>Details Of Dispatch</div>
            <p className={styles.detailsSubHeader}>
              These contacts are used to inform about orders.
            </p>

            <div className={styles.inputContainer}>
              <div className={styles.inputCol1}>
                <label htmlFor="dispatchedtoid">
                  Dispatched To (ID)<span> *</span>
                </label>
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
                  required
                />
              </div>

              <div className={styles.inputCol1}>
                <label htmlFor="lotnumber">
                  Lot ID<span> *</span>
                </label>
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
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.lineBreak}></div>

          <div className={styles.detailsContainer}>
            <div className={styles.detailsHeader}>Drug Details</div>
            <p className={styles.detailsSubHeader}>Details of the drugs forwarded</p>

            <div className={styles.inputContainer}>
              <div className={styles.inputCol1}>
                <label htmlFor="primarychem">
                  Drug Name<span> *</span>
                </label>
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
                  required
                />
              </div>

              <div className={styles.inputCol1}>
                <label htmlFor="quantityforwarded">
                  Quantity Forwarded (in lot)<span> *</span>
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
                  required
                />
              </div>

              <div className={styles.inputCol1}>
                <label htmlFor="prescription">
                  Prescription Required?<span> *</span>
                </label>
              </div>
              <div className={styles.inputCol2}>
                <select
                  type="dropdown"
                  name="prescription"
                  className={styles.prescription}
                  onChange={handleInput}
                  required
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
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
      <Footer />
    </Fragment>
  );
};

export default ManufacturerForm;
