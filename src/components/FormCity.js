import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

export default function FormCity() {
  return (
    <div className="FormCity">
      <div className="container">
        <span className="">
          <input
            type="text"
            placeholder="Search for a city..."
            autoFocus="on"
          />
        </span>
        <UilLocationPoint size={25} className="" />
        <UilSearch size={25} className="" />
      </div>
      <div className="WeatherTemperature">
        <a id="metric">°C</a>
        <p> | </p>
        <a id="imperial">°F</a>
      </div>
    </div>
  );
}
