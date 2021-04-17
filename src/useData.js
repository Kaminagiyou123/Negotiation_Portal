import { useState } from "react";
import axios from "axios";
export default function useData() {
  const [data, setData] = useState(null);

  const getData = async () => {
    return axios.get("/").then((res) => setData(res.data.records));
  };

  return {
    getData,
    data,
  };
}
export const destroyData = async (id) => {
  const Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
    process.env.REACT_APP_BASE_ID
  );
  base("negotiation").destroy([id], function (err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Deleted", deletedRecords.length, "records");
  });
  return { destroyData };
};

export const updateData = async (id, item) => {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
    process.env.REACT_APP_BASE_ID
  );

  base("Negotiation").update(
    [
      {
        id: id,
        fields: {
          ...item,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.get("Goal_to_Close"));
      });
    }
  );
};
