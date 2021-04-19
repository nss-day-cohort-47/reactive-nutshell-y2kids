//Author:  B.J. Golden
//the purpose of this card is to display the JSX to the dom for the friendlist. 

import React from 'react';
import './Friend.css'
import { Link, useHistory } from 'react-router-dom';

export const FriendCard = ({ friend, handleDeleteFriend }) => {
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    if (currentUser === friend.currentUserId) {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-friendName">{friend.user?.name}</span></h3>
                <p></p>
                <button type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete</button>
            </div>
        </div>
    )} else {
        return(
            <div></div>
        )
    }
}