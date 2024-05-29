import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

  function showTemperature(response) {
    console.log(response);
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    });
  }

  function search() {
    const key = "44b4d9f5e3a3baf490c33c5519ot4f0a";
    const city = "Paris";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>Tuesday 16:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weather.icon}
                alt={weather.description}
                className="float-left"
              />
              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
