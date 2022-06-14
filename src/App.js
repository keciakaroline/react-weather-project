import React from "react";
import Weather from "./components/Weather";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Bochum" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://keciakaroline.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kécia Karoline
          </a>{" "}
          and here is the{" "}
          <a
            href="https://github.com/keciasantos/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
        </footer>
      </div>
    </div>
  );
}
