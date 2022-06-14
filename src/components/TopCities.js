import React from "react";
import "./styles/TopCities.css";

export default function TopCities() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Toyko",
    },
    {
      id: 3,
      title: "Natal",
    },
    {
      id: 4,
      title: "Bochum",
    },
    {
      id: 5,
      title: "Lisbon",
    },
  ];
  return (
    <div className="TopCities">
      {cities.map((city, index) => {
        return (
          <button key={index} className="btn btn-primary">
            {city.title}
          </button>
        );
      })}
    </div>
  );
}
