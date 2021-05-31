import React from "react";
import ConvertTemp from "./ConvertTemp";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col wheatherInfoA">
        <div className="clearfix">
          <div className="float-left wIcon">
            <WeatherIcon auxIcon={props.info.icon} />
          </div>

          <ConvertTemp temp={props.info.temperature} type="celsius" />

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
