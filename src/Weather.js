import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Credits from "./Credits";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityInput(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "047ff5f243b184d84367a2f1o1cta7f9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
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
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
        <Credits />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
