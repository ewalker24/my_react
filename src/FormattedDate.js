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
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {" "}
      Local time is {day} {hours}:{minutes}
    </div>
  );
}

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
