import React from "react";

const WeatherCard = ({
  icon,
  day,
  max,
  min,
  pressure,
  humidity,
  clouds,
  wspeed,
}) => {
  return (
    <div className="weatherContainer">
      <div className="tile">
        <img src={icon}></img>
        <span>{day}</span>
        <span>Max:{max}</span>
        <span>Min:{min}</span>
        <label>{pressure}</label>
        <label>{humidity}</label>
        <label>{clouds}%</label>
        <label>{wspeed} m/s</label>
      </div>
    </div>
  );
};

export default WeatherCard;
