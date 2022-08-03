import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Compressor from "compressorjs";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import styles from "../../../styles/user/events.module.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  console.log(events);

  const countryOptions = countryList().getData();

  const [newEvent, setNewEvent] = useState(false);
  //   const [eventId, setEventId] = useState("");

  const [eventRegistration, setEventRegistration] = useState({
    id: "",
    title: "",
    start: "",
    type: "",
    people_reached: "",
    total_expenses: "",
    budget_defined: "",
    city: "",
    country: "",
    invoice: null
  });

  const handleEventClick = (info) => {
    // let tempId = info.event._def.publicId;
    // let idx = events.findIndex((item) => item.id == tempId);
    //we get the particular event details with that particular date when we click on event text
    // if (idx !== -1) {
    //   let obj = events[idx];
    //   setEventRegistration({ ...obj });
    // }
    // console.log(info.event._def.publicId);
  };

  const handleDateClick = (e) => {
    // let idx = events.findIndex((item) => item.id == tempId);

    //we get the particular event details with that particular date when we click on date text
    // if (idx !== -1) {
    //   let obj = events[idx];
    //   setEventRegistration({ ...obj });
    // } else {
    setEventRegistration({
      id: "",
      start: e.dateStr,
      title: "",
      type: "",
      people_reached: "",
      total_expenses: "",
      budget_defined: "",
      city: "",
      country: "India",
      invoice: null
    });
    // }
    setNewEvent(true);
  };

  const [country, setCountry] = useState({ value: "IN", label: "India" });

  const handleCountry = (value) => {
    // console.log(value);
    setCountry(value);
    setEventRegistration({ ...eventRegistration, country: value.label });
    // console.log(eventRegistration);
  };

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.8,
      success: (compressedResult) => {
        setEventRegistration({ ...eventRegistration, invoice: compressedResult });
      }
    });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setEventRegistration({ ...eventRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempId = new Date().getTime().toString();

    //if event already exists. We edit that event only.
    let newEvents = events.filter((item) => item.id !== eventRegistration.id);

    setEventRegistration({ ...eventRegistration, id: tempId });

    const newObj = [...newEvents, eventRegistration];

    if (
      !eventRegistration.title ||
      !eventRegistration.type ||
      !eventRegistration.total_expenses ||
      !eventRegistration.city ||
      !eventRegistration.country
    ) {
      toast.error("Please enter all the fields");
    } else {
      toast.success("Event Added Successfully!");
      setEvents(newObj);
    }

    console.log(events);
  };

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsHeaderContainer}>
        <p>Event Information</p>
      </div>
      <div className={styles.calender_form_container}>
        <div className={styles.calenderContainer}>
          <FullCalendar
            selectable={true}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            //   weekends={false}
            events={events}
            eventClick={handleEventClick}
            dateClick={handleDateClick}
          />
        </div>
        <div className={styles.form_super_container}>
          {newEvent ? (
            <div>
              <div className={styles.heading}>
                <h2>Event Details Form</h2>
                <p>Selected Date: {eventRegistration.start}</p>
              </div>

              <div className={styles.container}>
                <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <label htmlFor="title">
                      Event Name<span style={{ color: "red" }}> *</span>
                    </label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={eventRegistration.title}
                      onChange={handleInput}
                      name="title"
                      id="title"
                      placeholder="Enter text"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="type">
                      Type <span style={{ color: "red" }}> *</span>
                    </label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={eventRegistration.type}
                      onChange={handleInput}
                      name="type"
                      id="type"
                      placeholder="Enter text"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="people_reached">People Reached</label>
                    <input
                      className="form-field"
                      type="number"
                      autoComplete="off"
                      value={eventRegistration.people_reached}
                      onChange={handleInput}
                      name="people_reached"
                      id="people_reached"
                      placeholder="Enter text"
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="total_expenses">
                      Total Expenses <span style={{ color: "red" }}> *</span>
                    </label>
                    <input
                      className="form-field"
                      type="number"
                      value={eventRegistration.total_expenses}
                      onChange={handleInput}
                      name="total_expenses"
                      id="total_expenses"
                      placeholder="Enter text"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="budget_defined">Budget Defined</label>
                    <input
                      className="form-field"
                      type="number"
                      value={eventRegistration.budget_defined}
                      onChange={handleInput}
                      name="budget_defined"
                      id="budget_defined"
                      placeholder="Enter text"
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="city">
                      City <span style={{ color: "red" }}> *</span>
                    </label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={eventRegistration.city}
                      onChange={handleInput}
                      name="city"
                      id="city"
                      placeholder="Enter text"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="country">
                      Country <span style={{ color: "red" }}> *</span>
                    </label>
                    <Select
                      className={styles.select}
                      options={countryOptions}
                      value={country}
                      onChange={(value) => {
                        handleCountry(value);
                      }}
                      name="country"
                      id="country"
                      placeholder="Select Country"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="invoice">Upload Invoice</label>
                    <input
                      className="form-field"
                      type="file"
                      autoComplete="off"
                      // value={eventRegistration.invoice}
                      accept="image/*,capture=camera"
                      capture="”camera"
                      onChange={handleCompressedUpload}
                      name="invoice"
                      id="invoice"
                      placeholder="Upload Invoice"
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
            <p>Please click on a date to view an existing event or create a new one.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
