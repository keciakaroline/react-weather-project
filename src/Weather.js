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
      <div className="row">
        <h2>City</h2>
        <h3>Last updated:</h3>
        <div className="col col-sm-6">
          <img src="" alt="" />
          <span>Temperature °C | °F</span>
        </div>
        <div className="col col-sm-6">
          <ul>
            <li>Description</li>
            <li>Precipitation</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
