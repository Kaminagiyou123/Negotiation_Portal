const base = require("airtable").base(process.env.REACT_APP_BASE_ID);
var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.YOUR_API_KEY,
});
var base = Airtable.base(process.env.REACT_APP_BASE_ID);
