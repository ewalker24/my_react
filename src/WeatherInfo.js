import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weatherUpdate">
        <h1 className="text-capitalize">{props.data.city}</h1>
        <span className="clearfix">
          <span className="img float-left mb-3 me-3">
            <WeatherIcon code={props.data.icon} size={60} />
          </span>
          <span className="float-left">
            <WeatherConversion
              fahrenheit={Math.round(props.data.temperature)}
            />
          </span>
        </span>
        <div className="text-capitalize">{props.data.description}</div>
        <div>
          <FormattedDate date={props.data.date} />{" "}
        </div>
        <div>Wind: {Math.round(props.data.wind)} mph</div>
        <div>Humidity: {props.data.humidity}%</div>
        <Forecast />
      </div>

      <div className="credits mt-3">
        <span>
          This project was coded by{" "}
          <a href="https://stately-blini-d72870.netlify.app/">Emily Walker</a>{" "}
          and is{" "}
          <a href="https://github.com/ewalker24/my_react">
            open-sourced on GitHub
          </a>
        </span>{" "}
      </div>
    </div>
  );
}
