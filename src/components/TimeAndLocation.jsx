import React from "react";
import { formatToLocalTime } from "./app/Api";

export default function TimeAndLocation({ weather }) {
  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {" "}
          {formatToLocalTime(weather.dt, weather.timezone)}{" "}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {weather.name}, {weather.country}
        </p>
      </div>
    </>
  );
}
