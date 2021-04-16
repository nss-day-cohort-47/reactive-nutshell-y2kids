import React,{useState,useEffect} from "react"
import { getCurrentWeather } from "../modules/WeatherManager"


export const weatherCard=({weather})=>{
    return(
        <div>
            <h3>Forcast For ${name} </h3>
            <div>{weather.main}</div>
            <div>{main.temp}</div>
            <button>Back To Events</button>
        </div>
    )
}
