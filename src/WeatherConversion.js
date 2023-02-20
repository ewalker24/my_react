import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span className="temperature">
        {props.fahrenheit}
        <span className="units">
          ℉ |{" "}
          <a href="/" onClick={showCelsius}>
            ℃
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="temperature">
        {Math.round(celsius)}
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            {" "}
            ℉{" "}
          </a>
          | ℃
        </span>
      </span>
    );
  }
}
