import { useEffect, useState } from "react";
import axios from "./axios";
import AllTime from "./components/AllTime";
import PerDay from "./components/PerDay";

import "./App.css";

const App = () => {
  const [allTimeData, setAllTimeData] = useState();
  const [dosesInBottle, setDosesInBottle] = useState({});
  const [showAllTime, setShowAllTime] = useState(true);

  const fetchAllData = () => {
    console.log("Fetching all-time data...");
    axios
      .get("/all-time-data")
      .then((resp) => {
        console.log("all-time data", resp.data.allTimeData);
        setAllTimeData(resp.data.allTimeData);
        setDosesInBottle({
          antiqua: resp.data.allTimeData.orders.antiqua.injectionsInBottle,
          solarBuddhica:
            resp.data.allTimeData.orders.solarBuddhica.injectionsInBottle,
          zerpfy: resp.data.allTimeData.orders.zerpfy.injectionsInBottle,
        });
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
      <h1>Vaccination Statistics</h1>
      <p>Data available for: 2nd Jan 2021 - 12th Apr 2021</p>
      <p>
        Created by{" "}
        <a href="https://github.com/bea94k" target="_blank" rel="noreferrer">
          bea94k
        </a>
      </p>

      <div className="btn-wrap">
        <button
          onClick={() => setShowAllTime(true)}
          className={
            showAllTime === true ? "btn-active btn btn-left" : "btn btn-left"
          }
        >
          All Time
        </button>
        <button
          onClick={() => setShowAllTime(false)}
          className={showAllTime === false ? "btn-active btn" : "btn"}
        >
          Per Day
        </button>
      </div>

      <div className="content-wrap">
        {showAllTime ? (
          !allTimeData ? (
            <h3>Loading...</h3>
          ) : (
            <AllTime allTimeData={allTimeData} doses={dosesInBottle} />
          )
        ) : (
          <PerDay doses={dosesInBottle} />
        )}
      </div>
    </div>
  );
};

export default App;
