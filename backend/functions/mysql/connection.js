const connection = require("./config").connection;

exports.startConnection = async () => {
  connection.connect(function (err) {
    if (err) {
      console.error("error: " + err.message);
      return {
        statusCode: 500,
        body: "Something went wrong when connecting to MySQL server. Check backend console for error message.",
      };
    } else {
      console.log("Connected to the MySQL server.");
      return {
        statusCode: 200,
        body: "Connected to MySQL server.",
      };
    }
  });
};

exports.endConnection = async () => {
  connection.end(function (err) {
    if (err) {
      console.error("error: " + err.message);
      return {
        statusCode: 500,
        body: "Something went wrong when ending the connection to MySQL server. Check backend console for error message.",
      };
    } else {
      console.log("Closing the database connection.");
      return {
        statusCode: 200,
        body: "Closing the connection to MySQL server.",
      };
    }
  });
};
