import React from "react";

export default function FormattedDate (props){
let days = [
    "Sunday", "Monday", "Tuesday","Wednesday", "Thrusday", "Friday", "Saturday"
    ];

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours<10) {hours= `0${hours}`}
    let minutes = props.date.getMinutes();
    if (minutes<10) {minutes= `0${minutes}`}

     let month = props.date.getMonth();
      let year = props.date.getYear()


    return (<div>
        {day} {hours}:{minutes}
    </div>);}