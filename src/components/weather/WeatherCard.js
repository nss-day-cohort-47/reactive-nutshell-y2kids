//Author: Joel
//Purpose: To create an html representation of the weather data to display when the "show weather button" is clicked. 

import React from "react"

export const weatherCard=({weather})=>{
    return(
        <div>
            <h3>Forcast For ${weather.name} </h3>
            <div>{weather.weather.main}</div>
            <div>{weather.main.temp}</div>
            <button>Back To Events</button>
        </div>
    )
}
