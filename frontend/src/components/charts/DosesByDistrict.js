import React from "react";
import { Bar } from "react-chartjs-2";
import "./Charts.css";

const style = getComputedStyle(document.body);
const antiquaColor = style.getPropertyValue("--pink");
const solarBuddhicaColor = style.getPropertyValue("--seagreen");
const zerpfyColor = style.getPropertyValue("--yellow");
const barBorder = style.getPropertyValue("--gray");

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
        backgroundColor: antiquaColor,
        borderWidth: 1,
        borderColor: barBorder,
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
        backgroundColor: solarBuddhicaColor,
        borderWidth: 1,
        borderColor: barBorder,
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
        backgroundColor: zerpfyColor,
        borderWidth: 1,
        borderColor: barBorder,
      },
    ],
  };

  return (
    <>
      <div className="chart-wrap">
        <div className="bar-chart-wrap">
          <Bar data={data} />
        </div>
      </div>
    </>
  );
};

export default DosesByDistrict;
