//author: B.J. Golden
//purpose: to allow logged in user to be able to use the public chat board and save and delete messages. 

import React, { useState, useEffect } from "react";
import { MessageCard } from './MessageCard';
import { getAllMessages, deleteMessage, addMessage } from '../modules/MessageManager';
import { useHistory } from 'react-router-dom';
import './Message.css'
// import { getAllUsers } from '../modules/UserManager'
// import { MessageEditForm } from './MessageEditForm'


export const MessageList = () => {

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
        .then(() => {
            setMessage({        
                userId: messageUserId,
                date: messageDate,
                message: ""})
            getMessages()}) 
       
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
        <div className="privateMessage">
            <button type='button' onClick={() => history.push(`/messages/private`)}>Create Private Message:</button>
        </div>
        <div className="container-cards">
            {messages.map(message => <MessageCard key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>)}
        </div>
        <fieldset className="message__box">
            <h2 className="message__title">New Message: </h2>
        <div className="message__input">
            <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder='type your message here' value={message.message} />
        </div>
        <section className="message__save--btn">
            <button type="button"  onClick={handleClickSaveMessage}>Save Message</button>
        </section>
        </fieldset>
        </>
    )
}