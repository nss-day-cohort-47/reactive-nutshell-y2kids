// Author: Joel
// Purpose: Edit form set to display when "edit" button is clicked on event Card. This function allows for the manipulation of event data already saved to the database.

import React, { useState, useEffect } from "react";
import { updateEvent, getEventById } from "../modules/EventManager"
import { useParams, useHistory } from "react-router-dom";

export const EventEditForm = () => {
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { eventId } = useParams();
    const history = useHistory();

    const handleFieldChange = (evt) => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    //Code in case Drop Downs are needed
    // const hangdleControlledInputChange = (evt) => {

    //     const newEvent = { ...event }
    //     let selectedVal = event.target.value
    //     if (event.target.id.includes("Id")) {
    //         selectedVal = parseInt(selectedVal)
    //     }
    //     newEvent[event.target.id] = selectedVal
    //     setEvent(newEvent)
    // }

    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedEvent = {
            userId: parseInt(sessionStorage.getItem("nutshell_user")),
            id: eventId,
            name: event.name,
            date: event.date,
            location: event.location
        };

        updateEvent(editedEvent)
        .then(() => history.push("/events")
        )
    }

    useEffect(() => {
        getEventById(eventId)
        .then(event => {
            setEvent(event);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
        <h2>Edit Event</h2>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={event.name}
              />
              <label htmlFor="name">Event Name</label>
  
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="date"
                value={event.date}
              />
              <label htmlFor="date">Date</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="location"
                value={event.location}
              />
              <label htmlFor="location">Location</label>
            </div>
  
            
  
            <div className="alignRight">
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingEvent}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>


    )
}