//author: B.J. Golden
//purpose: 

import React, { useState, useEffect } from "react";
import { MessageCard } from './MessageCard';
import { getAllMessages, deleteMessage, addMessage } from '../modules/MessageManager';
import { useHistory } from 'react-router-dom';


export const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages()
        .then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };

    const handleDeleteMessage = (id) => {
        deleteMessage(id)
        .then(() => getMessages());
    };

    useEffect(() =>{
        getMessages();
    }, []);

    return (
        <>
        <fieldset>
            <h2 className="message__title">New Message: </h2>
        </fieldset>
        <div className="form-group">
            <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder='type your message here' value={message.message} />
        </div>
        <section className="sectoin__content">
            <button type="button" className="btn" onClick={() => [history.push('/messages/')]}>Save Message</button>
        </section>
        <div className="container-cards">
            {messages.map(message => <MessageCard key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>)}

        </div>
        </>
    )
}