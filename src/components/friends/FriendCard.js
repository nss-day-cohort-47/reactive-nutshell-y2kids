//Author:  B.J. Golden
//the purpose of this card is to display the JSX to the dom for the friendlist. 

import React from 'react';
import './Friend.css'
import { Link, useHistory } from 'react-router-dom';
import "./Friend.css"

export const FriendCard = ({ friend, handleDeleteFriend }) => {
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    if (currentUser === friend.currentUserId) {
    return (
        <div className="card friend-card">
            <div className="card-content">
                <h2 className="friend-name" >Name: <span className="card-friendName">{friend.user?.name}</span></h2>
                <p></p>
                {/* <Link to={`/friends/${friend.id}`}>
                    <button>Details</button>
                </Link> */}
                <button className="delete-bttn" type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete</button>
                {/* <button type="button" onClick={() => history.push(`/friends/${friend.id}/edit`)}>Edit</button> */}
            </div>
        </div>
    )} else {
        return(
            <div></div>
        )
    }
}