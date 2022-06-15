import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";
import { iconUrl } from "./app/Api";

function TemperatureAndDetails({ weather }) {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weather.details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrl(weather.icon)} alt="" className="w-20" />
        <p className="text-5xl">{weather.temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">
              {weather.feels_like.toFixed()}°
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">
              {weather.humidity.toFixed()}%
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {weather.speed.toFixed()} km/h
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilArrowUp size={20} />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">
            {weather.temp_max.toFixed()}°
          </span>
        </p>
        <UilArrowDown size={20} />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">
            {weather.temp_min.toFixed()}°
          </span>
        </p>
      </div>
    </>
  );
}

export default TemperatureAndDetails;
