//author: B.J. Golden
//purpose: 

import React, { useState, useEffect } from "react";
import { MessageCard } from './MessageCard';
import { getAllMessages, deleteMessage, addMessage } from '../modules/MessageManager';
import { useHistory } from 'react-router-dom';
import { getAllUsers } from '../modules/UserManager'


export const MessageList = () => {
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages()
        .then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newMessage[event.target.id] = selectedVal
		setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
        event.preventDefault()
        // saveInputValue =  parseInt(sessionStorage.getItem("nutshell_user"))
        // getAllUsers()
        // .then(users => {
        //     const userObj = users.find(user => user.name.id === saveInputValue);


        addMessage(message)
        .then(() => history.push(`/messages`))
        
    }

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
            <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder='type your message here' value={messages.message} />
        </div>
        <section className="sectoin__content">
            <button type="button" className="btn" onClick={handleClickSaveMessage}>Save Message</button>
        </section>
        <div className="container-cards">
            {messages.map(message => <MessageCard key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>)}
        </div>
        </>
    )
}