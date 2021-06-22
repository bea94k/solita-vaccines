import React from "react";
import { Pie } from "react-chartjs-2";
import "./Charts.css";

const style = getComputedStyle(document.body);
const femaleColor = style.getPropertyValue("--orange");
const maleColor = style.getPropertyValue("--purple");
const nonbinaryColor = style.getPropertyValue("--green");
const cutBorder = style.getPropertyValue("--gray");

const VaccinationsByGender = ({ vaccinations }) => {
  const data = {
    labels: ["female", "male", "nonbinary"],
    datasets: [
      {
        label: "Vaccinations By Gender",
        data: [vaccinations.female, vaccinations.male, vaccinations.nonbinary],
        backgroundColor: [femaleColor, maleColor, nonbinaryColor],
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

export default VaccinationsByGender;
