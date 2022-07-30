import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Compressor from "compressorjs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import styles from "../../../styles/user/events.module.css";

const Events = () => {

  const events = [
    {
      // this object will be "parsed" into an Event Object
      title: "The Title", // a property!
      start: "2022-07-03", // a property!
      end: "2012-07-03" // a property! ** see important note below about 'end' **
    }
  ];

  const countryOptions = countryList().getData();

  const [country, setCountry] = useState(null);
  const [newEvent, setNewEvent] = useState(false);

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
  };

  const handleDateClick = (e) => {
    console.log(e);
    setNewEvent(true);
  };

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsHeaderContainer}>
        <p>Event Information</p>
      </div>
      <div className={styles.calender_form_container}>
        <div className={styles.calenderContainer}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            //   weekends={false}
            events={events}
            dateClick={handleDateClick}
          />
        </div>
        <div className={styles.form_super_container}>
          {newEvent ? (
            <div>
              <div className={styles.heading}>
                <h2>Event Details Form</h2>
              </div>

              <div className={styles.container}>
                <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <label htmlFor="uniqueid">Event Name</label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={userRegisteration.uniqueid}
                      onChange={handleInput}
                      name="uniqueid"
                      id="uniqueid"
                      placeholder="Enter text"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="drugname">Type</label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={userRegisteration.drugname}
                      onChange={handleInput}
                      name="drugname"
                      id="drugname"
                      placeholder="Enter text"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="drugname">People Reached</label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={userRegisteration.drugname}
                      onChange={handleInput}
                      name="drugname"
                      id="drugname"
                      placeholder="Enter text"
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="drugname">Total Expenses</label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={userRegisteration.drugname}
                      onChange={handleInput}
                      name="drugname"
                      id="drugname"
                      placeholder="Enter text"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="drugname">Budget Defined</label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={userRegisteration.drugname}
                      onChange={handleInput}
                      name="drugname"
                      id="drugname"
                      placeholder="Enter text"
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="drugname">City</label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={userRegisteration.drugname}
                      onChange={handleInput}
                      name="drugname"
                      id="drugname"
                      placeholder="Enter text"
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="drugname">Country</label>
                    <Select
                      className={styles.select}
                      options={countryOptions}
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      name="drugname"
                      id="drugname"
                      placeholder="Select Country"
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="prescription">Upload Invoice</label>
                    <input
                      className="form-field"
                      type="file"
                      autoComplete="off"
                      // value={userRegisteration.prescription}
                      accept="image/*,capture=camera"
                      capture="”camera"
                      // onChange={handleInput}
                      //   onChange={handleCompressedUpload}
                      name="prescription"
                      id="prescription"
                      placeholder="Upload Prescription"
                    />
                  </div>

                  <button type="submit" className={styles.submit}>
                    {" "}
                    Submit{" "}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <p>Please click on any date to create an event.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
