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
const getSqlDataLength = (sqlStatement) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlStatement, (error, results, fields) => {
      if (error) {
        console.error(error.message);
        return reject(error.message);
      }

      // console.log(results.length);
      return resolve(results.length);
    });
  });
};

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
  const femaleVaccinations = await getSqlDataLength(sqlVaccinationsFemale);
  const maleVaccinations = await getSqlDataLength(sqlVaccinationsMale);
  const nonbinaryVaccinations = await getSqlDataLength(
    sqlVaccinationsNonbinary
  );

  const ordersAntiquaHYKS = await getSqlDataLength(sqlOrdersAntiquaHYKS);
  const ordersAntiquaKYS = await getSqlDataLength(sqlOrdersAntiquaKYS);
  const ordersAntiquaOYS = await getSqlDataLength(sqlOrdersAntiquaOYS);
  const ordersAntiquaTAYS = await getSqlDataLength(sqlOrdersAntiquaTAYS);
  const ordersAntiquaTYKS = await getSqlDataLength(sqlOrdersAntiquaTYKS);
  const injectionsInBottleAntiqua = await getSqlInjectionsInBottle("Antiqua");

  const ordersSolarBuddhicaHYKS = await getSqlDataLength(
    sqlOrdersSolarBuddhicaHYKS
  );
  const ordersSolarBuddhicaKYS = await getSqlDataLength(
    sqlOrdersSolarBuddhicaKYS
  );
  const ordersSolarBuddhicaOYS = await getSqlDataLength(
    sqlOrdersSolarBuddhicaOYS
  );
  const ordersSolarBuddhicaTAYS = await getSqlDataLength(
    sqlOrdersSolarBuddhicaTAYS
  );
  const ordersSolarBuddhicaTYKS = await getSqlDataLength(
    sqlOrdersSolarBuddhicaTYKS
  );
  const injectionsInBottleSolarBuddhica = await getSqlInjectionsInBottle(
    "SolarBuddhica"
  );

  const ordersZerpfyHYKS = await getSqlDataLength(sqlOrdersZerpfyHYKS);
  const ordersZerpfyKYS = await getSqlDataLength(sqlOrdersZerpfyKYS);
  const ordersZerpfyOYS = await getSqlDataLength(sqlOrdersZerpfyOYS);
  const ordersZerpfyTAYS = await getSqlDataLength(sqlOrdersZerpfyTAYS);
  const ordersZerpfyTYKS = await getSqlDataLength(sqlOrdersZerpfyTYKS);
  const injectionsInBottleZerpfy = await getSqlInjectionsInBottle("Zerpfy");

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
        nonbinaryVaccinations: nonbinaryVaccinations,
      },
    },
  };
};

exports.data = getAllData;
