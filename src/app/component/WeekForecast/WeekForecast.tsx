
import React from "react";
import { motion } from "framer-motion";
interface InputProps {
  data:any
}
const WeatherForecast: React.FC<InputProps>  = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 w-full">
      {data.forecast.forecastday.map((day: { date: string | number | Date; day: { condition: { icon: string | undefined; }; maxtemp_f: number; mintemp_f: number; }; }, index: React.Key | null | undefined) => (
        <motion.div
          key={index}
          className="bg-blue-100 p-4 m-2 text-center rounded-lg flex flex-col items-center shadow-md"
          whileHover={{ scale: 1.05 }} 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }} 
        >
          <p className="text-lg font-semibold text-blue-900">
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <img
            src={day.day.condition.icon}
            alt=""
            className="w-16 h-16 object-contain mb-2"
          />
          <div>
            <p className="text-xl font-bold text-blue-700">
              H{day.day.maxtemp_f.toFixed()}°
            </p>
            <p className="text-xl text-blue-500">
              L{day.day.mintemp_f.toFixed()}°
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WeatherForecast;
