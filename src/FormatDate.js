import React from "react";

export default function FormatDate(props) {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var dayW = weekday[props.date.getDay()];

  var hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  var minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div>
      {dayW}, {hour}:{minute}
    </div>
  );
}
