import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ce9e9a1384d8ee7b166d7542086e2fdc";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}$units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
