//Author: Joel, B.J. 
// Purpose: Event card function accepts deconstructed obj (event) and functionality from event list and creates an HTML (jsx) representation.
// Functions are specifically for the buttons.

import React from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";

export const EventCard = ({ event, handleShowWeather, handleDeleteEvent }) => {

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

        //look at current logged in users friends and only display events of friends.
       
    const history = useHistory()
    if (currentUser === event.userId) {
    return (

        <div className="card">
           
            <div className="currentUser-card-content">
                <h4>User: {event.user.name}</h4>
                <h4>Name: {event.name}</h4>
                <h5>Date: {event.date}</h5>
                <h5>Location: {event.location}</h5>

                <button type="button" onClick={() => handleShowWeather(event.date, event.location)}>Show Weather</button>

                <div className="currentUser-card-buttons">
                    <button type="button" onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </div>
            </div>
        </div>
    
    )} else {
        return(
        <div className="card">
           
        <div className="card-content">
            <h4>User: {event.user.name}</h4>
            <h4>Name: {event.name}</h4>
            <h5>Date: {event.date}</h5>
            <h5>Location: {event.location}</h5>

            <button type="button" onClick={() => handleShowWeather(event.date, event.location)}>Show Weather</button>

        </div>
    </div>
    )}
};