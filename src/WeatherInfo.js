import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weatherUpdate">
        <h1 className="text-capitalize">{props.data.city}</h1>
        <span className="clearfix">
          <span className="img float-left mb-3 me-3">
            <WeatherIcon code={props.data.icon} />
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
      </div>
      {/* <div className="m-5">
        <h5 className="card-title">5 day forecast</h5>
      </div>
      <div className="card-text">
        <div className="container">
          <div className="row">
            <div className="col">
              Wednesday
              <img
                src={props.data.icon_url}
                alt={props.data.description}
                width="30px"
              />
              <div> 78℉ / 59℉ </div>
            </div>
            <div className="col">
              Thursday
              <img
                src={props.data.icon_url}
                alt={props.data.description}
                width="30px"
              />
              <div> 77℉ / 57℉ </div>
            </div>
            <div className="col">
              Friday
              <div>
                <img
                  src={props.data.icon_url}
                  alt={props.data.description}
                  width="30px"
                />
              </div>
              <div>65℉ / 51℉ </div>
            </div>
            <div className="col">
              Saturday
              <img
                src={props.data.icon_url}
                alt={props.data.description}
                width="30px"
              />
              <div>63℉ / 49℉ </div>
            </div>
            <div className="col">
              Sunday{" "}
              <img
                src={props.data.icon_url}
                alt={props.data.description}
                width="30px"
              />
              <div>60℉ / 46℉</div>
            </div>
          </div>
        </div> */}
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
    // </div>
  );
}
