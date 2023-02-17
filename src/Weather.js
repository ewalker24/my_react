import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("");
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [temp, setTemp] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setLoaded(true);
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setTemp(response.data.main.temp);
  }
  function cityInput(event) {
    setCity(event.target.value);
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

  if (loaded) {
    return (
      <div className="Weather">
        <div className="m-5">{form}</div>
        <div className="weatherUpdate">
          <h1>{city}</h1>
          <span className="clearfix">
            <span className="img">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="sun"
                width="30px"
                className="float-left mb-3"
              />
            </span>
            <span className="float-left">
              <span className="temperature">{Math.round(temp)}</span>
              <span className="units"> ℃ | ℉</span>
            </span>
          </span>

          <div>Local time is 5:21pm PST</div>
          <div>Wind: {Math.round(wind)} mph</div>
          <div>Humidity: {humidity}%</div>
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
                  src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                  alt="sun"
                  width="30px"
                />
                <div> 78℉ / 59℉ </div>
              </div>
              <div className="col">
                Thursday
                <img
                  src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                  alt="sun"
                  width="30px"
                />
                <div> 77℉ / 57℉ </div>
              </div>
              <div className="col">
                Friday
                <div>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="partly cloudy"
                    width="30px"
                  />
                </div>
                <div>65℉ / 51℉ </div>
              </div>
              <div className="col">
                Saturday
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="partly cloudy"
                  width="30px"
                />
                <div>63℉ / 49℉ </div>
              </div>
              <div className="col">
                Sunday{" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="partly cloudy"
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
