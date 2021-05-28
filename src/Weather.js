import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ flag: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      // date: new Date(response.data.main.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelslike: Math.round(response.data.main.feels_like),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coords: response.data.coords,
    });
  }

  function handleSubmit(event) {
    event.preventdefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="formSearch mb-4 " onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn  btn-secondary"
              />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col wheatherInfoA">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="wIcon me-2"
                />
              </div>
              <div className="wTemperature float-left  ">
                {weatherData.temperature}
                <span className="wUnit ps-1">ºC</span>
              </div>
              <div className="wOtherInfo float-left ">
                <ul>
                  <li>Feels like: {weatherData.feelslike} ºC</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col wheatherInfoB">
            <div className="clearfix">
              <div className="wOtherInfo">
                <ul>
                  <li className="city">{city}</li>
                  <li className="dataDes">"Friday 14:03"</li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
