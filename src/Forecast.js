import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function updateForecast(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="card-text">
          <div className="container">
            <div className="row">
              {forecastData.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <ForecastDay data={dailyForecast} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "047ff5f243b184d84367a2f1o1cta7f9";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateForecast);
  }
}
