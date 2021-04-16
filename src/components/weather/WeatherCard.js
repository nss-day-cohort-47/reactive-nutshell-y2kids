//Author: Joel
//Purpose: To create an html representation of the weather data to display when the "show weather button" is clicked and on the home (articles) page. 

import React from "react"

export const CurrentWeatherCard=({weatherObj})=>{
    return(
        <div className="weatherCard">
            <h3>Forcast For {weatherObj.name}</h3>
            <h4>{weatherObj.weather[0].main}</h4>
            <h4>{weatherObj.main.temp}</h4>
        </div>
    )
}

// export const FutureWeatherCard=({weatherArr})=>{
//     return(
//         <div className="weatherCard">
//             <h3>Forcast For {weatherArr?.name} </h3>
//             <h4>{weatherArr?.weather[0].main}</h4>
//             <h4>{weatherArr?.main.temp}</h4>
//             <button>Back To Events</button>
//         </div>
//     )
// }
