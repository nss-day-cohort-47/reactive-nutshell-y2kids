//author:  B.J. Golden
//purpose: to display the message jsx content on the message board.

import React from 'react';
import './Message.css'
import { Link, useHistory } from 'react-router-dom';


export const MessageCard = ({message, handleDeleteMessage}) => {
    const history = useHistory();
    return (
        <div className='card'>
            <div className="card-content">
                <h3>Name: {message.userId.name} <span className="card-message">
                    {message.message}</span></h3>
                    {/* <Link to={`/messages/${message.id}`}>
                    <button>Details</button>
                    </Link> */}
                    <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                    {/* <button type="button" onClick={() => history.push(`/messages/${message.id}/edit`)}>Edit</button> */}
            </div>
        </div>
    )
}

//messages not refreshing automatically when a new message is saved. 4.15.21 @11am