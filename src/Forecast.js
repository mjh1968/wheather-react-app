import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="table-responsive -sm ">
        <table className="table">
          <tbody>
            <tr>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
            </tr>
            <tr>
              <td>
                <WeatherIcon auxIcon={props.icon} />
              </td>
              <td>
                <WeatherIcon auxIcon={props.icon} />
              </td>
              <td>
                <WeatherIcon auxIcon={props.icon} />
              </td>
              <td>
                <WeatherIcon auxIcon={props.icon} />
              </td>
              <td>
                <WeatherIcon auxIcon={props.icon} />
              </td>
              <td>
                <WeatherIcon auxIcon={props.icon} />
              </td>
            </tr>
            <tr>
              <td className="fTemp">
                29º
                <span className="minT"> 18º</span>
              </td>
              <td className="fTemp">
                29º
                <span className="minT"> 18º</span>
              </td>
              <td className="fTemp">
                29º
                <span className="minT"> 18º</span>
              </td>
              <td className="fTemp">
                29º
                <span className="minT"> 18º</span>
              </td>
              <td className="fTemp">
                29º
                <span className="minT"> 18º</span>
              </td>
              <td className="fTemp">
                29º
                <span className="minT"> 18º</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
