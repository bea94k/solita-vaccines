const antiqua = require("../resources/Antiqua.json");
const solarBuddhica = require("../resources/SolarBuddhica.json");
const zerpfy = require("../resources/Zerpfy.json");

const connection = require("../functions/mysql/config").connection;

const ordersTotal = 5000;
const vaccinationsTotal = 7000;
const antiquaAmount = antiqua.length;
const solarBuddhicaAmount = solarBuddhica.length;
const zerpfyAmount = zerpfy.length;

// get number of results for a provided statement
// optional use of parameters
const getSqlDataLength = (sqlStatement, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlStatement, params, (error, results, fields) => {
      if (error) {
        console.error(error.message);
        return reject(error.message);
      }

      // console.log(results.length);
      return resolve(results.length);
    });
  });
};

// get number of injections in one bottle of vaccine of a producer
const getSqlInjectionsInBottle = (producer) => {
  const sqlStatement = `SELECT DISTINCT injections FROM orders
  WHERE vaccine = '${producer}'`;
  return new Promise((resolve, reject) => {
    connection.query(sqlStatement, (error, results, fields) => {
      if (error) {
        console.error(error.message);
        return reject(error.message);
      }

      // console.log("results", results[0].injections);
      return resolve(results[0].injections);
    });
  });
};

const sqlVaccinationsGender = `SELECT vaccination_id FROM vaccinations
          WHERE gender = ?`;

const sqlOrdersProducerDistrict = `SELECT id FROM orders
          WHERE vaccine = ?
          AND healthCareDistrict = ?`;

const sqlVaccinationsProducerMonth = `SELECT vaccination_id
          FROM vaccinations v
          JOIN orders o
            ON v.sourceBottle = o.id
          WHERE vaccine = ?
          AND vaccinationDate LIKE ?`;

const getAllData = async () => {
  // GENDERS
  const femaleVaccinations = await getSqlDataLength(sqlVaccinationsGender, [
    "female",
  ]);
  const maleVaccinations = await getSqlDataLength(sqlVaccinationsGender, [
    "male",
  ]);
  const nonbinaryVaccinations = await getSqlDataLength(sqlVaccinationsGender, [
    "nonbinary",
  ]);

  // ANTIQUA
  const ordersAntiquaHYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "HYKS",
  ]);
  const ordersAntiquaKYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "KYS",
  ]);
  const ordersAntiquaOYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "OYS",
  ]);
  const ordersAntiquaTAYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "TAYS",
  ]);
  const ordersAntiquaTYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "TYKS",
  ]);

  const injectionsInBottleAntiqua = await getSqlInjectionsInBottle("Antiqua");

  const janAntiqua = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Antiqua",
    "2021-01%",
  ]);
  const febAntiqua = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Antiqua",
    "2021-02%",
  ]);
  const marAntiqua = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Antiqua",
    "2021-03%",
  ]);
  const aprAntiqua = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Antiqua",
    "2021-04%",
  ]);

  // SOLAR BUDDHICA
  const ordersSolarBuddhicaHYKS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "HYKS"]
  );
  const ordersSolarBuddhicaKYS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "KYS"]
  );
  const ordersSolarBuddhicaOYS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "OYS"]
  );
  const ordersSolarBuddhicaTAYS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "TAYS"]
  );
  const ordersSolarBuddhicaTYKS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "TYKS"]
  );

  const injectionsInBottleSolarBuddhica = await getSqlInjectionsInBottle(
    "SolarBuddhica"
  );

  const janSolarBuddhica = await getSqlDataLength(
    sqlVaccinationsProducerMonth,
    ["SolarBuddhica", "2021-01%"]
  );
  const febSolarBuddhica = await getSqlDataLength(
    sqlVaccinationsProducerMonth,
    ["SolarBuddhica", "2021-02%"]
  );
  const marSolarBuddhica = await getSqlDataLength(
    sqlVaccinationsProducerMonth,
    ["SolarBuddhica", "2021-03%"]
  );
  const aprSolarBuddhica = await getSqlDataLength(
    sqlVaccinationsProducerMonth,
    ["SolarBuddhica", "2021-04%"]
  );

  // ZERPFY
  const ordersZerpfyHYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "HYKS",
  ]);
  const ordersZerpfyKYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "KYS",
  ]);
  const ordersZerpfyOYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "OYS",
  ]);
  const ordersZerpfyTAYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "TAYS",
  ]);
  const ordersZerpfyTYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "TYKS",
  ]);

  const injectionsInBottleZerpfy = await getSqlInjectionsInBottle("Zerpfy");

  const janZerpfy = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Zerpfy",
    "2021-01%",
  ]);
  const febZerpfy = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Zerpfy",
    "2021-02%",
  ]);
  const marZerpfy = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Zerpfy",
    "2021-03%",
  ]);
  const aprZerpfy = await getSqlDataLength(sqlVaccinationsProducerMonth, [
    "Zerpfy",
    "2021-04%",
  ]);

  return {
    orders: {
      total: ordersTotal,
      antiqua: {
        amount: antiquaAmount,
        injectionsInBottle: injectionsInBottleAntiqua,
        HYKS: ordersAntiquaHYKS,
        KYS: ordersAntiquaKYS,
        OYS: ordersAntiquaOYS,
        TAYS: ordersAntiquaTAYS,
        TYKS: ordersAntiquaTYKS,
      },
      solarBuddhica: {
        amount: solarBuddhicaAmount,
        injectionsInBottle: injectionsInBottleSolarBuddhica,
        HYKS: ordersSolarBuddhicaHYKS,
        KYS: ordersSolarBuddhicaKYS,
        OYS: ordersSolarBuddhicaOYS,
        TAYS: ordersSolarBuddhicaTAYS,
        TYKS: ordersSolarBuddhicaTYKS,
      },
      zerpfy: {
        amount: zerpfyAmount,
        injectionsInBottle: injectionsInBottleZerpfy,
        HYKS: ordersZerpfyHYKS,
        KYS: ordersZerpfyKYS,
        OYS: ordersZerpfyOYS,
        TAYS: ordersZerpfyTAYS,
        TYKS: ordersZerpfyTYKS,
      },
    },
    vaccinations: {
      total: vaccinationsTotal,
      genders: {
        female: femaleVaccinations,
        male: maleVaccinations,
        nonbinary: nonbinaryVaccinations,
      },
      months: {
        jan: {
          antiqua: janAntiqua,
          solarBuddhica: janSolarBuddhica,
          zerpfy: janZerpfy,
        },
        feb: {
          antiqua: febAntiqua,
          solarBuddhica: febSolarBuddhica,
          zerpfy: febZerpfy,
        },
        mar: {
          antiqua: marAntiqua,
          solarBuddhica: marSolarBuddhica,
          zerpfy: marZerpfy,
        },
        apr: {
          antiqua: aprAntiqua,
          solarBuddhica: aprSolarBuddhica,
          zerpfy: aprZerpfy,
        },
      },
    },
  };
};

exports.data = getAllData;
