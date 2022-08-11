import React, { useReducer } from "react";
import axios from "axios";

import EventContext from "./eventContext";
import eventReducer from "./eventReducer";

import { CREATE_EVENT, CLEAR_ERROR } from "../types";

const AuthState = (props) => {
  const initialState = {
    error: null,
    events: []
  };
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const url = "https://sangmanch.herokuapp.com";
  // const url = "http://localhost:5000";

  // Get Events
  const getEvents = async () => {
    try {
      const res = await axios.get(`${url}/api/event`);
      dispatch({
        type: GET_EVENTS,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: FORM_ERROR,
        payload: err.response.data.error
      });
    }
  };

  // Create Event
  const createEvent = async (event) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await axios.post(url + "/api/event/", event, config);
      dispatch({
        type: CREATE_EVENT,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: FORM_ERROR,
        payload: err.response.data.error
      });
    }
  };

  const clearError = () => {
    dispatch({
      type: CLEAR_ERROR
    });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        getEvents,
        createEvent,
        clearError
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default AuthState;
