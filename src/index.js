import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import Airtable from "airtable";
import { Auth0Provider } from "@auth0/auth0-react";

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
    <Auth0Provider
      domain='dev-lu9u0upp.us.auth0.com'
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
