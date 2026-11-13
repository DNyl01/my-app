import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function SearchForm(props) {
  let [input, setInput] = useState("");

  function Display(event) {
    event.preventDefault();
    props.onSearch(input);
  }

  function UpdateCity(event) {
    setInput(event.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form onSubmit={Display}>
            <input
              type="search"
              placeholder="Enter a City"
              onChange={UpdateCity}
              autoFocus="on"
            />
            <input type="submit" value="search" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}