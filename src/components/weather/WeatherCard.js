//Author: Joel
//Purpose: To create an html representation of the weather data to display when the "show weather button" is clicked and on the home (articles) page. 

import React from "react"
import './WeatherCard.css'

export const CurrentWeatherCard=({weatherObj})=>{
    return(
        <div className="weatherCard">
            <h3 className="weatherCard-header" >Current Weather For {weatherObj.name}</h3>
            <h4>{`${Math.round(weatherObj.main.temp)} degrees and ${weatherObj.weather[0].main}`}</h4>
        </div>
    )
}

export const FutureWeatherCard=({weatherObj})=>{
    return(
        <div className="forcastWeatherCard">
            <h3 className="weatherCard-header" >Forecast For {weatherObj.city.name} </h3>
            <h4>{`${Math.round(weatherObj.list[0].main.temp)} degrees and ${weatherObj.list[0].weather[0].main}`}</h4>
        </div>
    )
}
