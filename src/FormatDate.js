import React from "react";

export default function FormatDate(props) {
  console.log(props.date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.date.getDate()];
  const hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  const minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div>
      {day}, {hour}:{minute}
    </div>
  );
}
