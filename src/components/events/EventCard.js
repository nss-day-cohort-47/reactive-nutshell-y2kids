//Author: Joel
// Purpose: Event card function accepts deconstructed obj (event) and functionality from event list and creates an HTML (jsx) representation.
// Functions are specifically for the buttons.

import React from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";
import {WeatherCard } from "../weather/WeatherCard";

export const EventCard = ({ event, handleFutureWeather, handleDeleteEvent }) => {

    const history = useHistory()
    return (

        <div className="card">
           
            <div className="card-content">
                <h4>Name: {event.name}</h4>
                <h5>Date: {event.date}</h5>
                <h5>Location: {event.location}</h5>

                {/* <button type="button" onClick={() => handleFutureWeather(event.date, event.location)}>Show Weather</button> */}

                <div className="card-buttons">
                    <button type="button" onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </div>

            </div>

            <div className="weatherCard">
                {/* <WeatherCard /> */}
            </div>

        </div>

    );
};