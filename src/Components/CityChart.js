import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { linearScale } from 'chart.js/auto';
import CityTable from './CityTable';
const CityChart = ({ cities, temperature }) => {
  const parsedTemperature = parseFloat(temperature); // Ensure numerical temperature value

  const chartData = {
    labels: cities.map((city) => city.name),
    datasets: [
      {
        label: 'Temperature',
        data: cities.map((city) => parsedTemperature),
        backgroundColor: cities.map((city) =>
          parsedTemperature > 20 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)'
        ),
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const chartOptions = {
    legend: { display: false },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        suggestedMin: Math.max(0, parsedTemperature - 5),
        suggestedMax: parsedTemperature + 5,
      },
    },
  };

// Doughnut chart data
const doughnutChartData = {
  labels: cities.map((city) => city.name),
  datasets: [
    {
      data: cities.map((city) => parsedTemperature),
      backgroundColor: cities.map((city) =>
        parsedTemperature > 20 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)'
      ),
      cityInfo: cities.map((city) => city.info || 'No information available'), // Additional city information
    },
  ],
};


  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <Doughnut data={doughnutChartData} />
        </div>
        <div style={{ flex: 1 }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
      <CityTable cities={cities} />
    </div>
  );
};

export default CityChart;