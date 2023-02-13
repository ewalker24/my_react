import React, { useState } from "react";
import axios from "axios";

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
        placeholder="Find your city"
        className="search"
        onChange={cityInput}
      />
      <input type="submit" value="Search" />
      <input type="button" value="Current Location" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        <div>{form}</div>
        <h2>{city}</h2>
        <h4>{Math.round(temp)}℃</h4>
        <div>Local time is 5:21pm PST</div>
        <div>Wind:{wind}</div>
        <div>Humidity:{humidity}</div>
        <h5 className="card-title">5 day forecast</h5>
        <p className="card-text">
          <div className="container">
            <div className="row">
              <div className="col">
                Wednesday
                <img src="images/sun.png" alt="sun" width="30px" />
                <div>h 78 ℉/l 59 ℉ </div>
              </div>
              <div className="col">
                Thursday
                <img src="images/sun.png" alt="sun" width="30px" />
                <div>h 77℉/l 57℉ </div>
              </div>
              <div className="col">
                Friday{" "}
                <img
                  src="images/partly_cloudy.png"
                  alt="partly cloudy"
                  width="30px"
                />
                <div>h 65℉/l 51℉ </div>
              </div>
              <div className="col">
                Saturday
                <img
                  src="images/partly_cloudy.png"
                  alt="partly cloudy"
                  width="30px"
                />
                <div>h 63℉/l 49℉ </div>
              </div>
              <div className="col">
                Sunday{" "}
                <img
                  src="images/partly_cloudy.png"
                  alt="partly cloudy"
                  width="30px"
                />
                <div>h 60℉/l 46℉</div>
              </div>
            </div>
          </div>
          <p className="credits">
            <a href="https://github.com/ewalker24/Lesson4shecodes/tree/main">
              Open Source Code
            </a>{" "}
            by Emily Walker
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
