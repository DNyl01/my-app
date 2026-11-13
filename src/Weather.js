import React, { useState } from "react";
import "./Weather.css";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";


export default function Weather(props) {
  let [weatherdata, setWeatherdata] = useState({ ready: false });
  let [city, setCity] = useState("Pretoria");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      country: response.data.country,
    });
  }

  function handleSearch(submittedCity) {
    setCity(submittedCity);
    setWeatherdata({ ready: false });
  }

  if (weatherdata.ready) {
    return (
      <div className="weather"> 
        <SearchForm onSearch={handleSearch} />
        <WeatherInfo data={weatherdata}/> </div>);}
       
  else {
    let apiKey = "bd75f0b07t2b8413f599c23a504017fo";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }}