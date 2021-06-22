import React from "react";
import { Bar } from "react-chartjs-2";
import "./Charts.css";

const style = getComputedStyle(document.body);
const femaleColor = style.getPropertyValue("--orange");
const maleColor = style.getPropertyValue("--purple");
const nonbinaryColor = style.getPropertyValue("--green");
const cutBorder = style.getPropertyValue("--gray");

const VaccinationsByDistrict = ({ vaccinations }) => {
  const data = {
    labels: ["HYKS", "KYS", "OYS", "TAYS", "TYKS"],
    datasets: [
      {
        stack: "stack1",
        label: "female",
        data: [
          vaccinations.female.HYKS,
          vaccinations.female.KYS,
          vaccinations.female.OYS,
          vaccinations.female.TAYS,
          vaccinations.female.TYKS,
        ],
        backgroundColor: femaleColor,
        borderColor: cutBorder,
        borderWidth: 1,
      },
      {
        stack: "stack1",
        label: "male",
        data: [
          vaccinations.male.HYKS,
          vaccinations.male.KYS,
          vaccinations.male.OYS,
          vaccinations.male.TAYS,
          vaccinations.male.TYKS,
        ],
        backgroundColor: maleColor,
        borderColor: cutBorder,
        borderWidth: 1,
      },
      {
        stack: "stack1",
        label: "nonbinary",
        data: [
          vaccinations.nonbinary.HYKS,
          vaccinations.nonbinary.KYS,
          vaccinations.nonbinary.OYS,
          vaccinations.nonbinary.TAYS,
          vaccinations.nonbinary.TYKS,
        ],
        backgroundColor: nonbinaryColor,
        borderColor: cutBorder,
        borderWidth: 1,
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

export default VaccinationsByDistrict;
