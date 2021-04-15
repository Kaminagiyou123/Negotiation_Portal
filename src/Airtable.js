const base = require("airtable").base("appbAgfF9RV1E4mqP");
var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.YOUR_API_KEY,
});
var base = Airtable.base("appbAgfF9RV1E4mqP");
