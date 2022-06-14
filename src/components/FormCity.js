import React from "react";
//import "./styles/Form.css";

export default function FormCity() {
  // const min_length = 2;
  // const inputHandler = (event) => {
  //   setInputCity(event.target.value);
  //   setCountry(event.target.value);
  // };

  // const handleClickGps = (event) => {
  //   event.preventDefault();
  //   //searchGeo();
  // };

  // // Add a new city
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   searchCity();
  //   setCity([
  //     ...city,
  //     {
  //       text: inputCity,
  //       id: Math.random() * 1000,
  //     },
  //   ]);
  //   setInputCity("");
  // };

  return (
    <form>
      {/* <div className="row">
        <div className="col-sm-8">
          <input
            type="search"
            placeholder="Search a city..."
            className="form-control"
            autoFocus="on"
            onChange={inputHandler}
            value={inputCity}
          />
        </div>
        <div className="col-sm-2">
          <button
            onClick={submitHandler}
            type="submit"
            className="btn btn-light w-100"
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <div className="col col-sm-2">
          <button
            onClick={handleClickGps}
            type="submit"
            className="btn btn-light w-100"
          >
            GPS{" "}
          </button>
        </div>
      </div> */}
    </form>
  );
}
