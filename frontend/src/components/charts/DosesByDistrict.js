import React from "react";
import { Bar } from "react-chartjs-2";

const DosesByDistrict = ({ orders }) => {
  const data = {
    labels: ["HYKS", "KYS", "OYS", "TAYS", "TYKS"],
    datasets: [
      {
        stack: "stack1",
        label: "Antiqua",
        data: [
          orders.antiqua.HYKS * orders.antiqua.injectionsInBottle,
          orders.antiqua.KYS * orders.antiqua.injectionsInBottle,
          orders.antiqua.OYS * orders.antiqua.injectionsInBottle,
          orders.antiqua.TAYS * orders.antiqua.injectionsInBottle,
          orders.antiqua.TYKS * orders.antiqua.injectionsInBottle,
        ],
        backgroundColor: ["red"],
      },
      {
        stack: "stack1",
        label: "SolarBuddhica",
        data: [
          orders.solarBuddhica.HYKS * orders.solarBuddhica.injectionsInBottle,
          orders.solarBuddhica.KYS * orders.solarBuddhica.injectionsInBottle,
          orders.solarBuddhica.OYS * orders.solarBuddhica.injectionsInBottle,
          orders.solarBuddhica.TAYS * orders.solarBuddhica.injectionsInBottle,
          orders.solarBuddhica.TYKS * orders.solarBuddhica.injectionsInBottle,
        ],
        backgroundColor: ["blue"],
      },
      {
        stack: "stack1",
        label: "Zerpfy",
        data: [
          orders.zerpfy.HYKS * orders.zerpfy.injectionsInBottle,
          orders.zerpfy.KYS * orders.zerpfy.injectionsInBottle,
          orders.zerpfy.OYS * orders.zerpfy.injectionsInBottle,
          orders.zerpfy.TAYS * orders.zerpfy.injectionsInBottle,
          orders.zerpfy.TYKS * orders.zerpfy.injectionsInBottle,
        ],
        backgroundColor: ["yellow"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default DosesByDistrict;
