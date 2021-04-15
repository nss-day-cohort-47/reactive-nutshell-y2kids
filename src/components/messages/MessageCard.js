//author:  B.J. Golden
//purpose: to display the message jsx content on the message board.

import React from 'react';
import './Message.css'
import { Link, useHistory } from 'react-router-dom';


export const MessageCard = ({message, handleDeleteMessage}) => {
    const history = useHistory();
    const currentLoggedInUser = parseInt(sessionStorage.getItem("nutshell_user"))
    if (currentLoggedInUser === message.userId) {
    return (
        <div className='card'>
            <div className="card-content">
                <h3>{message.user.name}: </h3><h4><span className="card-message">
                    </span>{message.message}</h4>
                    <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                    <button type="button" onClick={() => history.push(`/messages/${message.id}/edit`)}>Edit</button>
            </div>
        </div>
    )}else {
        return(
        <div className='card'>
        <div className="card-content">
            <h3>{message.user.name}: </h3><h4><span className="card-message">
                </span>{message.message}</h4>
        </div>
    </div>
    )}
}

//messages not refreshing automatically when a new message is saved. 4.15.21 @11am