const allTimeData = require("./allTimeData");

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
      ordersTotal: 5000,
      vaccinationsTotal: 7000,
      allTimeData: allTimeData.data,
    }),
  };
};
