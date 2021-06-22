import React from "react";
import { Pie } from "react-chartjs-2";
import "./Charts.css";

const style = getComputedStyle(document.body);
const antiquaColor = style.getPropertyValue("--pink");
const solarBuddhicaColor = style.getPropertyValue("--seagreen");
const zerpfyColor = style.getPropertyValue("--yellow");
const cutBorder = style.getPropertyValue("--gray");

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
        backgroundColor: [antiquaColor, solarBuddhicaColor, zerpfyColor],
        borderWidth: 1,
        borderColor: cutBorder,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        // disable hiding the clicked data from the chart
        onClick: () => {},
      },
    },
  };

  return (
    <>
      <div className="chart-wrap">
        <div className="pie-chart-wrap">
          <Pie data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default DosesByProducer;
