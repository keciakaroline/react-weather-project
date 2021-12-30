import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>City</h1>
      <h4>Last updated:</h4>
      <div className="row">
        <div className="col col-sm-7">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">10 </span>
              <span className="units">°C | °F</span>
            </div>
          </div>
        </div>
        <div className="col col-sm-5">
          <ul>
            <li>Description</li>
            <li>Precipitation:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
