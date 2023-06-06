import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const ProfileView = () => {
  const getDefaultChartData = () => {
    const today = new Date().toLocaleDateString();
    const shiftedDaysOfWeek = getShiftedDaysOfWeek(today);

    return {
      labels: shiftedDaysOfWeek,
      datasets: [
        {
          label: "People with Profile",
          data: Array(7).fill(0),
          backgroundColor: "transparent",
          borderColor: "#38bdf8",
          borderWidth: 2,
          pointRadius: 0,
          fill: true,
          tension: 0.4,
        },
        {
          label: "Newcomers",
          data: Array(7).fill(0),
          backgroundColor: "transparent",
          borderColor: "#fb923c",
          borderWidth: 2,
          pointRadius: 0,
          fill: true,
          tension: 0.4,
        },
      ],
    };
  };

  const getShiftedDaysOfWeek = (today) => {
    const daysOfWeek = [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ];
    const todayIndex = new Date(today).getDay();
    return [
      ...daysOfWeek.slice(todayIndex),
      ...daysOfWeek.slice(0, todayIndex),
    ];
  };

  const [chartData, setChartData] = useState(() => {
    const storedData = localStorage.getItem("chartData");
    return storedData ? JSON.parse(storedData) : getDefaultChartData();
  });

  useEffect(() => {
    const generateRandomData = () => {
      const today = new Date().toLocaleDateString();
      const storedDate = localStorage.getItem("chartDataDate");

      if (storedDate === today) {
        return; // Data already generated for today, no need to regenerate
      }

      const shiftedDaysOfWeek = getShiftedDaysOfWeek(today);
      const peopleWithData = [];
      const newcomersData = [];

      // Generate random data for each day
      for (let i = 0; i < 7; i++) {
        const peopleWithProfile = Math.floor(Math.random() * 501) + 500; // Generate random number between 50 and 100
        const newcomers = Math.floor(Math.random() * 180) + 250; // Generate random number between 25 and 50

        peopleWithData.push(peopleWithProfile);
        newcomersData.push(newcomers);
      }

      // Set the generated data in the chartData state and local storage
      const newChartData = {
        labels: shiftedDaysOfWeek,
        datasets: [
          {
            ...chartData.datasets[0],
            data: peopleWithData,
          },
          {
            ...chartData.datasets[1],
            data: newcomersData,
          },
        ],
      };

      setChartData(newChartData);
      localStorage.setItem("chartData", JSON.stringify(newChartData));
      localStorage.setItem("chartDataDate", today);
    };

    generateRandomData();
    // eslint-disable-next-line
  }, []);

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full max-h-96 bg-white shadow-md rounded-xl relative p-4 md:p-6 lg:p-10">
      <Line data={chartData} options={options}></Line>
    </div>
  );
};

export default ProfileView;
