import React from "react";

export default function FormatDate(props) {
  console.log(props.date);
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[props.date.getDay()];
  var hour = props.date.getHours();
  var minute = props.date.getMinutes();

  return (
    <div>
      {day},{hour}:{minute}
    </div>
  );
}
