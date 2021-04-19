//Author: B.J. Golden
//the purpose of the friend list is to set the state of friends and handle the delete friend button. It also invokes the friend card which displays that JSX. 

import React, { useState, useEffect } from "react";
import { FriendCard } from './FriendCard';
import { getAllFriends,  deleteFriend} from '../modules/FriendManager';
import { useHistory } from 'react-router-dom';

export const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const history = useHistory();

    const getFriends = () => {
        return getAllFriends()
        .then(friendsFromAPI => {
            setFriends(friendsFromAPI)
        });
    };

    const handleDeleteFriend = (id) => {
        deleteFriend(id)
        .then(() => getFriends());
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <>
        <section className="section__content">
            <button type="button" className="btn" onClick={() => {history.push("/friends/create")}}>Add Friend</button>
        </section>
            <div className="container-cards">
                {friends.map(friend => <FriendCard key={friend.id} friend={friend} handleDeleteFriend={handleDeleteFriend}/>)}
            </div>
        </>
    )

}