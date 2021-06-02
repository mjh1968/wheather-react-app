import React from "react";

export default function ForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let wday = days[day];
  return <td>{wday} </td>;
}
