import { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";

const App = () => {
  const [allTimeData, setAllTimeData] = useState();

  const fetchAllData = () => {
    console.log("button clicked");
    axios
      .get("/all-time-data")
      .then((resp) => {
        console.log("general data", resp.data.allTimeData);
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
      {!allTimeData ? <p>No data yet.</p> : <p>Data received.</p>}
    </div>
  );
};

export default App;
