import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherForecast() {
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
