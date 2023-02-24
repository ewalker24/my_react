import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast() {
  let [load, onLoad] = useState(false);
  function forecastSearch() {
    const apiKey = "047ff5f243b184d84367a2f1o1cta7f9";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon={lon}&lat={lat}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateForecast);
  }
  function updateForecast(response) {}
  if (load) {
    return (
      <div className="Forecast">
        <div className="m-5"></div>
        <div className="card-text">
          <div className="container">
            <div className="row">
              <div className="col">
                Wednesday
                <WeatherIcon code="clear-sky-day" size="30" />
                <div className="Weather-temperatures">
                  <span className="weather-temp-max"> 78°</span>{" "}
                  <span className="weather-temp-min"> 59°</span>{" "}
                </div>
              </div>
              <div className="col">
                Thursday
                <WeatherIcon code="clear-sky-day" size="30px" />
                <div className="Weather-temperatures">
                  <span className="weather-temp-max"> 78°</span>{" "}
                  <span className="weather-temp-min"> 59°</span>{" "}
                </div>
              </div>
              <div className="col">
                Friday
                <div>
                  <WeatherIcon code="clear-sky-day" size="30px" />
                </div>
                <div className="Weather-temperatures">
                  <span className="weather-temp-max"> 78°</span>{" "}
                  <span className="weather-temp-min"> 59°</span>{" "}
                </div>
              </div>
              <div className="col">
                Saturday
                <WeatherIcon code="clear-sky-day" size="30px" />
                <div className="Weather-temperatures">
                  <span className="weather-temp-max"> 78°</span>{" "}
                  <span className="weather-temp-min"> 59°</span>{" "}
                </div>
              </div>
              <div className="col">
                Sunday <WeatherIcon code="clear-sky-day" size="30px" />
                <div className="Weather-temperatures">
                  <span className="weather-temp-max"> 78°</span>{" "}
                  <span className="weather-temp-min"> 59°</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
  }
}
