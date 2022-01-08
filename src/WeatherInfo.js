import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h3>
        <FormatDate date={props.data.date} />
      </h3>
      <div className="row">
        <div className="col col-sm-7">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt="{props.data.description}"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {" "}
                {Math.round(props.data.temperature)}{" "}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col col-sm-5">
          <ul>
            <li className="text-capitalize">
              Description: {props.data.description}
            </li>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
