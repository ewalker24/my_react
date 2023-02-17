import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "047ff5f243b184d84367a2f1o1cta7f9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weatherData.city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    console.log(response.data);

    setWeatherData({
      loaded: true,
      city: response.data.city,
      temperature: response.data.temperature,
      wind: response.data.wind,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }
  function cityInput(response) {
    setWeatherData({ city: response.data.city });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Find your city..."
        className="search-city"
        autoFocus="on"
        onChange={cityInput}
      />
      <input type="submit" value="Search" />
      <input type="button" value="Current Location" />
    </form>
  );

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="m-5">{form}</div>
        <div className="weatherUpdate">
          <h1 className="text-capitalize">{weatherData.city}</h1>
          <span className="clearfix">
            <span className="img">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                width="30px"
                className="float-left mb-3 me-3"
              />
            </span>
            <span className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units"> ℉ | ℃ </span>
            </span>
          </span>
          <div className="text-capitalize">{weatherData.description}</div>
          <div>Local time is 5:21pm pst</div>
          <div>Wind: {Math.round(weatherData.wind)} mph</div>
          <div>Humidity: {weatherData.humidity}%</div>
        </div>
        <div className="m-5">
          <h5 className="card-title">5 day forecast</h5>
        </div>
        <p className="card-text">
          <div className="container">
            <div className="row">
              <div className="col">
                Wednesday
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  width="30px"
                />
                <div> 78℉ / 59℉ </div>
              </div>
              <div className="col">
                Thursday
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  width="30px"
                />
                <div> 77℉ / 57℉ </div>
              </div>
              <div className="col">
                Friday
                <div>
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    width="30px"
                  />
                </div>
                <div>65℉ / 51℉ </div>
              </div>
              <div className="col">
                Saturday
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  width="30px"
                />
                <div>63℉ / 49℉ </div>
              </div>
              <div className="col">
                Sunday{" "}
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  width="30px"
                />
                <div>60℉ / 46℉</div>
              </div>
            </div>
          </div>
          <p className="credits mt-3">
            <span>
              This project was coded by{" "}
              <a href="https://stately-blini-d72870.netlify.app/">
                Emily Walker
              </a>{" "}
              and is{" "}
              <a href="https://github.com/ewalker24/my_react">
                open-sourced on GitHub
              </a>
            </span>{" "}
          </p>
        </p>
      </div>
    );
  } else {
    return <div> {form}</div>;
  }
}

// let currentTime = new Date();
// let hours = currentTime.getHours();
// let minutes = currentTime.getMinutes();
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = days[currentTime.getDay()];
// let time = document.querySelector("#time");
// time.innerHTML = `Local time is ${day} ${hours}:${minutes}`;

// navigator.geolocation.getCurrentPosition(getCurrentLocation);
// function getCurrentLocal(event) {
//   event.preventDefault();
//   getCurrentLocation();
// }

// function getCurrentLocation(position) {
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   let apiKey = "094780c710fa4efd669f0df8c3991927";
//   let units = "imperial";
//   let geoApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
//   axios.get(geoApi).then(latLongLocation);
// }
// function latLongLocation(response) {
//   let h2 = document.querySelector("h2");
//   h2.innerHTML = response.data.name;
//   let h4 = document.querySelector("h4");
//   h4.innerHTML = `${Math.round(response.data.main.temp)}℉`;
// }
