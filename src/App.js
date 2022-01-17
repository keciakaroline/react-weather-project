import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Bochum" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolio-keciasantos.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kécia Santos
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/keciasantos/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
