import React from "react";
import { iconUrl } from "./app/Api";

function Forecast({ title, items }) {
  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>

      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <p className="font-light text-sm"> {item.title} </p>
              <img src={iconUrl(item.icon)} className="w-12 my-1" alt="" />
              <p className="font-medium">{item.temp.toFixed()}°</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Forecast;
