import React from "react";

export default function TopCities({ setLocation }) {
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
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => {
        return (
          <button
            onClick={() => setLocation({ q: city.title })}
            key={index}
            className="text-white text-lg font-medium"
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}
