import React from "react";
import { Bar } from "react-chartjs-2";
import "./Charts.css";

const style = getComputedStyle(document.body);
const dosesUsedColor = style.getPropertyValue("--darkgreen");
const dosesExpiredColor = style.getPropertyValue("--brown");
const barBorder = style.getPropertyValue("--gray");

const DosesUsedExpiredByDistrict = ({ allTimeData }) => {
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
        backgroundColor: dosesUsedColor,
        borderColor: barBorder,
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
        backgroundColor: dosesExpiredColor,
        borderColor: barBorder,
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

export default DosesUsedExpiredByDistrict;
