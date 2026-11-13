import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){

    let weatherdata = props.data;
    
    return  (<div className= "WeatherInfo">
    <h1>{weatherdata.city}</h1>
        <ul>
          <li>{weatherdata.country}</li>
          <li> <FormattedDate date={weatherdata.date}/> </li>
          <li className="text-capitalize">{weatherdata.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherdata.iconUrl}
                alt={weatherdata.description}
                className="image float-start"
              />
              <span className="temperature float-start">
                <WeatherTemperature celsius={weatherdata.temperature} />
               
              </span>
              
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 60%</li>
              <li>Wind: {weatherdata.wind} km/h</li>
            </ul>
          </div>
        </div>
   </div> );
      
    
    
}