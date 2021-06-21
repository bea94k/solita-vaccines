import React from "react";
import { Pie } from "react-chartjs-2";

const VaccinationsByGender = ({ vaccinations }) => {
  const data = {
    labels: ["female", "male", "nonbinary"],
    datasets: [
      {
        label: "Vaccinations By Gender",
        data: [vaccinations.female, vaccinations.male, vaccinations.nonbinary],
        backgroundColor: ["red", "blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} />;
};

export default VaccinationsByGender;
