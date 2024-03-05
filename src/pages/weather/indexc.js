// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Weather = () => {
//   const [city, setCity] = useState("Calgary");
//   const [weatherData, setWeatherData] = useState(null);
//   let apiKey = "dbd664772bef2155bd03550226e1787b";

//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);

//   const fetchWeather = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//       );
//       setWeatherData(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchWeather();
//   }, [city]);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });
//   }, [lat, long]);

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeather();
//   };

//   return (
//     <div>
//       <form className="add-todo" onSubmit={handleSubmit}>
//         {/* <div className="outline-circle"></div> */}
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={handleInputChange}
//         />
//       </form>

//       {weatherData ? (
//         <>
//           <h2>{weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//           <p>Feels like : {weatherData.main.feels_like}°C</p>
//           <p>Humidity : {weatherData.main.humidity}%</p>
//           <p>Pressure : {weatherData.main.pressure}</p>
//           <p>Wind Speed : {weatherData.wind.speed}m/s</p>
//         </>
//       ) : (
//         <p>Loading weather data...</p>
//       )}
//     </div>
//   );
// };

// export default Weather;

import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  let apiKey = "dbd664772bef2155bd03550226e1787b";

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log("######", data.weather);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  return (
    <div>
      {!location ? (
        <button onClick={handleLocationClick}>Get Location</button>
      ) : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Feels like : {weather.main.feels_like}°C</p>
          <p>Humidity : {weather.main.humidity}%</p>
          <p>Pressure : {weather.main.pressure}</p>
          <p>Wind Speed : {weather.wind.speed}m/s</p>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherApp;
