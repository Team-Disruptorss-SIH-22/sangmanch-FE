import React, { useState } from "react";
import Select from "react-select";
import Compressor from "compressorjs";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "../../../styles/user/events.module.css";
import { countryOptions, typeOptions } from "components/Utils/constant";

const Events = () => {
  //   const [eventId, setEventId] = useState("");
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState(false);
  const [country, setCountry] = useState(null);
  const [type, setType] = useState(null);
  const [eventRegistration, setEventRegistration] = useState({
    id: "",
    name: "",
    date: "",
    type: "",
    people_reached: "",
    total_expenses: "",
    budget: "",
    city: "",
    country: "india",
    invoice: null
  });

  // const handleEventClick = (info) => {
  // let tempId = info.event._def.publicId;
  // let idx = events.findIndex((item) => item.id == tempId);
  //we get the particular event details with that particular date when we click on event text
  // if (idx !== -1) {
  //   let obj = events[idx];
  //   setEventRegistration({ ...obj });
  // }
  // console.log(info.event._def.publicId);
  // };

  const handleDateClick = (e) => {
    // let idx = events.findIndex((item) => item.id == tempId);

    //we get the particular event details with that particular date when we click on date text
    // if (idx !== -1) {
    //   let obj = events[idx];
    //   setEventRegistration({ ...obj });
    // } else {
    setEventRegistration({ ...eventRegistration, date: e.dateStr });
    // }
    setNewEvent(true);
  };

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
      !eventRegistration.name ||
      !eventRegistration.type ||
      !eventRegistration.total_expenses ||
      !eventRegistration.people_reached ||
      !eventRegistration.city ||
      !eventRegistration.country ||
      !eventRegistration.invoice
    ) {
      toast.error("Please enter all the fields");
    } else {
      console.log(newObj);
      return;
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
            allDay={true}
            selectable={true}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            //   weekends={false}
            events={events}
            // eventClick={handleEventClick}
            dateClick={handleDateClick}
          />
        </div>
        <div className={styles.form_super_container}>
          {newEvent ? (
            <div>
              <div className={styles.heading}>
                <h2>Event Details Form</h2>
                <p>Selected Date: {eventRegistration.date}</p>
              </div>

              <div className={styles.container}>
                <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <label htmlFor="name">
                      Event Name<span style={{ color: "red" }}> *</span>
                    </label>
                    <input
                      className="form-field"
                      type="text"
                      autoComplete="off"
                      value={eventRegistration.name}
                      onChange={handleInput}
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="type">
                      Type <span style={{ color: "red" }}> *</span>
                    </label>
                    <Select
                      className={styles.select}
                      options={typeOptions}
                      value={type}
                      onChange={(value) => {
                        handleCountry(value);
                      }}
                      name="type"
                      id="type"
                      placeholder="Select Type"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="people_reached">
                      People Reached <span style={{ color: "red" }}> *</span>
                    </label>
                    <input
                      className="form-field"
                      type="number"
                      autoComplete="off"
                      value={eventRegistration.people_reached}
                      onChange={handleInput}
                      name="people_reached"
                      id="people_reached"
                      placeholder="Enter People Reached"
                      required
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
                      placeholder="Enter Total Expenses"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="budget">Budget</label>
                    <input
                      className="form-field"
                      type="number"
                      value={eventRegistration.budget}
                      onChange={handleInput}
                      name="budget"
                      id="budget"
                      placeholder="Enter Budget"
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
                      placeholder="Enter City"
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <label htmlFor="invoice">
                      Upload Invoice <span style={{ color: "red" }}> *</span>
                    </label>
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
                    Submit
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
