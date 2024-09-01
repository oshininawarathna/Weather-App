
import React from "react";
import { motion } from "framer-motion";
import { getCurrentDate } from "@/app/utils/CurrentDate";
import { FaLocationDot } from "react-icons/fa6";

interface InputProps {
   data:any
  }
const CurrentData:React.FC<InputProps>  = ({ data }) => {
  const icon = data.current.condition.icon;   
  const currentDate = getCurrentDate();

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-4 w-full md:w-1/2 p-3 m-3 rounded-lg shadow-lg ">
      <div className="flex items-center gap-4">
      <div>
          <h1 className="text-3xl text-blue-900 font-bold">Today</h1>
          <p className="text-blue-700">{currentDate}</p>
        </div>
        <motion.div
          className="flex items-center justify-center w-16 h-16 p-1"
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }} 
        >
          {icon && (
            <img className="w-16 h-16 object-cover" src={icon} alt={data.current.condition.text} />
          )}
        </motion.div>
        
      </div>
      <div>
        <p className="text-5xl text-blue-900 font-semibold">
          {data.current.temp_c.toFixed()}
          <span>°C</span>
        </p>
        <span className="text-blue-700">{data.current.condition.text}</span>
      </div>
      <div>
        <motion.div
          className="flex items-center text-blue-900 bg-white/90 px-4 py-2 rounded-xl shadow-md"
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <FaLocationDot className="text-blue-600 mr-2" />
          <span>
            {data.location.name}, {data.location.region}
          </span>
          <span>
           , {data.location.country}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default CurrentData;
