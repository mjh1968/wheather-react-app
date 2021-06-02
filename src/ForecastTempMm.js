import React from "react";

export default function ForecastTempMm(props) {
  let tmin = Math.round(props.data.temp.min);
  let tmax = Math.round(props.data.temp.max);
  return (
    <td >
      {tmax}° {tmin}°
    </td>
  );
}
