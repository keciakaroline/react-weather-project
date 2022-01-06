import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  // const [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col col-sm-8">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col col-sm-2">
              <button type="submit" className="btn btn-light w-100">
                {" "}
                Search{" "}
              </button>
            </div>
            <div className="col col-sm-2">
              <button type="submit" className="btn btn-light w-100">
                GPS{" "}
              </button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <h3>
          <FormatDate date={weatherData.date} />
        </h3>
        <div className="row">
          <div className="col col-sm-7">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt="{weatherData.description}"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {" "}
                  {Math.round(weatherData.temperature)}{" "}
                </span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-5">
            <ul>
              <li className="text-capitalize">
                Description: {weatherData.description}
              </li>
              <li>Feels like: {Math.round(weatherData.feels)}°C</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ce9e9a1384d8ee7b166d7542086e2fdc";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
