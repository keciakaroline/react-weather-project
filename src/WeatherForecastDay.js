import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
        className="WeatherForecast-icon"
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°C
        </span>{" "}
        <span className="WeatherForecast-temperature-min text-muted">
          {minTemperature()}°C
        </span>
      </div>
    </div>
  );
}
