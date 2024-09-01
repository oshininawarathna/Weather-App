"use client";
import React, { useState } from 'react';
import Input from "./component/Input/Input";
import CurrentData from './component/CurrentData/CurrentData';
import WeekForecast from "./component/WeekForecast/WeekForecast"
import WeatherDetails from './component/WeatherDetails/WeatherDetails';

export default function Home() {
  const [data, setData] = useState(null); 
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
  
    const url = `http://api.weatherapi.com/v1/forecast.json?key=225e229e747b4fa4906153344242908&q=${location}&days=7&aqi=yes&alerts=yes`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setData(data);
      setLocation("");
      setError("");
    } catch (error) {
      setError('An error occurred');
      setData(null);
    }
  };
  

  let content;
  if (!data && !error) {
    content = (
      <div className='text-blue-900 text-center h-screen mt-[5rem]'>
        <h2 className='text-3xl font-bold mb-4' >Welcome to Weather App...</h2>
      <p className='text-xl'>Enter a City name to get the Weather Forecast</p>
      </div>
    );
  } else if (error) {
    content = (
      <div className='text-blue-900 text-center h-screen mt-[5rem]'> 
        <p className='text-3xl font-bold mb-4'>City Not Found</p>
        <p className='text-xl'>Enter a Valid City</p>
      </div>
    );
  } else if (data && data.current) {
    content = (
      <><div className='flex md:flex-row flex-col p-12 items-center justify-between'>
        <CurrentData data={data} />
        <WeekForecast data={data} />
      </div><div><WeatherDetails data={data}/></div></>
    );
  } else {
    content = <div>No data available</div>;
  }

  return (
  
   
    <div className="relative bg-custom-bg bg-cover bg-center bg-no-repeat h-fit">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500 via-transparent to-blue-300 opacity-50"></div>
      <div className="relative bg-white/50 w-full flex flex-col h-fit"> 
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-blue-900 py-2 px-4 rounded-xl font-bold italic">Weather App</h1>
        </div>
        {content}
      </div>
    </div>
  );
}
