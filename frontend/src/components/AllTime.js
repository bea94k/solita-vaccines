import React from "react";
import DosesByProducer from "./charts/DosesByProducer";
import DosesByDistrict from "./charts/DosesByDistrict";
import VaccinationsByGender from "./charts/VaccinationsByGender";
import VaccinationsByMonth from "./charts/VaccinationsByMonth";
import DosesUsedExpiredByDistrict from "./charts/DosesUsedExpiredByDistrict";

const AllTime = ({ allTimeData, doses }) => {
  const totalInjections =
    allTimeData.orders.antiqua.amount * doses.antiqua +
    allTimeData.orders.solarBuddhica.amount * doses.solarBuddhica +
    allTimeData.orders.zerpfy.amount * doses.zerpfy;

  return (
    <div>
      <h2>All Time Data</h2>

      <div className="category-wrap">
        <h3>Doses arrived - producers</h3>
        <p>
          {totalInjections} doses of vaccine in {allTimeData.orders.total}{" "}
          orders
        </p>
        <DosesByProducer orders={allTimeData.orders} doses={doses} />
      </div>

      <div className="category-wrap">
        <h3>Doses arrived - healthcare districts</h3>
        <DosesByDistrict orders={allTimeData.orders} doses={doses} />
      </div>

      <div className="category-wrap">
        <h3>Vaccinations performed - genders</h3>
        <p>{allTimeData.vaccinations.total} vaccinations</p>
        <VaccinationsByGender vaccinations={allTimeData.vaccinations.genders} />
      </div>

      <div className="category-wrap">
        <h3>Vaccinations performed - months</h3>
        <VaccinationsByMonth vaccinations={allTimeData.vaccinations.months} />
      </div>

      <div className="category-wrap">
        <h3>Doses used VS expired - districts</h3>
        <DosesUsedExpiredByDistrict allTimeData={allTimeData} />
      </div>
    </div>
  );
};

export default AllTime;
