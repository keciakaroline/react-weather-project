import React from "react";
import Weather from "./components/Weather";
import "./components/styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://keciakaroline.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kécia Karoline
          </a>{" "}
          and here is my{" "}
          <a
            href="https://github.com/keciasantos/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repository
          </a>
        </footer>
      </div>
    </div>
  );
}
