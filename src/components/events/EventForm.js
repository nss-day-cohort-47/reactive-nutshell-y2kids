// Author: Joel
// Purpose: Displays a form when the "Add Event" button is selected. The form allows for the input of information to be stored as a new event obj to the database.
// Access to the database is granted through the "save" button functionality. 

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addEvent } from '../modules/EventManager';

export const EventForm = () => {

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
    const [event, setEvent] = useState({
        userId: currentUser,
        name:"",
        date:"",
        location:""
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (evt) => {

        const newEvent = { ...event }
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEvent[evt.target.id] = selectedVal
        setEvent(newEvent)
    }

    const handleClickSaveEvent = (evt) => {
        evt.preventDefault()
        setIsLoading(true)


        const userId = event.userId
        const name = event.name
        const date = event.date
        const location = event.location
        
        if (name === "" || date === "" || location === "") {
            window.alert("Please input more information")
        } else {


        addEvent(event)
        .then(() => history.push("/events"))
        }
    }


return (
    <form className="eventForm">
        <h2 className="eventForm__title">New Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Event Name:</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.name} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event date" value={event.date} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event city" value={event.location} />
            </div>
        </fieldset>

        <button disabled={isLoading} className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          </button>
    </form>
)

}