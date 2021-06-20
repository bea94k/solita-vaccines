import React from "react";
import DosesByProducer from "./charts/DosesByProducer";
import DosesByDistrict from "./charts/DosesByDistrict";
import VaccinationsByGender from "./charts/VaccinationsByGender";

const AllTime = ({ allTimeData }) => {
  const totalInjections =
    allTimeData.orders.antiqua.amount *
      allTimeData.orders.antiqua.injectionsInBottle +
    allTimeData.orders.solarBuddhica.amount *
      allTimeData.orders.solarBuddhica.injectionsInBottle +
    allTimeData.orders.zerpfy.amount *
      allTimeData.orders.zerpfy.injectionsInBottle;

  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>All Time Data</h2>

      <h3>Doses ordered - producers</h3>
      <p>
        {totalInjections} doses of vaccine in {allTimeData.orders.total} orders
      </p>
      <DosesByProducer orders={allTimeData.orders} />

      <h3>Doses ordered - healthcare districts</h3>
      <DosesByDistrict orders={allTimeData.orders} />

      <h3>Vaccinations performed - genders</h3>
      <p>{allTimeData.vaccinations.total} vaccinations</p>
      <VaccinationsByGender
        vaccinationsByGender={allTimeData.vaccinations.genders}
      />
    </div>
  );
};

export default AllTime;
