import React from "react";
import { Bar } from "react-chartjs-2";

const DosesUsedExpiredByDistrict = ({ allTimeData, doses }) => {
  const data = {
    labels: ["HYKS", "KYS", "OYS", "TAYS", "TYKS"],
    datasets: [
      {
        label: "doses used",
        data: [
          allTimeData.vaccinations.districts.HYKS,
          allTimeData.vaccinations.districts.KYS,
          allTimeData.vaccinations.districts.OYS,
          allTimeData.vaccinations.districts.TAYS,
          allTimeData.vaccinations.districts.TYKS,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "doses expired",
        data: [
          // total doses in district - vaccinations in district
          allTimeData.orders.districtsDoses.HYKS -
            allTimeData.vaccinations.districts.HYKS,
          allTimeData.orders.districtsDoses.KYS -
            allTimeData.vaccinations.districts.KYS,
          allTimeData.orders.districtsDoses.OYS -
            allTimeData.vaccinations.districts.OYS,
          allTimeData.orders.districtsDoses.TAYS -
            allTimeData.vaccinations.districts.TAYS,
          allTimeData.orders.districtsDoses.TYKS -
            allTimeData.vaccinations.districts.TYKS,
        ],
        backgroundColor: ["blue"],
        borderColor: ["red"],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default DosesUsedExpiredByDistrict;
