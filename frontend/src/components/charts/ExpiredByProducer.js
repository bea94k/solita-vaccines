import React from "react";
import { Pie } from "react-chartjs-2";

const ExpiredByProducer = ({ expired }) => {
  const data = {
    labels: ["Antiqua", "SolarBuddhica", "Zerpfy"],
    datasets: [
      {
        label: "Vaccinations By Gender",
        data: [expired.antiqua, expired.solarBuddhica, expired.zerpfy],
        backgroundColor: ["red", "blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpiredByProducer;
