
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface InputProps {
 data:any
}
const WeatherDetails: React.FC<InputProps> = ({ data }) => {
  
  const { current, forecast } = data;
  const forecastDays = forecast.forecastday; 

 console.log('data',data);
  const tempPrecipChartData = {
    labels: forecastDays.map((day: { date: any; }) => day.date), 
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecastDays.map((day: { day: { avgtemp_c: any; }; }) => day.day.avgtemp_c), 
        borderColor: 'rgba(54, 162, 235, 0.8)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        tension: 0.1,
      },
      {
        label: 'Precipitation (mm)',
        data: forecastDays.map((day: { day: { totalprecip_mm: any; }; }) => day.day.totalprecip_mm), 
        borderColor: 'rgba(255, 99, 132, 0.8)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.1,
      },
    ],
  };

  const tempPrecipChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: { dataset: { label: any; }; raw: any; }) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  
  const currentWeatherChartData = {
    labels: ['Temperature(°F)', 'Humidity(%)', 'Wind Speed(kph)', 'Precipitation(mm)'],
    datasets: [
      {
        label: 'Current Weather',
        data: [
          current.temp_f, 
          current.humidity, 
          current.wind_kph, 
          current.precip_mm 
        ],
        borderColor: 'rgba(75, 192, 192, 0.8)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.1,
      },
    ],
  };

  const currentWeatherChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: { dataset: { label: any; }; raw: any; }) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 md:p-2 bg-white/70 shadow-lg">
      <h1 className="mb-2 ml-2 text-2xl font-bold text-blue-900">Weather Charts</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 m-5">
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold text-blue-700">7-Day Temperature and Precipitation</h2>
          <Line data={tempPrecipChartData} options={tempPrecipChartOptions} />
        </div>
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-bold text-blue-700">Current Weather </h2>
          <Line data={currentWeatherChartData} options={currentWeatherChartOptions} />
        </div>
      </div>
      
    </div>
  );
};

export default WeatherDetails;
