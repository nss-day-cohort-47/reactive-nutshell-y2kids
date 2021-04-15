//author: B.J. Golden
//purpose: 

import React, { useState, useEffect } from "react";
import { MessageCard } from './MessageCard';
import { getAllMessages, deleteMessage, addMessage } from '../modules/MessageManager';
import { useHistory } from 'react-router-dom';
import { getAllUsers } from '../modules/UserManager'


export const MessageList = () => {
    
    // const getUsers = () => {
    //     getAllUsers()
    //     .then(users => {
    //     const userObj = users.find(user => user.id)
    //     console.log(userObj)
    //     return userObj
    //     })
    // }
    // console.log()

    const messageUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const messageDate = new Date().getTime();
    
    const [message, setMessage] = useState({
        userId: messageUserId,
        date: messageDate,
        message: ""
    });

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
        
        addMessage(message)
        .then(() => getMessages()
        .then(() => history.push(`/messages`))) 
        console.log(message);   
    }
    //TODO:
    //reset the input field after message is saved.
    //only allow messages to display in the chat field without expanding the window.

    const handleDeleteMessage = (id) => {
        deleteMessage(id)
        .then(() => getMessages());
    };

    useEffect(() =>{
        getMessages();
    }, []);

    return (
        <>
        <div className="container-cards">
            {messages.map(message => <MessageCard key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>)}
        </div>
        <fieldset>
            <h2 className="message__title">New Message: </h2>
        </fieldset>
        <div className="form-group">
            <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder='type your message here' value={messages.message} />
        </div>
        <section className="sectoin__content">
            <button type="button"  onClick={handleClickSaveMessage}>Save Message</button>
        </section>
        </>
    )
}