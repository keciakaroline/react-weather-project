import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            {/* <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            /> */}
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
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
