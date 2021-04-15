import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import Airtable from "airtable";
//create a new Airtable object in React
new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
  process.env.REACT_APP_BASE_ID
);
//base endpoint to call with each request
axios.defaults.baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/Negotiation/`;
//content type to send with all POST requests
axios.defaults.headers.post["Content-Type"] = "application/json";
//authenticate to the base with the API key
axios.defaults.headers["Authorization"] =
  "Bearer " + process.env.REACT_APP_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
