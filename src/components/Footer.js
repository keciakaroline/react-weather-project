import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
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
  );
}
