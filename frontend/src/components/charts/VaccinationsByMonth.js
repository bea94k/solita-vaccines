import React from "react";
import { Bar } from "react-chartjs-2";

const DosesByDistrict = ({ vaccinations }) => {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        stack: "stack1",
        label: "Antiqua",
        data: [
          vaccinations.jan.antiqua,
          vaccinations.feb.antiqua,
          vaccinations.mar.antiqua,
          vaccinations.apr.antiqua,
        ],
        backgroundColor: ["red"],
      },
      {
        stack: "stack1",
        label: "SolarBuddhica",
        data: [
          vaccinations.jan.solarBuddhica,
          vaccinations.feb.solarBuddhica,
          vaccinations.mar.solarBuddhica,
          vaccinations.apr.solarBuddhica,
        ],
        backgroundColor: ["blue"],
      },
      {
        stack: "stack1",
        label: "Zerpfy",
        data: [
          vaccinations.jan.zerpfy,
          vaccinations.feb.zerpfy,
          vaccinations.mar.zerpfy,
          vaccinations.apr.zerpfy,
        ],
        backgroundColor: ["yellow"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default DosesByDistrict;
