//Author: Joel, B.J. 
// Purpose: Event card function accepts deconstructed obj (event) and functionality from event list and creates an HTML (jsx) representation.
// Functions are specifically for the buttons.

import React, {useState, useEffect} from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";
import {FutureWeatherCard } from "../weather/WeatherCard";
import {getFutureWeather} from '../modules/WeatherManager'


export const EventCard = ({ event, handleDeleteEvent }) => {
//Move all weather state into Event Card component.
//Move future weather handle functionality into event Card component. 
//Clean list component of weather functions.
//Style first child element in css.

const [weatherObj, setWeather] = useState({});

const handleFutureWeather = (location) => {
    getFutureWeather(location)
    .then(weatherFromAPI => setWeather(weatherFromAPI)
    )}

    useEffect(() => {
        handleFutureWeather();
    }, []);

    const currentLoggedInUser = parseInt(sessionStorage.getItem("nutshell_user"))

        //look at current logged in users friends and only display events of friends.
       
    const history = useHistory()
    
    if (currentLoggedInUser === event.userId ) {
    return (
        <div className="card">
           
            <div className="currentUser-eventCard-content">
                <h4>User: {event.user.name}</h4>
                <h4>Name: {event.name}</h4>
                <h5>Date: {event.date}</h5>
                <h5>Location: {event.location}</h5>

                <button className="showWeather-bttn" type="button" onClick={() => handleFutureWeather(event.location)}>Show Weather</button>

                {weatherObj.city? <FutureWeatherCard weatherObj = {weatherObj} /> : null}
                
                <div className="currentUser-card-buttons">
                    <button className="eventEdit-bttn" type="button" onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button>
                    <button className="eventDelete-bttn" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </div>
            </div>
        </div>
    
    )} else {
        return(
        <div className="eventCard">
           
        <div className="eventCard-content">
            <h4>User: {event.user.name}</h4>
            <h4>Name: {event.name}</h4>
            <h5>Date: {event.date}</h5>
            <h5>Location: {event.location}</h5>

            <button className="showWeather-bttn" type="button" onClick={() => handleFutureWeather(event.location)}>Show Weather</button>
               {weatherObj.city? <FutureWeatherCard weatherObj = {weatherObj} /> : null}
        </div>
    </div>
    )}
};