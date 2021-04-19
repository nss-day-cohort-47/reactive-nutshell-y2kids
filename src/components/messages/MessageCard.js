//author:  B.J. Golden
//purpose: to display the message jsx content on the message board.

import React, { useState, useEffect }from 'react';
import './Message.css'
import { Link, useHistory } from 'react-router-dom';
import { addFriend, getAllFriends } from '../modules/FriendManager';

// import { MessageEditForm } from './MessageEditForm'



export const MessageCard = ({message, handleDeleteMessage}) => {
    const [friend, setFriend] = useState({
        userId: message.userId,
        currentUserId: parseInt(sessionStorage.getItem("nutshell_user"))
    })
    const history = useHistory();
    const currentLoggedInUser = parseInt(sessionStorage.getItem("nutshell_user"))



    const NewFriend = () => {
        getAllFriends()
        .then(friends => {
            const currentFriend = friends.find(friend => friend.userId === message.userId);
            if (currentFriend )
            {
                window.alert("Friend already exists, please select a new friend.")
                return history.push(`/messages`)
            } else {
                window.confirm('do you want to add this user as a friend?')
                addFriend(friend)
                .then(() => history.push('/friends'))
            }    
        }) 

    }

    if (currentLoggedInUser === message.userId) {
    return (
        <div className='card'>
            <div className="currentUser-card-content">
                <h3 className="currentUser-name">{message.user.name}: </h3>
                <h4><span className="card-message">
                </span>{message.message}</h4>
                <button className="message-delete-bttn" type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                <button className="message-edit-bttn" type="button" onClick={() => history.push(`/messages/${message.id}/edit`)}>Edit</button>
            </div>
        </div>
    )}else {
        return(
        <div className='card'>       
        <div className="card-content">
        <h3>
            {/* <Link to={`/friends/create/${message.user.id}`}>  */}
            <button type="button" className="btn__user__name" onClick={() => NewFriend(message.user.id)}>{message.user.name}: </button>
            {/* </Link> */}
        </h3>
        <h4><span className="card-message">
        </span>{message.message}</h4>
        </div>
    </div>
    )}
}

