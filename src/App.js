import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <h1>Weather App-Project</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://portfolio-keciasantos.netlify.app/">Kécia Santos</a>{" "}
          and is{" "}
          <a
            href="https://github.com/keciasantos/react-weather-project"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
