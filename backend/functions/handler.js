const allTimeData = require("./allTimeData");
const perDayData = require("./perDayData");

exports.testEndpoint = async () => {
  console.log("Beep boop, hello from serverless function test endpoint!");
  return {
    statusCode: 200,
    body: "Test went alright",
  };
};

exports.getAllTimeData = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      allTimeData: await allTimeData.data(),
    }),
  };
};

exports.getPerDayData = async (event) => {
  const date = event.pathParameters.date;
  const dateRegex = /^(2021-0[1-4]-[0-9]{2})/;
  const dateMatches = dateRegex.test(date);

  // TODO: better error handling, checking for correct date format
  // now it allows a date like 2021-03-99

  if (dateMatches) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        perDayData: await perDayData.data(date),
      }),
    };
  } else {
    return {
      statusCode: 500,
      body: "Date has to be in format YYYY-MM-DD",
    };
  }
};
