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

const getPerDayData = async (date) => {
  // GENDERS
  const femaleVaccinations = await getSqlDataLength(sqlVaccinationsGender, [
    "female",
  ]);

  return {
    chosenDate: date,
    allTimeFemaleVacc: femaleVaccinations,
  };
};

exports.data = getPerDayData;
