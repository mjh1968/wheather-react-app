import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherState, setweatherState] = useState({ flag: false });
  const [city, setCity] = useState(props.citySearh);
  console.log({ city });
  function getWeather(response) {
    setweatherState({
      flag: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.main.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelslike: response.data.main.feels_like,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coords: response.data.coords,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchCity() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios.get(url).then(getWeather);
  }
  function handleSearch(event) {
    event.preventdefault();
    searchCity();
  }
  if (weatherState.flag) {
    return (
      <div>
        <form className="formSearch mb-4 caps" onSubmit={handleSearch}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary" type="Submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col wheatherInfoA">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src={weatherState.icon}
                  alt={weatherState.description}
                  className="wIcon me-2"
                />
              </div>
              <div className="wTemperature float-left  ">
                {weatherState.temperature}
                <span className="wUnit ps-1">ºC</span>
              </div>
              <div className="wOtherInfo float-left ">
                <ul>
                  <li>
                    Feels like: {weatherState.feels_like}{" "}
                    <span className="wUnit ps-1">ºC</span>
                  </li>
                  <li>Humidity: {weatherState.humidity}%</li>
                  <li>Wind: {weatherState.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col wheatherInfoB">
            <div className="clearfix wOtherInfo">
              <ul>
                <li className="city">{weatherState.city}</li>
                <li className="dataDes">{weatherState.date}</li>
                <li>{weatherState.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
  }
}
