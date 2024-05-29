import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

  function showTemperature(response) {
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
      date: new Date(response.data.time * 1000),
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
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
