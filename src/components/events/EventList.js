//Author: Joel, B.J. 
// Purpose: This component takes in the array of events from the database, sorts according to date (with closest upcoming event at the top), and feeds array into the event card to be formatted.
// "mainEvent" state holds the most immediate event and is formatted into it's own html card in the return.

import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { useHistory } from 'react-router-dom';
import { getAllEvents, deleteEvent } from '../modules/EventManager'
import "./EventList.css"
import {getAllFriends} from "../modules/FriendManager"


export const EventList = () => {
    const [events, setEvents] = useState([]);
    const history = useHistory();
    
    
    const getEvents = () => {
        getAllFriends()
        .then(friends => {
            //find current user
            const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
            //find the friends associated with the current user
            const currentUsersFriends = friends.filter(friend => friend.currentUserId === currentUser)
            const currentFriend = friends.filter(friend => friend.userId)
            const testVar = currentUsersFriends.currentUserId
            console.log(currentFriend   )
            console.log(currentUsersFriends)
            if(currentUsersFriends )
            {
            return getAllEvents().then(eventsFromAPI => {
                const sortedEvents = eventsFromAPI.sort((a, b) => {
                    let da = new Date(a.date),
                    db = new Date(b.date);
                    return da - db;
                })
                setEvents(sortedEvents)       
                });
            }
        })
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
        
        
        // const checkEventDate = () => {
            
            //     if (mainEvent === true) {
                //         let currentDate = new Date().getTime();
                //         let eventDate = new Date(mainEvent.date).getTime();
                //         let timeDifference = eventDate - currentDate
                //         if (timeDifference < 0) {
                    //             deleteEvent(mainEvent.id)
                    //         }
                    //     }
                    // }
                    // checkEventDate()
                    

        
    
    if (events) {
        return (
            <>
                <button type="button" onClick={() => { history.push("/events/create") }}>
                    New Event
             </button>

                   
                        {events.map(event =>
                            <EventCard
                                key={event.id}
                                event={event}
                                handleDeleteEvent={handleDeleteEvent} />)}
                               
                               
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
