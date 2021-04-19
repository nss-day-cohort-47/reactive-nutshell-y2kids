//Author: Joel
// Purpose: Event card function accepts deconstructed obj (event) and functionality from event list and creates an HTML (jsx) representation.
// Functions are specifically for the buttons.

import React from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";

export const EventCard = ({ event, handleShowWeather, handleDeleteEvent }) => {

    const currentLoggedInUser = parseInt(sessionStorage.getItem("nutshell_user"))

    const history = useHistory()
    if (currentLoggedInUser === event.userId ) {
    return (

        <div className="card">
           
            <div className="currentUser-eventCard-content">
                <h4>User: {event.user.name}</h4>
                <h4>Name: {event.name}</h4>
                <h5>Date: {event.date}</h5>
                <h5>Location: {event.location}</h5>

                <button className="showWeather-bttn" type="button" onClick={() => handleShowWeather(event.date, event.location)}>Show Weather</button>

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

            <button className="showWeather-bttn" type="button" onClick={() => handleShowWeather(event.date, event.location)}>Show Weather</button>

        </div>
    </div>
    )}
};