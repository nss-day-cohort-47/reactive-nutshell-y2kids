//Author: Joel
//Purpose: To create an html representation of the weather data to display when the "show weather button" is clicked and on the home (articles) page. 

import React from "react"

export const CurrentWeatherCard=({weatherObj})=>{
    return(
        <div className="weatherCard">
            <h3>Forcast For {weatherObj.name}</h3>
            <h4>{`${Math.round(weatherObj.main.temp)} degrees and ${weatherObj.weather[0].main}`}</h4>
        </div>
    )
}

export const FutureWeatherCard=({weatherobj})=>{
    return(
        <div className="weatherCard">
            <h3>Forcast For {weatherobj.name} </h3>
            <h4>{`${Math.round(weatherobj.main.temp)} degrees and ${weatherobj.weather[0].main}`}</h4>
        </div>
    )
}
