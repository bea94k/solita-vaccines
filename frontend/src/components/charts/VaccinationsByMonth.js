import React from "react";
import { Bar } from "react-chartjs-2";
import "./Charts.css";

const style = getComputedStyle(document.body);
const antiquaColor = style.getPropertyValue("--pink");
const solarBuddhicaColor = style.getPropertyValue("--seagreen");
const zerpfyColor = style.getPropertyValue("--yellow");
const barBorder = style.getPropertyValue("--gray");

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
        backgroundColor: antiquaColor,
        borderWidth: 1,
        borderColor: barBorder,
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
        backgroundColor: solarBuddhicaColor,
        borderWidth: 1,
        borderColor: barBorder,
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
