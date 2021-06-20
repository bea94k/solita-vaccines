import { useEffect, useState } from "react";
import axios from "./axios";
import AllTime from "./components/AllTime";

import "./App.css";

const App = () => {
  const [allTimeData, setAllTimeData] = useState();

  const fetchAllData = () => {
    console.log("Fetching all-time data...");
    axios
      .get("/all-time-data")
      .then((resp) => {
        console.log("all-time data", resp.data.allTimeData);
        setAllTimeData(resp.data.allTimeData);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="App">
      <h1>Vaccination stats</h1>
      {!allTimeData ? <p>Loading...</p> : <AllTime allTimeData={allTimeData} />}
    </div>
  );
};

export default App;
