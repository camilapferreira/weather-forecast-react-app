import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let lat = props.lon;
  let lon = props.lat;
  let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(url).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-day">Thu</div>
          <WeatherIcon code="01d" size={32} />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-max">21°</span>
            <span className="weather-forecast-min">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
