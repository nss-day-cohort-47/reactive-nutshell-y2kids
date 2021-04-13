import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { useHistory } from 'react-router-dom';
import { getAllEvents, deleteEvent } from '../modules/EventManager'


export const EventList = () => {
    const [events, setEvents] = useState([]);
    const history = useHistory();

    const getEvents = () => {
        return getAllEvents().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    };

    const handleDeleteEvent = (id) => {
        deleteEvent(id)
        .then(() => getEvents());
    };

    // const handleShowWeather = (date, location) => {
    //     showWeather(date, location)
    //     .then(() => weatherDetail())
    // }

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
        <div className="event Component">
       <div className="container-cards">
           {events.sort().map(event =>
            <EventCard
            key={event.id}
            event={event}
            // handleShowWeather={handleShowWeather}
            handleDeleteEvent={handleDeleteEvent} />)}
       </div>
       <button type="button" onClick={() => { history.push("/events/create") }}>
           New Event
       </button>
       </div>
       </>
    );
};
