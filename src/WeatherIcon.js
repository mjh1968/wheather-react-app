import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const codeMappingColor = {
    "01d": "#FFE67D",
    "01n": "#FFE67D",
    "02d": "#b4abab",
    "02n": "#b4abab",
    "03d": "#b4abab",
    "03n": "#b4abab",
    "04d": "#636161",
    "04n": "#636161",
    "09d": "#636161",
    "09n": "#636161",
    "10d": "#636161",
    "10n": "#636161",
    "11d": "#636161",
    "11n": "#636161",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "#636161",
    "50n": "#636161",
  };
  return (
    //<img src={props.auxIcon} className="wIcon me-2" />
    <ReactAnimatedWeather
      icon={codeMapping[props.auxIcon]}
      color="#636161"
      size={48}
      animate={true}
    />
  );
}
