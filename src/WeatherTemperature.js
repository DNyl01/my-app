import React, {useState } from "react";

export default function WeatherTemperature(props){
    let [unit, setUnit] = useState("celsius");

    function ConvertToFahrenheith(event){event.preventDefault();
    setUnit("fahrenheith");
    }
    function ConvertToCelsius(event){
        event.preventDefault();
        setUnit ("celsius");

    }
     if (unit === "celsius"){

       

   return (<div className= "WeatherTemperature">
    <span className="temperature">  {Math.round(props.celsius)}</span> 
     <span className="units float-end"> ºC | <a href="/" onClick={ConvertToFahrenheith}>°F</a> </span>

     </div>);}
     else{
        let fahrenheith = (props.celsius*9)/5 +32;
        return ( <div>
      <span className="temperature">  {Math.round(fahrenheith)}</span> 
     <span className="units float-end">  <a href="/" onClick={ConvertToCelsius}> ºC</a> | °F</span></div>);}
     }
     
    

