const antiqua = require("../resources/Antiqua.json");
const solarBuddhica = require("../resources/SolarBuddhica.json");
const zerpfy = require("../resources/Zerpfy.json");
const vaccinations = require("../resources/vaccinations.json");

const ordersTotal = 5000;
const vaccinationsTotal = 7000;
const antiquaAmount = antiqua.length;
const solarBuddhicaAmount = solarBuddhica.length;
const zerpfyAmount = zerpfy.length;

let femaleVaccinations = 0,
  maleVaccinations = 0,
  nonbinaryVaccinations = 0;

vaccinations.forEach((vacc) => {
  // producer
  if (vacc.gender === "female") {
    femaleVaccinations++;
  } else if (vacc.gender === "male") {
    maleVaccinations++;
  } else {
    nonbinaryVaccinations++;
  }
});

// Antiqua
let aHYKS = 0,
  aKYS = 0,
  aOYS = 0,
  aTAYS = 0,
  aTYKS = 0;

antiqua.forEach((order) => {
  // districts
  switch (order.healthCareDistrict) {
    case "HYKS":
      aHYKS++;
      break;
    case "KYS":
      aKYS++;
      break;
    case "OYS":
      aOYS++;
      break;
    case "TAYS":
      aTAYS++;
      break;
    case "TYKS":
      aTYKS++;
      break;

    default:
      break;
  }
});

// SolarBuddhica
let sbHYKS = 0,
  sbKYS = 0,
  sbOYS = 0,
  sbTAYS = 0,
  sbTYKS = 0;

solarBuddhica.forEach((order) => {
  // districts
  switch (order.healthCareDistrict) {
    case "HYKS":
      sbHYKS++;
      break;
    case "KYS":
      sbKYS++;
      break;
    case "OYS":
      sbOYS++;
      break;
    case "TAYS":
      sbTAYS++;
      break;
    case "TYKS":
      sbTYKS++;
      break;

    default:
      break;
  }
});

// Zerpfy
let zHYKS = 0,
  zKYS = 0,
  zOYS = 0,
  zTAYS = 0,
  zTYKS = 0;

solarBuddhica.forEach((order) => {
  // districts
  switch (order.healthCareDistrict) {
    case "HYKS":
      zHYKS++;
      break;
    case "KYS":
      zKYS++;
      break;
    case "OYS":
      zOYS++;
      break;
    case "TAYS":
      zTAYS++;
      break;
    case "TYKS":
      zTYKS++;
      break;

    default:
      break;
  }
});

exports.data = {
  ordersTotal,
  vaccinationsTotal,
  antiquaAmount,
  solarBuddhicaAmount,
  zerpfyAmount,
  femaleVaccinations,
  maleVaccinations,
  nonbinaryVaccinations,
  aHYKS,
  aKYS,
  aOYS,
  aTAYS,
  aTYKS,
  sbHYKS,
  sbKYS,
  sbOYS,
  sbTAYS,
  sbTYKS,
  aTYKS,
  zHYKS,
  zKYS,
  zOYS,
  zTAYS,
  zTYKS,
};
