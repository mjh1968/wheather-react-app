import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col wheatherInfoA">
        <div className="clearfix">
          <div className="float-left">
            <img
              src={props.info.icon}
              alt={props.info.description}
              className="wIcon me-2"
            />
          </div>
          <div className="wTemperature float-left  ">
            {props.info.temperature}
            <span className="wUnit ">ºC</span>
          </div>
          <div className="wOtherInfo float-left ">
            <ul>
              <li>Feels like: {props.info.feelslike} ºC</li>
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind: {props.info.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col wheatherInfoB">
        <div className="clearfix">
          <div className="wOtherInfo">
            <ul>
              <li className="city">{props.info.nome}</li>
              <li className="dataDes">
                <FormatDate date={props.info.date} />
              </li>
              <li className="text-capitalize">{props.info.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
