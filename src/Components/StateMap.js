import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StateMap = ({ statesData, onStateClick }) => {
  const treemapData = {
    series: [
      {
        data: statesData.map((state) => ({
          x: state.name,
          y: state.temperature,
        })),
      },
    ],
  };

  const chartOptions = {
    legend: {
      show: false,
    },
    title: {
      text: 'State Temperatures',
    },
    tooltip: {
      enabled: true,
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
    chart: {
    type: 'area',
    events: {
      click(event, chartContext, config) {
        if (config.dataPointIndex != null) {
          const clickedState = statesData[config.dataPointIndex];
          console.log(clickedState);
          onStateClick(clickedState);
        }
      }
    }
  } 
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions}
          series={treemapData.series}
          type="treemap"
          height="350%"
          width="500%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default StateMap;
