const add = require("date-fns/add");
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

const sqlVaccinationsGenderDistrict = `SELECT vaccination_id
          FROM vaccinations v
          JOIN orders o
            ON v.sourceBottle = o.id
          WHERE gender = ?
          AND healthCareDistrict = ?
          AND vaccinationDate LIKE ?`;

const sqlOrdersProducerDistrict = `SELECT id FROM orders
          WHERE vaccine = ?
          AND healthCareDistrict = ?
          AND arrived LIKE ?`;

const sqlProducerExpiredBottles = `SELECT id FROM orders
          WHERE vaccine = ?
          AND arrived LIKE ?`;

const sqlBottlesExpiringSoon = `SELECT id FROM orders
          WHERE arrived LIKE ?`;

const getPerDayData = async (date) => {
  const inclDate = `${date}%`;

  // date of arrival of orders that expire on that day
  // orders that arrived 30 days earlier
  const dateObject = new Date(date);
  const temp1 = add(dateObject, { days: -30 });
  const arrivalDateNowExpired = `${temp1.toISOString().split("T")[0]}%`;

  // date of arrival of orders that expire in X number of days
  const arrivalDateExpiringInDays = (numberOfDays) => {
    const temp2 = add(dateObject, { days: numberOfDays });
    const arrivalDateExpiringSoon = `${temp2.toISOString().split("T")[0]}%`;
    return arrivalDateExpiringSoon;
  };

  // GENDERS - DISTRICTS
  const vaccinationsFemaleHYKS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["female", "HYKS", inclDate]
  );
  const vaccinationsFemaleKYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["female", "KYS", inclDate]
  );
  const vaccinationsFemaleOYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["female", "OYS", inclDate]
  );
  const vaccinationsFemaleTAYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["female", "TAYS", inclDate]
  );
  const vaccinationsFemaleTYKS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["female", "TYKS", inclDate]
  );

  const vaccinationsMaleHYKS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["male", "HYKS", inclDate]
  );
  const vaccinationsMaleKYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["male", "KYS", inclDate]
  );
  const vaccinationsMaleOYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["male", "OYS", inclDate]
  );
  const vaccinationsMaleTAYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["male", "TAYS", inclDate]
  );
  const vaccinationsMaleTYKS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["male", "TYKS", inclDate]
  );

  const vaccinationsNonbinaryHYKS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["nonbinary", "HYKS", inclDate]
  );
  const vaccinationsNonbinaryKYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["nonbinary", "KYS", inclDate]
  );
  const vaccinationsNonbinaryOYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["nonbinary", "OYS", inclDate]
  );
  const vaccinationsNonbinaryTAYS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["nonbinary", "TAYS", inclDate]
  );
  const vaccinationsNonbinaryTYKS = await getSqlDataLength(
    sqlVaccinationsGenderDistrict,
    ["nonbinary", "TYKS", inclDate]
  );

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
  const ordersAntiquaExpired = await getSqlDataLength(
    sqlProducerExpiredBottles,
    ["Antiqua", arrivalDateNowExpired]
  );
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
  const ordersSolarBuddhicaExpired = await getSqlDataLength(
    sqlProducerExpiredBottles,
    ["SolarBuddhica", arrivalDateNowExpired]
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
  const ordersZerpfyExpired = await getSqlDataLength(
    sqlProducerExpiredBottles,
    ["Zerpfy", arrivalDateNowExpired]
  );
  const ordersZerpfy =
    ordersZerpfyHYKS +
    ordersZerpfyKYS +
    ordersZerpfyOYS +
    ordersZerpfyTAYS +
    ordersZerpfyTYKS;

  // BOTTLES EXPIRING SOON
  const bottlesExpiringIn1Day = await getSqlDataLength(sqlBottlesExpiringSoon, [
    arrivalDateExpiringInDays(1),
  ]);
  const bottlesExpiringIn2Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(2)]
  );
  const bottlesExpiringIn3Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(3)]
  );
  const bottlesExpiringIn4Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(4)]
  );
  const bottlesExpiringIn5Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(5)]
  );
  const bottlesExpiringIn6Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(6)]
  );
  const bottlesExpiringIn7Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(7)]
  );
  const bottlesExpiringIn8Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(8)]
  );
  const bottlesExpiringIn9Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(9)]
  );
  const bottlesExpiringIn10Days = await getSqlDataLength(
    sqlBottlesExpiringSoon,
    [arrivalDateExpiringInDays(10)]
  );

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
      expired: {
        antiqua: ordersAntiquaExpired,
        solarBuddhica: ordersSolarBuddhicaExpired,
        zerpfy: ordersZerpfyExpired,
      },
      expiringSoon: {
        one: bottlesExpiringIn1Day,
        two: bottlesExpiringIn2Days,
        three: bottlesExpiringIn3Days,
        four: bottlesExpiringIn4Days,
        five: bottlesExpiringIn5Days,
        six: bottlesExpiringIn6Days,
        seven: bottlesExpiringIn7Days,
        eight: bottlesExpiringIn8Days,
        nine: bottlesExpiringIn9Days,
        ten: bottlesExpiringIn10Days,
      },
    },
    vaccinations: {
      female: {
        HYKS: vaccinationsFemaleHYKS,
        KYS: vaccinationsFemaleKYS,
        OYS: vaccinationsFemaleOYS,
        TAYS: vaccinationsFemaleTAYS,
        TYKS: vaccinationsFemaleTYKS,
      },
      male: {
        HYKS: vaccinationsMaleHYKS,
        KYS: vaccinationsMaleKYS,
        OYS: vaccinationsMaleOYS,
        TAYS: vaccinationsMaleTAYS,
        TYKS: vaccinationsMaleTYKS,
      },
      nonbinary: {
        HYKS: vaccinationsNonbinaryHYKS,
        KYS: vaccinationsNonbinaryKYS,
        OYS: vaccinationsNonbinaryOYS,
        TAYS: vaccinationsNonbinaryTAYS,
        TYKS: vaccinationsNonbinaryTYKS,
      },
    },
  };
};

exports.data = getPerDayData;
