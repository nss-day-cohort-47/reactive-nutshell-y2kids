//Author: Joel
// Purpose: This component takes in the array of events from the database, sorts according to date (with closest upcoming event at the top), and feeds array into the event card to be formatted.
// "mainEvent" state holds the most immediate event and is formatted into it's own html card in the return.

import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { useHistory } from 'react-router-dom';
import { getAllEvents, deleteEvent } from '../modules/EventManager'
import "./EventList.css"


export const EventList = () => {
    const [events, setEvents] = useState([]);
    const [mainEvent, setMain] = useState({});
    const history = useHistory();


    const getEvents = () => {
        return getAllEvents().then(eventsFromAPI => {
            const sortedEvents = eventsFromAPI.sort((a, b) => {
                let da = new Date(a.date),
                    db = new Date(b.date);
                return da - db;
            })
            const firstElement = sortedEvents.shift()
            setMain(firstElement)
            setEvents(sortedEvents)
        });
    };
    const handleDeleteEvent = (id) => {
        deleteEvent(id)
            .then(() => getEvents());
    };

    const checkEventDate = () => {

        if (mainEvent === true) {
            let currentDate = new Date().getTime();
            let eventDate = new Date(mainEvent.date).getTime();
            let timeDifference = eventDate - currentDate
            if (timeDifference < 0) {
                deleteEvent(mainEvent.id)
            }
        }
    }
    checkEventDate()

    // const handleShowWeather = (date, location) => {
    //     showWeather(date, location)
    //     .then(() => weatherDetail())
    // }

    useEffect(() => {
        getEvents();
    }, []);

    
    if (mainEvent) {
        return (
            <>
                <button type="button" onClick={() => { history.push("/events/create") }}>
                    New Event
             </button>

                <div className="event Component">
                    <div className="container-cards">
                        <div className="mainCard">
                            <h2>Name: {mainEvent.name}</h2>
                            <h3>Date: {mainEvent.date}</h3>
                            <h3>Location: {mainEvent.location}</h3>
                            <h4>User: {mainEvent?.user?.name}</h4>

                            {/* <button type="button" onClick={() => handleShowWeather(mainEvent.date, mainEvent.location)}>Show Weather</button> */}

                            <div className="card-buttons">
                                <button type="button" onClick={() => history.push(`/events/${mainEvent.id}/edit`)}>Edit</button>
                                <button type="button" onClick={() => handleDeleteEvent(mainEvent.id)}>Delete</button>
                            </div>
                        </div>
                        {events.map(event =>
                            <EventCard
                                key={event.id}
                                event={event}
                                // handleShowWeather={handleShowWeather}
                                handleDeleteEvent={handleDeleteEvent} />)}
                    </div>

                </div>
            </>
        );
    } else {
        return (
                <button type="button" onClick={() => { history.push("/events/create") }}>
                    New Event
             </button>

        )
    }
};
