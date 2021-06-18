const connectionFunctions = require("./functions/mysql/connection");
const connection = require("./functions/mysql/config").connection;

const vaccinations = require("./resources/vaccinations.json");
const antiqua = require("./resources/Antiqua.json");
const solarBuddhica = require("./resources/SolarBuddhica.json");
const zerpfy = require("./resources/Zerpfy.json");

connectionFunctions.startConnection();

const createTables = `
    CREATE TABLE vaccinations(
        vaccination_id VARCHAR(50) NOT NULL PRIMARY KEY,
        sourceBottle VARCHAR(50) NOT NULL,
        gender VARCHAR(10),
        vaccinationDate VARCHAR(30)
    );
    CREATE TABLE orders(
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        orderNumber INT NOT NULL,
        responsiblePerson VARCHAR(50),
        healthCareDistrict VARCHAR(5),
        vaccine VARCHAR(15),
        injections INT,
        arrived VARCHAR(30)
    );
    `;

connection.query(createTables, function (err, results, fields) {
  if (err) {
    console.log(err.message);
  }

  console.log("results", results);
  console.log("fields", fields);
});

let populateVaccinations = ``;

vaccinations.forEach((vacc) => {
  let insertStatement = `
    INSERT INTO vaccinations
    VALUES ('${vacc.vaccination_id}', '${vacc.sourceBottle}', '${vacc.gender}', '${vacc.vaccinationDate}');
    `;
  populateVaccinations = populateVaccinations + insertStatement;
});

connection.query(populateVaccinations, function (err, results, fields) {
  if (err) {
    console.log(err.message);
  }
  console.log("Populate vaccinations OK");
});

let populateOrders = ``;

const ordersData = [antiqua, solarBuddhica, zerpfy];
ordersData.forEach((producer) => {
  producer.forEach((order) => {
    let insertStatement = `
          INSERT INTO orders
          VALUES ('${order.id}', '${order.orderNumber}', '${order.responsiblePerson}', '${order.healthCareDistrict}', '${order.vaccine}', '${order.injections}', '${order.arrived}');
          `;
    populateOrders = populateOrders + insertStatement;
  });
});

connection.query(populateOrders, function (err, results, fields) {
  if (err) {
    console.log(err.message);
  }
  console.log("Populating orders OK");
});

connectionFunctions.endConnection();
