import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { useHistory } from 'react-router-dom';
import { getAllEvents, deleteEvent } from '../modules/EventManager'


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
        let currentDate = new Date();
        let eventDate = mainEvent.date
        console.log(currentDate);
        console.log(eventDate)
        
    //  if (eventDate - currentDate === 0 )
    }
    checkEventDate()
    
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
                    <div className="main card">
                        <h2>Name: {mainEvent.name}</h2>
                        <h3>Date: {mainEvent.date}</h3>
                        <h3>Location: {mainEvent.location}</h3>

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
                <button type="button" onClick={() => { history.push("/events/create") }}>
                    New Event
       </button>
            </div>
        </>
    );
};
