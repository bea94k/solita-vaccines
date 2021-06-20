import React from "react";
import { Pie } from "react-chartjs-2";

const VaccinationsByGender = ({ vaccinationsByGender }) => {
  const data = {
    labels: ["female", "male", "nonbinary"],
    datasets: [
      {
        label: "Vaccinations By Gender",
        data: [
          vaccinationsByGender.female,
          vaccinationsByGender.male,
          vaccinationsByGender.nonbinary,
        ],
        backgroundColor: ["red", "blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} />;
};

export default VaccinationsByGender;
