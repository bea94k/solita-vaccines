const connection = require("../functions/mysql/config").connection;

// TODO: take the getSqlDataLength out to a separate file
// cause it's doubled here and in allTimeData.js

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

const sqlVaccinationsGender = `SELECT vaccination_id FROM vaccinations
          WHERE gender = ?`;

const sqlOrdersProducerDistrict = `SELECT id FROM orders
          WHERE vaccine = ?
          AND healthCareDistrict = ?
          AND arrived LIKE ?`;

const getPerDayData = async (date) => {
  const inclDate = `${date}%`;
  // GENDERS
  const femaleVaccinations = await getSqlDataLength(sqlVaccinationsGender, [
    "female",
  ]);

  // ANTIQUA
  const ordersAntiquaHYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "HYKS",
    inclDate,
  ]);
  const ordersAntiquaKYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "KYS",
    inclDate,
  ]);
  const ordersAntiquaOYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "OYS",
    inclDate,
  ]);
  const ordersAntiquaTAYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "TAYS",
    inclDate,
  ]);
  const ordersAntiquaTYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Antiqua",
    "TYKS",
    inclDate,
  ]);
  const ordersAntiqua =
    ordersAntiquaHYKS +
    ordersAntiquaKYS +
    ordersAntiquaOYS +
    ordersAntiquaTAYS +
    ordersAntiquaTYKS;

  // SOLARBUDDHICA
  const ordersSolarBuddhicaHYKS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "HYKS", inclDate]
  );
  const ordersSolarBuddhicaKYS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "KYS", inclDate]
  );
  const ordersSolarBuddhicaOYS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "OYS", inclDate]
  );
  const ordersSolarBuddhicaTAYS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "TAYS", inclDate]
  );
  const ordersSolarBuddhicaTYKS = await getSqlDataLength(
    sqlOrdersProducerDistrict,
    ["SolarBuddhica", "TYKS", inclDate]
  );
  const ordersSolarBuddhica =
    ordersSolarBuddhicaHYKS +
    ordersSolarBuddhicaKYS +
    ordersSolarBuddhicaOYS +
    ordersSolarBuddhicaTAYS +
    ordersSolarBuddhicaTYKS;

  // ZERPFY
  const ordersZerpfyHYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "HYKS",
    inclDate,
  ]);
  const ordersZerpfyKYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "KYS",
    inclDate,
  ]);
  const ordersZerpfyOYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "OYS",
    inclDate,
  ]);
  const ordersZerpfyTAYS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "TAYS",
    inclDate,
  ]);
  const ordersZerpfyTYKS = await getSqlDataLength(sqlOrdersProducerDistrict, [
    "Zerpfy",
    "TYKS",
    inclDate,
  ]);
  const ordersZerpfy =
    ordersZerpfyHYKS +
    ordersZerpfyKYS +
    ordersZerpfyOYS +
    ordersZerpfyTAYS +
    ordersZerpfyTYKS;

  return {
    orders: {
      total: ordersAntiqua + ordersSolarBuddhica + ordersZerpfy,
      antiqua: {
        amount: ordersAntiqua,
        HYKS: ordersAntiquaHYKS,
        KYS: ordersAntiquaKYS,
        OYS: ordersAntiquaOYS,
        TAYS: ordersAntiquaTAYS,
        TYKS: ordersAntiquaTYKS,
      },
      solarBuddhica: {
        amount: ordersSolarBuddhica,
        HYKS: ordersSolarBuddhicaHYKS,
        KYS: ordersSolarBuddhicaKYS,
        OYS: ordersSolarBuddhicaOYS,
        TAYS: ordersSolarBuddhicaTAYS,
        TYKS: ordersSolarBuddhicaTYKS,
      },
      zerpfy: {
        amount: ordersZerpfy,
        HYKS: ordersZerpfyHYKS,
        KYS: ordersZerpfyKYS,
        OYS: ordersZerpfyOYS,
        TAYS: ordersZerpfyTAYS,
        TYKS: ordersZerpfyTYKS,
      },
    },
  };
};

exports.data = getPerDayData;
