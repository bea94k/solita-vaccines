import React from "react";
import { Pie } from "react-chartjs-2";

const DosesByProducer = ({ orders, doses }) => {
  const data = {
    labels: ["Antiqua", "SolarBuddhica", "Zerpfy"],
    datasets: [
      {
        label: "Injections By Producer",
        data: [
          orders.antiqua.amount * doses.antiqua,
          orders.solarBuddhica.amount * doses.solarBuddhica,
          orders.zerpfy.amount * doses.zerpfy,
        ],
        backgroundColor: ["red", "blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} />;
};

export default DosesByProducer;
