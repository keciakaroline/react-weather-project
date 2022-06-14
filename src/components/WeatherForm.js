import React from "react";

export default function WeatherForm({ handleCityChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-8">
          <input
            type="search"
            placeholder="Search a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            rel="noopener noreferrer"
          />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-light w-100">
            {" "}
            Search{" "}
          </button>
        </div>
        <div className="col col-sm-2">
          <button
            // onClick={handleClickGps}
            type="submit"
            className="btn btn-light w-100"
          >
            GPS{" "}
          </button>
        </div>
      </div>
    </form>
  );
}
