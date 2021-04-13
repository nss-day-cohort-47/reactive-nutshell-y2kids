import React from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";

export const EventCard = ({ event, handleShowWeather, handleDeleteEvent  }) => {

    const history = useHistory()
    return (
        <div className= "card">
            <div className="card-content">
                <h3>Name: {event.name}</h3>
                <h4>Date: {event.date}</h4>
                <h4>Location: {event.location}</h4>

                <button type="button" onClick={() => handleShowWeather(event.date, event.location)}>Show Weather</button>

                <div className="card-buttons">
                <button type="button" onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button>
                <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </div>

            </div>
            
        </div>
    );
}