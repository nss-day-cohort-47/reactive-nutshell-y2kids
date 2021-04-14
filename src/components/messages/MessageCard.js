//author:  B.J. Golden
//purpose: to display the message jsx content on the message board.

import React from 'react';
import './Message.css'
import { Link, useHistory } from 'react-router-dom';


export const MessageCard = ({user}) => {
    const history = useHistory();
    return (
        <div className='card'>
            <div className="card-content">
                <h3>{user.name} <span className="card-message">
                    {user.message}</span></h3>
            </div>
        </div>
    )
}