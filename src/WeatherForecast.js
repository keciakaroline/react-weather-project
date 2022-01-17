import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <img
              src={forecast[0].weather[0].icon}
              alt={forecast[0].weather[0].description}
              className="WeatherForecast-icon"
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temp.max}°C
              </span>{" "}
              <span className="WeatherForecast-temperature-min text-muted">
                {forecast[0].temp.min}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ce9e9a1384d8ee7b166d7542086e2fdc";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
