import React from "react";
import { useState } from "react";
import axios from "../axios";

const PerDay = () => {
  const [perDayData, setPerDayData] = useState();

  const fetchPerDayData = (date) => {
    console.log("Fetching per-day data...");
    axios
      .get(`/per-day-data/${date}`)
      .then((resp) => {
        console.log("per-day data", resp.data.perDayData);
        // setPerDayData(resp.data.perDayData);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <h2>Per Day Data</h2>

      <button onClick={() => fetchPerDayData("2021-04-09")}>Fetch data</button>
    </div>
  );
};

export default PerDay;
