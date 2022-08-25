import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../../../styles/user/events.module.css";
import { typeOptions } from "components/Utils/constant";
import eventContext from "context/event/eventContext";

const initialState = {
  id: "",
  name: "",
  eventdate: "",
  description: "",
  budget: "",
  requirement: "",
  link: "",
  date: "",
};
const Requirements = () => {

  const [eventRegistration, setEventRegistration] = useState(initialState);
  const { getEventsOfUser, createEvent } = useContext(eventContext);

  const [type, setType] = useState(null);
  useEffect(() => {
    getEventsOfUser();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (["description", "", "budget"].includes(name)) {
      setEventRegistration({ ...eventRegistration, [name]: parseInt(value) });
    } else {
      setEventRegistration({ ...eventRegistration, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempId = new Date().getTime().toString();

    setEventRegistration({ ...eventRegistration, id: tempId });

    if (
      !eventRegistration.name ||
      !eventRegistration.requirement ||
      !eventRegistration.description ||
      !eventRegistration.link ||
      !eventRegistration.budget ||
      !eventRegistration.type ||
      !eventRegistration.eventdate
    ) {
      toast.error("Please enter all the fields");
    } else {
      const newObj = { ...eventRegistration, type: type.value };
      createEvent(newObj);
      toast.success("Event Added Successfully!");
      setEventRegistration(initialState);
      setType(null);
    }
  };
  return (
    <div className={styles.requirement_form}>

      <div>
        <div className={styles.heading}>
          <h2 style={{ marginLeft: "20%" }}>Requirements Form</h2>
        </div>

        <div className={styles.container}>
          <form className={styles.formContainer} action="" onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Event Name <span style={{ color: "red" }}> *</span></label>
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
              <label htmlFor="requirement">Requirement <span style={{ color: "red" }}> *</span></label>
              <input
                className="form-field"
                type="text"
                autoComplete="off"
                value={eventRegistration.requirement}
                onChange={handleInput}
                name="requirement"
                id="requirement"
                placeholder="Enter Requirements"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="budget">Budget <span style={{ color: "red" }}> *</span></label>
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
              <label htmlFor="type">Type <span style={{ color: "red" }}> *</span></label>
              <Select
                className={styles.select}
                options={typeOptions}
                value={type}
                onChange={(value) => {
                  setType(value);
                }}
                name="type"
                id="type"
                placeholder="Select Type"
                required
              />

            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="eventdate">Event Date <span style={{ color: "red" }}> *</span></label>
              <input
                className="form-field"
                type="date"
                value={eventRegistration.date}
                onChange={handleInput}
                name="date"
                id="date"
                placeholder="Enter date"
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="description">Description <span style={{ color: "red" }}> *</span></label>
              <textarea
                className="form-field"
                autoComplete="off"
                value={eventRegistration.description}
                onChange={handleInput}
                name="description"
                id="description"
                placeholder="Enter Description"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="description">Link</label>
              <input
                className="form-field"
                type="url"
                autoComplete="off"
                value={eventRegistration.link}
                onChange={handleInput}
                name="link"
                id="link"
                placeholder="Enter link"
              />
            </div>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Requirements;