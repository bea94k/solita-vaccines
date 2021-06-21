import React from "react";
import { Bar } from "react-chartjs-2";

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
        backgroundColor: ["red"],
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
        backgroundColor: ["blue"],
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
        backgroundColor: ["yellow"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default VaccinationsByDistrict;
