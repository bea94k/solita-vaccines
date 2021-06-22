import React from "react";
import { useState } from "react";
import axios from "../axios";

import DosesByProducer from "./charts/DosesByProducer";
import DosesByDistrict from "./charts/DosesByDistrict";
import VaccinationsByDistricts from "./charts/VaccinationsByDistricts";
import ExpiredByProducer from "./charts/ExpiredByProducer";
import ExpiringSoon from "./charts/ExpiringSoon";

const PerDay = ({ doses }) => {
  const [perDayData, setPerDayData] = useState();

  const fetchPerDayData = (date) => {
    console.log("Fetching per-day data...");
    axios
      .get(`/per-day-data/${date}`)
      .then((resp) => {
        console.log("per-day data", resp.data.perDayData);
        setPerDayData(resp.data.perDayData);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  let totalInjections = "";
  if (perDayData)
    totalInjections =
      perDayData.orders.antiqua.amount * doses.antiqua +
      perDayData.orders.solarBuddhica.amount * doses.solarBuddhica +
      perDayData.orders.zerpfy.amount * doses.zerpfy;

  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>Per Day Data</h2>

      <input
        type="date"
        onChange={(e) => fetchPerDayData(e.target.value)}
        min="2021-01-02"
        max="2021-04-12"
      />
      {!perDayData ? (
        <p>Choose a date</p>
      ) : (
        <>
          <h3>Doses arrived - producers</h3>

          <p>
            {totalInjections} doses of vaccine in {perDayData.orders.total}{" "}
            orders
          </p>
          <DosesByProducer orders={perDayData.orders} doses={doses} />

          <h3>Doses arrived - healthcare districts</h3>
          <DosesByDistrict orders={perDayData.orders} doses={doses} />

          <h3>Vaccinations performed - healthcare districts</h3>
          <VaccinationsByDistricts vaccinations={perDayData.vaccinations} />

          <h3>Bottles expired on that day - producers</h3>
          <ExpiredByProducer expired={perDayData.orders.expired} />

          <h3>Bottles expiring in the next 10 days</h3>
          <ExpiringSoon expiring={perDayData.orders.expiringSoon} />
        </>
      )}
    </div>
  );
};

export default PerDay;
