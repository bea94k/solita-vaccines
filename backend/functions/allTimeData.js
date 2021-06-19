const antiqua = require("../resources/Antiqua.json");
const solarBuddhica = require("../resources/SolarBuddhica.json");
const zerpfy = require("../resources/Zerpfy.json");

const ordersTotal = 5000;
const vaccinationsTotal = 7000;
const antiquaAmount = antiqua.length;
const solarBuddhicaAmount = solarBuddhica.length;
const zerpfyAmount = zerpfy.length;

const connection = require("../functions/mysql/config").connection;

// get number of results for a provided statement
const getSqlData = (sqlStatement) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlStatement, (error, results, fields) => {
      if (error) {
        console.error(error.message);
        return reject(error.message);
      }

      console.log(results.length);
      return resolve(results.length);
    });
  });
};

// TODO: simplify the statements with =? and putting the value there when calling getSqlData()

const sqlVaccinationsFemale = `SELECT vaccination_id FROM vaccinations
          WHERE gender = 'female'`;
const sqlVaccinationsMale = `SELECT vaccination_id FROM vaccinations
          WHERE gender = 'male'`;
const sqlVaccinationsNonbinary = `SELECT vaccination_id FROM vaccinations
          WHERE gender = 'nonbinary'`;

const sqlOrdersAntiquaHYKS = `SELECT id FROM orders
          WHERE vaccine = 'Antiqua'
          AND healthCareDistrict = 'HYKS'`;
const sqlOrdersAntiquaKYS = `SELECT id FROM orders
          WHERE vaccine = 'Antiqua'
          AND healthCareDistrict = 'KYS'`;
const sqlOrdersAntiquaOYS = `SELECT id FROM orders
          WHERE vaccine = 'Antiqua'
          AND healthCareDistrict = 'OYS'`;
const sqlOrdersAntiquaTAYS = `SELECT id FROM orders
          WHERE vaccine = 'Antiqua'
          AND healthCareDistrict = 'TAYS'`;
const sqlOrdersAntiquaTYKS = `SELECT id FROM orders
          WHERE vaccine = 'Antiqua'
          AND healthCareDistrict = 'TYKS'`;

const sqlOrdersSolarBuddhicaHYKS = `SELECT id FROM orders
          WHERE vaccine = 'SolarBuddhica'
          AND healthCareDistrict = 'HYKS'`;
const sqlOrdersSolarBuddhicaKYS = `SELECT id FROM orders
          WHERE vaccine = 'SolarBuddhica'
          AND healthCareDistrict = 'KYS'`;
const sqlOrdersSolarBuddhicaOYS = `SELECT id FROM orders
          WHERE vaccine = 'SolarBuddhica'
          AND healthCareDistrict = 'OYS'`;
const sqlOrdersSolarBuddhicaTAYS = `SELECT id FROM orders
          WHERE vaccine = 'SolarBuddhica'
          AND healthCareDistrict = 'TAYS'`;
const sqlOrdersSolarBuddhicaTYKS = `SELECT id FROM orders
          WHERE vaccine = 'SolarBuddhica'
          AND healthCareDistrict = 'TYKS'`;

const sqlOrdersZerpfyHYKS = `SELECT id FROM orders
          WHERE vaccine = 'Zerpfy'
          AND healthCareDistrict = 'HYKS'`;
const sqlOrdersZerpfyKYS = `SELECT id FROM orders
          WHERE vaccine = 'Zerpfy'
          AND healthCareDistrict = 'KYS'`;
const sqlOrdersZerpfyOYS = `SELECT id FROM orders
          WHERE vaccine = 'Zerpfy'
          AND healthCareDistrict = 'OYS'`;
const sqlOrdersZerpfyTAYS = `SELECT id FROM orders
          WHERE vaccine = 'Zerpfy'
          AND healthCareDistrict = 'TAYS'`;
const sqlOrdersZerpfyTYKS = `SELECT id FROM orders
          WHERE vaccine = 'Zerpfy'
          AND healthCareDistrict = 'TYKS'`;

const getAllData = async () => {
  const femaleVaccinations = await getSqlData(sqlVaccinationsFemale);
  const maleVaccinations = await getSqlData(sqlVaccinationsMale);
  const nonbinaryVaccinations = await getSqlData(sqlVaccinationsNonbinary);

  const ordersAntiquaHYKS = await getSqlData(sqlOrdersAntiquaHYKS);
  const ordersAntiquaKYS = await getSqlData(sqlOrdersAntiquaKYS);
  const ordersAntiquaOYS = await getSqlData(sqlOrdersAntiquaOYS);
  const ordersAntiquaTAYS = await getSqlData(sqlOrdersAntiquaTAYS);
  const ordersAntiquaTYKS = await getSqlData(sqlOrdersAntiquaTYKS);

  const ordersSolarBuddhicaHYKS = await getSqlData(sqlOrdersSolarBuddhicaHYKS);
  const ordersSolarBuddhicaKYS = await getSqlData(sqlOrdersSolarBuddhicaKYS);
  const ordersSolarBuddhicaOYS = await getSqlData(sqlOrdersSolarBuddhicaOYS);
  const ordersSolarBuddhicaTAYS = await getSqlData(sqlOrdersSolarBuddhicaTAYS);
  const ordersSolarBuddhicaTYKS = await getSqlData(sqlOrdersSolarBuddhicaTYKS);

  const ordersZerpfyHYKS = await getSqlData(sqlOrdersZerpfyHYKS);
  const ordersZerpfyKYS = await getSqlData(sqlOrdersZerpfyKYS);
  const ordersZerpfyOYS = await getSqlData(sqlOrdersZerpfyOYS);
  const ordersZerpfyTAYS = await getSqlData(sqlOrdersZerpfyTAYS);
  const ordersZerpfyTYKS = await getSqlData(sqlOrdersZerpfyTYKS);

  return {
    orders: {
      total: ordersTotal,
      antiqua: {
        amount: antiquaAmount,
        HYKS: ordersAntiquaHYKS,
        KYS: ordersAntiquaKYS,
        OYS: ordersAntiquaOYS,
        TAYS: ordersAntiquaTAYS,
        TYKS: ordersAntiquaTYKS,
      },
      solarBuddhica: {
        amount: solarBuddhicaAmount,
        HYKS: ordersSolarBuddhicaHYKS,
        KYS: ordersSolarBuddhicaKYS,
        OYS: ordersSolarBuddhicaOYS,
        TAYS: ordersSolarBuddhicaTAYS,
        TYKS: ordersSolarBuddhicaTYKS,
      },
      zerpfy: {
        amount: zerpfyAmount,
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
        nonbinaryVaccinations: nonbinaryVaccinations,
      },
    },
  };
};

exports.data = getAllData;
