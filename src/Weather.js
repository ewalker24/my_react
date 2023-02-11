import React from "react";
import axios from "axios";

export default function Weather() {
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  function showWeather(response) {
    alert(response.data.main.temp);
  }
  return <div>Hello from Weather</div>;
}
