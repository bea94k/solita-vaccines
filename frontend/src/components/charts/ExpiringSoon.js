import React from "react";
import { Line } from "react-chartjs-2";
import "./Charts.css";

const style = getComputedStyle(document.body);
const lineColor = style.getPropertyValue("--dark-seagreen");

const ExpiringSoon = ({ expiring }) => {
  const data = {
    labels: [
      "in 1 day",
      "in 2 days",
      "in 3 days",
      "in 4 days",
      "in 5 days",
      "in 6 days",
      "in 7 days",
      "in 8 days",
      "in 9 days",
      "in 10 days",
    ],
    datasets: [
      {
        label: "",
        data: [
          expiring.one,
          expiring.two,
          expiring.three,
          expiring.four,
          expiring.five,
          expiring.six,
          expiring.seven,
          expiring.eight,
          expiring.nine,
          expiring.ten,
        ],
        fill: false,
        borderColor: lineColor,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        beginAtZero: true,
        ticks: { stepSize: 15 },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      /* title: {
        display: true,
        text: "Testing the diagram title",
      }, */
    },
  };

  return (
    <>
      <div className="chart-wrap">
        <div className="line-chart-wrap">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default ExpiringSoon;
