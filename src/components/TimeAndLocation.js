import React from "react";

export default function TimeAndLocation() {
  //console.log(date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //let day = days[props.date.getDay()];
  //let hour = props.date.getHours();
  // if (hour < 10) {
  //   hour = `0${hour}`;
  // }
  // let minute = props.date.getMinutes();
  // if (minute < 10) {
  //   minute = `0${minute}`;
  // }

  return (
    <div className="TimeAndLocation">
      {/* {day}, {hour}:{minute} */}
      <h1>day, hour:minute</h1>
      <h1>LOCATION</h1>
    </div>
  );
}
