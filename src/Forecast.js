import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [wforecast, setwForecast] = useState();
  let [flag, setFlag] = useState(false);

  function handleResponse(response) {
    setwForecast(response.data.daily);
    setFlag(true);
    console.log(response.data.daily);
  }

  if (flag) {
    return (
      <div className="Forecast">
        <div className="table-responsive -sm ">
          <table className="table">
            <tbody>
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <tr key={index}>
                      <td>
                        <WeatherForecastDay data={dailyForecast} />
                      </td>
                      <td>
                        <WeatherIcon data={dailyForecast} />
                      </td>
                      <td className="fTemp">
                        <WeatherForecastTemp data={dailyForecast} />
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.long}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
    return null;
  }
}
