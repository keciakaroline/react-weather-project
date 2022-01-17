import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)} </span>
        <span className="units">
          <strong className="h4">°C</strong> |
          <a href="/" onClick={showFahrenheit} className="text-muted">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit())} </span>
        <span className="units">
          <a href="/" onClick={showCelsius} className="text-muted">
            °C{" "}
          </a>
          |<strong className="h5">°F</strong>
        </span>
      </span>
    );
  }
}
