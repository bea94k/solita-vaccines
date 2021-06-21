import React from "react";
import { Bar } from "react-chartjs-2";

const DosesByDistrict = ({ orders, doses }) => {
  const data = {
    labels: ["HYKS", "KYS", "OYS", "TAYS", "TYKS"],
    datasets: [
      {
        stack: "stack1",
        label: "Antiqua",
        data: [
          orders.antiqua.HYKS * doses.antiqua,
          orders.antiqua.KYS * doses.antiqua,
          orders.antiqua.OYS * doses.antiqua,
          orders.antiqua.TAYS * doses.antiqua,
          orders.antiqua.TYKS * doses.antiqua,
        ],
        backgroundColor: ["red"],
      },
      {
        stack: "stack1",
        label: "SolarBuddhica",
        data: [
          orders.solarBuddhica.HYKS * doses.solarBuddhica,
          orders.solarBuddhica.KYS * doses.solarBuddhica,
          orders.solarBuddhica.OYS * doses.solarBuddhica,
          orders.solarBuddhica.TAYS * doses.solarBuddhica,
          orders.solarBuddhica.TYKS * doses.solarBuddhica,
        ],
        backgroundColor: ["blue"],
      },
      {
        stack: "stack1",
        label: "Zerpfy",
        data: [
          orders.zerpfy.HYKS * doses.zerpfy,
          orders.zerpfy.KYS * doses.zerpfy,
          orders.zerpfy.OYS * doses.zerpfy,
          orders.zerpfy.TAYS * doses.zerpfy,
          orders.zerpfy.TYKS * doses.zerpfy,
        ],
        backgroundColor: ["yellow"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default DosesByDistrict;
