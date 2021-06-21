import { useEffect, useState } from "react";
import axios from "./axios";
import AllTime from "./components/AllTime";
import PerDay from "./components/PerDay";

import "./App.css";

const App = () => {
  const [allTimeData, setAllTimeData] = useState();
  const [showAllTime, setShowAllTime] = useState(true);

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
      <div className="btn-wrap">
        <button
          onClick={() => setShowAllTime(true)}
          className={showAllTime === true ? "active btn" : "btn"}
        >
          All Time
        </button>
        <button
          onClick={() => setShowAllTime(false)}
          className={showAllTime === false ? "active btn" : "btn"}
        >
          Per Day
        </button>
      </div>
      {showAllTime ? (
        !allTimeData ? (
          <p>Loading...</p>
        ) : (
          <AllTime allTimeData={allTimeData} />
        )
      ) : (
        <PerDay />
      )}
    </div>
  );
};

export default App;
