import React from "react";
import { Line } from "react-chartjs-2";

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
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        beginAtZero: true,
        ticks: { stepSize: 20 },
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

  return <Line data={data} options={options} />;
};

export default ExpiringSoon;
