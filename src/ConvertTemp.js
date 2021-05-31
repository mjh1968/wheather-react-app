import React, { useState } from "react";

export default function ConvertTemp(props) {
  const [flag, setFlag] = useState(props.type);

  function changeTypeF(event) {
    event.preventDefault();
    setFlag("fharenheit");
  }

  function changeTypeC(event) {
    event.preventDefault();
    setFlag("celsius");
  }

  if (flag === "celsius") {
    return (
      <div className="wTemperature float-left  ">
        {props.temp}
        <span className="wUnit ">
          ºC|
          <a href="/" onClick={changeTypeF}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let tempF = (props.temp * 9) / 5 + 32;

    return (
      <div className="wTemperature float-left  ">
        {Math.round(tempF)}
        <span className="wUnit ">
          <a href="/" onClick={changeTypeC}>
            ºC
          </a>
          |ºF
        </span>
      </div>
    );
  }
}
