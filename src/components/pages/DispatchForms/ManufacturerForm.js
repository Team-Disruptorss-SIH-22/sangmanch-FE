import { Fragment, useState, useContext, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/forms/userforms.module.css";
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer";

import formContext from "context/forms/formContext";

const ManufacturerForm = () => {
  const [recaptcha, setRecaptcha] = useState(false);
  const [dispatchForm, setDispatchForm] = useState({
    drugName: "",
    quantity: ""
  });
  const recaptchaRef = useRef();
  const { manufacturerDispatch } = useContext(formContext);
  const [Registering, setRegistering] = useState(false);

  const clearForm = () => {
    setDispatchForm({ drugName: "", quantity: "" });
    recaptchaRef.current.reset();
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDispatchForm({ ...dispatchForm, [name]: value });
  };

  const onSubmitRecaptcha = (e) => {
    setRecaptcha(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    // setRegistering(true);

    if (error || !recaptcha) {
      if (!recaptcha) toast.error("Please verify yourself");
      setRegistering(false);
      return;
    }
    manufacturerDispatch(dispatchForm);
    if (!error) toast.success("Data Entered Succesfully");
    clearForm();
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
            <div className={styles.detailsHeader}>Drug Details</div>
            <p className={styles.detailsSubHeader}>Details of the drugs forwarded</p>

            <div className={styles.inputContainer}>
              <div className={styles.inputCol1}>
                <label htmlFor="drugName">
                  Drug Name<span> *</span>
                </label>
              </div>
              <div className={styles.inputCol2}>
                <input
                  type="text"
                  autoComplete="off"
                  value={dispatchForm.drugName}
                  onChange={handleInput}
                  name="drugName"
                  id="drugName"
                  placeholder="DRUG NAME"
                  required
                />
              </div>

              <div className={styles.inputCol1}>
                <label htmlFor="quantity">
                  Quantity Forwarded (in lot)<span> *</span>
                </label>
              </div>
              <div className={styles.inputCol2}>
                <input
                  type="number"
                  autoComplete="off"
                  value={dispatchForm.quantity}
                  onChange={handleInput}
                  name="quantity"
                  id="quantity"
                  placeholder="QUANTITY FORWARDED"
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.recaptcha}>
            <ReCAPTCHA
              ref={recaptchaRef}
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
