import React, { useReducer } from "react";
import axios from "axios";

import {
  MANUFACTURER_DISPATCH,
  WAREHOUSE_DISPATCH,
  FORM_ERROR,
  CLEAR_ERROR
} from "../types";

import FormContext from "./formContext";
import formReducer from "./formReducer";

const FormState = (props) => {
  const initialState = {
    error: null
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const url = ""; //CHANGE BACKEND
  // const url = "http://localhost:5000";

  // Manufacturer Dispatch
  const manufacturerDispatch = async (manufacturer) => {
    try {
      console.log(manufacturer);
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      console.log("hello");
      const res = await axios.post(
        `${url}/api/form/manufacturer/dispatch`,
        manufacturer,
        config
      );
      dispatch({
        type: MANUFACTURER_DISPATCH,
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
    <FormContext.Provider
      value={{
        error: state.error,
        clearError,
        manufacturerDispatch
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
