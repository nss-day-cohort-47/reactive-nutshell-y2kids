//Author:  B.J. Golden
//the purpose of this card is to display the JSX to the dom for the friendlist. 

import React from 'react';
import './Friend.css'
import { Link, useHistory } from 'react-router-dom';

export const FriendCard = ({ friend, handleDeleteFriend }) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-friendName">{friend.user?.name}</span></h3>
                <p></p>
                {/* <Link to={`/friends/${friend.id}`}>
                    <button>Details</button>
                </Link> */}
                <button type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete</button>
                {/* <button type="button" onClick={() => history.push(`/friends/${friend.id}/edit`)}>Edit</button> */}
            </div>
        </div>
    )
}