import React from "react";
import { Pie } from "react-chartjs-2";

const DosesByProducer = ({ orders }) => {
  const data = {
    labels: ["Antiqua", "SolarBuddhica", "Zerpfy"],
    datasets: [
      {
        label: "Injections By Producer",
        data: [
          orders.antiqua.amount * orders.antiqua.injectionsInBottle,
          orders.solarBuddhica.amount * orders.solarBuddhica.injectionsInBottle,
          orders.zerpfy.amount * orders.zerpfy.injectionsInBottle,
        ],
        backgroundColor: ["red", "blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} />;
};

export default DosesByProducer;
