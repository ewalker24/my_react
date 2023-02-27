import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="DayName mb-2"> {day()}</div>

      <WeatherIcon code={props.data.condition.icon} size={30} />
      <div className="Weather-temperatures">
        <span className="weather-temp-max">{maxTemp()}</span>{" "}
        <span className="weather-temp-min"> {minTemp()}</span>{" "}
      </div>
    </div>
  );
}
