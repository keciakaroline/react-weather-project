import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun</div>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="WeatherForecast-icon"
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">20°C</span>{" "}
            <span className="WeatherForecast-temperature-min text-muted">
              10°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
