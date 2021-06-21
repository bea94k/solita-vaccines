import React from "react";
import DosesByProducer from "./charts/DosesByProducer";
import DosesByDistrict from "./charts/DosesByDistrict";
import VaccinationsByGender from "./charts/VaccinationsByGender";
import VaccinationsByMonth from "./charts/VaccinationsByMonth";

const AllTime = ({ allTimeData, doses }) => {
  const totalInjections =
    allTimeData.orders.antiqua.amount * doses.antiqua +
    allTimeData.orders.solarBuddhica.amount * doses.solarBuddhica +
    allTimeData.orders.zerpfy.amount * doses.zerpfy;

  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>All Time Data</h2>

      <h3>Doses ordered - producers</h3>
      <p>
        {totalInjections} doses of vaccine in {allTimeData.orders.total} orders
      </p>
      <DosesByProducer orders={allTimeData.orders} doses={doses} />

      <h3>Doses ordered - healthcare districts</h3>
      <DosesByDistrict orders={allTimeData.orders} doses={doses} />

      <h3>Vaccinations performed - genders</h3>
      <p>{allTimeData.vaccinations.total} vaccinations</p>
      <VaccinationsByGender vaccinations={allTimeData.vaccinations.genders} />

      <h3>Vaccinations performed - months</h3>
      <VaccinationsByMonth vaccinations={allTimeData.vaccinations.months} />
    </div>
  );
};

export default AllTime;
