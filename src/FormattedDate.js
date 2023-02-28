import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let amPm = hours >= 12 ? "PM" : "AM";

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours > 12) {
    hours = ((hours + 11) % 12) + 1;
  }
  return (
    <div>
      {" "}
      {day} {hours}:{minutes} {amPm}
    </div>
  );
}
