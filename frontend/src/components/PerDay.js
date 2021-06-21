import React from "react";
import { useState } from "react";
import axios from "../axios";

import DosesByProducer from "./charts/DosesByProducer";

const PerDay = ({ doses }) => {
  const [perDayData, setPerDayData] = useState();
  const [totals, setTotals] = useState();

  const fetchPerDayData = (date) => {
    console.log("Fetching per-day data...");
    axios
      .get(`/per-day-data/${date}`)
      .then((resp) => {
        console.log("per-day data", resp.data.perDayData);
        setPerDayData(resp.data.perDayData);
        const totalOrders =
          resp.data.perDayData.orders.antiqua.amount +
          resp.data.perDayData.orders.solarBuddhica.amount +
          resp.data.perDayData.orders.zerpfy.amount;
        const totalInjections =
          resp.data.perDayData.orders.antiqua.amount * doses.antiqua +
          resp.data.perDayData.orders.solarBuddhica.amount *
            doses.solarBuddhica +
          resp.data.perDayData.orders.zerpfy.amount * doses.zerpfy;
        setTotals({
          orders: totalOrders,
          injections: totalInjections,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>Per Day Data</h2>

      <button onClick={() => fetchPerDayData("2021-04-09")}>
        Fetch data for an arbitrary 2021-04-09
      </button>

      {!perDayData || !totals ? (
        <p>Choose a date</p>
      ) : (
        <>
          <h3>Doses ordered - producers</h3>
          <p>
            {totals.injections} doses of vaccine in {totals.orders} orders
          </p>
          <DosesByProducer orders={perDayData.orders} doses={doses} />
        </>
      )}
    </div>
  );
};

export default PerDay;
