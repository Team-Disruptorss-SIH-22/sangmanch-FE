import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import "./styles/index.css";
import { App } from "./components"; 

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      draggable
      pauseOnHover
      closeOnClick
      newestOnTop={false}
      autoClose={3000}
      position="top-left"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
