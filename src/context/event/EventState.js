import React, { useReducer } from "react";
import axios from "axios";

import EventContext from "./eventContext";
import eventReducer from "./eventReducer";

import {
  CREATE_EVENT,
  CLEAR_ERROR,
  GET_EVENTS_OF_USER,
  GET_ALL_EVENTS,
  FORM_ERROR,
  REVIEW_EVENT,
  SET_LOADING
} from "../types";

const errorMsg = "Something went wrong. Please try again later.";

const EventState = (props) => {
  const initialState = {
    error: null,
    events: [],
    loading: false
  };
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const url = "https://sangmanch.herokuapp.com";
  // const url = "http://localhost:5000";

  // Get Events
  const getEventsOfUser = async () => {
    setLoading();
    try {
      const res = await axios.get(`${url}/api/event`);
      dispatch({
        type: GET_EVENTS_OF_USER,
        payload: res.data.data.events
      });
    } catch (err) {
      dispatch({
        type: FORM_ERROR,
        payload: err.response.data.msg || errorMsg
      });
    }
  };

  // Get All Events
  const getAllEvents = async () => {
    setLoading();
    try {
      const res = await axios.get(`${url}/api/event/all`);
      dispatch({
        type: GET_ALL_EVENTS,
        payload: res.data.data.events
      });
    } catch (err) {
      dispatch({
        type: FORM_ERROR,
        payload: err.response.data.msg || errorMsg
      });
    }
  };

  // Create Event
  const createEvent = async (event) => {
    setLoading();
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      let formData = new FormData();
      for (let key in event) {
        formData.append(key, event[key]);
      }
      const res = await axios.post(url + "/api/event/", formData, config);
      dispatch({
        type: CREATE_EVENT,
        payload: res.data.data.event
      });
    } catch (err) {
      dispatch({
        type: FORM_ERROR,
        payload: err.response.data.msg || errorMsg
      });
    }
  };

  // Review Event
  const reviewEvent = async (reviewReport) => {
    setLoading();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await axios.patch(
        url + `/api/event/resolve/${reviewReport.eventID}`,
        reviewReport,
        config
      );
      dispatch({
        type: REVIEW_EVENT,
        payload: res.data.data.event
      });
    } catch (err) {
      dispatch({
        type: FORM_ERROR,
        payload: err.response.data.msg || errorMsg
      });
      throw err;
    }
  };

  const clearError = (timeoutVal = 3000) => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR
      });
    }, timeoutVal);
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
        error: state.error,
        getEventsOfUser,
        getAllEvents,
        createEvent,
        reviewEvent,
        clearError
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
