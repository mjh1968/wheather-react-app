import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
import ForecastTempMm from "./ForecastTempMm";

import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [wforecast, setwForecast] = useState(null);
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setwForecast(response.data.daily);
    setFlag(true);
  }

  if (flag) {
    return (
      <div className="Forecast">
        <div className="table-responsive -sm align-middle">
          <table className="table">
            <tbody>
              <tr>
                {wforecast.map(function (dailyForecast, index) {
                  if (index < 7) {
                    return (
                      <td key={index}>
                        <ForecastDay data={dailyForecast} />
                        <WeatherIcon type={1} data={dailyForecast} />
                        <ForecastTempMm data={dailyForecast} />{" "}
                      </td>
                    );
                  } else {
                    return null;
                  }
                })}
              </tr>
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
