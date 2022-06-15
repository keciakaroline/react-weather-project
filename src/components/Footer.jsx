import React from "react";

export default function Footer() {
  return (
    <footer className="text-center p-4 mt-10">
      This project was coded by{" "}
      <a
        href="https://keciakaroline.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-100"
      >
        Kécia Karoline
      </a>{" "}
      and here is my{" "}
      <a
        href="https://github.com/keciasantos/react-weather-project"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-100"
      >
        Github repository
      </a>
    </footer>
  );
}
