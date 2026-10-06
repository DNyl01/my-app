import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  let [temperature, setTemperature] = useState("");
  let [city, setCity] = useState("");
  let [input, setInput] = useState("");

  function Display(event) {
    event.preventDefault();
    setCity(input);

    let key = `bd75f0b07t2b8413f599c23a504017fo`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${input}&key=${key}`;
    axios.get(url).then(getTemperature);
  }

  function UpdateCity(event) {
    setInput(event.target.value);
  }

  function getTemperature(response) {
    setTemperature(Math.round(response.data.temperature.current));
  }

  return (
    <form onSubmit={Display}>
      <input type="search" onChange={UpdateCity} />
      <input type="submit" value="search" />
      {temperature && (
        <h1>
          {" "}
          it is {temperature} in {city}
        </h1>
      )}
    </form>
  );
}
// Build a weather Search Engine with Axios
// Display the temperature from the API
//The temperature component does not change when the city name is entered
