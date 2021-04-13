import React, { useState, useEffect } from "react";
import { FriendCard } from './FriendCard';
import { getAllFriends, getFriendById, deleteFriend, addFriend } from '../modules/FriendManager';
import { useHistory } from 'react-router-dom';

export const FriendList = () => {
    const [friends, setFrineds] = useState([]);
    const history = useHistory();

    const getFriends = () => {
        return getAllFriends()
        .then(friendsFromAPI => {
            console.log(friendsFromAPI)
            setFrineds(friendsFromAPI)
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
                {friends.map(friend => <FriendCard key={friends.id} friend={friend} handleDeleteFriend={handleDeleteFriend}/>)}
            </div>
        </>
    )

}